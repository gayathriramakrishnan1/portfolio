import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, CheckSquare } from 'lucide-react';

const Education = () => {
  const educationDetails = {
    institution: 'Government College of Engineering, Bodinayakanur',
    degree: 'Bachelor of Engineering (B.E) - Computer Science and Engineering',
    class: 'Honours Degree',
    cgpa: '8.38 / 10',
    achievements: [
      'Focused extensively on Software Engineering, Relational Database Management Systems, and Web Application Frameworks.',
      'Secured Honours credentials for high-tier academic results and complex project contributions.',
      'Active participant in technical symposiums and backend development code-camps.'
    ]
  };

  return (
    <section id="education" className="relative py-24 bg-slate-950/60 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[140px] bg-secondary/5 -translate-y-1/2 -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-secondary uppercase"
          >
            Education
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Academic Foundation
          </motion.h3>
        </div>

        {/* Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 md:p-10 border-slate-800 bg-slate-900/10 hover:border-slate-700/60 relative overflow-hidden shadow-2xl glow-border"
        >
          {/* Subtle watermarked background icon */}
          <div className="absolute right-6 bottom-6 text-slate-800/15 pointer-events-none -z-10">
            <GraduationCap size={150} />
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-900/80">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                <Award size={12} />
                <span>{educationDetails.class}</span>
              </span>
              
              <h4 className="text-xl md:text-2xl font-bold font-poppins text-white tracking-wide leading-snug">
                {educationDetails.degree}
              </h4>
              
              <p className="text-base text-slate-300 font-light">
                {educationDetails.institution}
              </p>
            </div>

            {/* CGPA display */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 shadow-inner flex flex-col items-center justify-center min-w-[130px] self-start md:self-auto">
              <span className="text-xs text-slate-500 tracking-wider uppercase font-semibold">CGPA</span>
              <span className="text-2xl font-extrabold text-accent font-poppins tracking-tight mt-1">
                {educationDetails.cgpa}
              </span>
            </div>
          </div>

          {/* Details list */}
          <div className="mt-8 space-y-4">
            <h5 className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Key Scholastic Highlights</h5>
            <ul className="space-y-3">
              {educationDetails.achievements.map((item, index) => (
                <li key={index} className="flex items-start text-sm text-slate-300 font-light leading-relaxed">
                  <CheckSquare size={16} className="text-secondary mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
