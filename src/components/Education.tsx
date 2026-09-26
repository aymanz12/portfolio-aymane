"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const educationItems: Array<{
    school: string;
    degree: string;
    period: string;
    location: string;
    description: string;
    skills: string[];
  }> = t("education.items") || [];

  const colors = ["#7c3aed", "#3b82f6"];
  const icons = ["🎓", "📚"];

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
            05. {t("education.badge")}
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            {t("education.title")}
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto mb-4">
            {t("education.subtitle")}
          </p>
          <div
            className="w-16 h-1 rounded-full mx-auto"
            style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }}
          />
        </motion.div>

        {/* Education cards */}
        <div className="space-y-6">
          {educationItems.map((edu, i) => {
            const color = colors[i % colors.length];
            const icon = icons[i % icons.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="glass-card glass-card-hover rounded-2xl p-6 md:p-8 relative overflow-hidden border border-white/08"
              >
                {/* Background accent */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 pointer-events-none"
                  style={{ background: color }}
                />

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border border-white/10"
                      style={{ background: color + "22" }}
                    >
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-violet-400 font-semibold text-sm mt-0.5">
                        {edu.school}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
                    <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-lg">
                      <Calendar size={13} className="text-violet-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 glass-card px-3 py-1 rounded-lg">
                      <MapPin size={13} className="text-cyan-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-white/06">
                  {edu.skills.map((skill, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle size={13} className="text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
