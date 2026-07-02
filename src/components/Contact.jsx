import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Simulate Server Request
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactCards = [
    {
      label: 'Email Me',
      value: 'gayathriramakrishnan289@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gayathriramakrishnan289@gmail.com',
      icon: <Mail className="text-primary" size={20} />,
      external: true
    },

    {
      label: 'LinkedIn',
      value: 'gayathri-r-developer',
      href: 'https://www.linkedin.com/in/gayathri-ramakrishnan-a783292a7',
      icon: <Linkedin className="text-secondary" size={20} />,
      external: true
    },
    {
      label: 'GitHub',
      value: 'gayathri-ramakrishnan',
      href: 'https://github.com/gayathriramakrishnan1',
      icon: <Github className="text-slate-300" size={20} />,
      external: true
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-slate-900/40 overflow-hidden">
      {/* Background glowing lights */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full blur-[140px] bg-primary/5 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[140px] bg-secondary/5 -z-10" />

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
            Connection
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight font-poppins text-white sm:text-4xl"
          >
            Get In Touch
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base text-slate-400 font-light leading-relaxed"
          >
            Have a proposal, project, or just want to connect? Send a message and let's start a conversation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">

          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-xl font-bold font-poppins text-white tracking-wide">
              Contact Information
            </h4>
            <p className="text-sm text-slate-400 font-light leading-relaxed">
              Feel free to reach out via any of these channels. I will do my best to respond within 24 hours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-4">
              {contactCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  target={card.external ? '_blank' : undefined}
                  rel={card.external ? 'noopener noreferrer' : undefined}
                  className="p-5 rounded-2xl bg-slate-950/65 border border-slate-900 hover:border-slate-800 hover:bg-slate-900/40 flex items-center space-x-4 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 shadow-inner group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">{card.label}</span>
                    <p className="text-sm font-poppins font-medium text-slate-200 mt-0.5 group-hover:text-white transition-colors break-all">
                      {card.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 border-slate-800 bg-slate-950/20 shadow-2xl relative overflow-hidden glow-border">

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wide">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${errors.name
                            ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.25)]'
                            : 'border-slate-800 focus:border-primary focus:shadow-[0_0_10px_rgba(59,130,246,0.25)]'
                            }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <div className="flex items-center text-xs text-red-500 gap-1 mt-1">
                            <AlertCircle size={12} />
                            <span>{errors.name}</span>
                          </div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-slate-400 tracking-wide">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={status === 'sending'}
                          className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${errors.email
                            ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.25)]'
                            : 'border-slate-800 focus:border-primary focus:shadow-[0_0_10px_rgba(59,130,246,0.25)]'
                            }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <div className="flex items-center text-xs text-red-500 gap-1 mt-1">
                            <AlertCircle size={12} />
                            <span>{errors.email}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 tracking-wide">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${errors.subject
                          ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.25)]'
                          : 'border-slate-800 focus:border-primary focus:shadow-[0_0_10px_rgba(59,130,246,0.25)]'
                          }`}
                        placeholder="Project Collaboration"
                      />
                      {errors.subject && (
                        <div className="flex items-center text-xs text-red-500 gap-1 mt-1">
                          <AlertCircle size={12} />
                          <span>{errors.subject}</span>
                        </div>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-400 tracking-wide">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={status === 'sending'}
                        rows="4"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder-slate-600 focus:outline-none transition-all duration-300 ${errors.message
                          ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_10px_rgba(239,68,68,0.25)]'
                          : 'border-slate-800 focus:border-primary focus:shadow-[0_0_10px_rgba(59,130,246,0.25)]'
                          }`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && (
                        <div className="flex items-center text-xs text-red-500 gap-1 mt-1">
                          <AlertCircle size={12} />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full btn-gradient flex items-center justify-center space-x-2 py-3.5 tracking-wider uppercase font-semibold text-sm relative"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader className="animate-spin" size={16} />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-message"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-6 animate-pulse">
                      <CheckCircle size={48} />
                    </div>

                    <h4 className="text-2xl font-bold font-poppins text-white tracking-wide">
                      Message Sent!
                    </h4>

                    <p className="mt-3 text-slate-400 text-sm max-w-sm font-light leading-relaxed">
                      Thank you for reaching out. Your message has been received, and I will get back to you shortly.
                    </p>

                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-8 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-700 transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
