"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { translations, Lang } from "@/lib/i18n";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles } from "lucide-react";

const techStack = [
  { name: "Next.js", color: "#000000", bg: "bg-neutral-100 dark:bg-neutral-800" },
  { name: "TypeScript", color: "#3178C6", bg: "bg-blue-50 dark:bg-blue-950/40" },
  { name: "React", color: "#61DAFB", bg: "bg-sky-50 dark:bg-sky-950/40" },
  { name: "WordPress", color: "#21759B", bg: "bg-cyan-50 dark:bg-cyan-950/40" },
  { name: "WooCommerce", color: "#7F54B3", bg: "bg-purple-50 dark:bg-purple-950/40" },
  { name: "Tailwind", color: "#06B6D4", bg: "bg-teal-50 dark:bg-teal-950/40" },
  { name: "GSAP", color: "#88CE02", bg: "bg-green-50 dark:bg-green-950/40" },
  { name: "Framer Motion", color: "#0055FF", bg: "bg-indigo-50 dark:bg-indigo-950/40" },
];

// รายชื่อแบรนด์จากโปรเจกต์จริงของคุณ
const brands = [
  "The Park Lane 15", "Perine Property", "Wash & Go", "Perine Luft", "Code Clean",
  "The Park Lane 15", "Perine Property", "Wash & Go", "Perine Luft", "Code Clean" 
];

export default function TrustBar({ lang }: { lang: Lang }) {
  const t = translations[lang].trust;
  const container = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 30, // ปรับให้ช้าลงเพื่อความหรูหรา (Luxury feel)
        ease: "none",
      });
    }

    const tags = gsap.utils.toArray<HTMLElement>(".tech-tag");
    tags.forEach((tag) => {
      tag.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = tag.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
        gsap.to(tag, { x, y, duration: 0.3, ease: "power2.out" });
      });
      tag.addEventListener("mouseleave", () => {
        gsap.to(tag, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
      });
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-20 bg-white dark:bg-neutral-950 border-y border-neutral-100 dark:border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Brand Collaboration Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 mb-10"
          >
            <span className="h-px w-8 bg-orange-500/30" />
            <p className="text-[10px] font-black text-neutral-400 dark:text-neutral-500 tracking-[0.4em] uppercase">
              {/* แนะนำให้ใช้คำว่า "Selected Project Brands" หรือ "Brands I've Worked With" */}
              {t.label}
            </p>
            <span className="h-px w-8 bg-orange-500/30" />
          </motion.div>
          
          <div className="relative flex overflow-hidden group">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10" />

            <div ref={marqueeRef} className="flex whitespace-nowrap gap-16 items-center">
              {brands.map((brand, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-5xl font-bold text-neutral-200 dark:text-neutral-800/40 hover:text-orange-500/40 transition-all duration-500 cursor-default tracking-tighter"
                  style={{ WebkitTextStroke: i % 2 === 0 ? '0px' : '1px currentColor' }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <motion.p 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-[10px] font-bold text-orange-500/80 tracking-[0.2em] uppercase mb-10 flex items-center gap-2"
            >
              <Sparkles className="w-3 h-3" />
              {t.techLabel}
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`tech-tag flex items-center gap-3 ${tech.bg} border border-neutral-100 dark:border-neutral-800 px-6 py-3 rounded-2xl text-sm font-bold text-neutral-700 dark:text-neutral-300 transition-all hover:border-orange-500/20 shadow-sm`}
                >
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      backgroundColor: tech.color,
                      boxShadow: `0 0 12px ${tech.color}`
                    }}
                  />
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}