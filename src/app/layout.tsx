import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aymane Azaagag — Data & AI Engineer",
  description:
    "Portfolio de Aymane Azaagag — Ingénieur 5e année ENSA Tétouan spécialisé en Data Engineering Multi-Cloud (AWS, Azure, Snowflake, dbt, Medallion) et AI Engineering (systèmes multi-agents, RAG, GenAI). À la recherche d'un Stage PFE.",
  keywords: [
    "Aymane Azaagag",
    "Data Engineering",
    "AI Engineering",
    "Multi-Cloud",
    "AWS",
    "Azure",
    "Snowflake",
    "dbt",
    "LangGraph",
    "RAG",
    "ENSA Tétouan",
    "Stage PFE",
    "GenAI",
    "Portfolio",
  ],
  authors: [{ name: "Aymane Azaagag" }],
  openGraph: {
    title: "Aymane Azaagag — Data & AI Engineer",
    description:
      "Ingénieur Data & AI — pipelines ELT/ETL multi-cloud, AWS, Azure, Snowflake, dbt, architectures multi-agents, RAG, GenAI. Expérience Bank Al-Maghrib.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased noise">{children}</body>
    </html>
  );
}
