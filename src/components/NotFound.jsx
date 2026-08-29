import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { socials } from "../data/portfolioData";

export default function NotFound() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary bg-opacity-10 mb-8">
        <Github size={32} className="text-primary" />
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-7xl md:text-8xl font-bold tracking-tight gradient-text mb-4"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`max-w-md mb-10 ${
          theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
        }`}
      >
        This page doesn't exist. But the real problem I'd rather solve is your next project.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
        >
          Back to Home
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-xl border transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
            theme === "dark"
              ? "border-white/15 text-white hover:bg-white/5"
              : "border-black/15 text-[#0A0A0B] hover:bg-black/5"
          }`}
        >
          See my work on GitHub
        </a>
      </motion.div>
    </div>
  );
}