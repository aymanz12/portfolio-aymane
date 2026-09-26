"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Stagiaire en Intelligence Artificielle — PFA",
    company: "Bank Al-Maghrib",
    period: "Juin 2026 – Août 2026",
    duration: "3 mois",
    location: "Rabat, Maroc · Sur site",
    type: "Stage",
    color: "#7c3aed",
    description:
      "Développement d'une solution d'IA générative d'entreprise privée pour Bank Al-Maghrib. Système multi-agents orchestré par LangGraph permettant d'interroger, résumer et traduire des rapports bancaires confidentiels en mode 100% hors-ligne, tout en conservant le style rédactionnel institutionnel.",
    highlights: [
      "Architecture multi-agents avec LangGraph",
      "Moteur d'inférence local via Ollama (100% offline)",
      "Base vectorielle Qdrant pour RAG avancé",
      "Suite LLMOps : MLflow, Arize Phoenix, RAGAS",
    ],
    tags: ["LangGraph", "RAG", "Qdrant", "Ollama", "MLflow", "RAGAS", "GenAI"],
  },
  {
    id: 2,
    role: "Data Science Intern",
    company: "INTELLCAP SARL — Africa/Morocco",
    period: "Juil. 2025 – Août 2025",
    duration: "2 mois",
    location: "Rabat, Maroc",
    type: "Stage",
    color: "#06b6d4",
    description:
      "Conception d'une plateforme intelligente de détection automatique des mauvaises herbes fondée sur YOLOv11 et Flask. Pipeline complet de prétraitement et d'augmentation de données agricoles, traitement temps réel de flux vidéo.",
    highlights: [
      "Modèle Computer Vision YOLOv11",
      "Pipeline de prétraitement et d'augmentation de données",
      "Traitement temps réel de flux d'images/vidéos",
      "Visualisations interactives pour agriculteurs",
    ],
    tags: ["YOLOv11", "Computer Vision", "Flask", "Python", "Data Augmentation"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            02. Expériences
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Parcours professionnel
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="md:pl-20 relative"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-current hidden md:block neon-glow"
                  style={{ color: exp.color, background: exp.color, borderColor: exp.color }}
                />

                <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 group">
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
                          style={{ background: exp.color + "22", color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-500 font-mono">{exp.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={13} className="text-slate-500" />
                        <span className="text-slate-300 font-medium text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar size={13} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-badge"
                        style={{ color: exp.color, borderColor: exp.color + "40" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
