"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      id: "programs",
      title: t("footer.categories.programs"),
      links: [
        { id: "jlpt_n5_n4", label: t("footer.links.programs.jlpt_n5_n4"), href: "#programs" },
        { id: "jlpt_n3_n2", label: t("footer.links.programs.jlpt_n3_n2"), href: "#programs" },
        { id: "ssw_training", label: t("footer.links.programs.ssw_training"), href: "#programs" },
        { id: "ielts_prep", label: t("footer.links.programs.ielts_prep"), href: "#programs" },
        { id: "jft_basic", label: t("footer.links.programs.jft_basic"), href: "#programs" },
      ],
    },
    {
      id: "services",
      title: t("footer.categories.services"),
      links: [
        { id: "ssw_visa_support", label: t("footer.links.services.ssw_visa_support"), href: "#how-it-works" },
        { id: "student_visa", label: t("footer.links.services.student_visa"), href: "#how-it-works" },
        { id: "job_placement", label: t("footer.links.services.job_placement"), href: "#how-it-works" },
        { id: "business_visa", label: t("footer.links.services.business_visa"), href: "#how-it-works" },
        { id: "travel_visa", label: t("footer.links.services.travel_visa"), href: "#how-it-works" },
      ],
    },
    {
      id: "company",
      title: t("footer.categories.company"),
      links: [
        { id: "about_us", label: t("footer.links.company.about_us"), href: "#about" },
        { id: "success_stories", label: t("footer.links.company.success_stories"), href: "#testimonials" },
        { id: "contact", label: t("footer.links.company.contact"), href: "#contact" },
        { id: "faq", label: t("footer.links.company.faq"), href: "#" },
        { id: "blog", label: t("footer.links.company.blog"), href: "/blog" },
      ],
    },
  ];

  return (
    <footer className="relative bg-secondary text-white pt-20 pb-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Image
                src="/Vertical_Logo-1.png"
                alt="Achieve Japan Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <div>
                <span className="font-bold text-xl text-white">Achieve</span>
                <span className="font-bold text-xl text-primary ml-1">
                  Japan
                </span>
              </div>
            </motion.div>
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                  href: "https://www.facebook.com/Achieve-Japan-104489312167770/",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.id}>
              <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.id}-${link.id}`}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {t("footer.bottom.copyright_prefix")} {new Date().getFullYear()} Achieve Japan.{" "}
            {t("footer.bottom.rights_full")}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
