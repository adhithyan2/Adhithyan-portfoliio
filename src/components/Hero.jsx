import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github } from "lucide-react";
import { profile, socials } from "../data/portfolioData";

const nameTokens = profile.name.split(" ");

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-8">
          <div className="w-full lg:w-[56%] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="eyebrow text-[#666] dark:text-[#9a9a9a]">Portfolio — {profile.role.toUpperCase()}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-6 font-extrabold leading-[0.95] tracking-[-0.05em] text-[clamp(2.7rem,7.2vw,7rem)]"
            >
              {nameTokens.map((token, i) => (
                <span key={i} className="block">
                  {token}
                  {i === nameTokens.length - 1 && (
                    <span className="text-primary">.</span>
                  )}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]"
            >
              {profile.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="pill pill-solid px-7 py-3.5">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="pill pill-outline px-7 py-3.5">
                Let's Talk
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-full border border-[#d2d2d2] dark:border-white/25 flex items-center justify-center text-[#1a1a1a] dark:text-[#f4f4f5] transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Github size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative w-full lg:w-[44%] flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_70%)]"
              />
              <div className="relative rounded-3xl border border-[#d2d2d2] dark:border-white/10 p-2 bg-white dark:bg-[#111113]">
                <picture>
                  <source srcSet="/assets/hero-portrait.webp" type="image/webp" />
                  <img
                    src="/assets/hero-portrait.png"
                    alt={profile.name}
                    width="800"
                    height="533"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-auto rounded-2xl object-cover drop-shadow-[0_24px_60px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_30px_70px_rgba(0,0,0,0.5)]"
                    draggable={false}
                  />
                </picture>
              </div>

              <div className="absolute top-[10%] -left-2 md:left-[-14px] float-icon">
                <span className="eyebrow text-[11px] text-[#1a1a1a] dark:text-[#f4f4f5] px-3 py-2 rounded-lg border border-[#d2d2d2] dark:border-white/15 bg-white/90 dark:bg-[#111113]/85">
                  React.js
                </span>
              </div>
              <div className="absolute top-[28%] -right-2 md:right-[-12px] float-icon">
                <span className="eyebrow text-[11px] text-[#1a1a1a] dark:text-[#f4f4f5] px-3 py-2 rounded-lg border border-[#d2d2d2] dark:border-white/15 bg-white/90 dark:bg-[#111113]/85">
                  Node.js
                </span>
              </div>
              <div className="absolute bottom-[26%] -left-2 md:left-[-10px] float-icon">
                <span className="eyebrow text-[11px] text-[#1a1a1a] dark:text-[#f4f4f5] px-3 py-2 rounded-lg border border-[#d2d2d2] dark:border-white/15 bg-white/90 dark:bg-[#111113]/85">
                  MongoDB
                </span>
              </div>
              <div className="absolute bottom-[10%] right-0 md:right-[-8px] float-icon">
                <span className="eyebrow text-[11px] text-[#1a1a1a] dark:text-[#f4f4f5] px-3 py-2 rounded-lg border border-[#d2d2d2] dark:border-white/15 bg-white/90 dark:bg-[#111113]/85">
                  Python · AI
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-[#9a9a9a] dark:text-[#666]" />
        </motion.div>
      </motion.div>
    </section>
  );
}