import { useState, FormEvent, ChangeEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ArrowRight, Facebook, Instagram, Twitter, Star, Loader2, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Design',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/ben@58webdesign.co.uk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: 'Website Design', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 bg-zinc-50 dark:bg-primary"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column: Info */}
          <div className="space-y-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-display text-7xl md:text-8xl leading-tight tracking-tighter mb-8">
                Let's build<br />
                <span className="italic opacity-80">the future.</span>
              </h1>
              <p className="text-xl text-primary/60 dark:text-white/60 font-light leading-relaxed max-w-md">
                Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation about how we can help your business grow.
              </p>
            </motion.div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-primary/10 dark:border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={20} className="opacity-60" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Email us</p>
                  <a href="mailto:hello@58webdesign.co.uk" className="text-xl hover:italic transition-all">hello@58webdesign.co.uk</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full border border-primary/10 dark:border-white/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="opacity-60" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Call us</p>
                  <a href="tel:07446117501" className="text-xl hover:italic transition-all">07446117501</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-primary/10 dark:border-white/10 flex items-center justify-center hover:bg-primary/5 dark:hover:bg-white/5 transition-all shrink-0">
                    <Facebook size={20} className="opacity-60" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-primary/10 dark:border-white/10 flex items-center justify-center hover:bg-primary/5 dark:hover:bg-white/5 transition-all shrink-0">
                    <Instagram size={20} className="opacity-60" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full border border-primary/10 dark:border-white/10 flex items-center justify-center hover:bg-primary/5 dark:hover:bg-white/5 transition-all shrink-0">
                    <Twitter size={20} className="opacity-60" />
                  </a>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Follow us</p>
                  <p className="text-xl">Stay connected</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2rem] border border-primary/5 dark:border-white/5 shadow-sm"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-display tracking-tight">Message Sent!</h3>
                  <p className="text-primary/60 dark:text-white/60">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-xs uppercase tracking-widest font-bold hover:italic transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter Your Name Here" 
                      className="form-input-light" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email Address Here" 
                      className="form-input-light" 
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Subject</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input-light appearance-none cursor-pointer"
                  >
                    <option className="bg-white dark:bg-zinc-900">Website Design</option>
                    <option className="bg-white dark:bg-zinc-900">Digital Stratergy/Marketing</option>
                    <option className="bg-white dark:bg-zinc-900">Visual Identity</option>
                    <option className="bg-white dark:bg-zinc-900">Promo Videos</option>
                    <option className="bg-white dark:bg-zinc-900">Content Production</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-50 ml-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..." 
                    rows={5} 
                    className="form-input-light resize-none"
                    required
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs uppercase tracking-widest text-center">Something went wrong. Please try again.</p>
                )}

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === 'loading'}
                  className="group w-full py-6 bg-primary text-white dark:bg-white dark:text-primary rounded-2xl text-xs uppercase tracking-[0.3em] font-bold transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

        {/* Testimonials Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 lg:pt-12 pb-12 lg:pb-24 px-12 lg:px-24 border-t border-primary/10 dark:border-white/10"
        >
          <div className="mb-12">
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
