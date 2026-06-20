import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Loader2, 
  Grid, 
  Image as ImageIcon,
  ArrowRight,
  Download,
  Github
} from 'lucide-react';
import SEO from '../components/SEO';

interface TemplateImage {
  name: string;
  path: string;
  download_url: string;
  type: string;
  size: number;
  html_url?: string;
}

const FALLBACK_TEMPLATES: TemplateImage[] = [
  {
    name: "agrica.webp",
    path: "agrica.webp",
    download_url: "https://raw.githubusercontent.com/44WebDesign/templates/main/agrica.webp",
    type: "file",
    size: 320038,
    html_url: "https://github.com/44WebDesign/templates/blob/main/agrica.webp"
  },
  {
    name: "automec.avif",
    path: "automec.avif",
    download_url: "https://raw.githubusercontent.com/44WebDesign/templates/main/automec.avif",
    type: "file",
    size: 60763,
    html_url: "https://github.com/44WebDesign/templates/blob/main/automec.avif"
  },
  {
    name: "carservx.avif",
    path: "carservx.avif",
    download_url: "https://raw.githubusercontent.com/44WebDesign/templates/main/carservx.avif",
    type: "file",
    size: 128957,
    html_url: "https://github.com/44WebDesign/templates/blob/main/carservx.avif"
  },
  {
    name: "crank.webp",
    path: "crank.webp",
    download_url: "https://raw.githubusercontent.com/44WebDesign/templates/main/crank.webp",
    type: "file",
    size: 193118,
    html_url: "https://github.com/44WebDesign/templates/blob/main/crank.webp"
  },
  {
    name: "farmix.avif",
    path: "farmix.avif",
    download_url: "https://raw.githubusercontent.com/44WebDesign/templates/main/farmix.avif",
    type: "file",
    size: 217659,
    html_url: "https://github.com/44WebDesign/templates/blob/main/farmix.avif"
  },
  {
    name: "hotcoffee.avif",
    path: "hotcoffee.avif",
    download_url: "https://raw.githubusercontent.com/44WebDesign/templates/main/hotcoffee.avif",
    type: "file",
    size: 103499,
    html_url: "https://github.com/44WebDesign/templates/blob/main/hotcoffee.avif"
  }
];

function formatTemplateName(filename: string): string {
  const baseName = filename.substring(0, filename.lastIndexOf('.')) || filename;
  return baseName
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = 1;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default function Templates() {
  const [templates, setTemplates] = useState<TemplateImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateImage | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<boolean>(false);

  useEffect(() => {
    async function fetchTemplates() {
      try {
        setLoading(true);
        // Fetch from the GitHub Repository API
        const response = await fetch('https://api.github.com/repos/44WebDesign/templates/contents');
        
        if (!response.ok) {
          throw new Error(`GitHub API responded with code: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Filter out files that are images
          const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.avif'];
          const filteredImages = data.filter(file => {
            if (file.type !== 'file') return false;
            const nameLower = file.name.toLowerCase();
            return imageExtensions.some(ext => nameLower.endsWith(ext));
          });
          
          if (filteredImages.length > 0) {
            setTemplates(filteredImages);
          } else {
            // If the repo had no images, use fallbacks
            setTemplates(FALLBACK_TEMPLATES);
          }
        } else {
          setTemplates(FALLBACK_TEMPLATES);
        }
        setError(null);
      } catch (err) {
        console.warn("Could not fetch the live templates list due to GitHub API limits or network issues. Using fallback.", err);
        // Fallback gracefully so page always displays beautifully
        setTemplates(FALLBACK_TEMPLATES);
      } finally {
        setLoading(false);
      }
    }

    fetchTemplates();
  }, []);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(true);
    setTimeout(() => setCopiedIndex(false), 2000);
  };

  const filteredTemplates = templates.filter(template => {
    const searchTerms = searchQuery.toLowerCase();
    const formattedName = formatTemplateName(template.name).toLowerCase();
    const rawName = template.name.toLowerCase();
    return formattedName.includes(searchTerms) || rawName.includes(searchTerms);
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-zinc-50 dark:bg-primary min-h-screen"
    >
      <SEO 
        title="Web Design Templates & Live Previews" 
        description="Explore premium web design layout templates, architectural screenshots, and curated visual frameworks for business sites by 58WebDesign." 
        noIndex={true}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary/10 dark:border-white/10 pb-8 mb-12 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary/40 dark:text-white/40 text-xs tracking-widest uppercase">
              <Grid size={14} />
              <span>Interactive Vault</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter">
              Aesthetic <span className="italic font-normal">Templates.</span>
            </h1>
            <p className="text-primary/60 dark:text-white/50 max-w-xl text-lg font-light leading-relaxed">
              A highly curated vault of web templates, visual layouts, and digital frames produced by 44WebDesign. Browse and copy asset links directly.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:max-w-xs">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-primary/40 dark:text-white/40">
              <Search size={18} />
            </span>
            <input 
              type="text" 
              placeholder="Filter templates..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-zinc-900 border border-primary/10 dark:border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-white transition-all text-sm shadow-sm"
              id="search-templates-input"
            />
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="h-64 flex flex-col items-center justify-center space-y-4">
            <Loader2 className="animate-spin text-primary dark:text-white" size={32} />
            <p className="text-sm tracking-widest uppercase text-primary/40 dark:text-white/40">Retrieving templates from GitHub...</p>
          </div>
        )}

        {/* Catalog Showcase (Masonry style with CSS columns) */}
        {!loading && filteredTemplates.length > 0 && (
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-8 [column-fill:_balance] mx-auto">
            {filteredTemplates.map((template) => {
              const displayName = formatTemplateName(template.name);
              return (
                <motion.div
                  key={template.name}
                  layoutId={`template-card-${template.name}`}
                  onClick={() => setSelectedTemplate(template)}
                  className="break-inside-avoid mb-8 group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-primary/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Image wrapper */}
                  <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <img 
                      src={template.download_url} 
                      alt={template.name}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full object-cover select-none group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    
                    {/* Dark/Gradient Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 dark:from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-[10px] tracking-[0.2em] font-semibold text-white/50 uppercase mb-1">
                        View Schema
                      </span>
                      <h3 className="font-display text-2xl text-white tracking-tight flex items-center justify-between">
                        <span>{displayName}</span>
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                      </h3>
                    </div>
                  </div>

                  {/* Standard metadata footer (visible always) */}
                  <div className="p-5 flex items-center justify-between border-t border-primary/5 dark:border-white/5 bg-white dark:bg-zinc-950">
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span className="font-medium text-sm text-primary dark:text-white truncate">{displayName}</span>
                      <span className="text-[10px] font-mono text-primary/40 dark:text-white/40 truncate">{template.name}</span>
                    </div>
                    {template.size && (
                      <span className="text-[10px] font-mono font-medium py-1 px-2.5 bg-zinc-100 dark:bg-zinc-800 text-primary/60 dark:text-white/50 rounded-md shrink-0">
                        {formatBytes(template.size)}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredTemplates.length === 0 && (
          <div className="h-64 flex flex-col items-center justify-center space-y-4 border border-dashed border-primary/10 dark:border-white/10 rounded-2xl">
            <ImageIcon className="text-primary/30 dark:text-white/30" size={36} />
            <p className="text-sm font-medium text-primary/60 dark:text-white/60">No templates found matching "{searchQuery}"</p>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs font-semibold underline text-primary dark:text-white hover:opacity-80"
              id="clear-search-button"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Bottom design credits */}
        {!loading && (
          <div className="mt-20 text-center text-xs text-primary/30 dark:text-white/30 flex items-center justify-center gap-3">
            <span>Powered by</span>
            <a 
              href="https://github.com/44WebDesign/templates" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary dark:hover:text-white flex items-center gap-1.5 underline underline-offset-4"
              id="github-credit-link"
            >
              <Github size={12} />
              <span>44WebDesign Templates Repository</span>
            </a>
          </div>
        )}
      </div>

      {/* Cinematic Modal Window Overlay */}
      <AnimatePresence>
        {selectedTemplate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with strong blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="absolute inset-0 bg-primary/70 dark:bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="relative bg-white dark:bg-zinc-950 border border-primary/10 dark:border-white/10 rounded-2xl w-full max-w-5xl shadow-2xl overflow-hidden focus:outline-none z-10 flex flex-col max-h-[90vh]"
            >
              {/* Top Action Bar */}
              <div className="p-5 flex items-center justify-between border-b border-primary/5 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-lg font-display text-primary dark:text-white tracking-tight">
                    {formatTemplateName(selectedTemplate.name)}
                  </h2>
                  <span className="text-xs font-mono text-primary/40 dark:text-white/40">
                    Filename: {selectedTemplate.name}
                  </span>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedTemplate(null)}
                  className="p-2 text-primary/50 dark:text-white/50 hover:text-primary dark:hover:text-white bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 rounded-full transition-colors"
                  aria-label="Close modal"
                  id="close-modal-button"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Main Area (Responsive Layout Split) */}
              <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-4 min-h-0 bg-zinc-100 dark:bg-zinc-900">
                {/* Image Section (Takes maximum space) */}
                <div className="lg:col-span-3 p-6 flex items-center justify-center overflow-hidden">
                  <div className="relative max-w-full max-h-[60vh] rounded-lg overflow-hidden border border-primary/10 dark:border-white/10 shadow-lg bg-zinc-200 dark:bg-zinc-800">
                    <img 
                      src={selectedTemplate.download_url} 
                      alt={selectedTemplate.name} 
                      referrerPolicy="no-referrer"
                      className="max-w-full max-h-[60vh] object-contain select-none"
                    />
                  </div>
                </div>

                {/* Sidebar Info Section */}
                <div className="p-6 bg-white dark:bg-zinc-950 border-t lg:border-t-0 lg:border-l border-primary/5 dark:border-white/5 flex flex-col justify-between gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] tracking-[0.2em] font-bold text-primary/40 dark:text-white/40 uppercase mb-3">
                        Metadata
                      </h4>
                      <div className="space-y-3 font-mono text-[11px] text-primary/70 dark:text-white/60">
                        <div className="flex justify-between border-b border-primary/5 dark:border-white/5 pb-2">
                          <span>File Format</span>
                          <span className="font-semibold uppercase">{selectedTemplate.name.split('.').pop()}</span>
                        </div>
                        {selectedTemplate.size && (
                          <div className="flex justify-between border-b border-primary/5 dark:border-white/5 pb-2">
                            <span>Image Size</span>
                            <span className="font-semibold">{formatBytes(selectedTemplate.size)}</span>
                          </div>
                        )}
                        <div className="flex justify-between border-b border-primary/5 dark:border-white/5 pb-2">
                          <span>Repository</span>
                          <span className="font-semibold">44WebDesign/templates</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-[10px] tracking-[0.2em] font-bold text-primary/40 dark:text-white/40 uppercase mb-3">
                        Direct Actions
                      </h4>
                      
                      {/* Copy Link */}
                      <button
                        onClick={() => handleCopyLink(selectedTemplate.download_url)}
                        className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2.5 transition-all outline-none ${
                          copiedIndex
                            ? 'bg-emerald-500 text-white'
                            : 'bg-primary text-white dark:bg-white dark:text-primary hover:opacity-90'
                        }`}
                        id="copy-link-modal-button"
                      >
                        {copiedIndex ? (
                          <>
                            <Check size={14} />
                            <span>Raw URL Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy Asset URL</span>
                          </>
                        )}
                      </button>

                      {/* Download File */}
                      <a
                        href={selectedTemplate.download_url}
                        download={selectedTemplate.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-primary dark:text-white border border-primary/10 dark:border-white/10 rounded-xl text-xs font-semibold flex items-center justify-center gap-2.5 transition-colors text-center"
                        id="download-asset-button"
                      >
                        <Download size={14} />
                        <span>Download Raw File</span>
                      </a>
                    </div>
                  </div>

                  {/* GitHub Info Footer */}
                  {selectedTemplate.html_url && (
                    <a
                      href={selectedTemplate.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pt-4 border-t border-primary/5 dark:border-white/5 text-[10px] text-primary/40 dark:text-white/40 hover:text-primary dark:hover:text-white flex items-center gap-2"
                      id="view-github-source-link"
                    >
                      <Github size={12} />
                      <span>View file on GitHub</span>
                      <ExternalLink size={10} className="ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
