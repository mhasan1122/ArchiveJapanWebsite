"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";
import { JAPAN_PATHWAY_IMAGES } from "@/lib/japanPathways";

/** Full-bleed backgrounds for the “Your path to Japan” section (crossfade). */
const WHY_JAPAN_HERO_BACKGROUNDS = [
  "/urban-skyline-modern-buildings.jpg",
  "/yokohama-skyline-city.jpg",
  "/heritage-red-bridge-japan.jpg",
  "/golden-pavilion-kinkakuji-temple-kyoto-japan.jpg",
] as const;

const BG_INTERVAL_MS = 6000;

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const heroStagger: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.14,
    },
  },
};

/** Staggers the two pathway cards after the hero copy (inherits parent `show`). */
const cardGridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function WhyJapanPage() {
  const { t } = useLanguage();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    WHY_JAPAN_HERO_BACKGROUNDS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % WHY_JAPAN_HERO_BACKGROUNDS.length);
    }, BG_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const cards = [
    {
      href: "/study-in-japan",
      titleKey: "hero.pathways.study_title",
      teaserKey: "hero.pathways.study_teaser",
      image: JAPAN_PATHWAY_IMAGES.study.card,
    },
    {
      href: "/work-in-japan",
      titleKey: "hero.pathways.work_title",
      teaserKey: "hero.pathways.work_teaser",
      image: JAPAN_PATHWAY_IMAGES.work.card,
    },
  ] as const;

  return (
    <main className="flex-1 min-h-screen bg-secondary">
      <Navbar />
      <section className="relative pt-32 pb-16 sm:pb-24 overflow-hidden min-h-[85vh]">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={bgIndex}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 8, ease: "linear" },
              }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${WHY_JAPAN_HERO_BACKGROUNDS[bgIndex]}')`,
              }}
            />
          </AnimatePresence>
          {/* Left → right: stronger tint on the left for copy; right stays clear for the photo */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.38) 18%, rgba(0,0,0,0.22) 34%, rgba(0,0,0,0.1) 48%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0) 76%, rgba(0,0,0,0) 100%)",
            }}
            aria-hidden
          />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 text-left"
          variants={heroStagger}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={fadeUp}
            className="text-primary-light font-bold tracking-[0.22em] uppercase mb-4 text-[22px] "
          >
            {t("hero.why_japan_page.badge")}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-[40rem] font-bold tracking-tight text-white leading-[1.15] text-[40px] sm:text-[52px]"
          >
            {t("hero.why_japan_page.title")}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-[36rem] text-[22px] sm:text-[22px] text-white/90 font-normal leading-[1.65]"
          >
            {t("hero.why_japan_page.subtitle")}
          </motion.p>

          <motion.div
            className="mt-12 sm:mt-16 grid gap-6 sm:gap-10 md:grid-cols-2"
            variants={cardGridVariants}
          >
            {cards.map((card) => (
              <motion.article
                key={card.href}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden border border-white/15 bg-white/5 backdrop-blur-xl"
              >
                <Link href={card.href} className="flex flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-secondary">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <NextImage
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                      {t(card.titleKey)}
                    </h2>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-white/85 leading-relaxed flex-1">
                      {t(card.teaserKey)}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group-hover:text-primary-light transition-colors">
                      {t("hero.why_japan_page.learn_more")}
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <Link
              href="/"
              className="text-white/70 hover:text-white text-sm font-semibold uppercase tracking-widest border-b border-white/30 hover:border-white transition-colors"
            >
              ← {t("navbar.home")}
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
