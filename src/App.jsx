import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Component Imports
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Simulate initial portfolio resources loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // Track scroll to display Back-to-Top button
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          /* World-Class Loading Animation */
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="relative flex items-center justify-center">
              {/* Outer Spinning Ring */}
              <div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-primary animate-spin" />
              
              {/* Inner Spinning Ring (Opposite Direction) */}
              <div className="absolute w-10 h-10 rounded-full border-4 border-slate-900 border-t-secondary animate-spin-slow" />
              
              {/* Center Glowing Core */}
              <div className="absolute w-4 h-4 rounded-full bg-accent animate-pulse shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
            </div>
            
            <motion.div 
              className="mt-6 font-poppins font-bold text-lg tracking-widest text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              GAYATHRI<span className="text-accent">.dev</span>
            </motion.div>
            
            <motion.div
              className="mt-2 text-xs text-slate-500 font-mono tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Loading Environment...
            </motion.div>
          </motion.div>
        ) : (
          /* Main Portfolio Workspace */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen text-slate-100 selection:bg-primary/20 selection:text-white"
          >
            {/* Background effects */}
            <ParticleBackground />
            <CursorGlow />

            {/* Navigation */}
            <Navbar />

            {/* Core Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Achievements />
              <Languages />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating Back-to-Top button */}
            <AnimatePresence>
              {showScrollTop && (
                <motion.button
                  key="scroll-top"
                  onClick={scrollToTop}
                  className="fixed bottom-6 right-6 z-40 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-900 backdrop-blur-md shadow-2xl transition-all duration-200"
                  aria-label="Scroll to top"
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp size={18} />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
