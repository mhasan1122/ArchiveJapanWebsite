"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

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

/* ── Short intro paragraphs shown in the section ─────────────────── */
const INTRO_LINES = [
  "Achieve Japan is one of the most renowned Japanese language institutes and SSW training centers in Bangladesh. We have guided thousands of Bangladeshi students and candidates for 37 years through practical education, career counseling, and real-world preparation.",
  "When you choose Achieve Japan, you choose more than an institution — you choose a convenient, inspiring environment in Banasree, Rampura, with direct access to Dhaka's major routes and key districts.",
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative bg-[#F5F5F7] overflow-hidden">
      <div className="py-24 relative">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E60023]/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E60023]/4 rounded-full blur-3xl -ml-36 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── LEFT: intro narrative ────────────────────────────── */}
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

              {/* Short intro */}
              <div className="space-y-4 mb-8">
                {INTRO_LINES.map((line, i) => (
                  <p
                    key={i}
                    className="text-gray-600 text-base leading-relaxed"
                    style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* Facilities teaser — compact list */}
              <div className="bg-white border border-gray-100 p-6 mb-8">
                <p className="text-xs font-black uppercase tracking-widest text-[#E60023] mb-4">
                  Facilities & Services You Will Get
                </p>
                <ul className="space-y-2">
                  {[
                    "Complete JLPT N5, N4, N3, N2 & JFT A2 courses under one roof",
                    "Experienced native Japanese teachers",
                    "6 days/week structured classes",
                    "Minna no Nihongo & IRODORI study materials",
                    "450 sq ft air-conditioned digital classrooms with projectors & 3D monitors",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <span className="shrink-0 mt-1 w-4 h-4 bg-[#E60023] flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
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

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/why-choose-achieve-japan"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-bold text-sm uppercase tracking-wider hover:border-[#E60023]/40 hover:text-[#E60023] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    See More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* ── RIGHT: pillars ─────────────────────────────────────── */}
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

              {/* Promise accent card */}
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
                    href="/why-choose-achieve-japan"
                    className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#E60023] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#B8001C] transition-colors duration-300 whitespace-nowrap"
                  >
                    Learn More
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
