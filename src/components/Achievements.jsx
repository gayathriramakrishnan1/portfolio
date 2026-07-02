import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Landmark, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'GATE 2025 Qualified',
      category: 'National Competency',
      description: 'Successfully qualified in the Graduate Aptitude Test in Engineering (GATE) 2025 in Computer Science & Information Technology, demonstrating strong analytical and engineering foundations.',
      icon: <Award className="text-primary" size={28} />,
      status: 'Credentialed'
    },
    {
      title: 'Wells Fargo Software Engineering Job Simulation',
      category: 'Professional Simulation',
      description: 'Completed the virtual job simulation program covering system architecture, engineering concepts, and software workflows modeled after real engineering challenges at Wells Fargo.',
      icon: <Landmark className="text-secondary" size={28} />,
      status: 'Completed'
    },
    {
      title: 'Academic Excellence Award',
      category: 'Second Place',
      description: 'Awarded second place for exceptional academic performance throughout the Bachelor of Engineering curriculum in Computer Science and Engineering.',
      icon: <Trophy className="text-accent" size={28} />,
      status: 'Honored'
    }
  ];

  return (
    <section id="achievements" className="relative py-24 bg-slate-900/40 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[140px] bg-accent/5 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-accent uppercase"
          >
            Achievements
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Milestones & Recognition
          </motion.h3>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-interactive p-6 md:p-8 flex flex-col border-slate-800 bg-slate-950/20 hover:border-slate-700/60 shadow-lg glow-border"
            >
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                  {item.icon}
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  <CheckCircle2 size={10} className="text-accent" />
                  <span>{item.status}</span>
                </span>
              </div>

              <div className="mt-6 flex-grow">
                <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">{item.category}</span>
                <h4 className="mt-1 text-lg font-bold font-poppins text-white tracking-wide">
                  {item.title}
                </h4>
                <p className="mt-3 text-slate-400 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
