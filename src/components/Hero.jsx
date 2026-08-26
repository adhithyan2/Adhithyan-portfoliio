import { motion } from "framer-motion";
import { ArrowDown, Github } from "lucide-react";
import { profile, socials } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-0">
          <div className="w-full lg:w-[55%] text-center lg:text-left lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className={`inline-block text-sm font-medium tracking-widest uppercase mb-6 ${
                theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
              }`}>
                {profile.role}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight mb-6"
            >
              Building Digital<br />
              Products That Solve<br />
              <span className="text-primary">Real Problems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className={`text-base md:text-lg max-w-xl mb-10 ${
                theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
              }`}
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                View My Work
                <ArrowDown size={16} />
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-xl border transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                  theme === "dark"
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-black/15 text-[#0A0A0B] hover:bg-black/5"
                }`}
              >
                Let's Build Something
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border transition-all duration-200 hover:scale-[1.05] active:scale-[0.98] ${
                  theme === "dark"
                    ? "border-white/15 text-white hover:bg-white/5"
                    : "border-black/15 text-[#0A0A0B] hover:bg-black/5"
                }`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-full lg:w-[45%] flex justify-center lg:justify-end lg:pb-0"
          >
            <div className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[600px] w-full flex justify-center lg:justify-end items-end">
              {/* Subtle glow behind portrait */}
              <div
                className="absolute bottom-0 right-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] rounded-full opacity-30 blur-[80px]"
                style={{
                  background: "radial-gradient(circle at center 60%, rgba(0,212,170,0.2) 0%, rgba(0,212,170,0.04) 50%, transparent 75%)",
                }}
              />
              <img
                src="/assets/hero-portrait.png"
                alt={profile.name}
                className="relative h-full w-auto max-w-[90%] lg:max-w-none object-contain object-bottom drop-shadow-[0_0_60px_rgba(0,0,0,0.6)]"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className={theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"} />
        </motion.div>
      </motion.div>
    </section>
  );
}
