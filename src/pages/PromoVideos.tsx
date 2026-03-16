import { motion } from 'motion/react';
import { ArrowRight, Video, Film, Play, Star, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PromoVideos() {
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
                Promo<br />
                <span className="italic opacity-60">Videos</span>
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
              High-impact storytelling that captures your brand's essence and engages your audience through motion.
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
              src="/promovideo.jpg" 
              alt="Promo Videos" 
              className="w-full h-full object-cover grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <Video className="opacity-40" size={40} />
            <h3 className="text-xl uppercase tracking-widest font-medium">Production</h3>
            <p className="text-primary/60 dark:text-white/50 font-light">Professional cinematography and direction for your brand.</p>
          </div>
          <div className="space-y-6">
            <Film className="opacity-40" size={40} />
            <h3 className="text-xl uppercase tracking-widest font-medium">Post-Production</h3>
            <p className="text-primary/60 dark:text-white/50 font-light">Expert editing, color grading, and sound design.</p>
          </div>
          <div className="space-y-6">
            <Share2 className="opacity-40" size={40} />
            <h3 className="text-xl uppercase tracking-widest font-medium">Engaging</h3>
            <p className="text-primary/60 dark:text-white/50 font-light">Perfect for interactive social media clips.</p>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10 bg-zinc-100/50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-16 tracking-tighter leading-tight">
            The Power of <span className="italic">Motion.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                In a world of static noise, motion commands attention. Video is the most powerful medium for storytelling, allowing you to convey complex brand narratives and emotional nuances in a matter of seconds. We create high-impact promo videos that don't just show your business—they make people feel it.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                Our production process is built on cinematic principles. We focus on lighting, composition, and sound design to ensure your brand is presented with the same level of quality as a high-end film production.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                For local brands, video is a shortcut to authority. It demonstrates a level of investment and professionalism that sets you apart from the competition, building immediate credibility with your audience.
              </p>
              <div className="pt-6 border-t border-primary/10 dark:border-white/10">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">Production Values</p>
                <ul className="space-y-3 text-sm opacity-60 uppercase tracking-wider">
                  <li>• 4K Cinematic Capture</li>
                  <li>• Professional Sound Mastering</li>
                  <li>• Custom Motion Graphics</li>
                  <li>• Strategic Storyboarding</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                Distribution strategy is as important as the production itself. We help you identify the best platforms for your video content—whether it's high-conversion landing page videos, engaging social media clips, or immersive brand films.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                By optimizing your video content for different formats and audiences, we ensure that your investment in motion continues to deliver value across all your digital touchpoints, driving engagement and conversion at every stage of the customer journey.
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
