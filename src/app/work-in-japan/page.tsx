"use client";

import Link from "next/link";
import NextImage from "next/image";
import { motion, type Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/context/LanguageContext";

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut, delay: i * 0.1 },
  }),
};

const SECTORS = [
  {
    id: "caregiving",
    title: "Caregiving",
    icon: "🏥",
    desc: "Support elderly people in daily care, hygiene, and assistance tasks. High demand and rewarding work.",
  },
  {
    id: "construction",
    title: "Construction",
    icon: "🏗️",
    desc: "Work on building projects, roads, and infrastructure development using modern equipment.",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    icon: "🌾",
    desc: "Handle farming work, crops, livestock handling, and seasonal agricultural production.",
  },
  {
    id: "aviation",
    title: "Aviation",
    icon: "✈️",
    desc: "Support airport operations, ground handling, baggage service, and technical assistance.",
  },
];

export default function WorkInJapanPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1 min-h-screen bg-gray-50 selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden bg-secondary">
        <div className="absolute inset-0 z-0">
          <NextImage
            src="/asian-business-people-city-working-together.jpg"
            alt="Work in Japan"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              show: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/why-japan"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary-light transition-all mb-8"
              >
                ← {t("hero.pathway_detail_page.back_hub")}
              </Link>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-light text-xs font-bold tracking-[0.2em] uppercase mb-6"
            >
              Building Careers in Japan
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight"
            >
              Job in Japan from Bangladesh: <span className="text-primary-light">Salary, Visa, & Growth</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl text-white/80 leading-relaxed max-w-3xl font-light"
            >
              Achieve Japan, one of the sister concerns of Kawaii Group, guides you step-by-step toward building a stable career in Japan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro & Daily Life Story */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-secondary mb-8 leading-tight">
                Imagine Your Daily Life <br />
                <span className="text-primary">Before You Even Reach Japan</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  At Achieve Japan, we explain everything simply and practically so you can clearly understand your journey.
                </p>
                <div className="p-8 bg-white border-l-4 border-primary shadow-xl italic rounded-none">
                  "In Japan, you wake up early in the morning, travel through safe and clean transport systems, and reach your workplace on time. You follow clear instructions, work with discipline, and build strong professional habits that support your future."
                </div>
                <p>
                  Japan currently has a strong demand for foreign workers in key industries under the Specified Skilled Worker (SSW) program. This program gives you a legal and structured way to work in Japan with real career opportunities.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-none overflow-hidden shadow-2xl"
            >
              <NextImage
                src="/urban-skyline-modern-buildings.jpg"
                alt="Japan Life"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Available Sectors */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">
              Job Sectors Available <span className="text-primary-light">in Bangladesh</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              While the SSW program has 16 categories, currently 4 major sectors are available for Bangladeshi candidates.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center justify-center text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-none hover:bg-white/10 hover:border-primary/50 transition-all duration-300 aspect-square"
              >
                <div className="text-6xl mb-6 transform transition-transform group-hover:scale-110 duration-500">{sector.icon}</div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-primary-light transition-colors">
                  {sector.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Visa Details */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-none shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">📝</span>
                Requirements to Qualify
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>Japanese Language:</strong> JLPT N4 level or JFT A2 level for most jobs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>Caregiving Special:</strong> May require JLPT N3 level for better patient communication.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>Skill Test:</strong> Must pass a practical skill test based on your job category.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>Achieve Support:</strong> We provide full training, practice sessions, and exam support.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-none shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-black text-secondary mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">🛂</span>
                Visa Duration & Extension
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>SSW Type 1:</strong> Allows you to work legally for up to five years.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>Contract Extension:</strong> Possible based on performance and employer requirements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>SSW Type 2:</strong> Offers a longer stay, career growth, and spouse/family permit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span><strong>Structured Path:</strong> A safe and legal way to work and earn in Japan.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Salary & Benefits */}
      <section className="py-24 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
             <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-black text-secondary mb-8 leading-tight">
                  Salary and Income Structure <br />
                  <span className="text-primary">& Strong Employee Benefits</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Health insurance for medical treatment and hospital expenses.",
                    "Pension system for long-term financial security.",
                    "Paid leave in accordance with company rules.",
                    "Accommodation or housing support from some employers.",
                    "Labor laws ensuring your safety, rights, and fair treatment."
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-4 text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {benefit}
                    </div>
                  ))}
                </div>
             </div>
             <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-none rotate-2" />
                <div className="relative aspect-video rounded-none overflow-hidden shadow-2xl">
                  <NextImage
                    src="/portrait-business-people-worker-team-outside.jpg"
                    alt="Success Team"
                    fill
                    className="object-cover"
                  />
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col p-10 sm:p-14 bg-white rounded-none shadow-xl border border-gray-100 h-full min-h-[220px]">
              <div className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Monthly Income</div>
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-secondary whitespace-nowrap tracking-tighter mb-6">¥180,000 – ¥220,000</div>
              <p className="text-lg text-gray-500 mt-auto leading-relaxed">Base salary depending on job & location</p>
            </div>
            <div className="flex flex-col p-10 sm:p-14 bg-white rounded-none shadow-xl border border-gray-100 h-full min-h-[220px]">
              <div className="text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6">Overtime</div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-secondary mb-6">Extra Pay</div>
              <p className="text-lg text-gray-500 mt-auto leading-relaxed">Additional pay for extra working hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Career Foundation */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-secondary mb-8">
              Building a <span className="text-primary">Global Career Foundation</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              You gain international work experience that increases your global job opportunities. 
              You develop technical skills, discipline, and professional behavior that employers value worldwide. 
              Achieve Japan supports you throughout your entire journey—from training to job placement.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                { title: "Language Mastery", desc: "Expert training for JLPT & JFT exams." },
                { title: "Skill Prep", desc: "Hands-on preparation for industry skill tests." },
                { title: "Interview Guidance", desc: "Mastering Japanese business manners." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-none shadow-lg">
                  <h4 className="text-lg font-bold text-secondary mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark opacity-90" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center text-white">
          <h2 className="text-4xl sm:text-6xl font-black mb-8 leading-tight">
            Start Your Japan Career <br /> Journey Today!
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
            If you are serious about working in Japan, this is your starting point. Contact Achieve Japan to speak with our expert counselors.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/#contact"
              className="px-10 py-5 bg-white text-primary font-black text-lg rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
            >
              Contact Counselors Now
            </Link>
            <a
              href="https://wa.me/8801XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-primary-dark border-2 border-white/20 text-white font-black text-lg rounded-xl hover:bg-primary-dark/80 transition-all shadow-xl hover:-translate-y-1"
            >
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-12 text-white/50 text-sm uppercase tracking-[0.3em] font-bold">
            Achieve Japan — Your Trusted Partner since 1989
          </p>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
