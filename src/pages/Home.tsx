import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  { 
    id: '01', 
    title: 'Website Design', 
    desc: 'Bespoke digital experiences that convert visitors into loyal customers.',
    image: '/webdesign.jpg' 
  },
  { 
    id: '02', 
    title: 'Digital Strategy', 
    desc: 'Data-driven roadmaps designed to amplify your brand\'s reach and impact.',
    image: '/digitalstratergy.jpg' 
  },
  { 
    id: '03', 
    title: 'Visual Identity', 
    desc: 'Timeless brand systems that communicate your values at a glance.',
    image: '/visualidentity.jpg' 
  },
  { 
    id: '04', 
    title: 'Promo Videos', 
    desc: 'High-impact storytelling that captures your brand\'s essence through motion.',
    image: '/promovideo.jpg' 
  },
  { 
    id: '05', 
    title: 'Content Production', 
    desc: 'Professional image generation and copywriting that tells your story with style.',
    image: '/contentproduction.jpg' 
  },
];

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center pb-20 px-6">
        <div className="max-w-6xl w-full text-center space-y-12">
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-7xl md:text-9xl leading-[1.0] tracking-tighter"
          >
            Elevating Local Brands<br />
            <span className="italic opacity-80">Through Thoughtful Design.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl mx-auto text-lg text-primary/60 dark:text-white/50 font-light leading-relaxed"
          >
            A minimalist digital agency based in Felixstowe, dedicated to helping local businesses in Ipswich, Woodbridge, and across Suffolk grow. We combine high-end design with strategic growth to turn your digital presence into a revenue-generating product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8"
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-6 group"
            >
              <motion.span 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full border border-primary dark:border-white flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary"
              >
                <ArrowRight size={24} />
              </motion.span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">View Our Work</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-white dark:bg-zinc-900" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter">Our Expertise & <span className="italic">Focus.</span></h2>
            <p className="text-primary/60 dark:text-white/50 max-w-xl mx-auto text-sm uppercase tracking-[0.2em] leading-relaxed">
              Combining strategy with aesthetics to build brands that leave a lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className={idx === 0 ? 'lg:col-span-2' : ''}
              >
                <Link 
                  to={`/${service.title.toLowerCase().replace(' ', '-')}`}
                  className="group block bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-primary/5 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
                >
                  <div className={`${idx === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'} overflow-hidden`}>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">{service.id}</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight">{service.title}</h3>
                    <p className="text-sm md:text-base text-primary/60 dark:text-white/50 font-light leading-relaxed max-w-md">
                      {service.desc}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-950/50" id="work">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="text-center mb-12 space-y-2">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Portfolio</p>
            <h2 className="font-display text-7xl md:text-8xl tracking-tighter">Our <span className="italic">Work.</span></h2>
            <p className="text-primary/60 dark:text-white/50 max-w-xl mx-auto text-sm uppercase tracking-[0.2em] leading-relaxed pt-2">
              A curated selection of digital experiences crafted for elite local brands.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-16 items-center"
          >
            <div className="w-full md:w-2/3">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&h=900&auto=format&fit=crop" 
                  alt="Aura Digital" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-50">Website Design / 2026</span>
              <h3 className="font-display text-5xl">Euan Stephenson Racing</h3>
              <p className="text-primary/60 dark:text-white/60 font-light leading-relaxed">
                A high-performance digital platform for a local up and coming racing driver. Focusing on aesthetics and sponsor lead generation.
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 group text-sm uppercase tracking-widest font-medium border-b border-primary dark:border-white pb-2">
                View Case Study
                <ArrowRight size={14} className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row-reverse gap-16 items-center"
          >
            <div className="w-full md:w-2/3">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=1200&h=900&auto=format&fit=crop" 
                  alt="Nova Growth" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full md:w-1/3 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-medium opacity-50">Digital Strategy / 2023</span>
              <h3 className="font-display text-5xl">Nova Growth</h3>
              <p className="text-primary/60 dark:text-white/60 font-light leading-relaxed">
                Strategic market positioning and comprehensive digital roadmap for a fast-scaling tech startup.
              </p>
              <Link to="/portfolio" className="inline-flex items-center gap-2 group text-sm uppercase tracking-widest font-medium border-b border-primary dark:border-white pb-2">
                View Case Study
                <ArrowRight size={14} className="-rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action: Full Width Marquee Style */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white dark:bg-zinc-900 flex flex-col items-center justify-center pt-12 lg:pt-24 pb-8 lg:pb-12 px-12 lg:px-24 text-center space-y-12"
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
            <motion.span 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-primary dark:border-white flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-primary"
            >
              <ArrowRight />
            </motion.span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Get in touch</span>
          </Link>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto pt-8 lg:pt-12 pb-12 lg:pb-24 px-6 border-t border-primary/10 dark:border-white/10"
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
    </motion.div>
  );
}
