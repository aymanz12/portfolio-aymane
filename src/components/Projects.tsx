"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { Github } from "./Icons";

const projects = [
  {
    id: 1,
    title: "AI Data Agent",
    subtitle: "Système d'agents IA autonomes",
    description:
      "Agent IA autonome capable d'interroger, analyser et synthétiser des données structurées et non structurées via une architecture multi-agents. Intègre des outils de RAG et de reasoning avancé.",
    tags: ["LangGraph", "RAG", "Python", "Multi-Agent", "GenAI"],
    color: "#7c3aed",
    emoji: "🤖",
    github: "https://github.com/aymanz12/AI-data-Agent-",
    category: "AI Engineering",
  },
  {
    id: 2,
    title: "Veritas Agentic RAG",
    subtitle: "RAG agentique haute fidélité",
    description:
      "Système RAG agentique avancé conçu pour fournir des réponses précises et vérifiables. Pipeline complet d'ingestion, indexation vectorielle, et génération augmentée avec vérification de la factualité.",
    tags: ["RAG", "Qdrant", "LangChain", "Python", "Vector DB"],
    color: "#8b5cf6",
    emoji: "🔍",
    github: "https://github.com/aymanz12/veritas-agentic-rag",
    category: "AI Engineering",
  },
  {
    id: 3,
    title: "Real-Time Crypto Tracker",
    subtitle: "Tracking crypto temps réel",
    description:
      "Pipeline de données temps réel pour le tracking des cryptomonnaies. Ingestion de flux de données en streaming, agrégation, stockage et visualisation en temps réel des cours et métriques.",
    tags: ["Streaming", "Python", "Real-Time", "Dashboard", "API"],
    color: "#f59e0b",
    emoji: "₿",
    github: "https://github.com/aymanz12/Real-Time-Crypto-Tracker",
    category: "Data Engineering",
  },
  {
    id: 4,
    title: "Manufacturing Quality Lakehouse",
    subtitle: "Architecture Medallion & Multi-Cloud Data Engineering",
    description:
      "Architecture Lakehouse complète (Bronze/Silver/Gold) pour la gestion de la qualité industrielle. Pipelines ELT/ETL multi-cloud, transformations dbt, modélisation dimensionnelle et dashboards analytiques en temps réel.",
    tags: ["AWS / Azure", "Snowflake", "dbt", "Delta Lake", "Medallion"],
    color: "#3b82f6",
    emoji: "🏭",
    github: "https://github.com/aymanz12/manufacturing-quality-lakehouse",
    category: "Data Engineering",
  },
  {
    id: 5,
    title: "Project BI",
    subtitle: "Business Intelligence avancée",
    description:
      "Solution BI complète avec modélisation des données, création de pipelines d'ingestion et dashboards analytiques interactifs. Reporting automatisé et KPIs métier.",
    tags: ["Power BI", "SQL", "ETL", "Data Modeling", "Analytics"],
    color: "#10b981",
    emoji: "📊",
    github: "https://github.com/aymanz12/Project_BI",
    category: "Data Analytics",
  },
  {
    id: 6,
    title: "Predictive Maintenance",
    subtitle: "ML pour la maintenance prédictive",
    description:
      "Système de maintenance prédictive basé sur le Machine Learning pour anticiper les pannes industrielles. Feature engineering sur données IoT, modèles de classification et pipeline MLOps.",
    tags: ["Python", "Scikit-learn", "MLOps", "IoT", "Predictive ML"],
    color: "#ec4899",
    emoji: "⚙️",
    github: "https://github.com/aymanz12/predictive-maintenance",
    category: "ML Engineering",
  },
];

const FILTERS = ["Tous", "AI Engineering", "Data Engineering", "Data Analytics", "ML Engineering"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-6" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle,#3b82f6,transparent)", left: "5%", bottom: "10%" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            04. Projets
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Ce que j&apos;ai construit
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === f
                  ? "text-white neon-glow"
                  : "glass-card text-slate-400 hover:text-white"
              }`}
              style={
                activeFilter === f
                  ? { background: "linear-gradient(135deg,#7c3aed,#3b82f6)", border: "none" }
                  : {}
              }
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-default relative"
                style={{ borderColor: hoveredId === project.id ? project.color + "40" : undefined }}
              >
                {/* Top colored bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: project.color + "22" }}
                    >
                      {project.emoji}
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="project-tag"
                        style={{ background: project.color + "22", color: project.color }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-white/90 transition-colors" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-md"
                        style={{ background: project.color + "15", color: project.color }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/05">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors ml-auto"
                    >
                      <ExternalLink size={14} />
                      <span>Voir</span>
                    </a>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)` }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aymanz12"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={18} />
            <span>Voir tous les projets sur GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
