"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { name: "English", code: "en", flag: "🇬🇧" },
  { name: "Bangla", code: "bn", flag: "🇧🇩" },
  { name: "Japan", code: "jp", flag: "🇯🇵" },
] as const;

type Locale = typeof languages[number]["code"];

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find(l => l.code === locale) || languages[0];

  const navLinks = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.programs"), href: "#programs" },
    { name: t("navbar.ssw"), href: "#how-it-works" },
    { name: t("navbar.stories"), href: "#testimonials" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/Vertical_Logo-1.png"
                alt="Achieve Japan Logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
                priority
              />
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary ${
                    scrolled ? "text-gray-700" : "text-white/90 hover:text-white"
                  }`}
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Switcher */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all duration-300 ${
                    scrolled 
                      ? "border-gray-200 text-gray-700 hover:bg-gray-50" 
                      : "border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  <span className="text-lg">{activeLang.flag}</span>
                  <span className="text-sm font-semibold">{activeLang.name}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-1 z-[60]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLocale(lang.code as any);
                            setLangOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                            locale === lang.code ? "text-primary font-bold bg-primary/5" : "text-gray-700"
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span>{lang.name}</span>
                          {locale === lang.code && (
                            <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("navbar.cta")}
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center p-2 rounded-xl"
                id="mobile-menu-button"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className={`w-6 h-0.5 rounded-full transition-colors ${
                      scrolled || mobileOpen ? "bg-gray-900" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className={`w-6 h-0.5 rounded-full transition-colors ${
                      scrolled || mobileOpen ? "bg-gray-900" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className={`w-6 h-0.5 rounded-full transition-colors ${
                      scrolled || mobileOpen ? "bg-gray-900" : "bg-white"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2 pb-10">
              <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">{t("navbar.nav_title")}</h3>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-lg font-bold text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-50 hover:text-primary transition-all flex items-center justify-between"
                >
                  {link.name}
                  <svg className="w-5 h-5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              ))}
              
              <div className="my-4 h-px bg-gray-100" />
              
              <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">{t("navbar.lang_title")}</h3>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {languages.map((lang, i) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code as any);
                      setMobileOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                      locale === lang.code 
                        ? "bg-primary text-white shadow-lg shadow-primary/20" 
                        : "bg-gray-50 text-gray-700 active:scale-95"
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-bold">{lang.name}</span>
                    {locale === lang.code && (
                      <svg className="w-5 h-5 ml-auto text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 w-full py-5 bg-gradient-to-r from-primary to-primary-dark text-white text-center font-bold text-lg rounded-2xl shadow-xl shadow-primary/30"
              >
                {t("navbar.cta")}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
