"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/hero-scenic.png",
  "/hero-university.png",
  "/hero-bg.png",
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
function CounselingHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-28 min-h-[80vh] flex items-center overflow-hidden bg-[#1a1a2e]">
      {/* Background Image Slider */}
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
        
        {/* Dark Overlays for readability */}
        <div className="absolute inset-0 bg-[#1a1a2e]/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/40 via-transparent to-[#1a1a2e]/60" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-24 left-1/4 w-96 h-96 bg-[#E60023]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#E60023]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-block px-5 py-1.5 bg-[#E60023] text-white text-xs font-bold tracking-[0.2em] uppercase mb-8"
        >
          Achieve Japan
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-5"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Career Counseling
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          Personalized Guidance for a Confident Future in Japan
        </motion.p>

        {/* Stats — fixed 4-column grid, never wraps below 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "37+", label: "Years of Experience" },
            { value: "1000s", label: "Students Guided" },
            { value: "4", label: "SSW Sectors" },
            { value: "100%", label: "Honest & Transparent" },
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

// ─── Intro Section ─────────────────────────────────────────────────────────────
function IntroSection() {
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
              Our Mission
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              The Right Step Toward Your Future in Japan
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              The most important decision of your life is to plan your future, and we help you make the right step. We provide proper guidance with true information and honest support through every stage.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Our core belief is that what works for one may not work for another. We understand that different people have different perceptions, abilities, and criteria. That&apos;s why our counselors acknowledge your hopes, confusion, and expectations, and help you choose a path that truly fits your dream.
            </p>
            <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Our team has successfully counseled and sent thousands of students and job seekers to Japan. We listen to your story with care and guide you toward the best option for study or work.
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
              { icon: "🎯", title: "Personalized", desc: "Guidance tailored to your background and goals" },
              { icon: "🤝", title: "Honest", desc: "True information and transparent support every step" },
              { icon: "🇯🇵", title: "Japan-Focused", desc: "Real, updated opportunities for study and work" },
              { icon: "📈", title: "Proven", desc: "Thousands guided successfully over 37+ years" },
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

// ─── Why Counseling Matters ────────────────────────────────────────────────────
function WhyMatters() {
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
            Why It Matters
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Why Career Counseling Matters
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
            Many people feel stressed while planning a career. Without proper knowledge and experience, they often make wrong decisions — wasting time, money, and confidence, which leads to frustration and confusion.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "😟",
              title: "The Challenge",
              desc: "It's easy to feel overwhelmed. There are many options available for both study and work in Japan — choosing alone is risky.",
            },
            {
              icon: "💡",
              title: "Our Approach",
              desc: "Our expert counseling team provides guidelines on what to do and how to do it through thoughtful discussion and careful evaluation.",
            },
            {
              icon: "✅",
              title: "The Outcome",
              desc: "You get clarity on your interests, strengths, weaknesses, and desired opportunities. You receive practical advice to make smart and wise decisions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{ y: -8 }}
              className="bg-white p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#E60023]/20 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <div className="w-10 h-1 bg-[#E60023] mb-4" />
              <h3
                className="font-bold text-gray-900 text-lg mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How Sessions Work ─────────────────────────────────────────────────────────
function SessionsSection() {
  const steps = [
    {
      num: "01",
      title: "Understanding Your Background and Goals",
      desc: "We start by hearing from you — learning about your academic history, personal interests, plans, and expectations. We review your Japanese language level, discuss your pathway preference (study or work), and listen to your questions carefully, guiding you step by step with full attention.",
    },
    {
      num: "02",
      title: "Mapping Your Study and Career Options",
      desc: "Based on your preferences, we show you suitable opportunities including study options, training routes, and SSW sectors. We help compare institutions, programs, and job fields across Japan, giving you a clear and practical roadmap based on your current situation.",
    },
    {
      num: "03",
      title: "Smart Recommendations for Courses and Job Sectors",
      desc: "We recommend courses with strong demand and long-term growth in Japan. For SSW candidates, we guide you through Caregiver, Construction, Agriculture, and Food Service (Upcoming). We deliver reliable advice aligned with real market needs.",
    },
    {
      num: "04",
      title: "Complete Support and Helpful Resources",
      desc: "We don't just counsel — we provide complete support even after reaching your destination. We assist with language classes, document requirements, and explain each step clearly. You get updated resources that help you prepare more effectively for Japan.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60023]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Our Process
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            How Our Counseling Sessions Support You
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
            Our counseling approach is simple, organized, and tailored to your needs. Here is what you can expect:
          </motion.p>
        </div>

        {/* Clean vertical timeline */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 sm:left-7 top-0 bottom-0 w-px bg-gray-100" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Step number square */}
                <div className="relative z-10 shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#E60023] flex items-center justify-center shadow-lg shadow-[#E60023]/25">
                  <span className="text-white font-black text-sm">{step.num}</span>
                </div>

                {/* Card */}
                <div className="flex-1 pb-2">
                  <div className="bg-[#F5F5F7] p-7 border border-gray-100 hover:border-[#E60023]/30 hover:shadow-md transition-all duration-300">
                    <h3
                      className="text-lg font-bold text-gray-900 mb-3"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Two Pathways ──────────────────────────────────────────────────────────────
function PathwaysSection() {
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
            Your Pathway
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Choose Your Journey to Japan
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Students */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-10 hover:border-[#E60023]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#E60023] flex items-center justify-center text-white text-xl">
                🎓
              </div>
              <div>
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-widest">Pathway 01</div>
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  For Students
                </h3>
              </div>
            </div>
            <h4
              className="text-white/90 font-semibold text-base mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Plan Your Education in Japan with Confidence
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Japan offers education opportunities in technology, science, culture, and business. There are so many institutions that it becomes challenging to choose the right one without proper guidance. Achieve Japan helps you find suitable universities, colleges, or vocational schools — explaining tuition fees, scholarships, and admission conditions with full transparency.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "University, college & vocational school guidance",
                "JLPT preparation support",
                "Application essay & document help",
                "Scholarship & tuition fee clarity",
                "Support from inquiry to departure",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  <div className="w-5 h-5 bg-[#E60023]/20 flex items-center justify-center text-[#E60023] text-xs mt-0.5 shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E60023] text-white text-sm font-bold hover:bg-[#B8001C] transition-colors duration-300"
            >
              Book a Session
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* For Job Seekers */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#E60023]/5 backdrop-blur-md border border-[#E60023]/20 p-10 hover:border-[#E60023]/40 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl">
                💼
              </div>
              <div>
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-widest">Pathway 02</div>
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  For Job Seekers
                </h3>
              </div>
            </div>
            <h4
              className="text-white/90 font-semibold text-base mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Build a Strong Future Through the SSW Program
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Japan&apos;s SSW (Specified Skilled Worker) program offers stable, rewarding opportunities in high-demand sectors like nursing, construction, hospitality, agriculture, and manufacturing. Achieve Japan helps you understand each requirement clearly, guiding you toward the right sector that matches your abilities.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Sector matching based on your strengths",
                "Japanese interview practice",
                "Skill test preparation for SSW fields",
                "Step-by-step visa processing guidance",
                "Complete documentation assistance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  <div className="w-5 h-5 bg-[#E60023]/20 flex items-center justify-center text-[#E60023] text-xs mt-0.5 shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition-colors duration-300"
            >
              Get SSW Guidance
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* SSW Sectors */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { icon: "🏥", label: "Caregiver" },
            { icon: "🏗️", label: "Construction" },
            { icon: "🌾", label: "Agriculture" },
            { icon: "🍱", label: "Food Service", tag: "Upcoming" },
          ].map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-4 text-center hover:border-[#E60023]/30 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{sector.icon}</div>
              <div className="text-white text-sm font-semibold" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{sector.label}</div>
              {sector.tag && (
                <div className="mt-1 text-[10px] px-2 py-0.5 bg-[#E60023]/20 text-[#FF4D6A] font-bold uppercase tracking-wider inline-block">
                  {sector.tag}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Why Achieve Japan ─────────────────────────────────────────────────────────
function WhyAchieveJapan() {
  const reasons = [
    {
      icon: "🏆",
      title: "37 Years of Experience",
      desc: "We have 37 years of proven expertise in Japanese language learning, education, training, and employment.",
    },
    {
      icon: "🔍",
      title: "Always Up to Date",
      desc: "Our counselors are always aware of current policies, updated job trends, and real opportunities in Japan.",
    },
    {
      icon: "❤️",
      title: "Individual Care",
      desc: "We provide every student and job seeker with personal care and attention — your story matters to us.",
    },
    {
      icon: "🌱",
      title: "Warm Environment",
      desc: "You get a welcoming place where we listen to your concerns and interests with peace and respect.",
    },
    {
      icon: "💬",
      title: "Honest Suggestions",
      desc: "You receive honest suggestions, structured guidance, and reliable services — no false promises.",
    },
    {
      icon: "🛫",
      title: "End-to-End Support",
      desc: "We stay with you from the first counseling session to your final departure — and continue after.",
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
            Why Achieve Japan Makes a Difference
          </motion.h2>
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
            Take the First Step<br />Toward Your Future
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4 leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            Your dream to Japan deserves expert guidance and complete support. Achieve Japan helps you and gives you the wings to fly.
          </p>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-10" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            With Achieve Japan, you move forward toward your dream country with clarity, confidence, and proper preparation. Then, what are you waiting for?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#E60023] font-bold text-sm hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Your Free Counseling Session
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Counselors are available now — We&apos;re here to listen, guide, and support
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function CareerCounselingPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <CounselingHero />
      <IntroSection />
      <WhyMatters />
      <SessionsSection />
      <PathwaysSection />
      <WhyAchieveJapan />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
