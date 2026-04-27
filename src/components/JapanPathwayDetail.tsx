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
    <main className="flex-1 min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />
      
      {/* Immersive Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-end pb-16 sm:pb-24 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <NextImage
            src={images.card}
            alt="Pathway Cover"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/why-japan"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-white transition-all mb-8 border-b border-transparent hover:border-white pb-1"
            >
              <span aria-hidden>←</span>
              {t("hero.pathway_detail_page.back_hub")}
            </Link>
            
            <div className="flex flex-col gap-5">
               <span className="w-fit inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase shadow-lg">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(255,49,49,0.8)]" />
                  {t("hero.why_japan_page.badge")}
               </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] max-w-4xl tracking-tight drop-shadow-xl">
                {title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="relative py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary tracking-tight mb-16 max-w-3xl leading-tight">
              {heading}
            </h2>
          </motion.div>

          {/* Staggered Images Grid */}
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-24"
          >
            {images.detail.map((src, i) => (
              <motion.div
                key={src}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
                }}
                className={`relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden shadow-2xl group ${i === 1 ? 'sm:mt-12' : ''}`}
              >
                <NextImage
                  src={src}
                  alt={`Detail ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>

          {/* Features List */}
          <div className="max-w-4xl">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex items-start gap-6 p-6 sm:p-8 bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300 group-hover:scale-110">
                    <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(255,49,49,0.5)] group-hover:shadow-[0_0_16px_rgba(255,49,49,0.8)] transition-shadow duration-300" />
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2 font-medium">
                    {point}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 pt-10 border-t border-gray-200 flex"
          >
            <Link
              href="/#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-[0_15px_30px_rgba(239,68,68,0.3)] hover:shadow-[0_20px_40px_rgba(239,68,68,0.4)] overflow-hidden transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg tracking-wider uppercase">
                {t("hero.cta_primary")}
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
