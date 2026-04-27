"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";
import {
  JAPAN_PATHWAY_IMAGES,
  type JapanPathwayKey,
} from "@/lib/japanPathways";

export default function JapanPathwayDetail({ variant }: { variant: JapanPathwayKey }) {
  const { t } = useLanguage();
  const images = JAPAN_PATHWAY_IMAGES[variant];
  const heading = t(`hero.pathway_detail.${variant}_heading`);
  const points = t(`hero.pathway_detail.${variant}_points`) as string[];
  const title = t(`hero.pathways.${variant}_title`);

  return (
    <main className="flex-1 min-h-screen bg-white">
      <Navbar />
      <section className="relative pt-28 pb-6 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0 opacity-30">
          <NextImage
            src={images.card}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 pt-10 pb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <Link
              href="/why-japan"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-primary-light transition-colors mb-8"
            >
              <span aria-hidden>←</span>
              {t("hero.pathway_detail_page.back_hub")}
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-3xl">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-secondary mb-10"
          >
            {heading}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {images.detail.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 shadow-lg"
              >
                <NextImage
                  src={src}
                  alt=""
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </motion.div>
            ))}
          </div>

          <ul className="space-y-5 max-w-3xl">
            {points.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.06, duration: 0.4 }}
                className="flex gap-4 text-lg text-gray-700 leading-relaxed"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_8px_rgba(230,0,35,0.45)]" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-14"
          >
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-bold uppercase tracking-widest text-sm shadow-lg hover:opacity-95 transition-opacity"
            >
              {t("hero.cta_primary")}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
