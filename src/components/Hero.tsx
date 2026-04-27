"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

/** Public-folder paths; segments are encoded when used in URLs (spaces in filenames). */
const HERO_IMAGES = [
  "/fuji-mountain-cherry-blossoms-spring-japan.jpg",
  "/Rectangle 34626572.png",
  "/beautiful-landmark-fuji-mountain-chureito-pagoda-sunset-japan.jpg",
  "/mountain-fuji-maple-autumn 1 (1) copy.png",
  "/Rectangle 34626573.png",
];

function encodePublicImagePath(path: string): string {
  return path
    .split("/")
    .map((part) => (part ? encodeURIComponent(part) : ""))
    .join("/");
}

function SakuraPetal({ delay, left }: { delay: number; left: string }) {
  return (
    <div
      className="sakura-petal"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${8 + Math.random() * 6}s`,
        opacity: 0.4 + Math.random() * 0.3,
      }}
    />
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = encodePublicImagePath(src);
    });

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const petals = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 15 }, (_, i) => ({
      delay: Math.random() * 10,
      left: `${Math.random() * 100}%`,
    }));
  }, [mounted]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" },
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${encodePublicImagePath(HERO_IMAGES[currentImageIndex])}')`,
              willChange: "opacity, transform",
            }}
          />
        </AnimatePresence>

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.28) 22%, rgba(0,0,0,0.14) 48%, rgba(0,0,0,0.05) 68%, transparent 88%)",
          }}
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-64 bg-gradient-to-t from-white/60 via-white/25 to-transparent mix-blend-screen" />
      </div>

      {petals.map((petal, i) => (
        <SakuraPetal key={i} delay={petal.delay} left={petal.left} />
      ))}

      <div className="relative z-10 w-full px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase shadow-2xl">
              <span className="w-2.5 h-2.5 bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <h1 className="max-w-4xl font-extrabold tracking-tight drop-shadow-2xl">
              <Link
                href="/why-japan"
                aria-label={t("hero.why_japan.a11y_link")}
                className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF3131] focus-visible:ring-offset-2 focus-visible:ring-offset-black/30 transition-transform duration-300 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.08]">
                  {t("hero.why_japan.line1")}
                </span>

                <span className="mt-3 block text-4xl sm:text-5xl lg:text-6xl leading-[1.12] text-[#FF3131]">
                  <span className="block">{t("hero.why_japan.line2a")}</span>
                  <span className="mt-1 block">
                    {t("hero.why_japan.line2b")}
                    <span
                      className="inline-block ml-2 sm:ml-3 align-middle text-5xl sm:text-6xl lg:text-7xl animate-float drop-shadow-lg"
                      aria-hidden
                    >
                      🇯🇵
                    </span>
                  </span>
                </span>

                <span className="mt-4 block w-full max-w-2xl h-1 bg-[#FF3131] rounded-full" />

                <span className="mt-5 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-white uppercase tracking-[0.15em] border-b border-dotted border-[#FF3131] pb-1 group-hover:text-white/95">
                  {t("hero.why_japan.hint_cta")}
                </span>
              </Link>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-xl sm:text-2xl text-white/90 max-w-2xl leading-relaxed drop-shadow-lg"
          >
            {t("hero.subtext")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-[0_20px_50px_rgba(239,68,68,0.3)] overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                {t("hero.cta_primary")}
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]" />
            </motion.a>

            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6 mr-3 text-primary group-hover:scale-110 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {t("hero.cta_secondary")}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap gap-12 items-center"
          >
            {[
              { value: "37+", label: t("hero.stats.years") },
              { value: "5000+", label: t("hero.stats.students") },
              { value: "50+", label: t("hero.stats.partners") },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <div className="text-4xl font-black text-white tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/70 mt-1 uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/30 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-12 rounded-full border-2 border-white/40 flex justify-center pt-2 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(239,68,68,0.8)]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
