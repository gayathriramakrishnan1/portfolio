import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'CGPA', value: '8.38', sub: 'Honours Degree', icon: <GraduationCap className="text-primary" size={24} /> },
    { label: 'Projects Completed', value: '2+', sub: 'Interactive Apps', icon: <Code2 className="text-secondary" size={24} /> },
    { label: 'Technologies', value: '15+', sub: 'Across Stack', icon: <BookOpen className="text-accent" size={24} /> },
    { label: 'Internships', value: '1', sub: 'Full Stack Dev', icon: <Award className="text-emerald-400" size={24} /> },
  ];

  const highlights = [
    'Backend Development',
    'REST APIs',
    'Full Stack Development',
    'Cloud Technologies',
    'AI Applications',
    'Problem Solving',
    'Clean Code & SOLID Principles',
    'Continuous Learning'
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950/60 overflow-hidden">
      {/* Visual background light */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-[140px] bg-accent/5 -translate-y-1/2 -z-10" />

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
            About Me
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Passionate Backend & Full-Stack Developer
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-400 font-light leading-relaxed"
          >
            I am a Computer Science & Engineering graduate driven by the challenge of designing backend APIs and building robust web architectures.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Summary Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h4 className="text-xl font-bold font-poppins text-white flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary inline-block" />
              Professional Biography
            </h4>
            <p className="text-slate-300 leading-relaxed font-light">
              As a graduate with an Honours degree in Computer Science and Engineering, I specialize in architecting backend systems that are clean, modular, and performant. My experience covers full-stack development, database design, and integrating cutting-edge machine learning and natural language processing capabilities into web applications.
            </p>
            <p className="text-slate-300 leading-relaxed font-light">
              I view coding as an art of problem-solving. Whether designing robust relational databases, managing data pipelines with message brokers, or wrapping service logic into RESTful endpoints, I prioritize clean code principles and responsive UX design.
            </p>

            {/* Interest checklist */}
            <div className="pt-4">
              <h5 className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-4">Core Areas of Interest</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 text-slate-300 text-sm">
                    <ChevronRight className="text-accent flex-shrink-0" size={16} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-interactive p-6 flex flex-col justify-between border-slate-800/80 bg-slate-900/30 hover:border-slate-700/50 glow-border"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">{stat.label}</span>
                  <div className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-3xl font-extrabold text-white font-poppins tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-xs text-slate-400 font-light">{stat.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
