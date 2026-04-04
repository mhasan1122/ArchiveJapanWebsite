"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

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

  useEffect(() => {
    setMounted(true);
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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-transparent" />
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              New Batch Starting Soon — Limited Seats!
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Build Your{" "}
            <span className="relative">
              <span className="shimmer-text">Future</span>
            </span>
            <br />
            in Japan{" "}
            <span className="inline-block animate-float text-5xl sm:text-6xl lg:text-7xl">
              🇯🇵
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
          >
            Your complete pathway to Japan — expert language training, SSW visa
            support, job placement & study abroad consultancy with{" "}
            <span className="text-white font-semibold">17+ years</span> of
            trusted experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-2xl shadow-2xl shadow-primary/30 overflow-hidden"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                className="w-5 h-5 mr-2"
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
            className="mt-14 flex flex-wrap gap-8 items-center"
          >
            {[
              { value: "17+", label: "Years Experience" },
              { value: "5000+", label: "Students Placed" },
              { value: "50+", label: "Japan Partners" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
