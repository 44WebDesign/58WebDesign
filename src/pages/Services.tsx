import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const services = [
  { 
    id: '01', 
    title: 'Digital Strategy', 
    slug: 'digital-strategy',
    intro: "Data-driven roadmaps designed to amplify your brand's reach and impact in a crowded digital landscape.",
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: '02', 
    title: 'Visual Identity', 
    slug: 'visual-identity',
    intro: 'Creating timeless brand design packages and systems that communicate your values at a glance across all media.',
    image: 'https://images.unsplash.com/photo-1516131206008-dd041a9764fd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: '03', 
    title: 'Promo Videos', 
    slug: 'promo-videos',
    intro: "High-impact storytelling that captures your brand's essence and engages your audience through motion.",
    image: 'https://images.unsplash.com/photo-1764162051475-992cc7346073?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
  { 
    id: '04', 
    title: 'Content Production', 
    slug: 'content-production',
    intro: 'Professional image generation and copywriting that tells your story with clarity and style.',
    image: 'https://images.unsplash.com/photo-1676287567295-135ce512839a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
  },
];

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 bg-zinc-50 dark:bg-primary"
    >
      <SEO 
        title="Graphic, Strategy, & Video Services" 
        description="Comprehensive media products including brand visual identity systems, digital growth roadmaps, promotional video production, & professional content copywriting." 
      />
      <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col">
        {/* Header Section: Editorial Split */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-3 border-b border-primary/10 dark:border-white/10"
        >
          <div className="lg:col-span-2 p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-primary/10 dark:border-white/10">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter">
                Other<br />
                <span className="italic opacity-60">Services.</span>
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
              Beyond web design, we offer a suite of creative solutions to ensure local businesses in Felixstowe, Ipswich, and Woodbridge have a cohesive and impactful digital presence.
            </motion.p>
          </div>
        </motion.section>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group space-y-8"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 border border-primary/5 dark:border-white/5">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-widest text-white font-bold">
                    {service.id}
                  </span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="font-display text-5xl md:text-6xl tracking-tight">{service.title}</h2>
                  <p className="text-lg text-primary/70 dark:text-white/60 font-light leading-relaxed max-w-xl">
                    {service.intro}
                  </p>
                </div>
                
                <Link 
                  to={`/${service.slug}`} 
                  className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold group border-b border-primary/20 dark:border-white/20 pb-2 hover:border-primary dark:hover:border-white transition-all"
                >
                  Explore Service
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>

        {/* Call to Action: Full Width Marquee Style */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-zinc-900 flex flex-col items-center justify-center pt-12 lg:pt-24 pb-8 lg:pb-12 text-center space-y-12"
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
