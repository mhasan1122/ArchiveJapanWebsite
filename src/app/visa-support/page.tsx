"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/2150455559.jpg",
  "/791.jpg",
];

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

// ─── Hero ──────────────────────────────────────────────────────────────────────
function VisaHero() {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-28 min-h-[70vh] flex items-center overflow-hidden bg-[#1a1a2e]">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 5, ease: "linear" }
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${HERO_IMAGES[currentImageIndex]}')`,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#1a1a2e]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block px-5 py-2 bg-[#E60023] text-white text-xs font-bold tracking-[0.2em] uppercase mb-8"
        >
          {t("visa_support.hero.badge")}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {t("visa_support.hero.title")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          {t("visa_support.hero.subtitle")}
        </motion.p>
      </div>
    </section>
  );
}

// ─── Counseling Section ────────────────────────────────────────────────────────
function CounselingSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white relative overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
           <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5">
            Personal Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            {t("visa_support.counseling.title")}
          </h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>{t("visa_support.counseling.desc_1")}</p>
            <p className="font-medium text-gray-900">{t("visa_support.counseling.desc_2")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Document Prep Section ────────────────────────────────────────────────────────
function DocumentPrepSection() {
  const { t } = useLanguage();
  const docs = t("visa_support.preparation.docs") || [];

  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5">
              Accuracy & Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              {t("visa_support.preparation.title")}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t("visa_support.preparation.desc")}
            </p>
            
            <div className="grid sm:grid-cols-1 gap-4">
              {docs.map((doc: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#E60023]/20 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#E60023]/10 flex items-center justify-center text-[#E60023] group-hover:bg-[#E60023] group-hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <Image 
                src="/hero-university.png" 
                alt="Document Preparation" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#E60023]/10 mix-blend-multiply" />
            </div>
            {/* Floating glass card */}
            <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl border border-white/20 p-8 shadow-2xl max-w-xs hidden md:block">
              <div className="text-[#E60023] text-4xl font-black mb-2">99%</div>
              <div className="text-gray-900 font-bold text-lg mb-1">Approval Rate</div>
              <p className="text-gray-600 text-sm">Through our expert document filtering and preparation process.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SSW & Student Cards ────────────────────────────────────────────────────────
function SpecificSupportSections() {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* SSW Support */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#1a1a2e] p-10 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60023]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#E60023]/20 transition-all duration-500" />
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-extrabold mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                {t("visa_support.ssw_guidance.title")}
              </h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {t("visa_support.ssw_guidance.desc")}
              </p>
              <ul className="space-y-4">
                {(t("visa_support.ssw_guidance.features") || []).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#E60023] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Student Support */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#F5F5F7] p-10 relative overflow-hidden group border border-gray-100 shadow-2xl"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60023]/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#E60023]/10 transition-all duration-500" />
            <div className="relative z-10">
              <h3 className="text-gray-900 text-3xl font-extrabold mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                {t("visa_support.student_support.title")}
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t("visa_support.student_support.desc")}
              </p>
              <ul className="space-y-4 font-medium">
                {(t("visa_support.student_support.features") || []).map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-gray-800">
                    <div className="mt-1 w-5 h-5 bg-[#E60023]/10 flex items-center justify-center text-[#E60023] text-xs shrink-0">✓</div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Trusted Section ────────────────────────────────────────────────────────────
function TrustedSection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-[#1a1a2e] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-6xl mb-8">⭐</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            {t("visa_support.trusted.title")}
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
            {t("visa_support.trusted.desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Section ───────────────────────────────────────────────────────────────
function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E60023] via-[#B8001C] to-red-900" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            {t("visa_support.cta.title")}
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            {t("visa_support.cta.desc")}
          </p>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-white text-[#E60023] font-bold uppercase tracking-widest shadow-2xl hover:bg-gray-100 transition-colors"
          >
            {t("visa_support.cta.button")}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function VisaSupportPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <VisaHero />
      <CounselingSection />
      <DocumentPrepSection />
      <SpecificSupportSections />
      <TrustedSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
