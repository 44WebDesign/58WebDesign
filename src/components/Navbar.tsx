import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Web Design', path: '/website-design' },
    { name: 'Other Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ${
        scrolled 
          ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md py-4 border-b border-primary/5 dark:border-white/5' 
          : 'mix-blend-difference'
      }`}>
        <Link to="/" className="flex items-center gap-2">
          <span className={`font-display text-4xl tracking-[-0.12em] ${scrolled ? 'text-primary dark:text-white' : 'text-white'}`}>58</span>
          <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${scrolled ? 'text-primary/70 dark:text-white/70' : 'text-white/70'}`}>WebDesign</span>
        </Link>
        
        {/* Desktop Links */}
        <div className={`hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] ${scrolled ? 'text-primary/80 dark:text-white/80' : 'text-white/80'}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:italic transition-all ${scrolled ? 'hover:text-primary dark:hover:text-white' : 'hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full border transition-all ${
              scrolled 
                ? 'border-primary/20 dark:border-white/20 text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5' 
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full border transition-all ${
              scrolled 
                ? 'border-primary/20 dark:border-white/20 text-primary dark:text-white hover:bg-primary/5 dark:hover:bg-white/5' 
                : 'border-white/20 text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background-light dark:bg-background-dark flex flex-col items-center justify-center p-8"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="font-display text-5xl md:text-6xl hover:italic transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] opacity-30"
            >
              58WebDesign © 2026
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
