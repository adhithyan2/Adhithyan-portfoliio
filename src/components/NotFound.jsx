import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { socials } from "../data/portfolioData";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow text-[11px] text-[#666] dark:text-[#9a9a9a] mb-6">
        Error — Page not found
      </span>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-8xl md:text-9xl font-extrabold tracking-[-0.04em] leading-none text-[#1a1a1a] dark:text-white"
      >
        404<span className="text-primary">.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-md mt-6 mb-10 text-[#4e4e4e] dark:text-[#9a9a9a]"
      >
        This page doesn't exist. But the real problem I'd rather solve is your next project.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a href="/" className="pill pill-solid px-7 py-3.5">
          <ArrowLeft size={16} /> Back to Home
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="pill pill-outline px-7 py-3.5"
        >
          See my work on GitHub <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </div>
  );
}