"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { translations, Lang } from "@/lib/i18n";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
  "Ogilvy", "BBDO", "GroupM", "JWT", "McCann", "Dentsu", 
  "Ogilvy", "BBDO", "GroupM", "JWT", "McCann", "Dentsu" // เบิ้ลรายการเพื่อให้ Marquee เนียน
];

export default function TrustBar({ lang }: { lang: Lang }) {
  const t = translations[lang].trust;
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Infinite Marquee Animation
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none",
      });
    }

    // 2. Magnetic Tech Tags
    const tags = gsap.utils.toArray<HTMLElement>(".tech-tag");
    tags.forEach((tag) => {
      tag.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = tag.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
        gsap.to(tag, { x, y, duration: 0.3, ease: "power2.out" });
      });
      tag.addEventListener("mouseleave", () => {
        gsap.to(tag, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-16 bg-neutral-50 dark:bg-neutral-900/40 border-y border-neutral-200/60 dark:border-neutral-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Company Section */}
        <div className="mb-12">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 tracking-[0.2em] uppercase text-center mb-8"
          >
            {t.label}
          </motion.p>
          
          <div className="relative flex overflow-hidden">
            {/* Fade Overlays */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-neutral-50 dark:from-neutral-900/40 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-neutral-50 dark:from-neutral-900/40 to-transparent z-10" />

            <div ref={marqueeRef} className="flex whitespace-nowrap gap-12 items-center">
              {companies.map((company, i) => (
                <span
                  key={i}
                  className="text-2xl md:text-3xl font-black text-neutral-300/80 dark:text-neutral-700/50 hover:text-orange-500/50 transition-colors cursor-default tracking-tighter italic uppercase"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Divider */}
        <div className="relative h-px w-full bg-neutral-200 dark:bg-neutral-800 mb-12 overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
          />
        </div>

        {/* Tech Stack Section */}
        <div>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 tracking-[0.2em] uppercase text-center mb-8"
          >
            {t.techLabel}
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: i * 0.05, 
                  duration: 0.5, 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
                }}
                className={`tech-tag flex items-center gap-2.5 ${tech.bg} border border-neutral-200 dark:border-neutral-800/60 px-5 py-2.5 rounded-2xl text-sm font-bold text-neutral-800 dark:text-neutral-200 transition-all cursor-pointer hover:shadow-lg hover:shadow-orange-500/5 hover:border-orange-500/30`}
              >
                <div 
                  className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                  style={{ 
                    backgroundColor: tech.color,
                    boxShadow: `0 0 10px ${tech.color}40`
                  }}
                />
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}