"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "#about", label: t("nav.about") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#education", label: t("nav.education") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["about", "experience", "skills", "projects", "education", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="text-xl font-bold font-['Space_Grotesk']"
          whileHover={{ scale: 1.05 }}
        >
          <span className="neon-text">AA</span>
          <span className="text-slate-400 text-sm font-normal ml-2">/ portfolio</span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === link.href.replace("#", "")
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {active === link.href.replace("#", "") && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-lg bg-white/8 border border-white/10"
                  style={{ borderRadius: 8 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Right side: Language Switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setLang("fr")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "fr"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "en"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <motion.a
            href="#contact"
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("nav.cta")}</span>
          </motion.a>
        </div>

        {/* Mobile: Lang toggle + Burger */}
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-white/[0.04] border border-white/10 rounded-full p-0.5 text-xs font-semibold">
            <button
              onClick={() => setLang("fr")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === "fr"
                  ? "bg-violet-600 text-white"
                  : "text-slate-400"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                lang === "en"
                  ? "bg-violet-600 text-white"
                  : "text-slate-400"
              }`}
            >
              EN
            </button>
          </div>

          <button
            className="p-2 rounded-lg border border-white/10 text-slate-400"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/06 nav-blur"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary text-center text-sm mt-2"
              >
                <span>{t("nav.cta")}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
