"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

export default function ContactSection({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your form handler / API
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Mail, label: t.email, href: "mailto:hello@yourdomain.com", value: "hello@yourdomain.com" },
    { icon: Linkedin, label: t.linkedin, href: "https://linkedin.com/in/yourusername", value: "linkedin.com/in/yourusername" },
    { icon: Github, label: t.github, href: "https://github.com/yourusername", value: "github.com/yourusername" },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute inset-0 grid-dot opacity-30 dark:opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
              {t.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-5 leading-tight">
              {t.headline}{" "}
              <span className="text-gradient">{t.headlineAccent}</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed mb-10">
              {t.sub}
            </p>

            {/* Social links */}
            <div className="space-y-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-11 h-11 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl flex items-center justify-center text-neutral-500 dark:text-neutral-400 group-hover:border-orange-400 group-hover:text-orange-500 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                        {social.label}
                      </p>
                      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200 group-hover:text-orange-500 transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  {t.formName}
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t.formName}
                  className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t.formEmail}
                  className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={t.formMsg}
                  className="w-full bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-orange-400 dark:focus:border-orange-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/30 active:scale-[0.98] text-sm"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    {t.formSent}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {t.formSend}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
