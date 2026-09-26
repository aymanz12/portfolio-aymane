"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => any;
}

export const translations = {
  fr: {
    // Navigation
    nav: {
      about: "À Propos",
      experience: "Expériences",
      skills: "Compétences",
      projects: "Projets",
      education: "Formation",
      contact: "Contact",
      cta: "Contactez-moi",
    },
    // Hero
    hero: {
      badge: "Recherche Stage PFE — Data & AI Engineering",
      roles: [
        "Data Engineer (Multi-Cloud)",
        "AI Engineer",
        "LangGraph & RAG Expert",
        "Cloud Data Architect (AWS / Azure / Snowflake)",
        "Multi-Agent Systems",
      ],
      description_prefix: "Ingénieur 5e année à l'",
      school: "ENSA Tétouan",
      description_mid: " — spécialisé en Data Engineering ",
      skills_data: "(Multi-Cloud : AWS, Azure, Snowflake, dbt, Medallion)",
      description_and: " et AI Engineering ",
      skills_ai: "(LangGraph, RAG, GenAI)",
      description_end: ". Expérience concrète en ",
      company: "Banque Centrale",
      description_final: ".",
      cta_projects: "Voir mes projets",
      cta_contact: "Me contacter",
      scroll: "DÉFILER",
    },
    // About
    about: {
      badge: "Profil & Vision",
      title: "À Propos de Moi",
      subtitle: "Ingénieur passionné par les pipelines de données scalables et les architectures d'intelligence artificielle autonomes.",
      status: "Disponible PFE",
      location: "Tétouan, Maroc",
      degree: "ENSA Tétouan — Ingénieur DS, Big Data & IA",
      objective: "Recherche Stage PFE (Fév - Juil)",
      track_record: "Exp. Bank Al-Maghrib + INTELLCAP",
      p1: "Je suis Aymane Azaagag, ingénieur en 5e année à l'ENSA Tétouan, à la croisée de deux univers complémentaires : le Data Engineering et l'AI Engineering.",
      p2: "Mon expérience chez Bank Al-Maghrib m'a permis de concevoir de bout en bout une solution GenAI enterprise : architecture multi-agents avec LangGraph, RAG hybride sur Qdrant, inférence locale sécurisée via Ollama, et monitoring LLMOps complet (MLflow, Arize Phoenix, RAGAS).",
      p3: "J'ai également développé une plateforme de détection des mauvaises herbes par Computer Vision (YOLOv11) lors de mon stage chez INTELLCAP. Je conçois et déploie des projets de Data Engineering multi-cloud (AWS, Azure, Snowflake, dbt), avec des architectures Medallion modernes, des pipelines ELT/ETL robustes et des Lakehouses à haute performance.",
      quote: "Je recherche un Stage de Fin d'Études (PFE) stimulant en Data Engineering ou AI Engineering — prêt à apporter une réelle valeur ajoutée au sein d'une équipe ambitieuse.",
      stats: {
        bac: { value: "Bac+5", label: "Niveau d'études", sub: "ENSA Tétouan (2026)" },
        exp: { value: "2+", label: "Expériences en entreprise", sub: "Banque Centrale & INTELLCAP" },
        projects: { value: "10+", label: "Projets Data & AI", sub: "Multi-Cloud & GenAI" },
        readiness: { value: "100%", label: "Opérationnel", sub: "Prêt pour le PFE" },
      },
    },
    // Experience
    experience: {
      badge: "Parcours Professionnel",
      title: "Expériences en Entreprise",
      subtitle: "Conception de solutions data & IA de bout en bout en environnements critiques et innovants.",
      experiences: [
        {
          role: "Stagiaire en Intelligence Artificielle — PFA",
          company: "Bank Al-Maghrib (Banque Centrale du Maroc)",
          period: "Juin 2026 – Août 2026 (3 mois)",
          location: "Rabat, Maroc · Sur site",
          description: "Conception et développement de bout en bout d'une solution GenAI d'entreprise sécurisée :",
          bullets: [
            "Conception d'une architecture multi-agents collaborative et modulaire avec LangGraph.",
            "Indexation et recherche sémantique avancée (RAG) sur la base vectorielle Qdrant.",
            "Intégration et optimisation de modèles de langage (LLMs) locaux via Ollama pour garantir la confidentialité bancaire des données.",
            "Mise en place d'un pipeline complet de monitoring et d'évaluation LLMOps avec MLflow, Arize Phoenix et métriques RAGAS.",
          ],
          tags: ["LangGraph", "Multi-Agent", "Qdrant", "Ollama", "MLflow", "Arize Phoenix", "RAGAS", "Python", "GenAI"],
        },
        {
          role: "Stagiaire en Vision par Ordinateur",
          company: "INTELLCAP",
          period: "Juil. 2025 – Août 2025 (2 mois)",
          location: "Maroc",
          description: "Développement d'une plateforme d'intelligence artificielle appliquée à l'agritech :",
          bullets: [
            "Conception et entraînement d'un modèle de détection d'objets YOLOv11 pour identifier les mauvaises herbes avec haute précision.",
            "Pipeline de preprocessing et d'augmentation d'images haute résolution pour optimiser la robustesse du modèle.",
            "Déploiement d'une API de scoring et intégration dans une interface de prédiction temps réel.",
          ],
          tags: ["YOLOv11", "Computer Vision", "PyTorch", "OpenCV", "Python", "Image Processing"],
        },
      ],
    },
    // Skills
    skills: {
      badge: "Stack & Expertises",
      title: "Compétences Techniques",
      subtitle: "Un éventail complet d'outils éprouvés pour bâtir des systèmes data fiables et des agents IA intelligents.",
      categories: [
        {
          title: "AI Engineering & GenAI",
          skills: [
            { name: "LangGraph / Systèmes Multi-Agents", level: 90 },
            { name: "RAG Avancé & Bases Vectorielles (Qdrant)", level: 88 },
            { name: "Inférence Locale & LLMs (Ollama)", level: 85 },
            { name: "LLMOps & Monitoring (MLflow, Arize, RAGAS)", level: 82 },
          ],
        },
        {
          title: "Data Engineering Multi-Cloud",
          skills: [
            { name: "Multi-Cloud (AWS & Azure)", level: 86 },
            { name: "Snowflake & Transformations dbt", level: 85 },
            { name: "Architecture Medallion (Bronze/Silver/Gold)", level: 88 },
            { name: "Pipelines ELT/ETL & Ingestion temps réel", level: 90 },
            { name: "Apache Spark / PySpark & Delta Lake", level: 82 },
          ],
        },
        {
          title: "Data Science & Machine Learning",
          skills: [
            { name: "Python (Pandas, NumPy, Scikit-Learn)", level: 92 },
            { name: "Vision par Ordinateur (YOLOv11, OpenCV)", level: 84 },
            { name: "Deep Learning (PyTorch, Réseaux de Neurones)", level: 78 },
            { name: "Feature Engineering & Modélisation", level: 85 },
          ],
        },
        {
          title: "DevOps, Cloud & Outils",
          skills: [
            { name: "Docker & Conteneurisation", level: 80 },
            { name: "Git, GitHub & CI/CD", level: 90 },
            { name: "Bases de Données (SQL & NoSQL)", level: 88 },
            { name: "Business Intelligence (Power BI, Dashboards)", level: 82 },
          ],
        },
      ],
      tags_title: "Technologies & Frameworks Maîtrisés",
    },
    // Projects
    projects: {
      badge: "Portfolio de Projets",
      title: "Projets & Réalisations",
      subtitle: "Des architectures cloud robustes et des applications IA conçues avec rigueur.",
      categories: ["Tous", "AI Engineering", "Data Engineering", "Data Analytics"],
      github_btn: "Code Source",
      items: [
        {
          id: 1,
          title: "AI Data Agent",
          subtitle: "Système Multi-Agents avec LangGraph & Ollama",
          description: "Agent IA autonome capable d'analyser, d'interroger et de raisonner sur des données complexes. Utilisation de LangGraph pour l'orchestration des états et Ollama pour une inférence locale rapide.",
          category: "AI Engineering",
        },
        {
          id: 2,
          title: "Enterprise Multi-Agent RAG",
          subtitle: "Architecture RAG locale & sécurisée",
          description: "Solution RAG complète développée pour des contextes sensibles. Vectorisation avancée dans Qdrant, reranking contextuel, traçabilité MLflow et évaluation RAGAS.",
          category: "AI Engineering",
        },
        {
          id: 3,
          title: "Real-Time Crypto Tracker",
          subtitle: "Pipeline de streaming temps réel",
          description: "Pipeline d'ingestion et de traitement streaming pour le marché des cryptomonnaies. Agrégation des ticks en temps réel, stockage optimisé et visualisations dynamiques.",
          category: "Data Engineering",
        },
        {
          id: 4,
          title: "Manufacturing Quality Lakehouse",
          subtitle: "Architecture Medallion & Multi-Cloud Data Engineering",
          description: "Architecture Lakehouse complète (Bronze/Silver/Gold) pour l'industrie. Ingestion multi-cloud, transformations dbt, modélisation dimensionnelle et dashboards analytiques en temps réel.",
          category: "Data Engineering",
        },
        {
          id: 5,
          title: "Project BI Analytics",
          subtitle: "Business Intelligence & Modélisation",
          description: "Plateforme BI complète : modélisation en étoile/flocon, flux ETL automatisés et tableaux de bord interactifs Power BI pour l'aide à la décision stratégique.",
          category: "Data Analytics",
        },
        {
          id: 6,
          title: "Predictive Maintenance",
          subtitle: "Machine Learning & Données IoT",
          description: "Système intelligent de prédiction des pannes industrielles à partir de séries temporelles de capteurs IoT. Algorithmes de classification et pipeline MLOps.",
          category: "Data Analytics",
        },
      ],
    },
    // Education
    education: {
      badge: "Formation Académique",
      title: "Parcours & Diplômes",
      subtitle: "Un cursus rigoureux alliant théorie des mathématiques appliquées, informatique et technologies d'ingénierie.",
      items: [
        {
          school: "École Nationale des Sciences Appliquées (ENSA) Tétouan",
          degree: "Diplôme d'Ingénieur d'État — Data Science, Big Data & IA",
          period: "2024 – Présent (5e année)",
          location: "Tétouan, Maroc",
          description: "Formation d'excellence préparant à la maîtrise complète du cycle de vie des données et des systèmes d'intelligence artificielle :",
          skills: [
            "Architectures Big Data & Cloud Distribué",
            "Deep Learning & Traitement du Langage Naturel (NLP)",
            "Data Warehousing, Lakehouse & Modélisation Dimensionnelle",
            "Gouvernance, Sécurité & MLOps",
          ],
        },
        {
          school: "École Nationale des Sciences Appliquées (ENSA) Tétouan",
          degree: "Classes Préparatoires Intégrées (2AP)",
          period: "2022 – 2024",
          location: "Tétouan, Maroc",
          description: "Formation intensive scientifique préparatoire aux filières d'ingénierie :",
          skills: [
            "Mathématiques Fondamentales (Algèbre Linéaire, Analyse, Probas/Stats)",
            "Physique & Électronique",
            "Algorithmique & Programmation C / Python",
          ],
        },
      ],
    },
    // Contact
    contact: {
      badge: "Prendre Contact",
      title: "Discutons Ensemble",
      subtitle: "Vous recherchez un stagiaire PFE passionné et opérationnel en Data ou AI Engineering ? Envoyez-moi un message !",
      available_title: "Statut de Disponibilité",
      available_desc: "Actuellement à la recherche d'un Stage de Fin d'Études (PFE) conventionné de 4 à 6 mois à partir de début 2026. Disponible sur site, hybride ou remote.",
      form: {
        name: "Nom complet",
        name_placeholder: "Ex: Sarah Martin",
        email: "Adresse Email",
        email_placeholder: "Ex: sarah@entreprise.com",
        subject: "Sujet",
        subject_placeholder: "Ex: Opportunité Stage PFE Data / AI",
        message: "Votre message",
        message_placeholder: "Décrivez votre projet, vos attentes ou votre opportunité...",
        send: "Envoyer le message",
        sent: "Message envoyé !",
        success_msg: "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
      },
    },
    // Footer
    footer: {
      rights: "Tous droits réservés.",
      made_with: "Conçu & développé avec passion",
      role: "Ingénieur Data & AI",
    },
  },

  en: {
    // Navigation
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      cta: "Get in Touch",
    },
    // Hero
    hero: {
      badge: "Seeking End-of-Studies Internship (PFE) — Data & AI Engineering",
      roles: [
        "Data Engineer (Multi-Cloud)",
        "AI Engineer",
        "LangGraph & RAG Expert",
        "Cloud Data Architect (AWS / Azure / Snowflake)",
        "Multi-Agent Systems",
      ],
      description_prefix: "5th-year Engineering student at ",
      school: "ENSA Tetouan",
      description_mid: " — specializing in Data Engineering ",
      skills_data: "(Multi-Cloud: AWS, Azure, Snowflake, dbt, Medallion)",
      description_and: " and AI Engineering ",
      skills_ai: "(LangGraph, RAG, GenAI)",
      description_end: ". Proven hands-on experience at ",
      company: "Central Bank",
      description_final: ".",
      cta_projects: "View My Projects",
      cta_contact: "Contact Me",
      scroll: "SCROLL",
    },
    // About
    about: {
      badge: "Profile & Vision",
      title: "About Me",
      subtitle: "Engineer passionate about scalable data pipelines and autonomous AI architectures.",
      status: "Available for PFE",
      location: "Tetouan, Morocco",
      degree: "ENSA Tetouan — Eng. Degree in DS, Big Data & AI",
      objective: "Seeking PFE Internship (Feb - Jul)",
      track_record: "Exp. Bank Al-Maghrib + INTELLCAP",
      p1: "I am Aymane Azaagag, a 5th-year engineering student at ENSA Tetouan, working at the convergence of two exciting disciplines: Data Engineering and AI Engineering.",
      p2: "My experience at Bank Al-Maghrib allowed me to design and implement an end-to-end enterprise GenAI solution: a collaborative multi-agent architecture with LangGraph, hybrid RAG over Qdrant, privacy-preserving local LLM inference with Ollama, and full LLMOps observability (MLflow, Arize Phoenix, RAGAS).",
      p3: "I also built an agritech Computer Vision weed detection platform (YOLOv11) during my internship at INTELLCAP. I actively architect and build multi-cloud Data Engineering systems (AWS, Azure, Snowflake, dbt), featuring modern Medallion pipelines, robust ELT/ETL workflows, and high-performance Lakehouses.",
      quote: "I am actively seeking a high-impact End-of-Studies Internship (PFE) in Data Engineering or AI Engineering — eager to bring tangible value to an ambitious team.",
      stats: {
        bac: { value: "M.Sc. / Eng", label: "Academic Level", sub: "ENSA Tetouan (2026)" },
        exp: { value: "2+", label: "Industry Internships", sub: "Central Bank & INTELLCAP" },
        projects: { value: "10+", label: "Data & AI Projects", sub: "Multi-Cloud & GenAI" },
        readiness: { value: "100%", label: "Operational", sub: "Ready for PFE" },
      },
    },
    // Experience
    experience: {
      badge: "Career Track",
      title: "Work Experience",
      subtitle: "End-to-end data & AI engineering in high-stakes and innovative environments.",
      experiences: [
        {
          role: "Artificial Intelligence Intern — Final Year Project (PFA)",
          company: "Bank Al-Maghrib (Central Bank of Morocco)",
          period: "June 2026 – Aug. 2026 (3 months)",
          location: "Rabat, Morocco · On-site",
          description: "End-to-end design and engineering of a secure enterprise GenAI application:",
          bullets: [
            "Architected a collaborative, stateful multi-agent system powered by LangGraph.",
            "Implemented advanced semantic indexing and hybrid RAG over Qdrant vector database.",
            "Integrated local on-premise LLMs via Ollama to enforce strict banking data confidentiality.",
            "Established a complete LLMOps observability and evaluation pipeline using MLflow, Arize Phoenix, and RAGAS benchmarks.",
          ],
          tags: ["LangGraph", "Multi-Agent", "Qdrant", "Ollama", "MLflow", "Arize Phoenix", "RAGAS", "Python", "GenAI"],
        },
        {
          role: "Computer Vision Intern",
          company: "INTELLCAP",
          period: "July 2025 – Aug. 2025 (2 months)",
          location: "Morocco",
          description: "Developed an AI-driven agritech computer vision platform:",
          bullets: [
            "Trained and fine-tuned a custom YOLOv11 object detection model for precision weed identification.",
            "Engineered high-resolution image preprocessing and augmentation pipelines to ensure real-world model robustness.",
            "Deployed an inference API and integrated it into an interactive real-time dashboard.",
          ],
          tags: ["YOLOv11", "Computer Vision", "PyTorch", "OpenCV", "Python", "Image Processing"],
        },
      ],
    },
    // Skills
    skills: {
      badge: "Tech Stack & Mastery",
      title: "Technical Skills",
      subtitle: "A proven toolkit to build dependable data infrastructure and intelligent autonomous AI agents.",
      categories: [
        {
          title: "AI Engineering & GenAI",
          skills: [
            { name: "LangGraph / Multi-Agent Systems", level: 90 },
            { name: "Advanced RAG & Vector DBs (Qdrant)", level: 88 },
            { name: "Local Inference & LLMs (Ollama)", level: 85 },
            { name: "LLMOps & Monitoring (MLflow, Arize, RAGAS)", level: 82 },
          ],
        },
        {
          title: "Multi-Cloud Data Engineering",
          skills: [
            { name: "Multi-Cloud (AWS & Azure)", level: 86 },
            { name: "Snowflake & dbt Transformations", level: 85 },
            { name: "Medallion Architecture (Bronze/Silver/Gold)", level: 88 },
            { name: "ELT/ETL Pipelines & Streaming Ingestion", level: 90 },
            { name: "Apache Spark / PySpark & Delta Lake", level: 82 },
          ],
        },
        {
          title: "Data Science & Machine Learning",
          skills: [
            { name: "Python (Pandas, NumPy, Scikit-Learn)", level: 92 },
            { name: "Computer Vision (YOLOv11, OpenCV)", level: 84 },
            { name: "Deep Learning (PyTorch, Neural Networks)", level: 78 },
            { name: "Feature Engineering & Predictive Modeling", level: 85 },
          ],
        },
        {
          title: "DevOps, Cloud & Infrastructure",
          skills: [
            { name: "Docker & Containerization", level: 80 },
            { name: "Git, GitHub & CI/CD", level: 90 },
            { name: "Databases (SQL & NoSQL)", level: 88 },
            { name: "Business Intelligence (Power BI, Dashboards)", level: 82 },
          ],
        },
      ],
      tags_title: "Mastered Technologies & Frameworks",
    },
    // Projects
    projects: {
      badge: "Project Portfolio",
      title: "Featured Projects",
      subtitle: "Robust cloud pipelines and intelligent AI systems engineered with precision.",
      categories: ["All", "AI Engineering", "Data Engineering", "Data Analytics"],
      github_btn: "Source Code",
      items: [
        {
          id: 1,
          title: "AI Data Agent",
          subtitle: "Autonomous Multi-Agent System with LangGraph & Ollama",
          description: "Autonomous AI agent capable of querying, reasoning, and generating analytical insights from complex data. Stateful orchestration with LangGraph and low-latency local inference with Ollama.",
          category: "AI Engineering",
        },
        {
          id: 2,
          title: "Enterprise Multi-Agent RAG",
          subtitle: "Secure Enterprise RAG Architecture",
          description: "Production-grade RAG system built for high-security environments. Vector search via Qdrant, contextual reranking, MLflow tracing, and RAGAS evaluation.",
          category: "AI Engineering",
        },
        {
          id: 3,
          title: "Real-Time Crypto Tracker",
          subtitle: "Real-time Streaming Data Pipeline",
          description: "Streaming pipeline ingesting and analyzing live market data. High-throughput event processing, optimized lake storage, and interactive analytics.",
          category: "Data Engineering",
        },
        {
          id: 4,
          title: "Manufacturing Quality Lakehouse",
          subtitle: "Medallion Architecture & Multi-Cloud Data Engineering",
          description: "End-to-end Medallion Lakehouse (Bronze/Silver/Gold) for industrial defect telemetry. Multi-cloud pipelines, dbt modeling, and real-time KPI dashboards.",
          category: "Data Engineering",
        },
        {
          id: 5,
          title: "Project BI Analytics",
          subtitle: "Business Intelligence & Dimensional Modeling",
          description: "End-to-end BI solution: star-schema modeling, automated ETL pipelines, and interactive executive Power BI dashboards.",
          category: "Data Analytics",
        },
        {
          id: 6,
          title: "Predictive Maintenance",
          subtitle: "IoT Machine Learning Engine",
          description: "Intelligent industrial failure anticipation model trained on multi-sensor IoT time series. Robust classification algorithms and MLOps deployment.",
          category: "Data Analytics",
        },
      ],
    },
    // Education
    education: {
      badge: "Academic Background",
      title: "Education & Degrees",
      subtitle: "A rigorous mathematical and technical curriculum combining data science, software engineering, and AI.",
      items: [
        {
          school: "National School of Applied Sciences (ENSA) Tetouan",
          degree: "State Engineering Degree — Data Science, Big Data & AI",
          period: "2024 – Present (5th year)",
          location: "Tetouan, Morocco",
          description: "Top-tier engineering curriculum covering the entire modern data lifecycle and state-of-the-art AI systems:",
          skills: [
            "Distributed Big Data & Cloud Architectures",
            "Deep Learning & Natural Language Processing (NLP)",
            "Data Warehousing, Lakehouses & Dimensional Modeling",
            "Data Governance, Security & MLOps",
          ],
        },
        {
          school: "National School of Applied Sciences (ENSA) Tetouan",
          degree: "Integrated Preparatory Classes (2AP)",
          period: "2022 – 2024",
          location: "Tetouan, Morocco",
          description: "Intensive 2-year STEM foundation preparing for elite engineering specialization:",
          skills: [
            "Advanced Mathematics (Linear Algebra, Multivariable Calculus, Probability/Stats)",
            "Physics & Electronics",
            "Algorithms, Data Structures & Programming (C / Python)",
          ],
        },
      ],
    },
    // Contact
    contact: {
      badge: "Get In Touch",
      title: "Let's Connect",
      subtitle: "Looking for an ambitious, hands-on PFE intern in Data or AI Engineering? Send me a message!",
      available_title: "Internship Availability",
      available_desc: "Actively seeking a 4 to 6-month Final Year Internship (PFE) starting early 2026. Available on-site, hybrid, or remote.",
      form: {
        name: "Full Name",
        name_placeholder: "e.g. Sarah Miller",
        email: "Email Address",
        email_placeholder: "e.g. sarah@company.com",
        subject: "Subject",
        subject_placeholder: "e.g. PFE Internship Opportunity in Data / AI",
        message: "Your Message",
        message_placeholder: "Tell me about your team, project, or role...",
        send: "Send Message",
        sent: "Message Sent!",
        success_msg: "Thank you for reaching out! I will get back to you shortly.",
      },
    },
    // Footer
    footer: {
      rights: "All rights reserved.",
      made_with: "Designed & developed with passion",
      role: "Data & AI Engineer",
    },
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  toggleLang: () => {},
  t: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "fr" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const toggleLang = () => {
    setLang(lang === "fr" ? "en" : "fr");
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let current: any = translations[lang];
    for (const key of keys) {
      if (current === undefined || current === null) return path;
      current = current[key];
    }
    return current ?? path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
