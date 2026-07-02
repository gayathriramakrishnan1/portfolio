import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      company: 'Triton Tech Labs',
      period: 'Recent', // Or specified dates, using "Recent" or "Internship duration"
      bullets: [
        'Developed scalable web applications using ASP.NET Core and C# backend architectures.',
        'Designed and integrated secure REST APIs optimized for performance and ease of integration.',
        'Managed and structured relational database schemas using SQL Server and PostgreSQL.',
        'Implemented full CRUD operations and custom service controllers adhering to MVC architecture.',
        'Utilized Git for version control, maintaining code repository integrity and collaborating with team members.',
        'Collaborated on full-stack features, connecting backend endpoints with front-end rendering engines.'
      ],
      tags: ['C#', 'ASP.NET Core', 'REST APIs', 'SQL Server', 'PostgreSQL', 'Git', 'MVC']
    }
  ];

  return (
    <section id="experience" className="relative py-24 bg-slate-950/60 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full blur-[140px] bg-primary/5 -translate-y-1/2 -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-accent uppercase"
          >
            Experience
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Career Timeline
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-400 font-light leading-relaxed"
          >
            A look at my professional training and project-based experience in industry-aligned development environments.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 pl-8 md:pl-12 py-4 space-y-12">
          
          {/* Vertical Glowing Connector Line (CSS absolute overlay) */}
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline Orb */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 p-1 bg-background rounded-full border border-slate-800 z-30">
                <div className="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 md:p-8 border-slate-800 bg-slate-900/20 hover:border-slate-700/50 glow-border">
                
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-900 pb-4 mb-6">
                  <div>
                    <h4 className="text-xl font-bold font-poppins text-white tracking-wide">
                      {exp.role}
                    </h4>
                    <div className="mt-1 text-sm font-medium text-slate-400 flex items-center gap-2">
                      <Briefcase size={14} className="text-primary" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-400 self-start md:self-auto">
                    <Calendar size={12} className="text-secondary" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3.5 mb-6">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start text-sm text-slate-300 leading-relaxed font-light">
                      <CheckCircle size={16} className="text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-900/60">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2.5 py-1 rounded-lg bg-slate-950/60 border border-slate-800 text-xs font-mono text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default Experience;
