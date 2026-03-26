"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Tag } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

const cardColors = [
  { bg: "from-violet-500/10 to-blue-500/5", metric: "text-violet-600 dark:text-violet-400", border: "hover:border-violet-400/50" },
  { bg: "from-sky-500/10 to-cyan-500/5", metric: "text-sky-600 dark:text-sky-400", border: "hover:border-sky-400/50" },
  { bg: "from-orange-500/10 to-amber-500/5", metric: "text-orange-600 dark:text-orange-400", border: "hover:border-orange-400/50" },
];

export default function WorkSection({ lang }: { lang: Lang }) {
  const t = translations[lang].work;

  return (
    <section id="work" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            {t.badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-5">
            {t.headline}{" "}
            <span className="text-gradient">{t.headlineAccent}</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-lg">
            {t.sub}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${cardColors[i].border}`}
            >
              {/* Top gradient band */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cardColors[i].bg.replace('/10', '').replace('/5', '')} opacity-60`} />
              {/* Actually use solid colors */}
              <div className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${cardColors[i].bg} pointer-events-none`} />

              <div className="relative p-7">
                {/* Metric badge */}
                <div className={`inline-flex items-center gap-1.5 text-xs font-bold ${cardColors[i].metric} bg-white dark:bg-neutral-800 border border-current/20 px-3 py-1.5 rounded-full mb-4 shadow-sm`}>
                  <TrendingUp className="w-3 h-3" />
                  {project.metric}
                </div>

                {/* Client */}
                <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium mb-2">
                  {project.client}
                </p>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* Result */}
                <div className="bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 rounded-xl p-4 mb-5">
                  <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1.5">
                    {t.result}
                  </p>
                  <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                    {project.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 px-2.5 py-1 rounded-md"
                    >
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button className={`flex items-center gap-1 text-sm font-semibold ${cardColors[i].metric} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {t.viewCase} <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
