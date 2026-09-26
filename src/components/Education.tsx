"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Diplôme d'Ingénieur",
    field: "Data Science, Big Data & Intelligence Artificielle",
    school: "École Nationale des Sciences Appliquées (ENSA)",
    location: "Tétouan, Maroc",
    period: "2022 – Présent",
    year: "5e année (Bac+5)",
    color: "#7c3aed",
    icon: "🎓",
    highlights: [
      "Spécialisation Data Engineering & AI Engineering",
      "Projets de fin d'année en environnement réel",
      "Cours avancés : Machine Learning, Big Data, Cloud Computing",
      "Architecture des Systèmes d'Information",
    ],
    badge: "En cours",
  },
  {
    degree: "Classes Préparatoires Intégrées (2AP)",
    field: "Sciences & Technologies",
    school: "École Nationale des Sciences Appliquées (ENSA)",
    location: "Tétouan, Maroc",
    period: "2022 – 2024",
    year: "2 ans",
    color: "#3b82f6",
    icon: "📚",
    highlights: [
      "Mathématiques avancées & algorithmique",
      "Physique, Informatique & Sciences de l'ingénieur",
      "Fondements solides en analyse et algèbre",
    ],
    badge: "Terminé",
  },
];

const certs = [
  { name: "Azure Data Engineering", org: "Microsoft Azure", color: "#0ea5e9", icon: "☁️" },
  { name: "LangChain / LangGraph", org: "Self-taught + Projects", color: "#7c3aed", icon: "🔗" },
  { name: "MLOps Fundamentals", org: "Self-taught", color: "#10b981", icon: "⚙️" },
  { name: "Computer Vision", org: "INTELLCAP Project", color: "#ec4899", icon: "👁️" },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-pink-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            05. Formation
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Parcours académique
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </motion.div>

        {/* Education cards */}
        <div className="space-y-6 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 relative overflow-hidden"
              style={{ borderColor: edu.color + "22" }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5"
                style={{ background: edu.color }}
              />

              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                    style={{ background: edu.color + "22" }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                        style={{ background: edu.color + "30", color: edu.color }}
                      >
                        {edu.badge}
                      </span>
                      <span className="text-xs text-slate-500">{edu.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: edu.color }}>
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="text-sm text-slate-500 space-y-1 text-right">
                  <div className="flex items-center gap-1.5 justify-end">
                    <GraduationCap size={13} />
                    <span>{edu.school}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <MapPin size={13} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 justify-end">
                    <Calendar size={13} />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: edu.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications / Skills acquired */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-slate-500 text-sm font-mono uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <Award size={14} /> Compétences acquises en pratique
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="glass-card glass-card-hover rounded-xl p-4 text-center"
                style={{ borderColor: cert.color + "30" }}
              >
                <div className="text-2xl mb-2">{cert.icon}</div>
                <div className="text-sm font-semibold text-white mb-0.5">{cert.name}</div>
                <div className="text-xs text-slate-500">{cert.org}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
