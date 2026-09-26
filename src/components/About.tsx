"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Target, Users } from "lucide-react";

const stats = [
  { value: "5", unit: "e année", label: "Bac+5 — Ingénieur" },
  { value: "2", unit: " stages", label: "Expériences concrètes" },
  { value: "6", unit: " projets", label: "GitHub publics" },
  { value: "∞", unit: "", label: "Envie d'apprendre" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-28 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-violet-400 text-sm font-mono font-medium tracking-widest uppercase mb-3 block">
            01. À Propos
          </span>
          <h2 className="section-title text-4xl md:text-5xl text-white mb-4">
            Qui suis-je ?
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto" style={{ background: "linear-gradient(90deg,#7c3aed,#06b6d4)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar card */}
            <div className="relative group">
              <div className="w-56 h-56 rounded-2xl gradient-border overflow-hidden glass-card flex items-center justify-center float shadow-2xl shadow-violet-500/10">
                <img
                  src="/profile.jpg"
                  alt="Aymane Azaagag"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback') as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div
                  className="avatar-fallback hidden w-full h-full items-center justify-center"
                  style={{ background: "linear-gradient(135deg,#7c3aed22,#3b82f622)" }}
                >
                  <span className="text-7xl font-black neon-text" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>AA</span>
                </div>
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-3 -right-3 glass-card px-3 py-1.5 rounded-full flex items-center gap-2 border-green-500/30 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400 font-medium">Disponible PFE</span>
              </div>
            </div>

            {/* Info pills */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {[
                { icon: <MapPin size={14} />, text: "Tétouan, Maroc" },
                { icon: <GraduationCap size={14} />, text: "ENSA Tétouan — Ingénieur DS, Big Data & IA" },
                { icon: <Target size={14} />, text: "Recherche Stage PFE" },
                { icon: <Users size={14} />, text: "Exp. Bank Al-Maghrib + INTELLCAP" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card flex items-center gap-3 px-4 py-2.5 rounded-xl"
                >
                  <span className="text-violet-400 shrink-0">{item.icon}</span>
                  <span className="text-sm text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Je suis <span className="text-white font-semibold">Aymane Azaagag</span>, ingénieur en 5e année à l&apos;ENSA Tétouan, à la croisée de deux mondes qui me passionnent :{" "}
              <span className="text-violet-400 font-medium">le Data Engineering</span> et{" "}
              <span className="text-cyan-400 font-medium">l&apos;AI Engineering</span>.
            </p>

            <p className="text-slate-400 leading-relaxed">
              Mon expérience chez <span className="text-white font-medium">Bank Al-Maghrib</span> m&apos;a permis de concevoir de bout en bout une solution GenAI enterprise — système multi-agents avec <strong className="text-violet-300">LangGraph</strong>, RAG sur <strong className="text-violet-300">Qdrant</strong>, inférence locale via <strong className="text-violet-300">Ollama</strong>, et monitoring LLMOps complet (MLflow, Arize Phoenix, RAGAS).
            </p>

            <p className="text-slate-400 leading-relaxed">
              J&apos;ai également développé une plateforme de détection des mauvaises herbes par Computer Vision (<strong className="text-cyan-300">YOLOv11</strong>) lors de mon stage chez <span className="text-white font-medium">INTELLCAP</span>. Je conçois et déploie des projets de Data Engineering multi-cloud (<strong className="text-violet-300">AWS</strong>, <strong className="text-violet-300">Azure</strong>, <strong className="text-cyan-300">Snowflake</strong>, <strong className="text-cyan-300">dbt</strong>), avec des architectures Medallion modernes, des pipelines ELT/ETL robustes et des Lakehouses à haute performance.
            </p>

            <div className="glass-card rounded-xl p-4 border-l-4" style={{ borderLeftColor: "#7c3aed" }}>
              <p className="text-slate-300 italic text-sm leading-relaxed">
                &ldquo;Je recherche un <strong className="text-white">Stage de Fin d&apos;Études (PFE)</strong> en Data Engineering ou AI Engineering — prêt à relever des défis à fort impact dans un environnement exigeant.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-card glass-card-hover rounded-xl p-5 text-center gradient-border">
              <div className="text-3xl font-black neon-text mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {s.value}<span className="text-lg font-bold text-slate-400">{s.unit}</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
