import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Database, Code, ShieldCheck } from 'lucide-react';

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

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Resume Analyzer',
      category: 'AI / Python Development',
      description: 'An AI-powered recruiter assistant built using NLP techniques, spaCy, NLTK, and Cosine Similarity to automatically parse resumes, map skill distributions, identify gaps against job descriptions, and rank candidates.',
      tech: ['Python', 'NLP', 'spaCy', 'NLTK', 'Machine Learning'],
      links: {
        github: 'https://github.com/gayathriramakrishnan1/AI-Resume-Analyzer-Skill-Match-System',
        live: '#'
      },
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="25" y="15" width="150" height="90" rx="8" className="stroke-slate-800" fill="rgba(15, 23, 42, 0.4)" />
          {/* Document Lines */}
          <line x1="45" y1="35" x2="105" y2="35" className="stroke-slate-500" strokeWidth="2" />
          <line x1="45" y1="45" x2="85" y2="45" className="stroke-slate-600" />
          <line x1="45" y1="55" x2="125" y2="55" className="stroke-slate-600" />
          {/* Scanning Line */}
          <motion.line 
            x1="40" y1="25" x2="160" y2="25" 
            className="stroke-accent" 
            strokeWidth="2.5"
            animate={{ y: [0, 70, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* NLP / ML nodes */}
          <circle cx="150" cy="45" r="8" className="fill-secondary/20 stroke-secondary" />
          <circle cx="135" cy="75" r="5" className="fill-accent/20 stroke-accent" />
          <circle cx="165" cy="80" r="6" className="fill-primary/20 stroke-primary" />
          <line x1="145" y1="52" x2="137" y2="70" className="stroke-slate-700" />
          <line x1="153" y1="52" x2="162" y2="74" className="stroke-slate-700" />
          <line x1="140" y1="76" x2="159" y2="79" className="stroke-slate-700" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Student & Service Management API',
      category: 'Backend Architecture',
      description: 'Developed production-grade RESTful APIs using ASP.NET Core following clean MVC architectures. Features Swagger API configuration, SQL Server persistence layer, repository patterns, and robust CRUD endpoints.',
      tech: ['ASP.NET Core', 'C#', 'Swagger', 'SQL Server'],
      links: {
        github: 'https://github.com/gayathriramakrishnan1/Student-Service-Management-API',
        live: '#docs' // Documentation link placeholder
      },
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-full text-secondary" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="25" y="15" width="150" height="90" rx="8" className="stroke-slate-800" fill="rgba(15, 23, 42, 0.4)" />
          {/* Databases */}
          <rect x="45" y="35" width="40" height="50" rx="3" className="stroke-primary" fill="rgba(59, 130, 246, 0.05)" />
          <line x1="45" y1="48" x2="85" y2="48" className="stroke-primary" />
          <line x1="45" y1="62" x2="85" y2="62" className="stroke-primary" />
          {/* Connections */}
          <path d="M 85 60 C 110 60, 100 45, 125 45" className="stroke-slate-600" strokeDasharray="3,3" />
          <path d="M 85 60 C 110 60, 100 75, 125 75" className="stroke-slate-600" strokeDasharray="3,3" />
          {/* APIs JSON response */}
          <rect x="125" y="30" width="35" height="25" rx="3" className="stroke-secondary" fill="rgba(139, 92, 246, 0.05)" />
          <text x="131" y="46" className="fill-secondary font-mono" fontSize="10">GET</text>
          <rect x="125" y="65" width="35" height="25" rx="3" className="stroke-accent" fill="rgba(6, 182, 212, 0.05)" />
          <text x="131" y="81" className="fill-accent font-mono" fontSize="10">POST</text>
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-slate-900/40 overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[160px] bg-secondary/5 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-primary uppercase"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Featured Engineering Projects
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-400 font-light leading-relaxed"
          >
            A look at backend microservices, data processing pipelines, and AI systems built with robustness, testability, and clean architecture.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card-interactive p-6 flex flex-col border-slate-800 bg-slate-900/10 hover:border-slate-700/60 shadow-xl shadow-black/20 hover:shadow-primary/5 glow-border"
            >
              {/* Project Illustration Header */}
              <div className="rounded-xl bg-slate-950/70 border border-slate-900 p-4 aspect-[2.2/1] flex items-center justify-center overflow-hidden mb-6 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-full max-w-[240px] transform group-hover:scale-105 transition-transform duration-500">
                  {project.illustration}
                </div>
              </div>

              {/* Info Area */}
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase font-sans">
                {project.category}
              </span>
              <h4 className="mt-2 text-2xl font-bold font-poppins text-white tracking-wide">
                {project.title}
              </h4>
              <p className="mt-3 text-slate-400 text-sm font-light leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-6 mb-6">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-900/60 mt-auto">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <Github size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
