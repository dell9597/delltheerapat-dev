"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

const tagColors: Record<string, string> = {
  Architecture: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
  Performance: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
  Tooling: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
};

export default function InsightsSection({ lang }: { lang: Lang }) {
  const t = translations[lang].insights;

  return (
    <section id="insights" className="py-24 lg:py-32 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              {t.badge}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-3">
              {t.headline}{" "}
              <span className="text-gradient">{t.headlineAccent}</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-lg text-lg">
              {t.sub}
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            {t.readMore}
          </a>
        </motion.div>

        {/* Posts */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-7 hover:border-orange-400/50 dark:hover:border-orange-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/8 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-md ${tagColors[post.tag] || "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300"}`}>
                  {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-400 dark:text-neutral-500">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              </div>

              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-3 leading-snug group-hover:text-orange-500 transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
                {post.desc}
              </p>

              <span className="flex items-center gap-1.5 text-sm font-semibold text-orange-500 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all">
                {t.readMore} <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
