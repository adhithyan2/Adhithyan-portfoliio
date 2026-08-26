import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, socials } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`border-t ${
      theme === "dark" ? "border-white/[0.06]" : "border-black/[0.06]"
    }`}>
      <div className="max-w-[1320px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold tracking-tight mb-1">
              {profile.name}
            </h3>
            <p className={`text-sm ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}>
              Building useful things with code.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-all duration-200 hover:scale-110 ${
                theme === "dark"
                  ? "bg-white/[0.06] text-[#8A8A8E] hover:text-white hover:bg-white/[0.12]"
                  : "bg-black/[0.04] text-[#6B6B70] hover:text-[#0A0A0B] hover:bg-black/[0.08]"
              }`}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-all duration-200 hover:scale-110 ${
                theme === "dark"
                  ? "bg-white/[0.06] text-[#8A8A8E] hover:text-white hover:bg-white/[0.12]"
                  : "bg-black/[0.04] text-[#6B6B70] hover:text-[#0A0A0B] hover:bg-black/[0.08]"
              }`}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className={`p-2.5 rounded-xl transition-all duration-200 hover:scale-110 ${
                theme === "dark"
                  ? "bg-white/[0.06] text-[#8A8A8E] hover:text-white hover:bg-white/[0.12]"
                  : "bg-black/[0.04] text-[#6B6B70] hover:text-[#0A0A0B] hover:bg-black/[0.08]"
              }`}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className={`mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
          theme === "dark" ? "border-white/[0.06]" : "border-black/[0.06]"
        }`}>
          <p className={`text-xs ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className={`inline-flex items-center gap-2 text-xs font-medium transition-colors duration-200 ${
              theme === "dark"
                ? "text-[#8A8A8E] hover:text-primary"
                : "text-[#6B6B70] hover:text-primary"
            }`}
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
