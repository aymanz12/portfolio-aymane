"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "AI Engineering",
    color: "#7c3aed",
    icon: "🤖",
    skills: [
      { name: "LangGraph / LangChain", level: 90 },
      { name: "RAG & Vector DBs (Qdrant)", level: 88 },
      { name: "Ollama / LLM local", level: 85 },
      { name: "LLMOps (MLflow, RAGAS)", level: 80 },
      { name: "Multi-Agent Systems", level: 85 },
    ],
  },
  {
    title: "Data Engineering",
    color: "#3b82f6",
    icon: "🏗️",
    skills: [
      { name: "Multi-Cloud (AWS & Azure)", level: 86 },
      { name: "Snowflake & dbt", level: 84 },
      { name: "Architecture Medallion", level: 88 },
      { name: "Pipelines ELT/ETL", level: 90 },
      { name: "Apache Spark / PySpark & Delta Lake", level: 82 },
    ],
  },
  {
    title: "Data Science & ML",
    color: "#06b6d4",
    icon: "📊",
    skills: [
      { name: "Python (Pandas, NumPy, Sklearn)", level: 92 },
      { name: "Computer Vision (YOLO)", level: 80 },
      { name: "Deep Learning (PyTorch)", level: 72 },
      { name: "MLflow / Experiment Tracking", level: 78 },
      { name: "Data Visualization", level: 85 },
    ],
  },
  {
    title: "Infra & Outils",
    color: "#ec4899",
    icon: "⚙️",
    skills: [
      { name: "Docker / Containerisation", level: 78 },
      { name: "Git / GitHub", level: 90 },
      { name: "Azure Cloud Services", level: 80 },
      { name: "Power BI / BI Dashboards", level: 82 },
      { name: "SQL / NoSQL", level: 88 },
    ],
  },
];

const allTags = [
  { name: "Python", color: "#3b82f6" },
  { name: "AWS", color: "#f97316" },
  { name: "Snowflake", color: "#06b6d4" },
  { name: "dbt", color: "#ff694b" },
  { name: "Azure", color: "#0ea5e9" },
  { name: "LangGraph", color: "#7c3aed" },
  { name: "RAG", color: "#7c3aed" },
  { name: "Qdrant", color: "#06b6d4" },
  { name: "Ollama", color: "#8b5cf6" },
  { name: "MLflow", color: "#f59e0b" },
  { name: "PySpark", color: "#f97316" },
  { name: "YOLOv11", color: "#ec4899" },
  { name: "Delta Lake", color: "#3b82f6" },
  { name: "RAGAS", color: "#10b981" },
  { name: "Flask", color: "#64748b" },
  { name: "TypeScript", color: "#3b82f6" },
  { name: "Docker", color: "#06b6d4" },
  { name: "Power BI", color: "#f59e0b" },
  { name: "SQL", color: "#10b981" },
  { name: "Medallion Arch.", color: "#7c3aed" },
  { name: "GenAI", color: "#ec4899" },
  { name: "Arize Phoenix", color: "#8b5cf6" },
  { name: "Next.js", color: "#fff" },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-28 px-6" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle,#7c3aed,transparent)", right: "10%", top: "20%" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            03. Compétences
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Stack technique
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6"
              style={{ borderColor: cat.color + "22" }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                  {cat.title}
                </h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    delay={i * 0.1 + j * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-center text-slate-500 text-sm font-mono uppercase tracking-widest mb-6">
            Technologies & outils
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {allTags.map((tag, i) => (
              <motion.span
                key={tag.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.04 }}
                className="skill-badge"
                style={{ color: tag.color, borderColor: tag.color + "40" }}
              >
                {tag.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
