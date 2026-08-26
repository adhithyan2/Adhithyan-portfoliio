import { motion } from "framer-motion";
import { profile } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";

export default function About() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            About Me
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-8 tracking-tight"
          >
            Turning Ideas Into<br />
            <span className="text-primary">Working Products.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className={`space-y-5 text-base md:text-lg leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            <p>
              I'm <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>{profile.name}</strong>, a {profile.education}. I believe in building software that solves real problems rather than just learning technology for its own sake.
            </p>
            <p>
              My work spans <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>full-stack web development</strong> — from crafting responsive frontends with React and Tailwind CSS to designing robust backends with Node.js, Express, and MongoDB. I've built AI-powered applications, facial recognition systems, and intelligent automation tools.
            </p>
            <p>
              What drives me is the intersection of <strong className={theme === "dark" ? "text-white" : "text-[#0A0A0B]"}>technology and real-world impact</strong>. I'm working toward building an open-source freelancer ecosystem that makes it easier for developers to turn ideas into real digital products — tools that actual businesses and users can benefit from.
            </p>
            <p>
              I'm a product-focused builder who values clean code, thoughtful design, and the discipline of continuous learning. Every project I take on is a chance to get better at the craft.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
