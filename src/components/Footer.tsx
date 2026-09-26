"use client";
import { Heart } from "lucide-react";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-10 px-6 border-t border-white/06">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="text-lg font-bold neon-text" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
              Aymane Azaagag
            </span>
            <p className="text-xs text-slate-600 mt-1">
              Data & AI Engineer — ENSA Tétouan
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 text-sm text-slate-500">
            {[
              { href: "#about", label: "À Propos" },
              { href: "#projects", label: "Projets" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white px-3 py-1 transition-colors rounded-lg hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/aymanz12" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/aymane-azaagag-912816330/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0ea5e9] transition-colors p-2 rounded-lg hover:bg-white/5">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-slate-700 flex items-center justify-center gap-1">
          <span>© {year} Aymane Azaagag</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            Fait avec <Heart size={11} className="text-violet-500" fill="currentColor" /> en Next.js + Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
