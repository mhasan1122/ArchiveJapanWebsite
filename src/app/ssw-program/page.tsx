"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/hero-bg.png",
  "/hero-scenic.png",
  "/hero-university.png",
];

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
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
function SSWHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-28 min-h-[80vh] flex items-center overflow-hidden bg-[#1a1a2e]">
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
            style={{ backgroundImage: `url('${HERO_IMAGES[currentImageIndex]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#1a1a2e]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/40 via-transparent to-[#1a1a2e]/60" />
      </div>

      <div className="absolute top-24 left-1/4 w-96 h-96 bg-[#E60023]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#E60023]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block px-5 py-1.5 bg-[#E60023] text-white text-xs font-bold tracking-[0.2em] uppercase mb-8"
        >
          Achieve Japan
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-5"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          SSW Program
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Start Your Professional Journey in Japan with Achieve Japan
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "2", label: "Visa Types" },
            { value: "3+", label: "Available Sectors" },
            { value: "5 Yrs", label: "Visa Duration" },
            { value: "Legal", label: "Government Approved" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/8 backdrop-blur-md border border-white/15 px-4 py-5 text-center hover:border-[#E60023]/50 transition-colors duration-300"
            >
              <div className="text-3xl font-black text-[#E60023] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-300 uppercase tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── What Is SSW ───────────────────────────────────────────────────────────────
function WhatIsSSW() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#E60023]/5 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5">
              About the Program
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Specified Skilled Worker (SSW) Program
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              The SSW Program is a Japanese government project addressing the labor shortage in Japan. It is an authorized work visa system that allows skilled foreign nationals to work legally in Japan in industries facing labor shortages.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              The program focuses on practical skills, workplace readiness, and Japanese language ability, ensuring fair employment and long-term stability.
            </p>
            <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              For Bangladeshi candidates, the SSW program offers a clear, legal, and realistic pathway to work in Japan. Achieve Japan is a trusted Japanese language and SSW skill training centre in Bangladesh — dedicated to preparing candidates not just for visa approval, but for successful employment.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { icon: "🏛️", title: "Government Approved", desc: "Official Japanese government visa program addressing labor shortages" },
              { icon: "⚖️", title: "Legal & Fair", desc: "Authorized work visa ensuring fair employment and worker rights" },
              { icon: "🎌", title: "Japan-Ready", desc: "Training aligned with Japanese workplace standards and culture" },
              { icon: "📈", title: "Long-Term Stability", desc: "Pathway to stable employment and career growth in Japan" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="bg-[#F5F5F7] p-6 border border-gray-100 hover:border-[#E60023]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3
                  className="font-bold text-gray-900 mb-1 group-hover:text-[#E60023] transition-colors text-base"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Visa Types ────────────────────────────────────────────────────────────────
function VisaTypes() {
  return (
    <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E60023]/50 to-transparent" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#E60023]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#E60023]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/20 text-[#FF4D6A] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Visa Duration
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            SSW Visa Types
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-400 mt-4 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            The SSW program offers two types of visas, each designed for different stages of your career in Japan.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Type 1 */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 hover:border-[#E60023]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#E60023] flex items-center justify-center text-white font-black text-lg">
                01
              </div>
              <div>
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-widest">Entry Level</div>
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  SSW Type-1
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              This type is for entry-level workers with basic working skills. Candidates must demonstrate Japanese language proficiency and pass the required assessments.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "For entry-level workers with basic skills",
                "Must know JLPT N4 and pass JFT A2",
                "Visa valid for up to 5 years",
                "Spouse not permitted under this visa type",
                "Renewable within the 5-year period",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  <div className="w-5 h-5 bg-[#E60023]/20 flex items-center justify-center text-[#E60023] text-xs mt-0.5 shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
              <span className="text-2xl">🗓️</span>
              <div>
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-wider">Duration</div>
                <div className="text-white font-bold" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>Up to 5 Years</div>
              </div>
            </div>
          </motion.div>

          {/* Type 2 */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#E60023]/5 backdrop-blur-md border border-[#E60023]/20 p-10 hover:border-[#E60023]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white font-black text-lg">
                02
              </div>
              <div>
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-widest">Advanced Level</div>
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  SSW Type-2
                </h3>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              After completing SSW Type-1 and gaining experience, the candidate can extend their visa for the next 5 years. This advanced tier brings greater rights including family reunification.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Available after completing SSW Type-1",
                "Requires demonstrated work experience",
                "Extendable for next 5 years",
                "Candidates may bring family to Japan",
                "Legal procedures required for family arrival",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  <div className="w-5 h-5 bg-[#E60023]/20 flex items-center justify-center text-[#E60023] text-xs mt-0.5 shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
              <div>
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-wider">Family</div>
                <div className="text-white font-bold" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>Family Members Allowed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Available Sectors ─────────────────────────────────────────────────────────
function AvailableSectors() {
  const sectors = [
    {
      num: "01",
      icon: "🏥",
      title: "Nursing Care",
      subtitle: "Caregiver Sector",
      tags: ["High Demand", "Respectable Profession", "Long-Term Career Stability"],
      desc: "The number of aged people in Japan's society is rapidly growing, creating a continuous demand for skilled caregivers. Workers in the SSW Caregiver sector provide daily life support to elderly individuals in nursing homes and care facilities.",
      cta: "Apply for SSW Caregiver Training",
    },
    {
      num: "02",
      icon: "🏗️",
      title: "Construction Industry",
      subtitle: "Building & Infrastructure",
      tags: ["Skill-Based Jobs", "Strong Demand", "Competitive Income"],
      desc: "In Japan's infrastructure development, the Construction sector plays a vital role. This category offers opportunities for skilled and semi-skilled workers to contribute to long-term projects across Japan.",
      cta: "Register for SSW Construction Program",
    },
    {
      num: "03",
      icon: "🌾",
      title: "Agriculture Industry",
      subtitle: "Modern Farming Sector",
      tags: ["Practical Work", "Modern Farming", "Stable Work Environment"],
      desc: "To maintain food production, Japan's agriculture sector relies on skilled workers using advanced techniques. The SSW Agriculture sector includes farming, greenhouse cultivation, and livestock management.",
      cta: "Join SSW Agriculture Program",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E60023]/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Bangladesh
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Available SSW Sectors in Bangladesh
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-600 text-base leading-relaxed"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Achieve Japan currently offers training and placement support for three high-demand SSW sectors available for Bangladeshi candidates.
          </motion.p>
        </div>

        <div className="space-y-8">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.15}
              className="bg-white border border-gray-100 hover:border-[#E60023]/25 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left accent */}
                <div className="lg:w-2 bg-[#E60023] shrink-0" />

                <div className="flex-1 p-8 lg:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Icon & number */}
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-[#E60023]/10 flex items-center justify-center text-4xl">
                        {sector.icon}
                      </div>
                      <span className="text-[#E60023] text-xs font-black tracking-widest uppercase">
                        {sector.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3
                          className="text-xl font-extrabold text-gray-900"
                          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                        >
                          {sector.title}
                        </h3>
                        <span className="text-xs font-bold text-[#E60023] uppercase tracking-widest px-2 py-0.5 bg-[#E60023]/10">
                          {sector.subtitle}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {sector.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="text-xs font-semibold px-3 py-1 bg-[#F5F5F7] text-gray-600 border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p
                        className="text-gray-600 text-sm leading-relaxed mb-6"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                      >
                        {sector.desc}
                      </p>

                      <Link
                        href="/#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#E60023] text-white text-sm font-bold hover:bg-[#B8001C] transition-colors duration-300"
                      >
                        {sector.cta}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Other SSW Sectors ─────────────────────────────────────────────────────────
function OtherSectors() {
  const others = [
    { icon: "🧹", label: "Building Cleaning Management" },
    { icon: "🏭", label: "Industrial Product Manufacturing" },
    { icon: "⚓", label: "Shipbuilding & Ship Machinery" },
    { icon: "🚗", label: "Automobile Repair & Maintenance" },
    { icon: "✈️", label: "Aviation" },
    { icon: "🏨", label: "Accommodation" },
    { icon: "🐟", label: "Fishery & Aquaculture" },
    { icon: "🍱", label: "Food & Beverage Manufacturing" },
    { icon: "🍽️", label: "Food Service Industry" },
    { icon: "🚛", label: "Automobile Transportation Business" },
    { icon: "🚆", label: "Railway" },
    { icon: "🌲", label: "Forestry" },
    { icon: "🪵", label: "Timber (Wood Industry)" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60023]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Future Expansion
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Other SSW Sectors
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-base"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            In addition to the currently available sectors, the SSW program also includes a wide range of future expansion opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {others.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-[#F5F5F7] p-5 border border-gray-100 hover:border-[#E60023]/25 hover:shadow-md transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-2xl shrink-0">{item.icon}</span>
              <span
                className="text-gray-700 text-sm font-semibold leading-snug"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Achieve Japan ─────────────────────────────────────────────────────────
function WhyAchieveJapan() {
  const reasons = [
    {
      icon: "🎯",
      title: "Focused SSW Preparation",
      desc: "Specialized SSW preparation programs tailored specifically for Bangladeshi candidates.",
    },
    {
      icon: "🗣️",
      title: "Workplace Japanese Training",
      desc: "Japanese language training aligned with real workplace needs, not just exam scores.",
    },
    {
      icon: "📋",
      title: "Full Application Support",
      desc: "Skill test preparation, interview coaching, and complete document support throughout.",
    },
    {
      icon: "🤝",
      title: "Verified Job Matching",
      desc: "Verified job matching with genuine, trustworthy Japanese employers across sectors.",
    },
    {
      icon: "🛫",
      title: "Pre & Post Departure",
      desc: "Pre-departure orientation and continued post-arrival guidance — we never stop supporting you.",
    },
    {
      icon: "🌏",
      title: "Long-Term Partnership",
      desc: "We are your long-term partner for Japan, providing service even after candidates arrive.",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#E60023]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Our Difference
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Why Achieve Japan Is the Right Choice
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-600 text-base leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Achieve Japan is more than a Japanese language and SSW skill training center. We are your long-term partner for Japan. We prepare candidates to adapt to Japanese work culture, perform confidently in their roles, and advance professionally.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              whileHover={{ y: -6 }}
              className="bg-white p-8 border border-gray-100 hover:border-[#E60023]/25 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3
                className="font-bold text-gray-900 text-base mb-3 group-hover:text-[#E60023] transition-colors"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E60023] via-[#B8001C] to-red-900" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-white/5 rounded-full blur-2xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-5xl mb-6 inline-block">🎌</span>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Take the First Step<br />Toward Japan
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4 leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            If you are planning to go to Japan under the SSW Caregiver, Construction, or Agriculture sector, today is the right time to start your preparation.
          </p>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-10" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            Contact Achieve Japan today to check your eligibility. Get expert guidance from Bangladesh to Japan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="/#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#E60023] font-bold text-sm hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll in SSW Training Program
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-sm hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-sm font-semibold uppercase tracking-widest"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Achieve Japan — Turning Skills into Opportunities in Japan
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              SSW advisors are available now — Check your eligibility today
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function SSWProgramPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <SSWHero />
      <WhatIsSSW />
      <VisaTypes />
      <AvailableSectors />
      <OtherSectors />
      <WhyAchieveJapan />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
