"use client";

import { motion } from "framer-motion";
import { translations, Lang } from "@/lib/i18n";

const techStack = [
  { name: "React", color: "#61DAFB", bg: "bg-sky-50 dark:bg-sky-950/40" },
  { name: "Next.js", color: "#000000", bg: "bg-neutral-100 dark:bg-neutral-800" },
  { name: "TypeScript", color: "#3178C6", bg: "bg-blue-50 dark:bg-blue-950/40" },
  { name: "WordPress", color: "#21759B", bg: "bg-cyan-50 dark:bg-cyan-950/40" },
  { name: "Tailwind", color: "#06B6D4", bg: "bg-teal-50 dark:bg-teal-950/40" },
  { name: "Framer", color: "#0055FF", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
  { name: "WooCommerce", color: "#7F54B3", bg: "bg-purple-50 dark:bg-purple-950/40" },
  { name: "Figma", color: "#F24E1E", bg: "bg-orange-50 dark:bg-orange-950/30" },
];

const companies = [
  "Ogilvy",
  "BBDO",
  "GroupM",
  "JWT",
  "McCann",
  "Dentsu",
];

export default function TrustBar({ lang }: { lang: Lang }) {
  const t = translations[lang].trust;

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-900/50 border-y border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase text-center mb-6">
            {t.label}
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8">
            {companies.map((company, i) => (
              <motion.span
                key={company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-lg font-bold text-neutral-300 dark:text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors cursor-default tracking-tight"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-neutral-200 dark:bg-neutral-800 mb-10" />

        {/* Tech stack */}
        <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 tracking-widest uppercase text-center mb-6">
          {t.techLabel}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: "backOut" }}
              className={`flex items-center gap-2 ${tech.bg} border border-neutral-200/80 dark:border-neutral-700/60 px-4 py-2 rounded-full text-sm font-semibold text-neutral-700 dark:text-neutral-200 hover:border-orange-400/60 hover:scale-105 transition-all cursor-default`}
            >
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              {tech.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
