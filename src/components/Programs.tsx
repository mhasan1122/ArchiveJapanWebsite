"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "JLPT N5–N4",
    subtitle: "Beginner Japanese",
    duration: "3–6 Months",
    outcome: "Basic fluency & JLPT certification",
    icon: "🗾",
    features: [
      "Hiragana & Katakana mastery",
      "800+ vocabulary words",
      "Basic conversation skills",
      "Mock exam preparation",
    ],
    color: "from-rose-500 to-primary",
    popular: false,
  },
  {
    title: "JLPT N3–N2",
    subtitle: "Advanced Japanese",
    duration: "6–12 Months",
    outcome: "Professional-level Japanese",
    icon: "🎌",
    features: [
      "Advanced grammar & kanji",
      "Business Japanese",
      "3000+ vocabulary words",
      "Interview preparation",
    ],
    color: "from-primary to-primary-dark",
    popular: true,
  },
  {
    title: "SSW Training",
    subtitle: "Specified Skilled Worker",
    duration: "3–4 Months",
    outcome: "Ready for Japan employment",
    icon: "⛩️",
    features: [
      "JFT-Basic / JLPT prep",
      "Skill test preparation",
      "Japanese work culture",
      "Visa documentation support",
    ],
    color: "from-primary-dark to-red-900",
    popular: false,
  },
  {
    title: "IELTS Prep",
    subtitle: "English Proficiency",
    duration: "2–3 Months",
    outcome: "Target band score achievement",
    icon: "📚",
    features: [
      "All 4 modules covered",
      "Practice tests weekly",
      "Speaking mock sessions",
      "Score improvement guarantee",
    ],
    color: "from-gray-700 to-gray-900",
    popular: false,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 bg-accent">
      {/* Subtle pattern */}
      <div className="absolute inset-0 wave-pattern opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
            Our Programs
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Choose Your{" "}
            <span className="gradient-text">Pathway</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive training programs designed to take you from zero to
            working in Japan, with personalized guidance every step of the way.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold rounded-full shadow-lg shadow-primary/30 uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              <div
                className={`relative h-full p-6 rounded-3xl bg-white border ${
                  program.popular
                    ? "border-primary/30 shadow-xl shadow-primary/10"
                    : "border-gray-200"
                } hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className="text-4xl mb-4">{program.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{program.subtitle}</p>

                {/* Duration & Outcome */}
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">{program.duration}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600">{program.outcome}</span>
                </div>

                {/* Features */}
                <ul className="mt-5 space-y-2.5">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className={`mt-6 w-full inline-flex items-center justify-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    program.popular
                      ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                      : "bg-gray-100 text-gray-900 hover:bg-primary hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
