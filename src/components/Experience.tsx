"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const experiencesData: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    bullets: string[];
    tags: string[];
  }> = t("experience.experiences") || [];

  const colors = ["#7c3aed", "#06b6d4"];

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
            02. {t("experience.badge")}
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            {t("experience.title")}
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-4">
            {t("experience.subtitle")}
          </p>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

          <div className="space-y-8">
            {experiencesData.map((exp, i) => {
              const color = colors[i % colors.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="md:pl-20 relative"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-current hidden md:block neon-glow"
                    style={{ color, background: color, borderColor: color }}
                  />

                  <div className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 group border border-white/08">
                    {/* Top row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-violet-400 font-semibold text-base mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-lg">
                          <Calendar size={13} className="text-violet-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-lg">
                          <MapPin size={13} className="text-cyan-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-6">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                          <CheckCircle size={14} className="text-violet-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/06">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-white/04 border border-white/08 text-slate-300 hover:border-violet-500/40 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
