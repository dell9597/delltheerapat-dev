"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, ArrowUpRight } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

const tagColors: Record<string, string> = {
  Architecture: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  Performance: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  Tooling: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
};

export default function InsightsSection({ lang }: { lang: Lang }) {
  const t = translations[lang].insights;

  return (
    <section id="insights" className="py-24 lg:py-32 bg-white dark:bg-neutral-950 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-6">
              <span className="w-1 h-1 bg-orange-500 rounded-full animate-pulse" />
              {t.badge}
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
              {t.headline}{" "}
              <span className="text-gradient inline-block">{t.headlineAccent}</span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed">
              {t.sub}
            </p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-bold transition-all shadow-lg shadow-neutral-200 dark:shadow-none"
          >
            <BookOpen className="w-4 h-4" />
            {t.readMore}
            <ArrowUpRight className="w-4 h-4 opacity-50" />
          </motion.a>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Animated Progress Border Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-neutral-100 dark:bg-neutral-800 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-orange-500"
                />
              </div>

              <div className="flex items-center justify-between mb-8">
                <motion.span 
                  whileHover={{ y: -2 }}
                  className={`text-[10px] font-black px-3 py-1 rounded-lg border ${tagColors[post.tag] || "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200"}`}
                >
                  {post.tag}
                </motion.span>
                <div className="flex items-center gap-2 text-[11px] font-bold text-neutral-400 uppercase tracking-widest">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 h-12 line-clamp-2">
                {post.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-2 text-xs font-black text-orange-500 uppercase tracking-tighter opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                  {t.readMore} <ArrowRight className="w-4 h-4" />
                </span>
                
                <div className="w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
                   <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}