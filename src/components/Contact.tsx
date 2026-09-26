"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, MessageSquare, Sparkles } from "lucide-react";
import { Github, Linkedin } from "./Icons";

const socials = [
  {
    icon: <Github size={20} />,
    label: "GitHub",
    handle: "@aymanz12",
    href: "https://github.com/aymanz12",
    color: "#fff",
    bg: "rgba(255,255,255,0.06)",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    handle: "Aymane Azaagag",
    href: "https://www.linkedin.com/in/aymane-azaagag-912816330/",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.1)",
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

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:aymane.azaagag@email.com?subject=${encodeURIComponent(form.subject || "Portfolio Contact")}&body=${encodeURIComponent(`De: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.open(mailto);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full glass-card rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-violet-500/60 transition-all duration-200 bg-transparent";

  return (
    <section id="contact" className="relative py-28 px-6" ref={ref}>
      {/* Bg blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-8" style={{ background: "radial-gradient(circle,#7c3aed,transparent)", left: "30%", top: "0" }} />
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
            06. Contact
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Je recherche activement un <span className="text-white font-medium">Stage PFE</span> en Data ou AI Engineering.
            N&apos;hésitez pas à me contacter !
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
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
                <span className="text-green-400 font-semibold text-sm">Disponible maintenant</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                À la recherche d&apos;un stage PFE (6 mois) à partir de <strong className="text-white">début 2027</strong> en Data Engineering ou AI Engineering.
              </p>
              <div className="flex items-center gap-1.5 mt-3 text-sm text-slate-500">
                <MapPin size={13} />
                <span>Tétouan, Maroc — Remote OK</span>
              </div>
            </div>

            {/* Social links */}
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card glass-card-hover rounded-xl p-4 flex items-center gap-4 group"
                style={{ borderColor: s.color + "20" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110" style={{ background: s.bg, color: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">{s.label}</div>
                  <div className="text-sm font-medium text-white">{s.handle}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={18} className="text-violet-400" />
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                  Envoyez-moi un message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 mb-1.5 block font-medium uppercase tracking-wide">Nom</label>
                    <input
                      type="text"
                      required
                      placeholder="Votre nom"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      id="contact-name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1.5 block font-medium uppercase tracking-wide">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="votre@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      id="contact-email"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-500 mb-1.5 block font-medium uppercase tracking-wide">Sujet</label>
                  <input
                    type="text"
                    placeholder="Proposition de stage PFE..."
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass}
                    id="contact-subject"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-500 mb-1.5 block font-medium uppercase tracking-wide">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Bonjour Aymane, je souhaite vous proposer..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-none"}
                    id="contact-message"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sent ? (
                    <>
                      <Sparkles size={16} />
                      <span>Message ouvert dans votre client mail !</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
