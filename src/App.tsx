import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WebsiteDesign from './pages/WebsiteDesign';
import Contact from './pages/Contact';
import Services from './pages/Services';
import DigitalStrategy from './pages/DigitalStrategy';
import VisualIdentity from './pages/VisualIdentity';
import PromoVideos from './pages/PromoVideos';
import ContentProduction from './pages/ContentProduction';
import Portfolio from './pages/Portfolio';
import About from './pages/About';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/website-design" element={<WebsiteDesign />} />
            <Route path="/digital-strategy" element={<DigitalStrategy />} />
            <Route path="/visual-identity" element={<VisualIdentity />} />
            <Route path="/promo-videos" element={<PromoVideos />} />
            <Route path="/content-production" element={<ContentProduction />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer hideContactSection={isContactPage} />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
