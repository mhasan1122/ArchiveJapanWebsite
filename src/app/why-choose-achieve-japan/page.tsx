"use client";

import { motion } from "framer-motion";
import NextImage from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/* ── Facility cards ──────────────────────────────────────────────── */
const FACILITIES = [
  {
    icon: "📚",
    title: "Complete Japanese Language Courses",
    desc: "JLPT N5, N4, N3, N2, and JFT A2 programs are available under one roof.",
    color: "from-red-50 to-rose-50",
    border: "border-red-100",
    iconBg: "bg-red-100",
  },
  {
    icon: "🎌",
    title: "Experienced Native Japanese Teachers",
    desc: "Learn directly from native instructors with real teaching experience.",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    icon: "📅",
    title: "Structured Learning System",
    desc: "Classes are held 6 days a week to ensure consistent, uninterrupted progress.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: "📖",
    title: "Updated Study Materials",
    desc: "We follow Minna no Nihongo and IRODORI — globally recognised books — alongside our own curriculum.",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-100",
    iconBg: "bg-purple-100",
  },
  {
    icon: "🖥️",
    title: "Modern & Digital Classrooms",
    desc: "450 sq ft air-conditioned rooms equipped with projectors, sound systems, and 3D monitors — designed with a Japanese cultural theme.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
  },
];

/* ── Why Choose pillars ──────────────────────────────────────────── */
const PILLARS = [
  {
    icon: "🏆",
    label: "37 Years of Experience",
    detail:
      "Deep understanding of Japan's education system, work culture, and recruitment process — built over four decades of dedicated service.",
  },
  {
    icon: "✈️",
    label: "2,600+ Candidates Sent",
    detail:
      "Thousands of Bangladeshi candidates now working permanently with dignity across Japan in various respected sectors.",
  },
  {
    icon: "🎓",
    label: "JLPT & JFT Training",
    detail:
      "N5, N4, N3 (upcoming), and JFT A2 courses designed for real-life and workplace communication — not just exam passing.",
  },
  {
    icon: "🔧",
    label: "SSW Skill Training",
    detail:
      "Caregiving, Agriculture, Construction & Aviation — fully aligned with Japanese employer standards.",
  },
  {
    icon: "🤝",
    label: "End-to-End Support",
    detail:
      "From admission to departure and beyond — documentation, visa guidance, interview prep, and post-arrival support.",
  },
  {
    icon: "🌏",
    label: "Work Culture Readiness",
    detail:
      "We prepare you for Japanese punctuality, discipline, and professional behaviour so you adapt fast from day one.",
  },
];

/* ── Location highlights ─────────────────────────────────────────── */
const LOCATION_POINTS = [
  "Located in Banasree, Rampura — one of Dhaka's prime, well-connected areas",
  "Near Narai River — a calm, refreshing atmosphere that supports learning",
  "Close to DIT Project Road and Pragati Sarani with links to Gulshan, Badda, Motijheel & Tejgaon",
  "Easy access to BRAC University, East West University & Aftabnagar",
  "Nearby scenic relaxation spots: Hatirjheel & Aftabnagar",
];

export default function WhyChooseAchieveJapanPage() {
  return (
    <main className="flex-1 min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#1a1a2e]">
        {/* Background image */}
        <div className="absolute inset-0">
          <NextImage
            src="/egrowthmou.a1b954c2868172886849.jpg"
            alt="Achieve Japan campus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 bg-[#E60023]/70 border border-[#E60023]/40 text-white text-md font-bold tracking-[0.22em] uppercase mb-6"
          >
            Why Choose Achieve Japan
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Start Your Japan Journey with{" "}
            <span className="text-[#E60023]">Achieve Japan</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-white/75 max-w-3xl mx-auto leading-relaxed"
          >
            A Trusted Japanese Language Institute & SSW Training Center — guiding thousands of
            Bangladeshi students toward a secure and successful future in Japan for 37 years.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E60023] text-white font-bold text-base uppercase tracking-wider hover:bg-[#B8001C] transition-all duration-300 hover:shadow-lg hover:shadow-[#E60023]/30"
            >
              Get Started Today
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-base uppercase tracking-wider hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── INTRO PARAGRAPH ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-sm font-bold tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Achieve Japan — <span className="text-[#E60023]">One of the Most Renowned</span>{" "}
                Japanese Language Institutes in Bangladesh
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Achieve Japan is one of the most renowned Japanese language institutes and SSW
                  training centers in Bangladesh. We are committed to helping you build a secure and
                  successful future in Japan. We have guided thousands of Bangladeshi students and
                  candidates toward their goals for <strong className="text-gray-900">37 years</strong> through practical
                  education, career counseling, and real-world preparation.
                </p>
                <p>
                  Here, you don't just learn — you gain the <strong className="text-gray-900">confidence to succeed</strong> in
                  Japan's education system, workplace, and daily life.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
                <NextImage
                  src="/learning-education-ideas-insight-intelligence-study-concept.jpg"
                  alt="Students learning Japanese at Achieve Japan"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/40 to-transparent" />
              </div>
              {/* Stats pill */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 shadow-xl px-6 py-4">
                <div className="text-4xl font-black text-[#E60023]">37+</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#1a1a2e] border border-white/10 shadow-xl px-6 py-4">
                <div className="text-4xl font-black text-white">2,600+</div>
                <div className="text-sm font-bold text-white/60 uppercase tracking-widest">Sent to Japan</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6 PILLARS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-sm font-bold tracking-widest uppercase mb-4">
              What Sets Us Apart
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              6 Reasons to Choose <span className="text-[#E60023]">Achieve Japan</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(230,0,35,0.12)" }}
                className="group bg-white border border-gray-100 p-7 transition-all duration-300 hover:border-[#E60023]/25"
              >
                <div className="w-16 h-16 bg-[#E60023]/8 flex items-center justify-center text-4xl mb-5 group-hover:bg-[#E60023]/15 transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-xl mb-3 group-hover:text-[#E60023] transition-colors">
                  {p.label}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed">{p.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── LOCATION ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden shadow-lg">
                  <NextImage
                    src="/tourist-looking-fuji-mountain-cherry-blossom-spring-fujinomiya-japan.jpg"
                    alt="Beautiful Japan scenery"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden shadow-lg mt-8">
                  <NextImage
                    src="/fuji-mountain-cherry-blossoms-spring-japan.jpg"
                    alt="Fuji mountain cherry blossoms"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden shadow-lg -mt-8">
                  <NextImage
                    src="/yokohama-skyline-city.jpg"
                    alt="Japan city skyline"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden shadow-lg">
                  <NextImage
                    src="/urban-skyline-modern-buildings.jpg"
                    alt="Modern Japan"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-sm font-bold tracking-widest uppercase mb-4">
                Our Location
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                A Convenient & <span className="text-[#E60023]">Inspiring</span> Environment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our institute is located in <strong className="text-gray-900">Banasree, Rampura</strong> — one of Dhaka's prime
                and well-connected areas. The nearby Narai River adds a touch of natural beauty,
                creating a calm and refreshing atmosphere that supports your learning journey.
              </p>
              <ul className="space-y-4">
                {LOCATION_POINTS.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1.5 w-6 h-6 bg-[#E60023] flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-gray-600 text-base leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FACILITIES ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        {/* Decorative orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E60023]/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#E60023]/8 rounded-full blur-3xl -ml-36 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/20 border border-[#E60023]/30 text-[#FF4D6A] text-sm font-bold tracking-widest uppercase mb-4">
              Facilities & Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
              Everything You Need — <span className="text-[#E60023]">Under One Roof</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {FACILITIES.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className={`group relative bg-white/5 border border-white/10 p-7 hover:border-[#E60023]/40 hover:bg-white/8 transition-all duration-300 overflow-hidden ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E60023]/5 rounded-full blur-2xl group-hover:bg-[#E60023]/10 transition-colors duration-300" />
                <div className="relative">
                  <div className="w-16 h-16 bg-white/10 flex items-center justify-center text-4xl mb-5 group-hover:bg-[#E60023]/20 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-extrabold text-white text-xl mb-3 group-hover:text-[#FF4D6A] transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CLASSROOM IMAGERY ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 bg-[#E60023]/10 text-[#E60023] text-sm font-bold tracking-widest uppercase mb-4">
              Life at Achieve Japan
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
              A Learning Experience Like <span className="text-[#E60023]">No Other</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              { src: "/close-up-pupils-doing-japanese-calligraphy-called-shodo.jpg", alt: "Japanese calligraphy class", tall: true },
              { src: "/learning-programming-language.jpg", alt: "Digital classroom learning", tall: false },
              { src: "/marketing-group-discussing-research-result.jpg", alt: "Group study session", tall: false },
              { src: "/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office.jpg", alt: "Professional training", tall: false },
              { src: "/smiling-business-people-holding-meeting-office.jpg", alt: "Career counseling", tall: false },
              { src: "/portrait-business-people-worker-team-outside.jpg", alt: "Our team and students", tall: true },
            ].map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative overflow-hidden shadow-md group ${img.tall ? "row-span-2" : ""}`}
                style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
              >
                <NextImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#E60023] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22 fill=%22white%22 fill-opacity=%220.15%22/%3E%3C/svg%3E')] opacity-40" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Ready to Begin Your Japan Journey?
            </h2>
            <p className="text-white/85 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful Bangladeshi candidates who trusted Achieve Japan to turn
              their dreams into reality. Your secure future in Japan starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-[#E60023] font-extrabold text-base uppercase tracking-wider hover:bg-gray-50 transition-all duration-300 hover:shadow-lg"
              >
                Enroll Now
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-white text-white font-extrabold text-base uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
