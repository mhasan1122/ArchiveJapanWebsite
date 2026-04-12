"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { name: "English", code: "en", flag: "🇬🇧" },
  { name: "Bangla", code: "bn", flag: "🇧🇩" },
  { name: "Japan", code: "jp", flag: "🇯🇵" },
] as const;

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const isBlogIndex = pathname === "/blog";
  const [scrolled, setScrolled] = useState(false);
  const navSolid = scrolled || isBlogIndex;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const activeLang = languages.find((l) => l.code === locale) || languages[0];

  const navLinks = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.programs"), href: "#programs" },
    { name: t("navbar.ssw"), href: "#how-it-works" },
    { name: t("navbar.stories"), href: "#testimonials" },
    { name: t("navbar.about"), href: "/about" },
  ];

  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(typeof window !== "undefined" ? window.location.hash : "");
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  const isNavLinkActive = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") return false;
      if (href === "#home") return hash === "" || hash === "#home";
      return hash === href;
    }
    if (href === "/about") return pathname === "/about";
    return false;
  };

  const navLinkClass = (active: boolean) =>
    "whitespace-nowrap px-3 py-2 rounded-lg text-base font-medium uppercase tracking-wide transition-all duration-300 sm:px-4 " +
    (active
      ? navSolid
        ? "bg-primary/10 text-primary font-semibold"
        : "bg-white/15 text-white font-semibold"
      : "hover:bg-primary/10 hover:text-primary " +
        (navSolid ? "text-gray-700" : "text-white/90 hover:text-white"));

  const blogLinkClass =
    "whitespace-nowrap px-3 py-2 rounded-lg text-base font-medium uppercase tracking-wide transition-all duration-300 sm:px-4 " +
    (pathname.startsWith("/blog")
      ? navSolid
        ? "bg-primary/10 text-primary font-semibold"
        : "bg-white/15 text-white font-semibold"
      : "hover:bg-primary/10 hover:text-primary " +
        (navSolid ? "text-gray-700" : "text-white/90 hover:text-white"));

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
        className={`fixed top-0 left-0 right-0 z-50 font-['Oswald',sans-serif] transition-all duration-500 ${
          navSolid
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex min-h-[4.25rem] items-center justify-between gap-3 py-2 sm:min-h-[4.75rem] lg:min-h-[5.25rem] lg:py-2.5">
            <motion.a
              href={sectionHref("#home")}
              className="group flex min-w-0 shrink-0 items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src="/logo.png"
                alt="Achieve Japan — Study, Work, Smile"
                width={640}
                height={200}
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 420px"
                className="h-11 w-auto max-w-[11rem] object-contain object-left min-[400px]:h-12 min-[400px]:max-w-[13rem] sm:h-[3.25rem] sm:max-w-[15rem] md:max-w-[17rem] lg:h-14 lg:max-w-[18rem] xl:h-16 xl:max-w-[20rem] 2xl:max-w-[24rem]"
                priority
              />
            </motion.a>

            {/* Desktop: Home → Blog, language, CTA — one group, flush right */}
            <div className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex xl:gap-1.5 2xl:gap-2">
              {navLinks.map((link) => {
                const active = isNavLinkActive(link.href);
                return (
                  <motion.a
                    key={link.name}
                    href={sectionHref(link.href)}
                    className={navLinkClass(active)}
                    aria-current={active ? "page" : undefined}
                    whileHover={{ y: -1 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <Link
                href="/blog"
                className={blogLinkClass}
                aria-current={pathname.startsWith("/blog") ? "page" : undefined}
              >
                {t("navbar.blog")}
              </Link>

              <div className="relative ml-1 shrink-0 xl:ml-2" ref={langRef}>
                <button
                  type="button"
                  onClick={() => setLangOpen(!langOpen)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-base uppercase tracking-wide transition-all duration-300 ${
                    navSolid
                      ? "bg-gray-100/80 text-gray-700 hover:bg-gray-100"
                      : "bg-white/15 text-white hover:bg-white/20"
                  }`}
                >
                  <span className="text-xl leading-none">{activeLang.flag}</span>
                  <span className="font-semibold leading-tight">{activeLang.name}</span>
                  <svg
                    className={`h-4 w-4 shrink-0 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 z-[60] mt-2 w-52 overflow-hidden rounded-2xl bg-white py-1 shadow-2xl"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          type="button"
                          onClick={() => {
                            setLocale(lang.code as "en" | "bn" | "jp");
                            setLangOpen(false);
                          }}
                          className={`flex w-full items-center gap-3 px-4 py-3 text-base uppercase tracking-wide transition-colors hover:bg-gray-50 ${
                            locale === lang.code
                              ? "text-primary font-bold bg-primary/5"
                              : "text-gray-700"
                          }`}
                        >
                          <span className="text-xl">{lang.flag}</span>
                          <span>{lang.name}</span>
                          {locale === lang.code && (
                            <svg
                              className="ml-auto h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.a
                href={sectionHref("#contact")}
                className="ml-1 shrink-0 rounded-full bg-gradient-to-r from-primary to-primary-dark px-4 py-2.5 text-base font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 xl:ml-2 xl:px-5 2xl:px-6"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("navbar.cta")}
              </motion.a>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative flex h-11 w-11 items-center justify-center rounded-xl p-2 sm:h-12 sm:w-12"
                id="mobile-menu-button"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className={`w-6 h-0.5 rounded-full transition-colors ${
                      navSolid || mobileOpen ? "bg-gray-900" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className={`w-6 h-0.5 rounded-full transition-colors ${
                      navSolid || mobileOpen ? "bg-gray-900" : "bg-white"
                    }`}
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className={`w-6 h-0.5 rounded-full transition-colors ${
                      navSolid || mobileOpen ? "bg-gray-900" : "bg-white"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-40 overflow-y-auto bg-white px-6 pt-24 font-['Oswald',sans-serif] uppercase tracking-wide sm:pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-2 pb-10">
              <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                {t("navbar.nav_title")}
              </h3>
              {navLinks.map((link, i) => {
                const active = isNavLinkActive(link.href);
                return (
                  <motion.a
                    key={link.name}
                    href={sectionHref(link.href)}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-all ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-gray-800 hover:bg-gray-50 hover:text-primary"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.name}
                    {active ? (
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 opacity-30"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </motion.a>
                );
              })}
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-all hover:bg-gray-50 ${
                  pathname.startsWith("/blog")
                    ? "text-primary bg-primary/10"
                    : "text-gray-800 hover:text-primary"
                }`}
                aria-current={pathname.startsWith("/blog") ? "page" : undefined}
              >
                {t("navbar.blog")}
                {pathname.startsWith("/blog") ? (
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </Link>

              <div className="my-4 h-px bg-gray-100" />

              <h3 className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                {t("navbar.lang_title")}
              </h3>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {languages.map((lang, i) => (
                  <motion.button
                    key={lang.code}
                    type="button"
                    onClick={() => {
                      setLocale(lang.code as "en" | "bn" | "jp");
                      setMobileOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className={`flex items-center gap-4 rounded-2xl px-4 py-4 text-base transition-all ${
                      locale === lang.code
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "bg-gray-50 text-gray-700 active:scale-95"
                    }`}
                  >
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-bold leading-tight">{lang.name}</span>
                    {locale === lang.code && (
                      <svg
                        className="w-5 h-5 ml-auto text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.a
                href={sectionHref("#contact")}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 w-full rounded-2xl bg-gradient-to-r from-primary to-primary-dark py-5 text-center text-base font-bold text-white shadow-xl shadow-primary/30"
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
