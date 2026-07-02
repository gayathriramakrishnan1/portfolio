import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';

const Github = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width={size}
    height={size}
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950 py-12 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[120px] bg-primary/5 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Logo / Brand Signature */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-poppins font-bold text-lg tracking-wider text-white">
              GAYATHRI<span className="text-accent">.dev</span>
            </span>
            <p className="mt-2 text-sm text-slate-500 text-center md:text-left">
              Building high-quality, scalable Web Applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/gayathri-r-developer" // Generic placeholder links or structured text
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-primary hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/gayathri-r-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-white/20 hover:shadow-lg hover:shadow-white/5 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:gayathri.r.dev@outlook.com"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-accent hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} className="animate-bounce" />
          </button>
        </div>

        <div className="mt-8 border-t border-slate-900 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Gayathri R. All rights reserved.
          </p>
          <p className="font-medium tracking-wide">
            Designed & Developed by <span className="text-slate-300 hover:text-primary transition-colors">Gayathri R</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
