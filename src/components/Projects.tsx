"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Github } from "./Icons";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
}

const projectMeta: Record<number, { tags: string[]; color: string; emoji: string; github: string }> = {
  1: {
    tags: ["LangGraph", "Ollama", "Multi-Agent", "Python", "GenAI"],
    color: "#7c3aed",
    emoji: "🤖",
    github: "https://github.com/aymanz12/AI-data-Agent-",
  },
  2: {
    tags: ["Qdrant", "RAG", "MLflow", "RAGAS", "Vector DB"],
    color: "#8b5cf6",
    emoji: "🔍",
    github: "https://github.com/aymanz12/veritas-agentic-rag",
  },
  3: {
    tags: ["Streaming", "Python", "Real-Time", "Data Pipelines", "API"],
    color: "#f59e0b",
    emoji: "₿",
    github: "https://github.com/aymanz12/Real-Time-Crypto-Tracker",
  },
  4: {
    tags: ["AWS / Azure", "Snowflake", "dbt", "Delta Lake", "Medallion"],
    color: "#3b82f6",
    emoji: "🏭",
    github: "https://github.com/aymanz12/manufacturing-quality-lakehouse",
  },
  5: {
    tags: ["Power BI", "SQL", "ETL", "Data Modeling", "Analytics"],
    color: "#10b981",
    emoji: "📊",
    github: "https://github.com/aymanz12/Project_BI",
  },
  6: {
    tags: ["Python", "Scikit-Learn", "MLOps", "IoT", "Time Series"],
    color: "#ec4899",
    emoji: "⚙️",
    github: "https://github.com/aymanz12/predictive-maintenance",
  },
};

export default function Projects() {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories: string[] = t("projects.categories") || ["Tous", "AI Engineering", "Data Engineering", "Data Analytics"];
  const allCategoryLabel = categories[0] || "Tous";

  useEffect(() => {
    setActiveFilter(allCategoryLabel);
  }, [lang, allCategoryLabel]);

  const items: ProjectItem[] = t("projects.items") || [];

  const filtered = activeFilter === allCategoryLabel
    ? items
    : items.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            04. {t("projects.badge")}
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-4">
            {t("projects.subtitle")}
          </p>
          <div
            className="w-16 h-1 rounded-full mx-auto mb-10"
            style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }}
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-violet-500/50 shadow-lg shadow-violet-500/20"
                    : "glass-card text-slate-400 border-white/06 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project) => {
              const meta = projectMeta[project.id] || {
                tags: [],
                color: "#7c3aed",
                emoji: "🚀",
                github: "https://github.com/aymanz12",
              };
              const isHovered = hoveredId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between group border border-white/08 relative overflow-hidden"
                >
                  {/* Subtle top glow */}
                  <div
                    className="absolute -top-12 -right-12 w-28 h-28 rounded-full opacity-15 blur-xl transition-all duration-500 group-hover:opacity-35"
                    style={{ background: meta.color }}
                  />

                  <div>
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-inner border border-white/10"
                        style={{ background: meta.color + "18" }}
                      >
                        {meta.emoji}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={meta.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="glass-card p-2 rounded-lg text-slate-400 hover:text-white transition-all hover:scale-110"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Category pill */}
                    <span
                      className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full inline-block mb-2"
                      style={{ background: meta.color + "15", color: meta.color }}
                    >
                      {project.category}
                    </span>

                    {/* Title & subtitle */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-violet-400/90 font-medium mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-4 mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/04 border border-white/06 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={meta.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold glass-card border border-white/08 hover:border-violet-500/40 text-slate-300 hover:text-white transition-all group-hover:bg-white/06"
                    >
                      <Github size={14} />
                      <span>{t("projects.github_btn")}</span>
                      <ExternalLink size={12} className="opacity-60" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
