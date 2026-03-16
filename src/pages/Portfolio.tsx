import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, X, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: '01',
    title: 'Euan Stephenson Racing',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'A high-performance digital platform for a local up and coming racing driver.',
    content: 'We designed and developed a bespoke website for Euan Stephenson Racing, focusing on aesthetics and sponsor lead generation. The platform features a high-impact design that captures the speed and precision of racing, while providing a professional space for potential sponsors to connect.',
    type: 'image',
    websiteUrl: 'https://euanstephensonracing.com'
  },
  {
    id: '02',
    title: 'Nova Growth',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Strategic market positioning for a tech startup.',
    content: 'Our digital strategy for Nova Growth involved deep market research and competitor analysis. We developed a comprehensive roadmap that included SEO optimization, content strategy, and social media integration, resulting in a 150% increase in organic traffic within the first six months.',
    type: 'image',
    websiteUrl: 'https://novagrowth.io'
  },
  {
    id: '03',
    title: 'Stellar Branding',
    category: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Minimalist identity system for a creative studio.',
    content: 'We created a timeless visual identity for Stellar Branding, including a custom logo, typography, and color palette. The goal was to communicate their creative excellence and attention to detail across all touchpoints, from digital assets to physical stationery.',
    type: 'image',
    websiteUrl: 'https://stellarbranding.co'
  },
  {
    id: '04',
    title: 'Pulse Motion',
    category: 'Promo Videos',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Cinematic brand storytelling for an athletic apparel brand.',
    content: 'For Pulse Motion, we produced a series of high-impact promo videos that capture the energy and passion of their brand. Using cinematic techniques and dynamic editing, we created content that resonates with their target audience and drives engagement across social platforms.',
    type: 'image',
    websiteUrl: 'https://pulsemotion.com'
  },
  {
    id: '05',
    title: 'Zenith Systems',
    category: 'Visual Identity',
    image: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'A futuristic design system for a global tech conglomerate.',
    content: 'Zenith Systems required a visual identity that felt both established and forward-thinking. We developed a modular logo system and a vibrant color palette that scales across their diverse product range, ensuring brand consistency in every market.',
    type: 'image',
    websiteUrl: 'https://zenithsystems.tech'
  },
  {
    id: '06',
    title: 'Flux Media',
    category: 'Promo Videos',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Dynamic motion graphics for a digital-first news outlet.',
    content: 'We created a series of energetic promo videos for Flux Media, utilizing bold motion graphics and fast-paced editing. The content was designed to grab attention in social feeds and communicate complex news stories with clarity and speed.',
    type: 'image',
    websiteUrl: 'https://fluxmedia.net'
  },
  {
    id: '07',
    title: 'Orbit Agency',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'Strategic growth roadmap for a boutique travel agency.',
    content: 'Our work with Orbit Agency focused on redefining their digital presence to attract high-end travelers. We implemented a data-driven strategy that optimized their conversion funnel and increased their direct booking rate by 85%.',
    type: 'image',
    websiteUrl: 'https://orbitagency.travel'
  },
  {
    id: '08',
    title: 'Catalyst Web',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&h=1000&auto=format&fit=crop',
    desc: 'A minimalist, high-conversion site for a software consultancy.',
    content: 'Catalyst Web needed a site that reflected their technical precision. We built a minimalist, lightning-fast platform that prioritizes information hierarchy and clear calls to action, resulting in a significant boost in lead generation.',
    type: 'image',
    websiteUrl: 'https://catalystweb.dev'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 bg-zinc-50 dark:bg-primary"
    >
      <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col">
        {/* Header Section: Editorial Split */}
        <section className="grid grid-cols-1 lg:grid-cols-3 border-b border-primary/10 dark:border-white/10">
          <div className="lg:col-span-2 p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-primary/10 dark:border-white/10">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter">
                Portfolio<br />
                <span className="italic opacity-60">& Case Studies.</span>
              </h1>
            </motion.div>
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-light leading-relaxed opacity-60 uppercase tracking-widest"
            >
              A curation of digital experiences crafted for brands that value minimalism, precision, and emotional resonance.
            </motion.p>
          </div>
        </section>

        {/* Masonry Layout */}
        <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-0">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">{project.category}</span>
                  <h3 className="font-display text-xl text-white leading-tight">{project.title}</h3>
                  {project.type === 'video' && (
                    <div className="mt-2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Play fill="currentColor" size={16} />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
        <AnimatePresence>
          {selectedProject && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 20, opacity: 0 }}
                className="bg-white dark:bg-zinc-900 w-full max-w-7xl max-h-full overflow-y-auto rounded-none shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 right-0 p-6 flex justify-end z-20">
                  <motion.button 
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 transition-all"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                <div className="px-6 pb-16 md:px-24 md:pb-32 space-y-16">
                  <div className="space-y-6 text-center">
                    <span className="text-xs uppercase tracking-[0.6em] font-medium opacity-50">{selectedProject.category}</span>
                    <h2 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none">{selectedProject.title}</h2>
                  </div>

                  <div className="overflow-hidden bg-zinc-100 dark:bg-zinc-800 aspect-video w-full">
                    {selectedProject.type === 'video' ? (
                      <video 
                        src={selectedProject.videoUrl} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>

                  <div className="max-w-4xl mx-auto space-y-12 text-center">
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.4em] opacity-40">The Challenge</h3>
                        {selectedProject.websiteUrl && (
                          <a 
                            href={selectedProject.websiteUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold group hover:opacity-70 transition-opacity"
                          >
                            Visit Website
                            <ArrowRight size={14} className="-rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        )}
                      </div>
                      <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90">
                        {selectedProject.content}
                      </p>
                    </div>

                    <div className="pt-12 flex justify-center">
                      <Link to="/contact" className="inline-flex items-center gap-6 text-xs uppercase tracking-[0.4em] font-bold group border-b border-primary dark:border-white pb-4 transition-all hover:opacity-70">
                        Start a similar project
                        <ArrowRight size={18} className="-rotate-45 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action: Full Width Marquee Style */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-zinc-900 flex-grow flex flex-col items-center justify-center pt-12 lg:pt-24 pb-8 lg:pb-12 px-12 lg:px-24 text-center space-y-12"
        >
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Ready to start?</p>
            <Link to="/contact" className="group block">
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl transition-all duration-500">
                Let's Work Together.
              </h2>
            </Link>
          </div>
          
          <div className="pt-8">
            <Link to="/contact" className="inline-flex items-center gap-6 group">
              <span className="w-12 h-12 rounded-full border border-primary dark:border-white flex items-center justify-center transition-all duration-500">
                <ArrowRight />
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Get in touch</span>
            </Link>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 lg:pt-12 pb-12 lg:pb-24 px-12 lg:px-24 border-t border-primary/10 dark:border-white/10"
        >
          <div className="mb-8">
            <h2 className="font-display text-5xl md:text-6xl tracking-tighter">What our clients <span className="italic">say.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                quote: "Since launching our new site, we've seen a 40% increase in local inquiries. 58WebDesign truly understands how to drive growth.",
                author: "Sarah Jenkins",
                role: "CEO of Aura Digital"
              },
              {
                quote: "They didn't just build a website; they built a lead-generation machine. Our local visibility has never been higher.",
                author: "Michael Chen",
                role: "Founder of Nova Growth"
              },
              {
                quote: "The brand identity they crafted for us perfectly captures our vision. It's minimalist, professional, and memorable.",
                author: "David Miller",
                role: "Creative Director at Stellar Branding"
              }
            ].map((testimonial, index) => (
              <div key={index} className="space-y-4">
                <div className="text-4xl font-display opacity-20 -mb-4">“</div>
                <p className="text-lg font-light leading-relaxed opacity-80 italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4">
                  <p className="text-sm font-bold uppercase tracking-widest">{testimonial.author}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">{testimonial.role}</p>
                  <div className="flex gap-1 mt-2 opacity-30">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
