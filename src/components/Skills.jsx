import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Terminal, Cpu, Cloud, Settings, HeartHandshake } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="text-primary" size={20} />,
      skills: [
        { name: 'C#', level: 90 },
        { name: 'JavaScript', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Cpu className="text-secondary" size={20} />,
      skills: [
        { name: 'ASP.NET Core', level: 92 },
        { name: 'Web API', level: 90 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="text-accent" size={20} />,
      skills: [
        { name: 'SQL Server', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'Neo4j', level: 75 },
        { name: 'ClickHouse', level: 70 },
      ],
    },
    {
      title: 'Workflow & Data Engineering',
      icon: <Settings className="text-emerald-400" size={20} />,
      skills: [
        { name: 'Apache Kafka', level: 75 },
        { name: 'Apache Airflow', level: 70 },
        { name: 'n8n', level: 80 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: <Layout className="text-pink-400" size={20} />,
      skills: [
        { name: 'React', level: 80 },
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
      ],
    },
    {
      title: 'Cloud Technologies',
      icon: <Cloud className="text-sky-400" size={20} />,
      skills: [
        { name: 'Microsoft Azure', level: 78 },
      ],
    },
    {
      title: 'Tools',
      icon: <Code className="text-amber-400" size={20} />,
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Visual Studio', level: 92 },
        { name: 'VS Code', level: 88 },
      ],
    },
    {
      title: 'Software Concepts',
      icon: <HeartHandshake className="text-rose-400" size={20} />,
      skills: [
        { name: 'MVC Architecture', level: 90 },
        { name: 'API Integration', level: 92 },
        { name: 'Database Design', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-900/40 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full blur-[140px] bg-secondary/5 -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full blur-[140px] bg-primary/5 -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest text-secondary uppercase"
          >
            Capabilities
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Technical Stack & Software Principles
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-400 font-light leading-relaxed"
          >
            A breakdown of my technical proficiencies, tools, and software engineering concepts that I apply to design secure and fast products.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.05 }}
              className="glass-card-interactive p-6 flex flex-col border-slate-800 bg-slate-950/20 hover:border-slate-700/60"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                  {category.icon}
                </div>
                <h4 className="font-poppins font-bold text-white text-sm tracking-wide">
                  {category.title}
                </h4>
              </div>

              <div className="space-y-4 mt-auto">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-300 font-sans">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-1.5 w-full bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
