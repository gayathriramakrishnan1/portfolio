import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, User, Briefcase, GraduationCap, Award, Mail, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: 'hero', label: 'Home', icon: <Code size={16} /> },
    { id: 'about', label: 'About', icon: <User size={16} /> },
    { id: 'skills', label: 'Skills', icon: <BookOpen size={16} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Code size={16} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={16} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={16} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={16} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Identify Active Section
      const scrollPosition = window.scrollY + 200; // Offset for accuracy
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Scroll Progress Bar */}
      <div 
        className="h-[3px] bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-100 ease-out origin-left"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
        <div className="glass-card px-4 py-3 sm:px-6 flex items-center justify-between border-slate-800/80 bg-slate-950/40 backdrop-blur-md shadow-lg shadow-black/25">
          {/* Logo */}
          <div 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md shadow-primary/20 group-hover:scale-110 transition-transform">
              G
            </div>
            <span className="font-poppins font-bold text-lg tracking-wider text-white">
              GAYATHRI<span className="text-accent">.dev</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-1.5 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                }`}
              >
                {link.icon}
                <span>{link.label}</span>
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-slate-800/60 rounded-lg -z-10 border border-slate-700/50 shadow-inner"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/50 focus:outline-none transition-colors border border-slate-800"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden px-4 sm:px-6 mt-2"
          >
            <div className="glass-card bg-slate-950/95 border-slate-800/90 shadow-2xl p-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center space-x-3 transition-colors ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-primary/20 to-secondary/20 text-white border border-primary/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  <span className={activeSection === link.id ? 'text-primary' : 'text-slate-400'}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
