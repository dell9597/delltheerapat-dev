"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MousePointer2 } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection({ lang }: { lang: Lang }) {
  const t = translations[lang].hero;
  
  // Refs สำหรับ GSAP
  const container = useRef<HTMLDivElement>(null);
  const blob1 = useRef<HTMLDivElement>(null);
  const blob2 = useRef<HTMLDivElement>(null);
  const codeCard = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Mouse Move Parallax สำหรับ Blobs พื้นหลัง
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5);
      const yPos = (clientY / window.innerHeight - 0.5);

      gsap.to(blob1.current, { x: xPos * 50, y: yPos * 50, duration: 2, ease: "power2.out" });
      gsap.to(blob2.current, { x: xPos * -30, y: yPos * -30, duration: 2, ease: "power2.out" });
    };

    // 2. 3D Tilt Effect สำหรับ Code Card
    const handleCardMove = (e: MouseEvent) => {
      if (!codeCard.current) return;
      const rect = codeCard.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xc = rect.width / 2;
      const yc = rect.height / 2;
      const dx = x - xc;
      const dy = y - yc;

      gsap.to(codeCard.current, {
        rotateY: dx / 10,
        rotateX: -dy / 10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const resetCard = () => {
      gsap.to(codeCard.current, { rotateY: 0, rotateX: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    codeCard.current?.addEventListener("mousemove", handleCardMove);
    codeCard.current?.addEventListener("mouseleave", resetCard);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-neutral-950 pt-16">
      {/* Dot grid background */}
      <div className="absolute inset-0 grid-dot opacity-60 dark:opacity-40" />

      {/* Gradient blobs - ใส่ ref และปรับให้ดูนุ่มนวลขึ้น */}
      <div ref={blob1} className="absolute top-24 right-0 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div ref={blob2} className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-300/10 dark:bg-orange-700/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge - เพิ่ม floating animation เล็กๆ */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-2 mb-8">
            <span className="flex items-center gap-2 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800/60 text-orange-600 dark:text-orange-400 text-xs font-semibold px-3.5 py-1.5 rounded-full hover:scale-105 transition-transform cursor-default">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
              {t.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight text-neutral-900 dark:text-white mb-6"
          >
            <span className="block">{t.headline1}</span>
            <span className="block text-gradient">{t.headline2}</span>
            <span className="block">{t.headline3}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.35)}
            className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed mb-10"
          >
            {t.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4 mb-16 sm:mb-20">
            <a href="#work" className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/30 active:scale-95 text-sm sm:text-base">
              {t.cta1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center gap-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-white font-semibold px-6 py-3.5 rounded-xl transition-all hover:border-orange-400 hover:text-orange-500 dark:hover:border-orange-500 dark:hover:text-orange-400 text-sm sm:text-base hover:shadow-md">
              <MousePointer2 className="w-4 h-4" />
              {t.cta2}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg"
          >
            {[
              { value: t.stat1, label: t.stat1sub },
              { value: t.stat2, label: t.stat2sub },
              // { value: t.stat3, label: t.stat3sub },
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-0.5 group-hover:text-orange-500 group-hover:-translate-y-1 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-xs text-neutral-400 dark:text-neutral-500 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Floating code decoration - เพิ่ม 3D Tilt Ref */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2"
          style={{ perspective: 1000 }} // เพิ่มมิติความลึก
        >
          <div ref={codeCard} className="w-80 bg-neutral-900 dark:bg-neutral-800 rounded-2xl border border-neutral-700/80 shadow-2xl overflow-hidden cursor-pointer">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-700/60 bg-neutral-800/60 dark:bg-neutral-700/40">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-auto text-xs text-neutral-500 font-mono">portfolio.tsx</span>
            </div>
            <div className="p-4 font-mono text-xs leading-relaxed select-none">
              <div className="text-neutral-500">{"// Architecture First"}</div>
              <div className="mt-2">
                <span className="text-purple-400">const</span> <span className="text-blue-300">Dev</span> <span className="text-neutral-400">= {"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">stack</span><span className="text-neutral-400">: [</span><span className="text-yellow-300">'React'</span><span className="text-neutral-400">,</span>
              </div>
              <div className="ml-6">
                <span className="text-yellow-300">'Next.js'</span><span className="text-neutral-400">,</span>
              </div>
              <div className="ml-6">
                <span className="text-yellow-300">'WordPress'</span><span className="text-neutral-400">],</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">focus</span><span className="text-neutral-400">: </span><span className="text-orange-400">'Performance'</span><span className="text-neutral-400">,</span>
              </div>
              <div className="ml-4">
                <span className="text-green-300">available</span><span className="text-neutral-400">: </span><span className="text-green-400">true</span>
              </div>
              <div className="text-neutral-400">{"}"}</div>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="text-orange-400">▶</span>
                <span className="text-neutral-300">Ready to ship.</span>
                <span className="inline-block w-1.5 h-3.5 bg-orange-400 animate-pulse rounded-sm ml-0.5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="w-4 h-6 border border-neutral-300 dark:border-neutral-600 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-1.5 bg-orange-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}