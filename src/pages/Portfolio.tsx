import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Star, X, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  videoUrl?: string;
  desc: string;
  content: string;
  type: 'image' | 'video';
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: 'Euan Stephenson Racing',
    category: 'Web Design',
    image: 'https://euan-stephenson-racing.vercel.app/hero-bg-2.jpg',
    desc: 'A high-performance digital platform for a local up and coming racing driver.',
    content: 'We designed and developed a bespoke website for Euan Stephenson Racing, focusing on aesthetics and sponsor lead generation. The platform features a high-impact design that captures the speed and precision of racing, while providing a professional space for potential sponsors to connect.',
    type: 'image',
    websiteUrl: 'https://euanstephensonracing.com'
  },
  {
    id: '2',
    title: 'Mr Bees Brewery',
    category: 'Promo Videos',
    image: '',
    videoUrl: '/Beer_Showcase_Video_For_Brewery.mp4',
    desc: 'Engaging promo video for a local brewery business.',
    content: 'We created a user engaging promo video suitable for all media however with a main focus on social media. Eye catching and great quality, the video has helped reach new audiences and relate to a new demographic on social media.',
    type: 'video',
  },
  {
    id: '03',
    title: 'Rise Digitial Marketing',
    category: 'Web Design, Visual Identity',
    image: 'https://www.risedigitalmarketing.co.uk/images/theme-pics/Websites-Page.jpg',
    desc: 'Minimalist identity system for a digital marketing company.',
    content: 'We created a timeless visual identity for Rise Digital, including a custom logo, typography, and color palette. The goal was to communicate their online excellence and attention to detail across all touchpoints, from digital assets to physical stationery.',
    type: 'image',
    websiteUrl: 'https://www.risedigitalmarketing.co.uk/'
  },
  {
    id: '04',
    title: 'Tinx Boutique',
    category: 'Web Design, Online Store',
    image: 'https://tinxboutique.co.uk/wp-content/uploads/2022/03/men2.jpeg',
    desc: 'High product count online store with stock tracking.',
    content: 'For Tinx Boutique, we produced a eye catching design for an online store. We managed the addition of a high number products utilising the best techniques to minimise the time and remove all errors. The system features, stock control, supplier ordering and more.',
    type: 'image',
    websiteUrl: 'https://tinxboutique.co.uk/'
  },
  {
    id: '05',
    title: 'Bulloughs Cleaning Services',
    category: 'Web Design, Visual Identity',
    image: 'https://bullough.co.uk/images/theme-pics/parallax/parallax-1.jpg',
    desc: 'Comprehensive Rebrand and Website Redesign.',
    content: 'We partnered with Bulloughs Cleaning Services to modernise their brand and digital presence. Their existing website was outdated and missing key information such as accreditations, gender pay gap reporting, and company values.',
    type: 'image',
    websiteUrl: 'https:/https://bullough.co.uk'
  },
  {
    id: '06',
    title: 'Kelly Worrall Marketing',
    category: 'Web Design',
    image: 'https://kellyworrall.co.uk/wp-content/uploads/2021/06/KW-30.jpg',
    desc: 'Image and artwork heavy web design for a digital marketing company.',
    content: 'Kelly had a particular look and feel that she was after for her website which be delivered. A self image heavy design was unique but ended with great results, helping her potential clients realise the professionalism and capability of her services. ',
    type: 'image',
    websiteUrl: 'https://kellyworrall.co.uk/'
  },
  {
    id: '07',
    title: 'GlobexFM',
    category: 'Promo Videos',
    image: '',
    videoUrl: '/globexfm.mp4',
    desc: 'Intro for a business event video shown to thousands .',
    content: 'GlobexFM were hosting a large business clip for which a long form video had been produced. Globex came to 58WebDesign for a intro clip to this video which portrayed GlobexFM as a business that has access and reputation wthin their industry.',
    type: 'video',
  },
  {
    id: '08',
    title: 'Modcon Design',
    category: 'Web Design',
    image: 'https://www.modcondesign.com/images/theme-pics/4.jpg',
    desc: 'Brand-New Website for a Start-Up.',
    content: 'ModCon came to us as a brand-new start-up with no online presence. They needed a visually appealing, professional website that would not only attract customers but also meet the approval standards required by regional and national tender companies. We designed and built a new website from scratch that aligned with industry expectations and positioned ModCon as a credible, high-quality contractor.',
    type: 'image',
    websiteUrl: 'https://www.modcondesign.com/'
  },
  {
    id: '09',
    title: 'Belle So Chic',
    category: 'Web Design, Visual Identity',
    image: 'https://bellesochic.com/wp-content/uploads/2024/07/image00006.jpeg',
    desc: 'Website Creation Focused on User Experience and Centralised Brand Presence.',
    content: 'Belle So Chic, a beauty and lifestyle influencer with over half a million Instagram followers, previously relied solely on her social media platforms to engage with her audience. With no website or centralised space, followers struggled to find product links, brand collaborations, and curated recommendations in one place. She wanted a modern, stylish website where all her content, links, and information could be accessed seamlessly from one hub.',
    type: 'image',
    websiteUrl: 'https://bellesochic.com'
  },
  {
    id: '10',
    title: 'Sett Mortgages',
    category: 'Web Design, Built in Apps',
    image: 'https://www.settmortgages.co.uk/images/theme-pics/parallax/parallax-6.jpg',
    desc: 'Website Redesign with Bespoke Mortgage Calculator.',
    content: 'Sett Mortgages, a Leeds-based mortgage advisor specialising in first-time buyers, needed a website overhaul. Their previous site was overly content-heavy and difficult to navigate. The goal was to simplify the site and its services while adding a bespoke mortgage calculator for users to easily calculate their monthly repayments.',
    type: 'image',
    websiteUrl: 'https://www.settmortgages.co.uk'
  },
  {
    id: '11',
    title: 'Beauty by Rebekah',
    category: 'Web Design, Online Store',
    image: 'https://beautybyrebekah.co.uk/cdn/shop/files/dermablading.jpg',
    desc: 'Website Redesign & Migration to Shopify.',
    content: 'Beauty by Rebekah needed a fresh, modern website after her WordPress site became outdated, difficult to navigate, and hard to update. We redesigned her entire website and migrated everything to Shopify to create a user-friendly, visually appealing, and easy-to-manage online presence.',
    type: 'image',
    websiteUrl: 'https://beautybyrebekah.co.uk'
  },
  {
    id: '12',
    title: 'Parlour4Pooches',
    category: 'Web Design, Visual Identity, Digital Stratergy',
    image: 'https://parlour4pooches.co.uk/wp-content/uploads/2022/05/home1.png',
    desc: 'Local dog groomer looking to create an online presence.',
    content: 'Parlour4Pooches reached out for help in creating an online footprint starting from the ground up. Branding, a website and a social media stratergy plan was put in place to attract business, specifically in the local area.',
    type: 'image',
    websiteUrl: 'https://parlour4pooches.co.uk/'
  },
  {
    id: '13',
    title: 'Rise Digital',
    category: 'Promo Videos',
    image: '',
    videoUrl: '/Video_Generation_Complete.mp4',
    desc: 'High quality and premium social media clip for a digital marketing company.',
    content: 'Rise Digital wanted an impressive promo clip for social media that was used to attract potential customers to sign up to a marketing plan that includes the use of their Promo Videos.',
    type: 'video',
  },
  {
    id: '14',
    title: 'LBWP',
    category: 'Web Design',
    image: 'https://www.lbwp.co.uk/images/theme-pics/parallax/parallax-21.jpg',
    desc: 'Modernising and Enhancing Existing Website.',
    content: 'LBWP needed a website overhaul to make it more user-friendly, less content-heavy, and safer for users in crisis. The main goal was to ensure that users could quickly access help and exit the site safely if needed. We also integrated Google Translate to accommodate non-English speakers and added a donate button for fundraising.',
    type: 'image',
    websiteUrl: 'https://www.lbwp.co.uk/'
  },
  {
    id: '15',
    title: 'Newmans Store',
    category: 'Visual Identity, Digital Stratergy, Promo Videos',
    image: 'https://newmans.store/wp-content/uploads/2025/09/image-asset.webp',
    desc: 'Attracting customers in a highly competitve online space.',
    content: 'Newmans required assistance in breaking into a saturated online market. Through the use of eye catching promo videos, a data driven digital stratergy and a rebrand on all media, we helped achieve significant growth in sales.',
    type: 'image',
    websiteUrl: 'https://newmans.store'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10"
        >
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
                {project.type === 'video' && project.videoUrl ? (
                  <video 
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={project.image}
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  >
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
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
      </motion.section>
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
                    {selectedProject.type === 'video' && selectedProject.videoUrl ? (
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        poster={selectedProject.image}
                        className="w-full h-full object-cover"
                      >
                        <source src={selectedProject.videoUrl} type="video/mp4" />
                      </video>
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
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
