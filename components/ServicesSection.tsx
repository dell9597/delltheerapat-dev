"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, LayoutDashboard, Zap, CheckCircle2, ArrowUpRight } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const icons = [ShoppingCart, LayoutDashboard, Zap];
const accentColors = [
  "from-purple-500 to-indigo-600",
  "from-sky-500 to-blue-600",
  "from-orange-500 to-red-500",
];
const bgColors = [
  "bg-purple-50 dark:bg-purple-900/20",
  "bg-sky-50 dark:bg-sky-900/20",
  "bg-orange-50 dark:bg-orange-900/20",
];
const glowColors = [
  "group-hover:bg-purple-500/10",
  "group-hover:bg-sky-500/10",
  "group-hover:bg-orange-500/10",
];
const iconColors = [
  "text-purple-600 dark:text-purple-400",
  "text-sky-600 dark:text-sky-400",
  "text-orange-600 dark:text-orange-400",
];

export default function ServicesSection({ lang }: { lang: Lang }) {
  const t = translations[lang].services;
  const container = useRef<HTMLDivElement>(null);

  const services = [
    { title: t.s1title, desc: t.s1desc, features: [t.s1f1, t.s1f2, t.s1f3, t.s1f4] },
    { title: t.s2title, desc: t.s2desc, features: [t.s2f1, t.s2f2, t.s2f3, t.s2f4] },
    { title: t.s3title, desc: t.s3desc, features: [t.s3f1, t.s3f2, t.s3f3, t.s3f4] },
  ];

  // GSAP Hover Effect สำหรับไอคอน (Magnetic Effect)
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".service-card");
    
    cards.forEach((card) => {
      const icon = card.querySelector(".icon-box");
      
      card.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
        gsap.to(icon, { x, y, duration: 0.4, ease: "power2.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(icon, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
      });
    });
  }, { scope: container });

  return (
    <section ref={container} id="services" className="relative py-24 lg:py-32 bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800/50 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping" />
            {t.badge}
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
            {t.headline}{" "}
            <span className="text-gradient inline-block">{t.headlineAccent}</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.sub}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="service-card group relative bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,115,0,0.1)]"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 rounded-3xl transition-colors duration-500 pointer-events-none ${glowColors[i]}`} />

                {/* Icon Box */}
                <div className={`icon-box w-14 h-14 ${bgColors[i]} rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-sm`}>
                  <Icon className={`w-7 h-7 ${iconColors[i]}`} />
                </div>

                {/* Animated Gradient Line */}
                <div className={`absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r ${accentColors[i]} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center`} />

                <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-8 relative z-10">
                  {service.desc}
                </p>

                {/* Features with Stagger Animation */}
                <ul className="space-y-4 mb-10 relative z-10">
                  {service.features.map((f, j) => (
                    <motion.li 
                      key={j} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (i * 0.1) + (j * 0.05) + 0.4 }}
                      className="flex items-center gap-3 text-sm text-neutral-700 dark:text-neutral-300 font-medium"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-orange-500/10 dark:bg-orange-500/20 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 dark:text-orange-500" />
                      </div>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-sm font-bold ${iconColors[i]} relative z-10`}
                >
                  <span className="relative">
                    Learn more
                    <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                  </span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}