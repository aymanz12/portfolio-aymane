"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  const socials = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      handle: "Aymane Azaagag",
      href: "https://www.linkedin.com/in/aymane-azaagag-912816330/",
      color: "#0ea5e9",
      bg: "rgba(14,165,233,0.1)",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      handle: "@aymanz12",
      href: "https://github.com/aymanz12",
      color: "#fff",
      bg: "rgba(255,255,255,0.06)",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      handle: "aymane.azaagag@email.com",
      href: "mailto:aymane.azaagag@email.com",
      color: "#7c3aed",
      bg: "rgba(124,58,237,0.1)",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aymane.azaagag@email.com?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(`De: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputClass =
    "w-full glass-card rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-violet-500/60 transition-all duration-200 bg-transparent border border-white/08";

  return (
    <section id="contact" className="relative py-28 px-6" ref={ref}>
      {/* Bg blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="blob absolute w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle,#7c3aed,transparent)", left: "30%", top: "0" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            06. {t("contact.badge")}
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            {t("contact.subtitle")}
          </p>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Availability card */}
            <div className="gradient-border glass-card rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">
                  {t("contact.available_title")}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t("contact.available_desc")}
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-xs text-slate-500">
                <MapPin size={13} className="text-violet-400" />
                <span>Tétouan, Maroc · On-site / Hybrid / Remote</span>
              </div>
            </div>

            {/* Social cards */}
            <div className="space-y-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4 group transition-all duration-200 border border-white/06"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: s.bg, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">{s.label}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                      {s.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 md:p-8 space-y-4 border border-white/08 relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t("contact.form.name_placeholder")}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t("contact.form.email_placeholder")}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t("contact.form.subject_placeholder")}
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder={t("contact.form.message_placeholder")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} className="text-green-300" />
                    <span>{t("contact.form.sent")}</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>{t("contact.form.send")}</span>
                  </>
                )}
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-green-400 text-center font-medium mt-2"
                >
                  {t("contact.form.success_msg")}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
