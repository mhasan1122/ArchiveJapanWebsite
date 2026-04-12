"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const locales = ["en", "bn", "jp"] as const;
type LocaleCode = (typeof locales)[number];

const languages: { code: LocaleCode; labelKey: "navbar.lang_en" | "navbar.lang_bn" | "navbar.lang_jp" }[] = [
  { code: "en", labelKey: "navbar.lang_en" },
  { code: "bn", labelKey: "navbar.lang_bn" },
  { code: "jp", labelKey: "navbar.lang_jp" },
];

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const sectionHref = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const [mobileOpen, setMobileOpen] = useState(false);

  const primaryLinks = [
    { name: t("navbar.home"), href: "#home", match: () => pathname === "/" },
    { name: t("navbar.about"), href: "#about", match: () => false },
    { name: t("navbar.contact"), href: "#contact", match: () => false },
    { name: t("navbar.company"), href: "#programs", match: () => false },
  ];

  const secondaryLinks = [
    {
      name: t("navbar.blog"),
      href: "/blog",
      match: () => pathname.startsWith("/blog"),
      external: true as const,
    },
    {
      name: t("navbar.career"),
      href: "#how-it-works",
      match: () => false,
      external: false as const,
    },
  ];

  const mobileExtraLinks = [
    { name: t("navbar.ssw"), href: "#how-it-works" },
    { name: t("navbar.stories"), href: "#testimonials" },
  ];

  const navLinkClass =
    "relative text-xs font-bold uppercase tracking-[0.12em] text-gray-900 py-2 px-1 transition-colors hover:text-primary";

  const activeBarClass =
    "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gray-900";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-gray-300/80 bg-[#e8e8e8] shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.25rem] gap-4">
            <Link href="/#home" className="flex items-center group shrink-0">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                <Image
                  src="/Vertical_Logo-1.png"
                  alt="Achieve Japan Logo"
                  width={48}
                  height={48}
                  className="w-11 h-11 lg:w-12 lg:h-12 object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop — reference: primary | divider | secondary */}
            <div className="hidden lg:flex flex-1 items-center justify-center min-w-0 gap-8 xl:gap-10">
              <div className="flex items-center gap-6 xl:gap-8">
                {primaryLinks.map((link) => (
                  <a
                    key={link.name}
                    href={sectionHref(link.href)}
                    className={`${navLinkClass} ${link.match() ? activeBarClass : ""}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <span
                className="h-5 w-px shrink-0 bg-gray-500/90"
                aria-hidden
              />
              <div className="flex items-center gap-6 xl:gap-8">
                {secondaryLinks.map((link) =>
                  link.external ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`${navLinkClass} ${link.match() ? activeBarClass : ""}`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      key={link.name}
                      href={sectionHref(link.href)}
                      className={`${navLinkClass} ${link.match() ? activeBarClass : ""}`}
                    >
                      {link.name}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div
                className="flex items-center rounded-full bg-gray-300/70 p-1 gap-0.5 border border-gray-400/40"
                role="group"
                aria-label={t("navbar.lang_title")}
              >
                {languages.map(({ code, labelKey }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-200 ${
                      locale === code
                        ? "bg-gray-900 text-white shadow-sm"
                        : "text-gray-900 hover:bg-gray-400/40"
                    }`}
                  >
                    {t(labelKey)}
                  </button>
                ))}
              </div>

              <motion.a
                href={sectionHref("#contact")}
                className="whitespace-nowrap rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md shadow-primary/25 transition hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {t("navbar.cta")}
              </motion.a>
            </div>

            <div className="flex lg:hidden items-center gap-2">
              <div className="flex rounded-full bg-gray-300/70 p-0.5 border border-gray-400/40 scale-90 origin-right">
                {languages.map(({ code, labelKey }) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLocale(code)}
                    className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                      locale === code ? "bg-gray-900 text-white" : "text-gray-900"
                    }`}
                  >
                    {t(labelKey)}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative w-10 h-10 flex items-center justify-center p-2 rounded-xl"
                id="mobile-menu-button"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 rounded-full bg-gray-900"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="w-6 h-0.5 rounded-full bg-gray-900"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    className="w-6 h-0.5 rounded-full bg-gray-900"
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
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#f0f0f0] pt-20 px-6 lg:hidden overflow-y-auto border-t border-gray-300"
          >
            <div className="flex flex-col gap-1 pb-10 max-w-lg mx-auto">
              <h3 className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {t("navbar.nav_title")}
              </h3>
              {primaryLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={sectionHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-bold uppercase tracking-wider text-gray-900 py-3 px-4 rounded-xl border border-transparent hover:border-gray-300 hover:bg-white/80"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="my-3 flex items-center gap-3 px-4">
                <span className="h-px flex-1 bg-gray-400/60" />
                <span className="text-[10px] font-bold text-gray-500 uppercase">
                  {t("navbar.blog")} / {t("navbar.career")}
                </span>
                <span className="h-px flex-1 bg-gray-400/60" />
              </div>

              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-gray-900 py-3 px-4 rounded-xl hover:bg-white/80"
              >
                {t("navbar.blog")}
              </Link>
              <motion.a
                href={sectionHref("#how-it-works")}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold uppercase tracking-wider text-gray-900 py-3 px-4 rounded-xl hover:bg-white/80"
              >
                {t("navbar.career")}
              </motion.a>

              {mobileExtraLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={sectionHref(link.href)}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  className="text-sm font-semibold text-gray-700 py-2.5 px-4 rounded-xl hover:bg-white/60"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href={sectionHref("#contact")}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 w-full py-4 bg-gradient-to-r from-primary to-primary-dark text-white text-center font-bold text-sm uppercase tracking-wide rounded-2xl shadow-lg shadow-primary/25"
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
