import { motion } from 'motion/react';
import { ArrowRight, Camera, Type, Image, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContentProduction() {
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
                Content<br />
                <span className="italic opacity-60">Production</span>
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
              Professional image generation and copywriting that tells your story with clarity and style.
            </motion.p>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="border-b border-primary/10 dark:border-white/10">
          <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src="/contentproduction.jpg" 
              alt="Content Production" 
              className="w-full h-full object-cover grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <Camera className="opacity-40" size={40} />
            <h3 className="text-xl uppercase tracking-widest font-medium">Photography</h3>
            <p className="text-primary/60 dark:text-white/50 font-light">Creating artwork and designs for your products and services.</p>
          </div>
          <div className="space-y-6">
            <Type className="opacity-40" size={40} />
            <h3 className="text-xl uppercase tracking-widest font-medium">Copywriting</h3>
            <p className="text-primary/60 dark:text-white/50 font-light">Words that resonate with your audience and drive action.</p>
          </div>
          <div className="space-y-6">
            <Image className="opacity-40" size={40} />
            <h3 className="text-xl uppercase tracking-widest font-medium">Art Direction</h3>
            <p className="text-primary/60 dark:text-white/50 font-light">Ensuring every piece of content aligns with your brand vision.</p>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10 bg-zinc-100/50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-16 tracking-tighter leading-tight">
            Narrative <span className="italic">Excellence.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                Content is the soul of your digital presence. It's the medium through which you communicate your expertise, your values, and your unique selling proposition. We produce high-fidelity content that doesn't just fill space—it builds authority and fosters deep connections with your audience.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                Our approach combines artistic vision with strategic intent. Whether it's the precision of our copywriting or the tactile quality of our imagery, every piece of content is designed to move the needle for your business.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                In the local market, authenticity is key. We help you tell your story in a way that feels genuine and premium, positioning you as the undisputed leader in your field through superior content quality.
              </p>
              <div className="pt-6 border-t border-primary/10 dark:border-white/10">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">Content Standards</p>
                <ul className="space-y-3 text-sm opacity-60 uppercase tracking-wider">
                  <li>• High-Fidelity Art Direction</li>
                  <li>• Strategic Brand Voice</li>
                  <li>• Multi-Platform Adaptation</li>
                  <li>• Narrative Storytelling</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                Artistic direction ensures that every piece of content, from a single Instagram post to a full-length brand film, feels like it belongs to the same universe. This visual and tonal consistency is what transforms a collection of assets into a powerful brand narrative.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                By maintaining a high standard of production across all channels, we ensure that your brand always presents its best self, building the perceived value that allows you to command premium pricing and attract high-quality clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action: Full Width Marquee Style */}
      <section className="bg-white dark:bg-zinc-900 flex-grow flex flex-col items-center justify-center pt-12 lg:pt-24 pb-8 lg:pb-12 px-12 lg:px-24 text-center space-y-12">
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
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Get in touch</span>
          </Link>
        </div>
      </section>

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
              role: "CEO of Aura"
            },
            {
              quote: "They didn't just build a website; they built a lead-generation machine. Our local visibility has never been higher.",
              author: "Michael Chen",
              role: "Founder of Vertex"
            },
            {
              quote: "The ROI has been incredible. They focused on exactly what brings in new business, and it shows in our monthly revenue.",
              author: "Emma Thompson",
              role: "Marketing Director at Solis"
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
