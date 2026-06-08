import React, { useRef } from 'react';
import { toPng, toSvg } from 'html-to-image';
import download from 'downloadjs';

const LogoExport = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  const exportPng = async () => {
    if (logoRef.current === null) return;
    const dataUrl = await toPng(logoRef.current, { backgroundColor: 'transparent', pixelRatio: 4 });
    download(dataUrl, '58WebDesign-Logo.png');
  };

  const exportSvg = async () => {
    if (logoRef.current === null) return;
    const dataUrl = await toSvg(logoRef.current);
    download(dataUrl, '58WebDesign-Logo.svg');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-8">
      <div className="mb-12 p-20 bg-white dark:bg-black rounded-3xl shadow-2xl flex items-center justify-center border border-primary/5 dark:border-white/5">
        <div ref={logoRef} className="flex items-center gap-4 p-4">
          <span className="font-display text-8xl tracking-[-0.12em] text-primary dark:text-white leading-none">58</span>
          <span className="text-sm uppercase tracking-[0.3em] font-medium text-primary/70 dark:text-white/70 mt-2">WebDesign</span>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={exportPng}
          className="px-8 py-4 bg-primary text-white dark:bg-white dark:text-primary rounded-full font-medium hover:opacity-90 transition-opacity"
        >
          Download PNG (High Res)
        </button>
        <button 
          onClick={exportSvg}
          className="px-8 py-4 border border-primary/20 dark:border-white/20 text-primary dark:text-white rounded-full font-medium hover:bg-primary/5 dark:hover:bg-white/5 transition-all"
        >
          Download SVG (Scalable)
        </button>
      </div>
      
      <p className="mt-8 text-primary/40 dark:text-white/40 text-xs uppercase tracking-widest">
        Use SVG for infinite resizing without quality loss
      </p>
    </div>
  );
};

export default LogoExport;
