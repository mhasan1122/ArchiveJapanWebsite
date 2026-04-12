"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const BANGLA_CONTENT = [
  "Achieve Japan বাংলাদেশের একটি বিশ্বস্ত জাপানিজ ভাষা শিক্ষা ও SSW ট্রেনিং সেন্টার। আমরা ৩৭ বছরের অভিজ্ঞতা নিয়ে বাংলাদেশে জাপান-কেন্দ্রিক শিক্ষা ও ক্যারিয়ার সাপোর্ট দিয়ে আসছি। এই দীর্ঘ সময়ে আমরা জাপানের শিক্ষা ব্যবস্থা, কর্মসংস্কৃতি এবং নিয়োগ প্রক্রিয়া গভীরভাবে বুঝেছি, যাতে আপনাকে সঠিক ও বাস্তবসম্মত দিকনির্দেশনা দিতে পারি।",
  "এ পর্যন্ত আমরা ২,৬০০ এর বেশি বাংলাদেশি প্রার্থীকে সফলভাবে জাপানে পাঠায়ছি। আজ তারা জাপানের বিভিন্ন সেক্টরে সম্মানজনক ও স্থায়ীভাবে কাজ করছেন। তাদের এই সাফল্য আমাদের অভিজ্ঞতা ও দায়িত্বশীল কাজের বাস্তব প্রমাণ।",
  "আমাদের জাপানি ভাষা কোর্স JLPT N5, N4, N3 (Upcoming) ও JFT A2 এমনভাবে ডিজাইন করা, যেন আপনি শুধু পরীক্ষায় পাশই না করেন, বরং বাস্তব জীবনে জাপানি ভাষা আত্মবিশ্বাসের সাথে ব্যবহার করতে পারেন। পাশাপাশি আমাদের SSW স্কিল ট্রেনিং (Caregiving, Agriculture, Construction & Aviation) আপনাকে জাপানের চাকরির চাহিদা অনুযায়ী প্রস্তুত করে।",
  "আমরা বিশ্বাস করি, জাপানে সফল হতে হলে ভাষার পাশাপাশি জাপানি সংস্কৃতি জানা ও বোঝা জরুরি। তাই আমরা আপনাকে জাপানি Work Culture, Punctuality, Discipline, Professional Behaviour and Responsibility নেওয়া সম্পর্কে আগেই প্রস্তুত করি, যাতে আপনি জাপানে গিয়ে দ্রুত নতুন পরিবেশের সাথে মানিয়ে নিতে পারেন।",
  "Achieve Japan-এ আপনি পাবেন end-to-end professional সাপোর্ট। Admission থেকে শুরু করে course complete করা, documentation, visa guidance, interview preparation, জাপানে সফলভাবে পৌঁছানো, এবং জাপান যাওয়ার পরও আমরা আপনার পাশে থাকি। আমরা fake promise দিই না — আমরা আপনাকে আপনার যোগ্যতা ও সম্ভাবনার উপর ভিত্তি করে সঠিক সিদ্ধান্ত নিতে সহায়তা করি।",
  "আপনি যদি জাপানে study, বা SSW ভিসার মাধ্যমে একটি নিরাপদ, সম্মানজনক এবং দীর্ঘমেয়াদি ক্যারিয়ার গড়তে চান, তাহলে Achieve Japan আপনার জন্য একটি নির্ভরযোগ্য প্রতিষ্ঠান।",
];

const ENGLISH_CONTENT = [
  "Achieve Japan is a trusted Japanese language education and SSW training center in Bangladesh. We are dedicated to helping candidates build a successful future in Japan. With 37 years of experience, we have been supporting Bangladeshi candidates with Japan-focused education and career guidance. We provide real-life insight into Japan's education system, work culture, and recruitment process.",
  "We have successfully sent more than 2,600 Bangladeshi candidates to Japan. Today, they are working permanently with dignity in various sectors across the country. Their success reflects our experience, transparency, and commitment to every candidate we serve.",
  "Our Japanese language courses — JLPT N5, N4, N3 (upcoming), and JFT A2 — are designed to help you not only pass exams but also communicate confidently in real-life and workplace situations. Along with language training, our SSW skill training (Caregiving, Agriculture, Construction & Aviation) prepares you according to the actual requirements of Japanese employers.",
  "We understand that success in Japan requires more than language skills. That is why we prepare you for Japanese work culture, punctuality, discipline, professional behavior, and responsibility — so that you can easily adapt to the new environment when you reach Japan.",
  "At Achieve Japan, you receive complete end-to-end professional support — from admission and course completion to documentation, visa guidance, interview preparation, and departure to Japan. Even after you arrive in Japan, we continue to support you. We do not make false promises; instead, we guide you honestly based on your qualifications and career potential.",
  "If you are planning to build a safe, respectable, and long-term career in Japan through study or an SSW visa, Achieve Japan is a reliable choice for you.",
];

const PILLARS = [
  {
    icon: "🏆",
    title: "37 Years of Experience",
    desc: "Deep understanding of Japan's education system, work culture, and recruitment process.",
  },
  {
    icon: "✈️",
    title: "2,600+ Sent to Japan",
    desc: "Thousands of Bangladeshi candidates now working permanently with dignity across Japan.",
  },
  {
    icon: "📚",
    title: "JLPT & JFT Training",
    desc: "N5, N4, N3 (upcoming) and JFT A2 courses for real-life and workplace communication.",
  },
  {
    icon: "🔧",
    title: "SSW Skill Training",
    desc: "Caregiving, Agriculture, Construction & Aviation — prepared to Japanese employer standards.",
  },
  {
    icon: "🎌",
    title: "Work Culture Readiness",
    desc: "Punctuality, discipline, professional behavior — so you adapt fast from day one in Japan.",
  },
  {
    icon: "🤝",
    title: "End-to-End Support",
    desc: "From admission to departure and beyond — honest, reliable support at every stage.",
  },
];

export default function WhyChooseUs() {
  const [lang, setLang] = useState<"bn" | "en">("en");
  const content = lang === "bn" ? BANGLA_CONTENT : ENGLISH_CONTENT;

  return (
    <section id="about" className="relative bg-[#F5F5F7] overflow-hidden">
      {/* ── Main section ────────────────────────────────────────────────── */}
      <div className="py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E60023]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E60023]/4 rounded-full blur-3xl -ml-36 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── LEFT: narrative ─────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              {/* Section label */}
              <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-xs font-bold tracking-widest uppercase mb-5">
                Why Choose Us
              </span>

              <h2
                className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-8"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
              >
                Why Choose{" "}
                <span className="text-[#E60023]">Achieve Japan?</span>
              </h2>

              {/* Language toggle */}
              <div className="flex items-center gap-1 p-1 bg-white border border-gray-200 w-fit mb-8 shadow-sm">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    lang === "en"
                      ? "bg-[#E60023] text-white"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang("bn")}
                  className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                    lang === "bn"
                      ? "bg-[#E60023] text-white"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  বাংলা
                </button>
              </div>

              {/* Content paragraphs with animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {content.map((para, i) => (
                    <p
                      key={i}
                      className={`leading-relaxed ${
                        lang === "bn"
                          ? "text-gray-700 text-[15px]"
                          : "text-gray-600 text-base"
                      }`}
                      style={{ fontFamily: lang === "bn" ? "'Hind Siliguri', 'Noto Sans Bengali', sans-serif" : "Inter, system-ui, sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Closing call line */}
                  <p
                    className="font-bold text-[#E60023] text-base pt-2"
                    style={{ fontFamily: lang === "bn" ? "'Hind Siliguri', 'Noto Sans Bengali', sans-serif" : "Inter, system-ui, sans-serif" }}
                  >
                    {lang === "bn"
                      ? "আপনার জাপান যাত্রা শুরু করুন আজই Achieve Japan-এর সাথে!"
                      : "Start your Japan journey today with Achieve Japan!"}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 mt-10">
                <motion.a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-[#E60023] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#B8001C] transition-all duration-300 hover:shadow-lg hover:shadow-[#E60023]/25 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Get Started Today
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#programs"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-bold text-sm uppercase tracking-wider hover:border-[#E60023]/40 hover:text-[#E60023] transition-all duration-300 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Our Programs
                </motion.a>
              </div>
            </motion.div>

            {/* ── RIGHT: pillars ───────────────────────────────────────── */}
            <div className="grid sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.1}
                  whileHover={{ y: -6 }}
                  className="group bg-white p-6 border border-gray-100 hover:border-[#E60023]/25 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#E60023]/8 flex items-center justify-center text-2xl mb-4 group-hover:bg-[#E60023]/15 transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <h3
                    className="font-bold text-gray-900 text-sm mb-2 group-hover:text-[#E60023] transition-colors"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-gray-500 text-xs leading-relaxed"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}

              {/* Accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65 }}
                className="sm:col-span-2 bg-[#1a1a2e] p-6 border border-white/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60023]/15 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div className="shrink-0 w-12 h-12 bg-[#E60023] flex items-center justify-center">
                    <span className="text-white text-xl">🎌</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-[#FF4D6A] text-[10px] font-black uppercase tracking-widest mb-1">Our Promise</div>
                    <p
                      className="text-white/85 text-sm leading-relaxed"
                      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                      No false promises. Honest guidance based on your qualifications and potential — from Bangladesh to Japan and beyond.
                    </p>
                  </div>
                  <Link
                    href="/about"
                    className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#E60023] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B8001C] transition-colors duration-300 whitespace-nowrap"
                  >
                    About Us
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
