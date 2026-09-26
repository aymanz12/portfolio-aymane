"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const categoryMeta = [
  { color: "#7c3aed", icon: "🤖" },
  { color: "#3b82f6", icon: "🏗️" },
  { color: "#06b6d4", icon: "📊" },
  { color: "#ec4899", icon: "⚙️" },
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
  const { t } = useLanguage();

  const categories: Array<{
    title: string;
    skills: Array<{ name: string; level: number }>;
  }> = t("skills.categories") || [];

  return (
    <section id="skills" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            03. {t("skills.badge")}
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            {t("skills.title")}
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-4">
            {t("skills.subtitle")}
          </p>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }}
          />
        </motion.div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {categories.map((cat, i) => {
            const meta = categoryMeta[i % categoryMeta.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 border border-white/08"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{meta.icon}</span>
                  <div>
                    <h3 className="font-bold text-white text-lg">{cat.title}</h3>
                    <div
                      className="h-0.5 w-10 rounded-full mt-1"
                      style={{ background: meta.color }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <SkillBar
                      key={j}
                      name={skill.name}
                      level={skill.level}
                      color={meta.color}
                      delay={j * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech tags cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-2xl p-8 text-center border border-white/08"
        >
          <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-6">
            {t("skills.tags_title")}
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {allTags.map((tag, i) => (
              <motion.span
                key={tag.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.02 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold glass-card border border-white/08 hover:border-white/20 transition-all cursor-default text-slate-300"
                style={{ borderColor: tag.color + "33" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full mr-2" style={{ background: tag.color }} />
                {tag.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
