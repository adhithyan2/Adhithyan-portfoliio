import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, socials } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-[#d2d2d2] dark:border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="eyebrow text-[13px] tracking-[0.2em] text-[#1a1a1a] dark:text-white">
              {profile.name}<span className="text-primary">.</span>
            </a>
            <p className="text-sm mt-1 text-[#4e4e4e] dark:text-[#9a9a9a]">
              Building useful things with code.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#d2d2d2] dark:border-white/15 flex items-center justify-center text-[#666] dark:text-[#9a9a9a] transition-colors duration-200 hover:border-primary/60 hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-[#d2d2d2] dark:border-white/15 flex items-center justify-center text-[#666] dark:text-[#9a9a9a] transition-colors duration-200 hover:border-primary/60 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="w-10 h-10 rounded-full border border-[#d2d2d2] dark:border-white/15 flex items-center justify-center text-[#666] dark:text-[#9a9a9a] transition-colors duration-200 hover:border-primary/60 hover:text-primary"
              aria-label="Email"
            >
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#d2d2d2] dark:border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="eyebrow text-[10px] text-[#9a9a9a]">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="eyebrow text-[10px] inline-flex items-center gap-1.5 text-[#666] dark:text-[#9a9a9a] transition-colors duration-200 hover:text-primary"
          >
            Back to top <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}