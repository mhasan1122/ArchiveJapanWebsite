"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";
import Image from "next/image";

// Section Components
function AboutHero() {
  const { t } = useLanguage();
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-secondary">
      <div className="absolute inset-0 z-0">
        <Image
          src="/beautiful-landmark-fuji-mountain-chureito-pagoda-sunset-japan.jpg"
          alt="Mount Fuji and Chureito Pagoda at sunset, Japan"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/65 via-secondary/90 to-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-bold tracking-widest uppercase mb-6"
        >
          {t("about_page.hero.badge")}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
        >
          {t("about_page.hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {t("about_page.hero.subtitle")}
        </motion.p>
      </div>
    </section>
  );
}

function CompanyIntro() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-none overflow-hidden shadow-2xl">
              <Image
                src="/hero-university.png"
                alt="Achieve Japan Campus"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-none shadow-2xl border border-gray-100 hidden md:block">
              <div className="text-5xl font-black text-primary mb-1">37</div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-sm">Years of Trust</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              {t("about_page.intro.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t("about_page.intro.text")}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-accent rounded-none">
                <div className="text-3xl font-bold text-primary mb-2">Honesty</div>
                <p className="text-sm text-gray-500">Working with full discipline and transparency.</p>
              </div>
              <div className="p-6 bg-accent rounded-none">
                <div className="text-3xl font-bold text-primary mb-2">Guidance</div>
                <p className="text-sm text-gray-500">Personalized support at every single step.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const { t } = useLanguage();
  const services = [
    { title: "Career Counseling", icon: "🤝" },
    { title: "Japanese Language Prep", icon: "🇯🇵" },
    { title: "Visa Documentation", icon: "📄" },
    { title: "SSW Training", icon: "🛠️" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-gray-900 mb-6"
          >
            {t("about_page.services.title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {t("about_page.services.text")}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white p-8 rounded-none shadow-xl hover:shadow-[0_20px_40px_rgba(230,0,35,0.1)] transition-shadow duration-300 border border-gray-100 group cursor-default"
            >
              <motion.div 
                className="text-5xl mb-6 inline-block"
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <div className="w-10 h-1 bg-primary/20 rounded-full group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SSWSpecialization() {
  const { t } = useLanguage();
  const sectors = [
    t("about_page.ssw.caregiver") || "Caregiver", 
    t("about_page.ssw.construction") || "Construction", 
    t("about_page.ssw.agriculture") || "Agricultural Firms", 
    t("about_page.ssw.interview") || "Interview Prep"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/about/ssw-hero.png",
    "/about/ssw-caregiver.png",
    "/about/ssw-construction.png",
    "/about/ssw-agriculture.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-none p-12 lg:p-20 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-8">{t("about_page.ssw.title")}</h2>
              <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                {t("about_page.ssw.text")}
              </p>
              <div className="space-y-4">
                {sectors.map((sector, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 text-white font-medium"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs">✓</div>
                    {sector}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-none overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm p-4 border border-white/10 aspect-[3/2]">
                <div className="relative w-full h-full rounded-none overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      variants={slideVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ 
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentIndex]}
                        alt={`SSW Training ${currentIndex + 1}`}
                        fill
                        className="rounded-none object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Indicators */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? "bg-primary w-8" : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  const { t } = useLanguage();
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Sakura Petals Effect could be added here if needed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl font-black text-gray-900 mb-10 leading-tight">
            {t("about_page.philosophy.title")} <span className="text-primary italic">Never Alone.</span>
          </h2>
          <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
            <p>{t("about_page.philosophy.text")}</p>
            <p className="font-medium text-gray-900">{t("about_page.philosophy.support")}</p>
          </div>
          <div className="mt-16 inline-block p-8 bg-white rounded-none shadow-2xl border border-primary/10">
            <p className="text-2xl font-bold text-primary leading-tight">
              {t("about_page.philosophy.cta")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <AboutHero />
      <CompanyIntro />
      <ServicesGrid />
      <SSWSpecialization />
      <PhilosophySection />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
