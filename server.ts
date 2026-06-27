import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';
import 'dotenv/config';

const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';
const publicDir = isProd && fs.existsSync(path.join(process.cwd(), 'dist'))
    ? path.join(process.cwd(), 'dist')
    : path.join(process.cwd(), 'public');
const apiKey = process.env.GOOGLE_API_KEY?.trim();
const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim();

async function fetchWithTimeout(url: string, timeout = 10000): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        return response;
    } catch (error) {
        clearTimeout(id);
        throw error;
    }
}

async function fetchAllVideosFromDrive(currentFolderId: string, currentApiKey: string, depth = 0): Promise<any[]> {
    // Limit recursion depth to prevent hanging on deep structures
    if (depth > 2) return [];
    
    let allVideos: any[] = [];

    try {
        console.log(`[Server] Querying Google Drive folder: ${currentFolderId} (depth: ${depth})`);
        
        // More inclusive query: find all video types
        const query = encodeURIComponent(`'${currentFolderId}' in parents and mimeType contains 'video/' and trashed = false`);
        const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name,mimeType)&key=${currentApiKey}`;
        
        const filesResponse = await fetchWithTimeout(url);
        const filesData: any = await filesResponse.json();
        
        if (filesData.error) {
            console.error(`[Server] Google Drive API Error (Files) for folder ${currentFolderId}: ${filesData.error.message}`);
            return [];
        }

        if (filesData.files) {
            console.log(`[Server] Found ${filesData.files.length} videos in folder ${currentFolderId}`);
            const folderVideos = filesData.files.map((file: any) => ({
                name: file.name,
                url: `/drive-video/${file.id}.mp4` // Keep .mp4 extension for the proxy route
            }));
            allVideos = [...allVideos, ...folderVideos];
        }

        // Only look for subfolders if we haven't found too many videos already
        if (allVideos.length < 50) {
            const folderQuery = encodeURIComponent(`'${currentFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`);
            const folderUrl = `https://www.googleapis.com/drive/v3/files?q=${folderQuery}&fields=files(id,name)&key=${currentApiKey}`;
            
            const foldersResponse = await fetchWithTimeout(folderUrl);
            const foldersData: any = await foldersResponse.json();

            if (!foldersData.error && foldersData.files && foldersData.files.length > 0) {
                console.log(`[Server] Found ${foldersData.files.length} subfolders in folder ${currentFolderId}`);
                // Limit subfolder processing to first 5 to prevent massive fan-out
                for (const folder of foldersData.files.slice(0, 5)) {
                    const subfolderVideos = await fetchAllVideosFromDrive(folder.id, currentApiKey, depth + 1);
                    allVideos = [...allVideos, ...subfolderVideos];
                    if (allVideos.length >= 100) break; // Hard limit on total videos
                }
            }
        }
    } catch (error) {
        console.error(`[Server] Error fetching from folder ${currentFolderId}:`, error);
    }

    return allVideos;
}

function getLocalVideos() {
    try {
        const files = fs.readdirSync(publicDir);
        return files
            .filter(file => file.toLowerCase().endsWith('.mp4'))
            .map(file => ({
                name: file,
                url: `/${file}`
            }));
    } catch (error) {
        console.error('[Server] Error reading local public folder:', error);
        return [];
    }
}

function extractFolderId(input: string): string {
    if (!input) return '';
    // If it's a URL like https://drive.google.com/drive/folders/ID
    const match = input.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : input.trim();
}

async function startServer() {
    console.log('[Server] Starting server...');
    const app = express();

    // Health check route
    app.get('/api/health', (req, res) => {
        res.json({ status: 'ok', timestamp: new Date().toISOString() });
    });

    // API Route for videos
    app.get('/api/videos', async (req, res) => {
        const currentApiKey = (process.env.GOOGLE_API_KEY || process.env.API_KEY || process.env.GEMINI_API_KEY)?.trim();
        const rawFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim() || '';
        const currentFolderId = extractFolderId(rawFolderId);
        
        console.log(`[Server] GET /api/videos. Drive Config: ${!!currentApiKey}/${!!currentFolderId}`);
        let videos = [];

        if (currentApiKey && currentFolderId && currentApiKey !== 'undefined' && currentFolderId !== 'undefined') {
            videos = await fetchAllVideosFromDrive(currentFolderId, currentApiKey);
            if (videos.length === 0) {
                console.warn('[Server] No videos found in Google Drive. Falling back to local.');
                videos = getLocalVideos();
            }
        } else {
            console.log('[Server] No Google Drive credentials. Using local videos.');
            videos = getLocalVideos();
        }

        // Randomize the order of videos
        for (let i = videos.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [videos[i], videos[j]] = [videos[j], videos[i]];
        }

        res.json(videos);
    });

    // Handle external redirection for Web Design Ideas
    app.get(['/ideas', '/ideas/'], (req, res) => {
        res.redirect(301, 'https://service-58webdesign-felixstowe-web-design-717508645202.us-west1.run.app/templates');
    });

    // Explicitly serve the videos directory
    app.get(['/videos', '/videos/'], (req, res) => {
        const filePath = path.join(publicDir, 'videos/index.html');
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            // Fallback just in case
            res.sendFile(path.join(process.cwd(), 'public/videos/index.html'));
        }
    });
    app.use('/videos', express.static(path.join(publicDir, 'videos')));
    app.use('/videos', express.static(path.join(process.cwd(), 'public/videos')));

    // Explicitly serve the clients directory
    app.get(['/clients', '/clients/'], (req, res) => {
        const filePath = path.join(publicDir, 'clients/index.html');
        if (fs.existsSync(filePath)) {
            res.sendFile(filePath);
        } else {
            res.sendFile(path.join(process.cwd(), 'public/clients/index.html'));
        }
    });
    app.use('/clients', express.static(path.join(publicDir, 'clients')));
    app.use('/clients', express.static(path.join(process.cwd(), 'public/clients')));

    // Serve the root public directory for other assets (like videos)
    app.use(express.static(publicDir));

    // Proxy route for Google Drive videos
    app.get('/drive-video/:fileId.mp4', async (req, res) => {
        const { fileId } = req.params;
        const currentApiKey = process.env.GOOGLE_API_KEY?.trim();

        if (!currentApiKey) {
            return res.status(500).send('API Key not configured');
        }

        try {
            const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${currentApiKey}`;
            const response = await fetchWithTimeout(url, 30000); // Longer timeout for video download

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`[Server] Drive Download Error for ${fileId}: ${response.status} ${errorText}`);
                return res.status(response.status).send(`Error fetching from Google Drive: ${response.status}`);
            }

            // Set appropriate headers for video streaming
            res.setHeader('Content-Type', 'video/mp4');
            res.setHeader('Cache-Control', 'public, max-age=3600');
            
            // Pipe the response body to the client
            if (response.body) {
                // Node.js fetch response.body is a Web ReadableStream
                // We can use Readable.fromWeb if available, or just iterate
                if ((Readable as any).fromWeb) {
                    (Readable as any).fromWeb(response.body as any).pipe(res);
                } else {
                    // Fallback for older Node versions
                    const reader = (response.body as any).getReader();
                    const stream = new Readable({
                        async read() {
                            const { done, value } = await reader.read();
                            if (done) {
                                this.push(null);
                            } else {
                                this.push(Buffer.from(value));
                            }
                        }
                    });
                    stream.pipe(res);
                }
            } else {
                res.status(500).send('No response body');
            }
        } catch (error) {
            console.error(`[Server] Proxy error for ${fileId}:`, error);
            res.status(500).send('Internal server error');
        }
    });

    // Debug endpoint
    app.get('/api/debug', async (req, res) => {
        const currentApiKey = process.env.GOOGLE_API_KEY?.trim();
        const rawFolderId = process.env.GOOGLE_DRIVE_FOLDER_ID?.trim() || '';
        const currentFolderId = extractFolderId(rawFolderId);

        let driveError = null;
        let driveFiles = [];
        let driveSubfolders = [];
        let folderMetadata = null;
        try {
            // Check folder metadata
            const metaUrl = `https://www.googleapis.com/drive/v3/files/${currentFolderId}?fields=id,name,mimeType,trashed&key=${currentApiKey}`;
            const metaResponse = await fetch(metaUrl);
            folderMetadata = await metaResponse.json();

            if (folderMetadata.error) {
                driveError = folderMetadata.error;
            } else {
                // Check files
                const query = `'${currentFolderId}'+in+parents+and+mimeType+contains+'video/mp4'+and+trashed=false`;
                const url = `https://www.googleapis.com/drive/v3/files?q=${query}&fields=files(id,name)&key=${currentApiKey}`;
                const response = await fetch(url);
                const data: any = await response.json();
                if (data.error) {
                    driveError = data.error;
                } else {
                    driveFiles = data.files || [];
                }

                // Check folders
                const folderQuery = `'${currentFolderId}'+in+parents+and+mimeType='application/vnd.google-apps.folder'+and+trashed=false`;
                const folderUrl = `https://www.googleapis.com/drive/v3/files?q=${folderQuery}&fields=files(id,name)&key=${currentApiKey}`;
                const folderResponse = await fetch(folderUrl);
                const folderData: any = await folderResponse.json();
                if (!folderData.error) {
                    driveSubfolders = folderData.files || [];
                }
            }
        } catch (e: any) {
            driveError = e.message;
        }

        res.json({
            env: {
                GOOGLE_API_KEY_PRESENT: !!process.env.GOOGLE_API_KEY,
                GOOGLE_DRIVE_FOLDER_ID_PRESENT: !!process.env.GOOGLE_DRIVE_FOLDER_ID,
                NODE_ENV: process.env.NODE_ENV
            },
            config: {
                apiKeySet: !!currentApiKey,
                folderIdSet: !!currentFolderId,
                folderIdValue: currentFolderId
            },
            driveStatus: driveError ? 'ERROR' : 'OK',
            driveError: driveError,
            folderMetadata: folderMetadata,
            driveFileCount: driveFiles.length,
            driveSubfolderCount: driveSubfolders.length
        });
    });

    // Vite middleware for development
    if (process.env.NODE_ENV !== 'production') {
        console.log('[Server] Initializing Vite server...');
        const vite = await createViteServer({
            server: { middlewareMode: true },
            appType: 'spa',
        });
        console.log('[Server] Vite server initialized.');
        app.use(vite.middlewares);
        
        // Fallback for SPA routes in dev
        app.get('*all', async (req, res, next) => {
            const url = req.originalUrl;
            try {
                // If it's an API route or static file, skip
                if (url.startsWith('/api') || url.includes('.')) {
                    return next();
                }
                const template = fs.readFileSync(path.resolve(process.cwd(), 'index.html'), 'utf-8');
                const html = await vite.transformIndexHtml(url, template);
                res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
            } catch (e) {
                vite.ssrFixStacktrace(e as Error);
                next(e);
            }
        });
    } else {
        const distPath = path.join(process.cwd(), 'dist');
        app.use(express.static(distPath));
        app.get('*all', (req, res) => {
            res.sendFile(path.join(distPath, 'index.html'));
        });
    }

    app.listen(PORT, '0.0.0.0', () => {
        console.log(`[Server] Running on http://localhost:${PORT}`);
    });
}

startServer();
