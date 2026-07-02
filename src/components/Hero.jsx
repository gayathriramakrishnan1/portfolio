import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Download } from 'lucide-react';

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

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Software Developer',
    'Full Stack Developer',
    'C# & ASP.NET Core Developer'
  ];

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    const fullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tech items floating around
  const floatingTech = [
    { name: 'C#', color: 'from-purple-500 to-indigo-600', x: '-15%', y: '10%' },
    { name: '.NET', color: 'from-blue-600 to-indigo-500', x: '115%', y: '25%' },
    { name: 'React', color: 'from-cyan-400 to-blue-500', x: '-5%', y: '80%' },
    { name: 'SQL', color: 'from-amber-500 to-orange-600', x: '105%', y: '85%' },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-gradient"
    >
      {/* Background radial blobs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-blob bg-primary/10 -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full blur-blob bg-secondary/10 translate-x-1/2 translate-y-1/2 -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left">
          
          <div className="space-y-3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-poppins text-white leading-tight"
            >
              Hi, I'm <span className="text-gradient-primary">Gayathri R</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 font-poppins min-h-[40px] flex items-center justify-center lg:justify-start"
            >
              <span>I'm a&nbsp;</span>
              <span className="text-accent underline decoration-secondary decoration-2 underline-offset-4 font-bold">
                {currentText}
              </span>
              <span className="w-[3px] h-[28px] bg-accent ml-1 animate-pulse" />
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-400 font-light leading-relaxed"
          >
            Building scalable, efficient, and user-focused web applications with modern technologies. Specialized in crafting robust backend microservices with ASP.NET Core & C# and highly interactive web interfaces.
          </motion.p>
        </div>

        {/* Visual Terminal Illustration Area */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[440px] aspect-[4/3] glass-card border-slate-800 bg-slate-950/70 p-4 shadow-2xl relative z-20 animate-float"
          >
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-900 text-xs font-mono text-slate-500">
              <div className="flex items-center space-x-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span>Program.cs</span>
              <span className="opacity-0">mock</span>
            </div>

            {/* Terminal Body */}
            <div className="font-mono text-xs text-left pt-3 text-slate-400 space-y-2 overflow-hidden h-full">
              <p className="text-slate-500">// ASP.NET Core Portfolio Bootstrapping</p>
              <p><span className="text-secondary">var</span> builder = WebApplication.<span className="text-primary">CreateBuilder</span>(args);</p>
              
              <div className="pl-4 space-y-1.5">
                <p className="text-slate-500">// Add developer profile configuration</p>
                <p>builder.Services.<span className="text-primary">AddSingleton</span>&lt;<span className="text-accent">IDeveloper</span>&gt;(new <span className="text-accent">GayathriR</span>() &#123;</p>
                <div className="pl-4 space-y-1 text-slate-300">
                  <p>Name = <span className="text-emerald-400">"Gayathri R"</span>,</p>
                  <p>Interests = [<span className="text-emerald-400">"Backend"</span>, <span className="text-emerald-400">"REST APIs"</span>],</p>
                  <p>MainStack = [<span className="text-emerald-400">"C#"</span>, <span className="text-emerald-400">"ASP.NET Core"</span>],</p>
                  <p>Status = <span className="text-emerald-400">"Building Scalable Apps"</span></p>
                </div>
                <p>&#125;);</p>
              </div>

              <p className="pt-2"><span className="text-secondary">var</span> app = builder.<span className="text-primary">Build</span>();</p>
              <p>app.<span className="text-primary">MapGet</span>(<span className="text-emerald-400">"/"</span>, (<span className="text-accent">IDeveloper</span> dev) =&gt; dev.<span className="text-primary">Greet</span>());</p>
              <p>app.<span className="text-primary">Run</span>();</p>
            </div>
          </motion.div>

          {/* Floating tech badges */}
          {floatingTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              style={{ top: tech.y, left: tech.x }}
              className="absolute z-30"
            >
              <div className={`px-3 py-1.5 rounded-xl bg-gradient-to-tr ${tech.color} text-white font-mono text-xs font-bold shadow-lg shadow-black/40 border border-white/10 animate-float-slow`} style={{ animationDelay: `${index * 1.5}s` }}>
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
