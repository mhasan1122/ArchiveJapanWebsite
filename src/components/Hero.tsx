"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const HERO_IMAGES = [
  "/hero-bg.png",
  "/hero-university.png",
  "/title_mount_fuji.jpg",
  "/hero-scenic.png",
];

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
  const [mounted, setMounted] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds
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
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 6, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGES[currentImageIndex]}')` }}
          />
        </AnimatePresence>
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
      </div>

      {/* Sakura Petals */}
      {petals.map((petal, i) => (
        <SakuraPetal key={i} delay={petal.delay} left={petal.left} />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 text-sm font-medium shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              New Batch Starting Soon — Limited Seats!
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight drop-shadow-2xl"
          >
            Build Your{" "}
            <span className="relative">
              <span className="shimmer-text">Future</span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-1.5 bg-primary/80 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
            <br />
            in Japan{" "}
            <span className="inline-block animate-float text-5xl sm:text-6xl lg:text-7xl drop-shadow-xl">
              🇯🇵
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-lg"
          >
            Your complete pathway to Japan — expert language training, SSW visa
            support, job placement & study abroad consultancy with{" "}
            <span className="text-white font-bold border-b-2 border-primary/50">17+ years</span> of
            trusted experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-primary-dark text-white font-bold rounded-2xl shadow-[0_20px_50px_rgba(239,68,68,0.3)] overflow-hidden transition-all duration-300"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3 text-lg">
                Start Your Journey
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
              className="group inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300 shadow-xl"
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
              Book Free Consultation
            </motion.a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex flex-wrap gap-12 items-center"
          >
            {[
              { value: "17+", label: "Years Experience" },
              { value: "5000+", label: "Students Placed" },
              { value: "50+", label: "Japan Partners" },
            ].map((stat) => (
              <div key={stat.label} className="relative">
                <div className="text-4xl font-black text-white tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/70 mt-1 uppercase tracking-widest">{stat.label}</div>
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary/30 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-1" />

      {/* Slider Indicators */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-3">
        {HERO_IMAGES.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              currentImageIndex === i ? "w-10 bg-primary" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
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
