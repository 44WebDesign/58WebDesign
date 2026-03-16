import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  { id: '01', title: 'Discovery', desc: "We begin by immersing ourselves in your brand's DNA, identifying core objectives, and mapping out the user journey." },
  { id: '02', title: 'Design', desc: "Translating strategy into visual poetry. We craft minimalist interfaces that prioritize clarity, engagement, and trust." },
  { id: '03', title: 'Development', desc: "Seamless execution where performance meets aesthetics. We build robust, responsive architectures using modern technologies." },
];

const offerings = [
  { title: 'Responsive Design', desc: 'Ensuring your brand feels premium across every device, from mobile screens to 4K displays.' },
  { title: 'SEO Optimization', desc: "A beautiful site is only effective if it's found. We bake search visibility into the very foundation." },
  { title: 'User Engaging', desc: 'Intuitive layouts that guide users effortlessly through your narrative without unnecessary friction.' },
];

export default function WebsiteDesign() {
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
                Website<br />
                <span className="italic opacity-60">Design</span>
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
              Creating bespoke online experiences that bridge the gap between storefront and digital engagement for elite local brands.
            </motion.p>
          </div>
        </section>

        {/* Hero Image Section (Optional, but kept for visual impact) */}
        <section className="border-b border-primary/10 dark:border-white/10">
          <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
            <motion.img 
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src="/webdesign.jpg" 
              alt="Web project mockup" 
              className="w-full h-full object-cover grayscale-[20%]"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

      {/* Process Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {steps.map((step) => (
              <div key={step.id} className="space-y-6">
                <span className="font-display text-4xl opacity-20">{step.id}</span>
                <h3 className="text-xl uppercase tracking-widest font-medium">{step.title}</h3>
                <p className="text-primary/60 dark:text-white/50 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Offerings Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="w-full md:w-1/3">
            <h2 className="font-display text-5xl sticky top-32">Core<br /><span className="italic">Offerings</span></h2>
          </div>
          <div className="w-full md:w-2/3 space-y-12">
            {offerings.map((item, idx) => (
              <div key={idx} className="border-b border-primary/10 dark:border-white/10 pb-8">
                <h4 className="font-display text-4xl mb-4 italic">{item.title}</h4>
                <p className="text-primary/60 dark:text-white/60 font-light max-w-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="p-8 md:p-16 lg:p-24 border-b border-primary/10 dark:border-white/10 bg-zinc-100/50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-16 tracking-tighter leading-tight">
            The Architecture of <span className="italic">Conversion.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                A website is more than a digital business card; it's a high-performance tool designed to convert visitors into loyal customers. We approach every pixel with a purpose, ensuring that your online presence doesn't just look elite—it performs at an elite level.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                Our design philosophy centers on the intersection of human psychology and technical excellence. By understanding how users interact with digital interfaces, we create paths of least resistance that guide them toward your business goals.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                In the local market, trust is your most valuable currency. We build that trust through lightning-fast load times, intuitive navigation, and a visual language that speaks to the quality of your services.
              </p>
              <div className="pt-6 border-t border-primary/10 dark:border-white/10">
                <p className="text-sm font-bold uppercase tracking-widest mb-4">Key Focus Areas</p>
                <ul className="space-y-3 text-sm opacity-60 uppercase tracking-wider">
                  <li>• Conversion Rate Optimization</li>
                  <li>• Mobile-First Architecture</li>
                  <li>• Semantic SEO Structure</li>
                  <li>• High-Performance Hosting</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-light leading-relaxed opacity-80">
                Technical integrity is non-negotiable. We utilize modern frameworks and clean code practices to ensure your site is secure, scalable, and future-proof. This isn't just about the present; it's about building a foundation for your business to grow upon for years to come.
              </p>
              <p className="text-lg font-light leading-relaxed opacity-80">
                We bridge the gap between complex functionality and minimalist aesthetics, providing a seamless experience that delights users while delivering the data and results your business needs to thrive in a competitive digital landscape.
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
