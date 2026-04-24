"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Programs() {
  const { t } = useLanguage();

  const programs = [
    {
      ...(t("programs.p1") as any),
      key: "p1",
      icon: "🗾",
      color: "from-rose-500 to-primary",
      popular: false,
    },
    {
      ...(t("programs.p2") as any),
      key: "p2",
      icon: "🎌",
      color: "from-primary to-primary-dark",
      popular: true,
    },
    {
      ...(t("programs.p3") as any),
      key: "p3",
      icon: "⛩️",
      color: "from-primary-dark to-red-900",
      popular: false,
    },
    {
      title: t("programs.p4.title"),
      subtitle: t("programs.p4.subtitle"),
      duration: t("programs.p4.duration"),
      outcome: t("programs.p4.outcome"),
      icon: "📚",
      features: (t("programs.p4.features") as any) || [],
      color: "from-gray-700 to-gray-900",
      key: "p4",
      popular: false,
    },
  ];

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
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
            {t("programs.badge")}
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            {t("programs.headline_1")}{" "}
            <span className="gradient-text">{t("programs.headline_highlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("programs.description")}
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.key ?? program.title ?? i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              {program.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="px-4 py-1 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold shadow-lg shadow-primary/30 uppercase tracking-wider">
                    {t("programs.popular")}
                  </span>
                </div>
              )}
              <div
                className={`relative h-full p-6 bg-white border ${
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
                  {Array.isArray(program.features) && program.features.map((feature: string, featureIdx: number) => (
                    <li
                      key={`${program.key ?? i}-feature-${featureIdx}`}
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
                  className={`mt-6 w-full inline-flex items-center justify-center py-3 font-semibold text-sm transition-all duration-300 ${
                    program.popular
                      ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                      : "bg-gray-100 text-gray-900 hover:bg-primary hover:text-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("programs.enroll")}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
