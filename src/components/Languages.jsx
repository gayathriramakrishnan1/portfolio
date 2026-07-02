import React from 'react';
import { motion } from 'framer-motion';
import { Languages as LangIcon, Sparkles } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: 'Tamil', level: 'Native / Bilingual', percentage: 100 },
    { name: 'English', level: 'Professional Working', percentage: 90 },
    { name: 'Malayalam', level: 'Conversational', percentage: 65 },
  ];

  return (
    <section id="languages" className="relative py-16 bg-slate-950/60 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[200px] h-[200px] rounded-full blur-[100px] bg-secondary/5 -translate-y-1/2 -z-10" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="glass-card p-8 border-slate-800 bg-slate-900/10 hover:border-slate-700/60 shadow-lg glow-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Left Column Header */}
            <div className="flex items-center space-x-4">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-850 shadow-inner text-primary">
                <LangIcon size={24} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">Languages</span>
                <h4 className="text-xl font-bold font-poppins text-white tracking-wide mt-0.5">
                  Linguistic Capabilities
                </h4>
              </div>
            </div>

            {/* Right Column Grid */}
            <div className="flex-grow max-w-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-poppins font-semibold text-sm text-white tracking-wide">
                      {lang.name}
                    </span>
                    <Sparkles className="text-slate-700" size={12} />
                  </div>
                  
                  <div className="mt-4">
                    <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Proficiency</span>
                    <p className="text-xs font-semibold text-accent mt-0.5">{lang.level}</p>
                    
                    {/* Micro Progress Bar */}
                    <div className="h-1 bg-slate-900 rounded-full mt-2 overflow-hidden border border-slate-850">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
