"use client";

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";
import { translations, Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = translations[lang].footer;
  const year = new Date().getFullYear();

  const footerLinks = [
    { href: "#services", label: translations[lang].nav.services },
    { href: "#work", label: translations[lang].nav.work },
    { href: "#insights", label: translations[lang].nav.insights },
    { href: "#contact", label: translations[lang].nav.contact },
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight">
                dell<span className="text-orange-500">theerapat</span>
              </span>
            </a>
            <p className="text-sm text-neutral-400">{t.tagline}</p>
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-400 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {year} delltheerapt — {t.rights}
          </p>
          <p className="text-xs text-neutral-500 flex items-center gap-1.5">
            Built with <Heart className="w-3 h-3 text-orange-500 fill-orange-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
