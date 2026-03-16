import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 bg-zinc-50 dark:bg-primary"
    >
      {/* Architectural Grid Container */}
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
                58WebDesign<br />
                <span className="italic opacity-60">who we are</span>
              </h1>
            </motion.div>
          </div>
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-end">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-light leading-relaxed opacity-60 uppercase tracking-widest"
            >
              We are a boutique digital agency based in Felixstowe, dedicated to helping local businesses in Suffolk thrive. From Ipswich to Woodbridge, we bridge the gap between your physical storefront and the digital world, creating powerful online experiences that drive real-world growth.
            </motion.p>
          </div>
        </section>

        {/* Philosophy Section: Split Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-primary/10 dark:border-white/10">
          <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-primary/10 dark:border-white/10 flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-display text-5xl md:text-6xl leading-tight">
                We believe in the power of <span className="italic">results.</span>
              </h2>
              <p className="text-xl font-light leading-relaxed opacity-70 max-w-md">
                A beautiful website is only the beginning. We focus on the metrics that matter to your business: visibility, engagement, and conversion. Our mission is to transform your digital presence into your most effective salesperson.
              </p>
            </motion.div>
          </div>
          <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Local Business Success" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/5 dark:bg-white/5"></div>
          </div>
        </section>

        {/* Values Section: Three Column Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 border-b border-primary/10 dark:border-white/10">
          {[
            { id: '01', title: 'Visibility', desc: 'Dominating local search results so your customers find you first.' },
            { id: '02', title: 'Conversion', desc: 'Turning casual browsers into loyal, paying customers through smart design.' },
            { id: '03', title: 'Growth', desc: 'Building scalable digital assets that grow alongside your business.' }
          ].map((value, index) => (
            <motion.div 
              key={value.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`p-12 space-y-8 ${index !== 2 ? 'border-b md:border-b-0 md:border-r' : ''} border-primary/10 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors duration-500`}
            >
              <span className="font-display text-6xl opacity-10 block">{value.id}</span>
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold">{value.title}</h3>
                <p className="text-sm font-light opacity-60 leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* New Section: The Local Advantage */}
        <section className="grid grid-cols-1 lg:grid-cols-3 border-b border-primary/10 dark:border-white/10">
          <div className="lg:col-span-1 p-12 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-primary/10 dark:border-white/10 bg-white dark:bg-zinc-900/20">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              The Local<br /><span className="italic">Advantage</span>
            </h2>
          </div>
          <div className="lg:col-span-2 p-12 md:p-16 lg:p-24 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold">Community First</h4>
                <p className="text-sm font-light opacity-60 leading-relaxed">
                  We understand the local market because we're part of it. We know what your customers are looking for and how to reach them effectively.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold">Personal Partnership</h4>
                <p className="text-sm font-light opacity-60 leading-relaxed">
                  You're not just a client; you're a partner. We provide the personal attention and tailored strategies that big agencies simply can't match.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold">Direct Impact</h4>
                <p className="text-sm font-light opacity-60 leading-relaxed">
                  Our goal is to see your business thrive. Every strategy we implement is designed to have a direct, positive impact on your bottom line.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-widest font-bold">Future Proofing</h4>
                <p className="text-sm font-light opacity-60 leading-relaxed">
                  The digital landscape is always changing. We ensure your business stays ahead of the curve with modern, adaptable digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

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
