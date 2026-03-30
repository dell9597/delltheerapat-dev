"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, ArrowUpRight, Tag, BarChart3, 
  X, ExternalLink, Monitor, Smartphone, Globe 
} from "lucide-react";
import { translations, Lang } from "@/lib/i18n";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const cardColors = [
  { bg: "from-violet-500/10 to-blue-500/5", metric: "text-violet-600 dark:text-violet-400", border: "hover:border-violet-400/50", accent: "bg-violet-500" },
  { bg: "from-sky-500/10 to-cyan-500/5", metric: "text-sky-600 dark:text-sky-400", border: "hover:border-sky-400/50", accent: "bg-sky-500" },
  { bg: "from-orange-500/10 to-amber-500/5", metric: "text-orange-600 dark:text-orange-400", border: "hover:border-orange-400/50", accent: "bg-orange-500" },
];

export default function WorkSection({ lang }: { lang: Lang }) {
  const t = translations[lang].work;
  const container = useRef<HTMLDivElement>(null);

  // States for Preview Modal
  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  useGSAP(() => {
    // Shimmer effect on hover
    const cards = gsap.utils.toArray<HTMLElement>(".project-card");
    cards.forEach((card) => {
      const shimmer = card.querySelector(".shimmer-overlay");
      card.addEventListener("mouseenter", () => {
        gsap.fromTo(shimmer, 
          { x: "-100%", opacity: 0 }, 
          { x: "100%", opacity: 0.5, duration: 1, ease: "power2.inOut" }
        );
      });
    });
  }, { scope: container });

  return (
    <section ref={container} id="work" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/40 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-sm">
            <BarChart3 className="w-3.5 h-3.5 text-orange-500" />
            {t.badge}
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            {t.headline}{" "}
            <span className="text-gradient inline-block">{t.headlineAccent}</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`project-card group relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] ${cardColors[i].border}`}
            >
              {/* Shimmer Overlay */}
              <div className="shimmer-overlay absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full pointer-events-none z-20" />

              {/* Top gradient band */}
              <div className={`h-2 w-full ${cardColors[i].accent} opacity-80`} />
              
              <div className="relative p-8">
                {/* Metric badge with pulse */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className={`inline-flex items-center gap-2 text-xs font-black ${cardColors[i].metric} bg-white dark:bg-neutral-800 border border-current/20 px-4 py-2 rounded-full mb-6 shadow-sm relative overflow-hidden`}
                >
                  <TrendingUp className="w-3.5 h-3.5 animate-bounce" />
                  {project.metric}
                </motion.div>
                  {/* Client & Title */}
                  <div className="mb-6">
                    <p className="text-[10px] text-orange-500 dark:text-orange-400 font-black uppercase tracking-[0.3em] mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white leading-tight group-hover:text-orange-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 min-h-[4rem] line-clamp-3">
                    {project.desc}
                  </p>

                {/* Result Box */}
                <div className="bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-700/50 rounded-2xl p-5 mb-8 transition-colors duration-300 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${cardColors[i].accent}`} />
                    <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                      {t.result}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
                    {project.result}
                  </p>
                </div>

                {/* Tags with Stagger */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, j) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + (j * 0.05) }}
                      className="flex items-center gap-1.5 text-[11px] font-bold bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400 px-3 py-1.5 rounded-lg border border-neutral-200/50 dark:border-neutral-700/50"
                    >
                      <Tag className="w-3 h-3 text-orange-500/70" />
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* View Case Action */}
                <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-2 text-sm font-bold ${cardColors[i].metric} transition-all`}
                  >
                    <span className="relative">
                      {t.viewCase}
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                  <a href={project.url} target="_blank" className="text-neutral-300 hover:text-orange-500 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedUrl && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-neutral-950/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }}
              className="relative w-full max-w-6xl h-full bg-white dark:bg-neutral-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border border-white/10"
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                  </div>
                  <div className="hidden md:flex bg-neutral-100 dark:bg-neutral-800 p-1.5 rounded-xl gap-1">
                    <button onClick={() => setViewMode("desktop")} className={`p-2 rounded-lg transition-all ${viewMode === 'desktop' ? 'bg-white dark:bg-neutral-700 shadow-sm text-orange-500' : 'text-neutral-400'}`}><Monitor className="w-4 h-4" /></button>
                    <button onClick={() => setViewMode("mobile")} className={`p-2 rounded-lg transition-all ${viewMode === 'mobile' ? 'bg-white dark:bg-neutral-700 shadow-sm text-orange-500' : 'text-neutral-400'}`}><Smartphone className="w-4 h-4" /></button>
                  </div>
                </div>

                <div className="hidden lg:flex items-center gap-2 bg-neutral-50 dark:bg-neutral-800 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700">
                  <Globe className="w-3 h-3 text-neutral-400" />
                  <span className="text-[10px] font-bold text-neutral-500 truncate max-w-[300px]">{selectedUrl}</span>
                </div>

                <button onClick={() => setSelectedUrl(null)} className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full transition-colors"><X className="w-7 h-7 text-neutral-400" /></button>
              </div>

              {/* Iframe View */}
              <div className="flex-1 bg-neutral-50 dark:bg-neutral-950 flex justify-center items-start overflow-hidden p-4 md:p-8">
                <motion.div 
                  animate={{ width: viewMode === "desktop" ? "100%" : "375px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 35 }}
                  className="h-full bg-white shadow-2xl rounded-t-xl overflow-hidden relative"
                >
                  <iframe src={selectedUrl} className="w-full h-full border-none shadow-inner" title="Preview" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}