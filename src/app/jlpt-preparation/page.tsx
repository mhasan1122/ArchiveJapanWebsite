"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  "/man-practicing-japanese-handwriting-with-brush.jpg",
  "/man-practicing-japanese-handwriting-with-brush-ink.jpg",
  "/unrecognizable-businesswoman-working-office-writing-business-plans-her-notebook.jpg",
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
function JLPTHero() {
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
        <div className="absolute inset-0 bg-[#1a1a2e]/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/25 via-transparent to-[#1a1a2e]/40" />
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
          JLPT Preparation
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: "Inter, system-ui, sans-serif" }}
        >
          N5, N4 &amp; N3 — Full Guideline &amp; Training at Achieve Japan
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "37+", label: "Years of Experience" },
            { value: "3", label: "JLPT Levels" },
            { value: "25", label: "Lessons Per Course" },
            { value: "6 Days", label: "Classes Per Week" },
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

// ─── Program Overview ──────────────────────────────────────────────────────────
function ProgramOverview() {
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
              JLPT N5, N4 &amp; N3 Preparation
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Are you planning to study or live in Japan? If you are planning, you must earn proficiency in the Japanese language to execute your plan. The JLPT (Japanese Language Proficiency Test) is one of the most renowned proficiency certificate tests for Japanese language skills globally.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              Achieve Japan offers inclusive preparation for JLPT N5, N4, and N3 (upcoming) level courses with guidance and clarity. Our step-by-step approach builds your confidence and drives you to success.
            </p>
            <p className="text-gray-600 text-base leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              The JLPT includes 5 levels in total. The levels start from N5, the basic level, to N1, the advanced level. Our courses focus on the first three levels — N5, N4, and N3. Each course is designed exclusively so that learners can learn the language and reach their goals.
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
              { icon: "🏆", title: "Globally Recognised", desc: "JLPT is the world's most trusted Japanese proficiency certification" },
              { icon: "📚", title: "3 Levels Covered", desc: "N5, N4, and N3 — from beginner to intermediate proficiency" },
              { icon: "👨‍🏫", title: "Expert Instructors", desc: "Native bilingual teachers focused on practical language use" },
              { icon: "🚀", title: "Career-Linked", desc: "Language skills tied to real opportunities in Japan for work and study" },
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

// ─── Why Choose Us ─────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const benefits = [
    {
      icon: "🎖️",
      title: "37 Years of Trusted Experience",
      desc: "Achieve Japan brings thirty-seven years of trusted experience in Japanese language education.",
    },
    {
      icon: "📋",
      title: "Official JLPT Standards",
      desc: "Our courses follow official JLPT standards and updated examination patterns.",
    },
    {
      icon: "📈",
      title: "Structured & Measurable Progress",
      desc: "Students learn through structured lessons designed for steady and measurable progress.",
    },
    {
      icon: "🗣️",
      title: "Bilingual Native Instructors",
      desc: "Classes are taken by experienced native bilingual instructors who focus on clear explanations and practical language use.",
    },
    {
      icon: "🛂",
      title: "Career & Visa Support",
      desc: "We provide career counseling, visa documentation guidance, and SSW Skill Training preparation.",
    },
    {
      icon: "💪",
      title: "Confidence-Building Environment",
      desc: "A supportive learning environment helps students build confidence and achieve long-term success.",
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
            Why Achieve Japan
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-5"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Why Choose Us for Japanese Language Preparation
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
            Achieve Japan is a recognised Japanese Language and SSW Skill Training Centre in Dhaka, Bangladesh. Our approach connects Japanese language ability with real opportunities in Japan.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => (
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
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3
                className="font-bold text-gray-900 text-base mb-3 group-hover:text-[#E60023] transition-colors"
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

// ─── Level Training Cards ──────────────────────────────────────────────────────
function LevelTraining() {
  const levels = [
    {
      level: "N5",
      tag: "Beginner",
      tagColor: "bg-green-100 text-green-700",
      accentColor: "bg-green-500",
      borderHover: "hover:border-green-400/40",
      icon: "🌱",
      title: "N5 Level Training",
      subtitle: "Learn the Basics Clearly",
      desc: "The JLPT starts from the N5 level — the basic level of the Japanese language. This level introduces grammar, vocabulary, and expressions used in daily Japanese life.",
      topics: [
        "Simple grammar focused on basic sentence structures used in conversations",
        "Around 800 basic vocabulary words and 80–100 basic Kanji characters",
        "Listening practice with slow and clear spoken Japanese",
        "Reading short sentences, signs, and public notices",
      ],
      outcome: "You develop strong motivation that supports you in learning the Japanese language in the future.",
    },
    {
      level: "N4",
      tag: "Elementary",
      tagColor: "bg-blue-100 text-blue-700",
      accentColor: "bg-blue-500",
      borderHover: "hover:border-blue-400/40",
      icon: "📘",
      title: "N4 Level Training",
      subtitle: "Strengthen Communication Skills",
      desc: "After completing the N5 level, you progress to JLPT N4. This level helps you communicate confidently in daily and workplace situations.",
      topics: [
        "Expanded grammar patterns and common verb forms",
        "Around 1,500 additional vocabulary words",
        "300 Kanji characters (including the N5 set)",
        "Listening practice for routine conversations and instructions",
        "Reading short passages, messages, and written guidance",
      ],
      outcome: "By completing this level, you gain confidence to manage common interactions in Japan.",
    },
    {
      level: "N3",
      tag: "Upcoming",
      tagColor: "bg-[#E60023]/10 text-[#E60023]",
      accentColor: "bg-[#E60023]",
      borderHover: "hover:border-[#E60023]/40",
      icon: "🔥",
      title: "N3 Level Training",
      subtitle: "Intermediate Japanese Proficiency",
      desc: "N3 bridges the gap between basic and advanced Japanese. It builds intermediate proficiency for more complex conversations and professional environments.",
      topics: [
        "Intermediate grammar with longer sentence constructions",
        "Around 3,750 vocabulary words",
        "650 Kanji characters (including N5 and N4 sets)",
        "Listening to natural-speed conversations",
        "Reading longer texts, articles, and instructions",
      ],
      outcome: "N3 certification significantly expands your opportunities for study and work in Japan.",
      comingSoon: true,
    },
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
            Course Levels
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            What You Study at Each Level
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
            Each level is designed exclusively so that learners can progress steadily and reach their goals with clarity and confidence.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {levels.map((lvl, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.15}
              whileHover={{ y: -8 }}
              className={`bg-white border border-gray-100 ${lvl.borderHover} hover:shadow-xl transition-all duration-300 overflow-hidden relative`}
            >
              {lvl.comingSoon && (
                <div className="absolute top-4 right-4 px-2 py-0.5 bg-[#E60023]/10 text-[#E60023] text-[10px] font-black uppercase tracking-widest">
                  Coming Soon
                </div>
              )}

              {/* Top accent bar */}
              <div className={`h-1.5 w-full ${lvl.accentColor}`} />

              <div className="p-8">
                {/* Level badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-14 h-14 flex items-center justify-center text-3xl bg-[#F5F5F7]`}>
                    {lvl.icon}
                  </div>
                  <div>
                    <div className={`inline-block px-2 py-0.5 text-xs font-bold rounded ${lvl.tagColor} mb-1`}>
                      {lvl.tag}
                    </div>
                    <div
                      className="text-2xl font-black text-gray-900"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      JLPT {lvl.level}
                    </div>
                  </div>
                </div>

                <h3
                  className="text-lg font-extrabold text-gray-900 mb-1"
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {lvl.title}
                </h3>
                <p className="text-[#E60023] text-xs font-bold uppercase tracking-widest mb-4">
                  {lvl.subtitle}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed mb-6" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                  {lvl.desc}
                </p>

                <div className="mb-6">
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">
                    You Study
                  </div>
                  <ul className="space-y-2.5">
                    {lvl.topics.map((topic, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                        <div className="w-4 h-4 bg-[#E60023]/10 flex items-center justify-center text-[#E60023] text-[10px] mt-0.5 shrink-0 font-bold">✓</div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-gray-100">
                  <p className="text-gray-500 text-xs leading-relaxed italic" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
                    {lvl.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Program Structure ─────────────────────────────────────────────────────────
function ProgramStructure() {
  const steps = [
    {
      num: "01",
      title: "Structured Syllabus & Lesson Plan",
      desc: "We follow a clear and pre-planned syllabus designed for your steady progress and understanding. Each lesson builds knowledge to strengthen your language skills.",
    },
    {
      num: "02",
      title: "25 Lessons per Course — 2 Hours Each",
      desc: "Each course consists of 25 lessons with every class running for 2 full hours. 6 days of class per week ensures consistent exposure and retention.",
    },
    {
      num: "03",
      title: "Small Group Classes for Focused Attention",
      desc: "We keep classes small to ensure every student receives individual attention. Specific learning challenges are addressed with dedicated support.",
    },
    {
      num: "04",
      title: "Regular Practice Tasks & Progress Tracking",
      desc: "Regular practice tasks reinforce every lesson. We follow your progress closely and guide you until you are fully ready for the JLPT exam.",
    },
  ];

  return (
    <section className="py-24 bg-[#F5F5F7] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E60023]/5 rounded-full blur-3xl pointer-events-none" />
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
            How Your Learning Program Is Structured
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
            A clear, organized system built to take you from beginner to exam-ready with confidence.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-6 sm:left-7 top-0 bottom-0 w-px bg-gray-200" />
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
                <div className="relative z-10 shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-[#E60023] flex items-center justify-center shadow-lg shadow-[#E60023]/25">
                  <span className="text-white font-black text-sm">{step.num}</span>
                </div>
                <div className="flex-1 pb-2">
                  <div className="bg-white p-7 border border-gray-100 hover:border-[#E60023]/30 hover:shadow-md transition-all duration-300">
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

// ─── Class Schedules ───────────────────────────────────────────────────────────
function ClassSchedules() {
  const schedules = [
    {
      icon: "🌅",
      title: "Morning Batch",
      desc: "Start your day with focused Japanese language learning. Morning sessions are ideal for full-time students.",
      tag: "Available Now",
      tagColor: "bg-green-100 text-green-700",
    },
    {
      icon: "🌆",
      title: "Evening Batch",
      desc: "Designed for those who have commitments during the day. Evening classes let you learn after work or school.",
      tag: "Available Now",
      tagColor: "bg-green-100 text-green-700",
    },
    {
      icon: "💻",
      title: "Online Batch",
      desc: "Our online batches are available for jobholders or others outside Dhaka who plan to learn the Japanese language.",
      tag: "Available Now",
      tagColor: "bg-blue-100 text-blue-700",
    },
  ];

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
            Flexible Timings
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Class Schedules
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
            Our classes are designed keeping your convenience in mind. This flexibility helps you to continue learning alongside work or studies.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {schedules.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.15}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:border-[#E60023]/40 transition-all duration-300"
            >
              <div className="text-4xl mb-5">{item.icon}</div>
              <div className="w-10 h-1 bg-[#E60023] mb-4" />
              <h3
                className="font-bold text-white text-lg mb-3"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{item.desc}</p>
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded ${item.tagColor}`}>
                {item.tag}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { value: "25", label: "Lessons per Course" },
            { value: "2 hrs", label: "Per Class" },
            { value: "6 Days", label: "Per Week" },
            { value: "Small", label: "Group Size" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 px-4 py-5 text-center hover:border-[#E60023]/30 transition-colors duration-300"
            >
              <div className="text-2xl font-black text-[#E60023] mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── JLPT Levels Overview ──────────────────────────────────────────────────────
function JLPTLevelsOverview() {
  const levels = [
    { level: "N5", label: "Basic", color: "bg-green-500", width: "w-1/5", active: true },
    { level: "N4", label: "Elementary", color: "bg-blue-500", width: "w-2/5", active: true },
    { level: "N3", label: "Intermediate", color: "bg-yellow-500", width: "w-3/5", active: true, upcoming: true },
    { level: "N2", label: "Upper Intermediate", color: "bg-orange-500", width: "w-4/5", active: false },
    { level: "N1", label: "Advanced", color: "bg-[#E60023]", width: "w-full", active: false },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#E60023]/4 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5"
          >
            JLPT Levels
          </motion.span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Understanding the JLPT Scale
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-gray-500 mt-4 max-w-xl mx-auto text-base"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            The JLPT has 5 levels. Achieve Japan prepares you for N5, N4, and N3 — giving you a strong foundation to progress further.
          </motion.p>
        </div>

        <div className="space-y-5">
          {levels.map((lvl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-5 ${!lvl.active ? "opacity-40" : ""}`}
            >
              <div className="w-14 shrink-0 text-right">
                <span
                  className={`text-base font-black ${lvl.active ? "text-gray-900" : "text-gray-400"}`}
                  style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                >
                  {lvl.level}
                </span>
              </div>
              <div className="flex-1">
                <div className="h-8 bg-[#F5F5F7] relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                    className={`absolute left-0 top-0 bottom-0 ${lvl.color} ${lvl.width}`}
                    style={{ width: lvl.width.replace("w-", "").replace("full", "100%").replace("1/5", "20%").replace("2/5", "40%").replace("3/5", "60%").replace("4/5", "80%") }}
                  />
                </div>
              </div>
              <div className="w-32 shrink-0 flex items-center gap-2">
                <span className="text-xs text-gray-500" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>{lvl.label}</span>
                {lvl.active && !lvl.upcoming && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#E60023]/10 text-[#E60023] uppercase tracking-wider">
                    Active
                  </span>
                )}
                {lvl.upcoming && (
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-yellow-100 text-yellow-700 uppercase tracking-wider">
                    Soon
                  </span>
                )}
              </div>
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
            Take the Next Step<br />Toward Your Japan Goal
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-4 leading-relaxed" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            Begin your journey toward JLPT N5, N4, and N3 at Achieve Japan. We guide you with experience, structure, and long-term career understanding.
          </p>
          <p className="text-white/70 text-base max-w-xl mx-auto mb-10" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
            Enroll today to secure your seat in the upcoming batch. Contact us now and move confidently toward your future in Japan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-[#E60023] font-bold text-sm hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll in JLPT Preparation
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
              New batches starting soon — Secure your seat today
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────
export default function JLPTPreparationPage() {
  return (
    <main className="flex-1">
      <Navbar />
      <JLPTHero />
      <ProgramOverview />
      <WhyChooseUs />
      <LevelTraining />
      <ProgramStructure />
      <ClassSchedules />
      <JLPTLevelsOverview />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
