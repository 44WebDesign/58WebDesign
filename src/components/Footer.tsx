import { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Loader2, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  hideContactSection?: boolean;
}

export default function Footer({ hideContactSection = false }: FooterProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        body: JSON.stringify({
          ...formData,
          service: 'Footer Contact'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <footer className="bg-white text-primary dark:bg-zinc-950 dark:text-white py-24 px-6 rounded-t-3xl md:rounded-t-[4rem] border-t border-primary/5 dark:border-white/5" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {!hideContactSection && (
          <>
            <div className="space-y-4 mb-20">
              <h2 className="font-display text-5xl md:text-7xl">Ready to start something beautiful?</h2>
              <a 
                href="mailto:hello@58webdesign.co.uk" 
                className="text-2xl md:text-4xl font-light hover:italic transition-all opacity-60 hover:opacity-100 block"
              >
                hello@58webdesign.co.uk
              </a>
            </div>

            <div className="w-full max-w-2xl mx-auto mb-24">
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center space-y-4">
                  <CheckCircle2 size={48} className="text-emerald-500" />
                  <h3 className="text-2xl font-display">Message Sent!</h3>
                  <p className="opacity-60">We'll get back to you shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-[10px] uppercase tracking-widest font-bold hover:italic transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col space-y-8 text-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50">Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter Your Name Here" 
                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-primary/10 dark:border-white/10 px-0 py-4 focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder:text-primary/30 dark:placeholder:text-white/30 text-lg font-light text-center" 
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase tracking-widest opacity-50">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter Your Email Address Here" 
                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-primary/10 dark:border-white/10 px-0 py-4 focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder:text-primary/30 dark:placeholder:text-white/30 text-lg font-light text-center" 
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-widest opacity-50">Tell us about your project</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your vision..." 
                      rows={3} 
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-primary/10 dark:border-white/10 px-0 py-4 focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder:text-primary/30 dark:placeholder:text-white/30 text-lg font-light resize-none text-center"
                      required
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-[10px] uppercase tracking-widest">Something went wrong. Please try again.</p>
                  )}

                  <div className="pt-4">
                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full md:w-auto px-12 py-4 bg-primary text-white dark:bg-white dark:text-primary text-xs uppercase tracking-widest font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors rounded-full flex items-center justify-center gap-2 mx-auto disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="w-full h-px bg-primary/10 dark:bg-white/10 mb-12"></div>
          </>
        )}

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-display text-3xl tracking-[-0.12em]">58</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-70">WebDesign</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-widest font-medium opacity-70">
            <Link to="/website-design" className="hover:opacity-100 transition-opacity">Website Design</Link>
            <Link to="/digital-strategy" className="hover:opacity-100 transition-opacity">Digital Strategy</Link>
            <Link to="/visual-identity" className="hover:opacity-100 transition-opacity">Visual Identity</Link>
            <Link to="/promo-videos" className="hover:opacity-100 transition-opacity">Promo Videos</Link>
            <Link to="/content-production" className="hover:opacity-100 transition-opacity">Content Production</Link>
          </div>

          <div className="flex gap-6 opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:opacity-100 transition-opacity">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <p className="text-[10px] uppercase tracking-widest opacity-40">
          © 2026 58WebDesign. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
