"use client";
import { useEffect, useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang, t } = useLanguage();
  const roles: string[] = t("hero.roles") || [
    "Data Engineer (Multi-Cloud)",
    "AI Engineer",
    "LangGraph & RAG Expert",
    "Cloud Data Architect (AWS / Azure / Snowflake)",
    "Multi-Agent Systems",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    setDisplayed("");
    setRoleIndex(0);
    setIsDeleting(false);
  }, [lang]);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 80;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayed, isDeleting, roleIndex, roles]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            top: "-100px",
            left: "-100px",
          }}
        />
        <div
          className="blob blob-delay-1 absolute w-[500px] h-[500px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent 70%)",
            bottom: "-80px",
            right: "-80px",
          }}
        />
        <div
          className="blob blob-delay-2 absolute w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="gradient-border inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-medium text-slate-300">
            <Sparkles size={14} className="text-violet-400" />
            {t("hero.badge")}
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="section-title text-5xl md:text-7xl lg:text-8xl mb-4"
        >
          <span className="text-white">Aymane </span>
          <span className="neon-text">Azaagag</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={itemVariants}
          className="text-xl md:text-3xl text-slate-300 font-medium mb-6 h-10"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="text-violet-400">&gt;</span>{" "}
          <span>{displayed}</span>
          <span className="cursor" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.description_prefix")}
          <span className="text-white font-medium">{t("hero.school")}</span>
          {t("hero.description_mid")}
          <span className="text-violet-400">{t("hero.skills_data")}</span>
          {t("hero.description_and")}
          <span className="text-cyan-400">{t("hero.skills_ai")}</span>
          {t("hero.description_end")}
          <span className="text-white font-medium">{t("hero.company")}</span>
          {t("hero.description_final")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <motion.a
            href="#projects"
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("hero.cta_projects")}</span>
            <ArrowDown size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-secondary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={16} />
            <span>{t("hero.cta_contact")}</span>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: <Github size={20} />,
              href: "https://github.com/aymanz12",
              label: "GitHub",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://www.linkedin.com/in/aymane-azaagag-912816330/",
              label: "LinkedIn",
            },
            {
              icon: <Mail size={20} />,
              href: "mailto:aymane.azaagag@example.com",
              label: "Email",
            },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass-card p-3 rounded-xl text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 hover:border-violet-500/40"
              whileHover={{ y: -2 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
