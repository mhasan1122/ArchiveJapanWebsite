"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/6461.jpg",
  "/learning-education-ideas-insight-intelligence-study-concept.jpg",
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
function N5Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-28 min-h-[90vh] flex items-center overflow-hidden bg-[#1a1a2e]">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: "easeInOut" },
              scale: { duration: 6, ease: "linear" },
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${HERO_IMAGES[currentImageIndex]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#1a1a2e]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/40 via-transparent to-[#1a1a2e]/60" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-32 left-[10%] w-80 h-80 bg-[#E60023]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 right-[10%] w-64 h-64 bg-[#E60023]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-[#E60023] text-white text-xs font-bold tracking-[0.2em] uppercase">
                Achieve Japan
              </span>
              <span className="inline-block px-3 py-1.5 bg-green-500/20 text-green-300 text-xs font-bold tracking-[0.15em] uppercase border border-green-500/30">
                Beginner Level
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-6xl sm:text-7xl md:text-8xl font-black text-white tracking-tight leading-none mb-4"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              JLPT{" "}
              <span className="text-[#E60023]">N5</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-xl sm:text-2xl font-semibold text-white/80 mb-5"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Japanese Language Course
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Your first step toward Japan. Master Hiragana, Katakana, Kanji, and essential grammar with expert bilingual instructors — from zero to exam-ready.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E60023] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#B8001C] transition-all duration-300 hover:shadow-xl hover:shadow-[#E60023]/30 hover:-translate-y-0.5"
              >
                Enroll Now — Secure Your Seat
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/jlpt-preparation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/25 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/18 transition-all duration-300 hover:-translate-y-0.5"
              >
                View All JLPT Levels
              </Link>
            </motion.div>
          </div>

          {/* Right: course card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="mt-14 lg:mt-0 shrink-0 lg:w-80"
          >
            <div className="bg-white/6 backdrop-blur-xl border border-white/12 overflow-hidden">
              <div className="bg-[#E60023] px-6 py-4">
                <div className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Course At a Glance</div>
                <div className="text-white font-black text-xl" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>JLPT N5 — Full Course</div>
              </div>
              <div className="px-6 py-5 space-y-4">
                {[
                  { icon: "📅", label: "Duration", value: "3 Months" },
                  { icon: "📚", label: "Total Lessons", value: "25 Lessons" },
                  { icon: "🗓️", label: "Classes / Week", value: "6 Days" },
                  { icon: "⏱️", label: "Per Class", value: "2 Hours" },
                  { icon: "👥", label: "Class Size", value: "Small Groups" },
                  { icon: "🌐", label: "Mode", value: "In-Person & Online" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-gray-400 text-sm" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.label}</span>
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-6">
                <Link
                  href="/#contact"
                  className="block w-full py-3.5 bg-[#E60023] text-white text-sm font-bold text-center uppercase tracking-wider hover:bg-[#B8001C] transition-colors duration-300"
                >
                  Apply for This Course
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Course Intro ──────────────────────────────────────────────────────────────
function CourseIntro() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#E60023]/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5">
              About the Course
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Start Your Japanese Journey with JLPT N5
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Are you dreaming of Japan? Start your language journey with JLPT N5 — the beginning level of Japanese language learning. Achieve Japan is a renowned Japanese language and SSW training centre in Bangladesh. We prepare you for academic life and workplace communication in Japan with confidence.
            </p>
            <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              When you learn N5, you gain practical Japanese skills that support education, employment, and daily life. JLPT N5 helps you understand basic Japanese used in schools, training programs, and workplaces.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Zero Prior Knowledge Needed", "Bilingual Native Teachers", "Exam + Career Ready", "Online & In-Person"].map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F5F5F7] border border-gray-200 text-gray-700 text-xs font-semibold"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E60023]" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Schedule breakdown card */}
            <div className="bg-[#1a1a2e] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E60023]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="text-[#FF4D6A] text-xs font-bold uppercase tracking-widest mb-2">Course Duration</div>
                <h3
                  className="text-white text-2xl font-extrabold mb-6"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  Weekly Learning Schedule
                </h3>
                <div className="space-y-5">
                  {[
                    { num: "3", unit: "Months", desc: "Full course with consistent academic discipline" },
                    { num: "25", unit: "Lessons", desc: "Complete lessons within the full course duration" },
                    { num: "6", unit: "Days / Week", desc: "Classes every week for strong learning momentum" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center gap-5 p-4 bg-white/5 border border-white/8 hover:border-[#E60023]/30 transition-colors duration-300"
                    >
                      <div className="shrink-0 text-center min-w-[3.5rem]">
                        <div className="text-3xl font-black text-[#E60023]" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.num}</div>
                        <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">{item.unit}</div>
                      </div>
                      <div className="w-px h-10 bg-white/10 shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Writing Systems ───────────────────────────────────────────────────────────
function WritingSystems() {
  const scripts = [
    {
      kana: "あ",
      name: "Hiragana",
      subtitle: "The Foundation of Japanese Writing",
      color: "from-blue-600 to-blue-800",
      borderColor: "hover:border-blue-400/40",
      tagColor: "bg-blue-100 text-blue-700",
      count: "112 Characters",
      desc: "Hiragana is a basic Japanese writing system used to form sentence structure, grammar, and native words. It represents sounds and helps you read and write simple Japanese sentences correctly.",
      use: "Students use Hiragana daily in textbooks, exams, and workplace communication.",
      points: [
        "Fundamental sentence structure and grammar",
        "Native Japanese words and everyday writing",
        "Textbooks, exams, and workplace communication",
      ],
    },
    {
      kana: "ア",
      name: "Katakana",
      subtitle: "International & Professional Vocabulary",
      color: "from-purple-600 to-purple-800",
      borderColor: "hover:border-purple-400/40",
      tagColor: "bg-purple-100 text-purple-700",
      count: "112 Characters",
      desc: "Katakana is a Japanese writing system used for foreign and borrowed words. It helps you understand international and professional Japanese vocabulary.",
      use: "It appears often in names, job-related documents, signs, menus, and modern Japanese communication.",
      points: [
        "Foreign and borrowed words in Japanese",
        "Names, product labels, and job documents",
        "Signs, menus, and modern communication",
      ],
    },
    {
      kana: "語",
      name: "Kanji",
      subtitle: "Meaning-Based Japanese Characters",
      color: "from-[#E60023] to-red-900",
      borderColor: "hover:border-[#E60023]/40",
      tagColor: "bg-red-100 text-red-700",
      count: "~120 Characters",
      desc: "Kanji are Japanese characters derived from Chinese that represent meaning rather than sound alone. They appear in academic, official, and workplace materials.",
      use: "Each Kanji represents an idea, object, or action — helping you read signs, forms, applications, and important written documents in Japan.",
      points: [
        "Academic, official, and workplace materials",
        "Signs, forms, and application documents",
        "Ideas, objects, and actions in written Japanese",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E60023]/5 rounded-full blur-3xl -ml-32 -mt-32 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Writing Systems
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Three Scripts. One Language.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Understanding why you learn each script is as important as learning it. Here is what each one does for you in real life.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {scripts.map((script, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.15}
              whileHover={{ y: -8 }}
              className={`bg-white border border-gray-100 ${script.borderColor} hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              {/* Character showcase */}
              <div className={`bg-gradient-to-br ${script.color} p-10 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20fill%3D%22%23fff%22%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                  className="text-8xl text-white font-bold leading-none relative z-10"
                  style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                >
                  {script.kana}
                </motion.span>
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-xl font-extrabold text-gray-900"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {script.name}
                  </h3>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${script.tagColor}`}>
                    {script.count}
                  </span>
                </div>

                <p className="text-[#E60023] text-xs font-bold uppercase tracking-widest mb-3">
                  {script.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-4" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  {script.desc}
                </p>

                <p className="text-gray-500 text-sm leading-relaxed italic mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  {script.use}
                </p>

                <div className="pt-5 border-t border-gray-100">
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Used In</div>
                  <ul className="space-y-2">
                    {script.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-600" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        <span className="mt-0.5 w-3.5 h-3.5 bg-[#E60023]/10 text-[#E60023] text-[9px] flex items-center justify-center font-bold shrink-0">✓</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Full Curriculum ───────────────────────────────────────────────────────────
function Curriculum() {
  const items = [
    {
      icon: "✍️",
      title: "112 Hiragana Characters",
      desc: "Complete Hiragana set with proper stroke order, writing techniques, and reading practice.",
    },
    {
      icon: "✍️",
      title: "112 Katakana Characters",
      desc: "Complete Katakana set with proper writing techniques for foreign words and professional terms.",
    },
    {
      icon: "漢",
      title: "~120 Essential Kanji",
      desc: "Approximately 120 single Kanji in JLPT N5 contexts — meaning, reading, and usage.",
    },
    {
      icon: "🔢",
      title: "Numbers, Dates & Time",
      desc: "Counting, number systems, dates, time, months, and 7 days of the week for daily interactions and schedules.",
    },
    {
      icon: "📖",
      title: "Basic Grammar — All 25 Lessons",
      desc: "Complete grammar from all twenty-five lessons with clear, logical explanations built for beginners.",
    },
    {
      icon: "💬",
      title: "Essential Vocabulary",
      desc: "Vocabulary commonly used in classrooms, workplaces, and public spaces for real-life communication.",
    },
    {
      icon: "🗣️",
      title: "Speaking & Writing Practice",
      desc: "Apply and practice grammar and vocabulary through guided speaking exercises and structured writing tasks.",
    },
    {
      icon: "🎌",
      title: "Japanese Culture & Etiquette",
      desc: "Taught by a native teacher — greetings, polite language, and behavior expected in Japanese institutions.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#E60023]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Course Content
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            What We Cover in the JLPT N5 Course
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-500 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            A comprehensive, structured curriculum covering every element of N5 — built for beginners with no prior Japanese knowledge.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group bg-[#F5F5F7] p-6 border border-gray-100 hover:border-[#E60023]/30 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white border border-gray-100 group-hover:bg-[#E60023] group-hover:border-[#E60023] flex items-center justify-center text-xl mb-5 transition-all duration-300 shadow-sm">
                <span className="group-hover:grayscale-0">{item.icon}</span>
              </div>
              <h3
                className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#E60023] transition-colors"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills Development ────────────────────────────────────────────────────────
function SkillsDevelopment() {
  const skills = [
    {
      icon: "👁️",
      skill: "Reading",
      color: "border-blue-400",
      bgGlow: "bg-blue-500/10",
      points: [
        "Simple texts, notices, and signs",
        "JLPT-style comprehension passages",
        "Hiragana, Katakana, and basic Kanji texts",
      ],
    },
    {
      icon: "✏️",
      skill: "Writing",
      color: "border-purple-400",
      bgGlow: "bg-purple-500/10",
      points: [
        "Structured drills with clear technique",
        "Instructor feedback on every exercise",
        "Correct stroke order and character formation",
      ],
    },
    {
      icon: "🗣️",
      skill: "Speaking",
      color: "border-green-400",
      bgGlow: "bg-green-500/10",
      points: [
        "Daily conversation practice",
        "Role-based speaking exercises",
        "Polite language and real-life scenarios",
      ],
    },
    {
      icon: "👂",
      skill: "Listening",
      color: "border-[#E60023]",
      bgGlow: "bg-[#E60023]/10",
      points: [
        "Classroom audio and natural speech",
        "Slow, clear spoken Japanese to start",
        "Exam-style listening comprehension",
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E60023]/50 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E60023]/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#E60023]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/20 text-[#FF4D6A] text-xs font-bold tracking-widest uppercase mb-5"
          >
            Four Core Skills
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Build All Four Language Skills
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-400 text-base max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            True language ability requires all four skills. Our N5 course builds each one with purpose and structure.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.12}
              whileHover={{ y: -8 }}
              className={`relative bg-white/5 backdrop-blur-md border-t-2 ${item.color} border-l border-r border-b border-white/8 p-7 hover:bg-white/8 transition-all duration-300`}
            >
              <div className={`absolute inset-0 ${item.bgGlow} opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              <div className="relative z-10">
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3
                  className="text-white font-extrabold text-lg mb-5"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {item.skill}
                </h3>
                <ul className="space-y-2.5">
                  {item.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-gray-400 text-sm" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      <span className="mt-0.5 w-4 h-4 bg-[#E60023]/20 text-[#E60023] text-[10px] font-bold flex items-center justify-center shrink-0">✓</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why This Course ───────────────────────────────────────────────────────────
function WhyThisCourse() {
  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E60023]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5">
              Why This Course
            </span>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
              Why This Course Supports Your Japan Goals
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              We design this course to prepare you for real academic and professional life in Japan. You gain a strong foundation of language, cultural understanding, and daily communication with confidence.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              By completing this course, you can embark on your journey with Japanese cultural awareness and clear direction. This course helps you succeed in exams, training programs, and workplace environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#E60023] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#B8001C] transition-all duration-300 hover:shadow-lg hover:shadow-[#E60023]/25 hover:-translate-y-0.5"
              >
                Start Your N5 Journey
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/jlpt-preparation"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold text-sm uppercase tracking-wider hover:border-[#E60023]/40 hover:text-[#E60023] transition-all duration-300 hover:-translate-y-0.5"
              >
                View Full JLPT Guide
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { icon: "🎓", title: "Exam Readiness", desc: "Structured preparation aligned with official JLPT N5 exam format and standards." },
              { icon: "🏢", title: "Workplace Foundation", desc: "Practical vocabulary and communication skills used in Japanese workplaces every day." },
              { icon: "🌸", title: "Cultural Awareness", desc: "Native teacher guidance on Japanese etiquette, greetings, and institutional behavior." },
              { icon: "📈", title: "Progression Path", desc: "N5 is the gateway — completing it prepares you for N4, N3, and beyond." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex gap-5 p-5 bg-white border border-gray-100 hover:border-[#E60023]/25 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#E60023]/8 flex items-center justify-center text-2xl shrink-0 group-hover:bg-[#E60023]/15 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4
                    className="font-bold text-gray-900 text-sm mb-1 group-hover:text-[#E60023] transition-colors"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do I need any prior Japanese knowledge to join this course?",
      a: "No prior Japanese language knowledge is required. We begin from the absolute basics and guide you step by step through every character, grammar rule, and vocabulary item.",
    },
    {
      q: "Can I complete JLPT N5 within three months?",
      a: "Yes — with regular attendance and proper guidance, you can complete JLPT N5 within three months. Our structured lessons and six-day weekly schedule are specifically designed to support steady and consistent progress.",
    },
    {
      q: "Will this course help me study or work in Japan?",
      a: "Absolutely. This course builds the foundation needed for both study and work in Japan. You learn practical language skills, cultural understanding, and the communication ability needed for Japanese academic and professional environments.",
    },
    {
      q: "Who teaches the classes in this course?",
      a: "Experienced and bilingual native Japanese teachers teach this course. They guide you in understanding the language, culture, and proper communication styles expected in Japan.",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E60023]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-gray-200 hover:border-[#E60023]/30 transition-colors duration-300 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <span
                  className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#E60023] transition-colors"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  <span className="text-[#E60023] font-black mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 w-7 h-7 bg-[#E60023]/8 group-hover:bg-[#E60023] flex items-center justify-center text-[#E60023] group-hover:text-white transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E60023] via-[#C4001F] to-red-950" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-white/20" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-black/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            <span className="text-white/90 text-xs font-bold uppercase tracking-widest">New Batch Starting Soon</span>
          </div>

          <h2
            className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Start Your JLPT N5
            <br />
            <span className="text-white/70">Journey Today</span>
          </h2>

          <p className="text-white/75 text-lg max-w-xl mx-auto mb-4 leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            Take your first confident step toward Japan. Enroll now and begin building your future with Achieve Japan.
          </p>
          <p className="text-white/55 text-sm max-w-lg mx-auto mb-12 font-semibold uppercase tracking-wider" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            Achieve Japan — Turning Language into Opportunity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#E60023] font-black text-sm uppercase tracking-wider hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Enroll Now — Secure Your Seat
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
            <motion.a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-white/40 text-white font-bold text-sm uppercase tracking-wider hover:bg-white/12 hover:border-white/70 transition-all duration-300 hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Ask on WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function JLPTN5Page() {
  return (
    <main className="flex-1">
      <Navbar />
      <N5Hero />
      <CourseIntro />
      <WritingSystems />
      <Curriculum />
      <SkillsDevelopment />
      <WhyThisCourse />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
