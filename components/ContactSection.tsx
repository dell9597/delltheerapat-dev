"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, Sparkles } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Mail, label: t.email, href: "mailto:theerapat.traikaew@gmail.com", value: "theerapat.traikaew@gmail.com", color: "hover:text-blue-500" },
    { icon: Linkedin, label: t.linkedin, href: "https://linkedin.com/in/dell-theerapat", value: "linkedin.com/in/dell-theerapat", color: "hover:text-sky-600" },
    { icon: Github, label: t.github, href: "https://github.com/dell9597", value: "https://github.com/dell9597", color: "hover:text-neutral-900 dark:hover:text-white" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/40 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-orange-500 text-[10px] font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-8 shadow-sm">
              <Sparkles className="w-3 h-3" />
              {t.badge}
            </span>
            <h2 className="text-5xl sm:text-7xl font-bold text-neutral-900 dark:text-white mb-8 tracking-tighter leading-[0.9]">
              {t.headline}<br />
              <span className="text-gradient">{t.headlineAccent}</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl leading-relaxed mb-12 max-w-md">
              {t.sub}
            </p>

            <div className="grid gap-6">
              {socials.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-14 h-14 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl flex items-center justify-center text-neutral-400 group-hover:border-orange-500 group-hover:text-orange-500 group-hover:shadow-lg group-hover:shadow-orange-500/10 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">
                        {social.label}
                      </p>
                      <p className={`text-lg font-bold text-neutral-700 dark:text-neutral-200 transition-colors ${social.color}`}>
                        {social.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Professional Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-3xl -z-10" />
            <div className="bg-white dark:bg-neutral-900 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 p-10 shadow-2xl shadow-neutral-200/50 dark:shadow-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={sent}
                  className="w-full group relative flex items-center justify-center gap-3 bg-neutral-900 dark:bg-orange-500 text-white font-black py-5 rounded-2xl transition-all overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.div
                        key="sent"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400" />
                        {t.formSent}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        {t.formSend}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}