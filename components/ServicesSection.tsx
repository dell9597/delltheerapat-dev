"use client";

import { motion } from "framer-motion";
import { ShoppingCart, LayoutDashboard, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

const icons = [ShoppingCart, LayoutDashboard, Zap];
const accentColors = [
  "from-purple-500 to-indigo-600",
  "from-sky-500 to-blue-600",
  "from-orange-500 to-red-500",
];
const bgColors = [
  "bg-purple-50 dark:bg-purple-950/30",
  "bg-sky-50 dark:bg-sky-950/30",
  "bg-orange-50 dark:bg-orange-950/30",
];
const iconColors = [
  "text-purple-600 dark:text-purple-400",
  "text-sky-600 dark:text-sky-400",
  "text-orange-600 dark:text-orange-400",
];

export default function ServicesSection({ lang }: { lang: Lang }) {
  const t = translations[lang].services;

  const services = [
    {
      title: t.s1title,
      desc: t.s1desc,
      features: [t.s1f1, t.s1f2, t.s1f3, t.s1f4],
    },
    {
      title: t.s2title,
      desc: t.s2desc,
      features: [t.s2f1, t.s2f2, t.s2f3, t.s2f4],
    },
    {
      title: t.s3title,
      desc: t.s3desc,
      features: [t.s3f1, t.s3f2, t.s3f3, t.s3f4],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white dark:bg-neutral-950">
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
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            {t.sub}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl p-7 hover:border-orange-400/60 dark:hover:border-orange-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/8 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${bgColors[i]} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${iconColors[i]}`} />
                </div>

                {/* Gradient accent line */}
                <div className={`absolute top-0 left-7 right-7 h-0.5 bg-gradient-to-r ${accentColors[i]} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-7">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${iconColors[i]} group-hover:gap-2.5 transition-all`}
                >
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
