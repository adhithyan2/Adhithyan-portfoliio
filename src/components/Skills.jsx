import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "../hooks/useScrollReveal";

const skillGroups = [
  { key: "programming", label: "Programming" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "tools", label: "Tools & Platforms" },
  { key: "interests", label: "Areas of Interest" },
];

export default function Skills() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span
            variants={fadeUp}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            Skills & Tech
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-16 tracking-tight"
          >
            The Tools I Work With.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => (
              <motion.div
                key={group.key}
                variants={scaleIn}
                custom={gi * 0.5}
                className={`rounded-2xl p-6 transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-[#111113] border border-white/[0.06] hover:border-primary/30"
                    : "bg-white border border-black/[0.06] hover:border-primary/30 shadow-sm"
                }`}
              >
                <h3 className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[group.key].map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors duration-200 ${
                        theme === "dark"
                          ? "bg-white/[0.06] text-[#8A8A8E] hover:bg-primary/15 hover:text-primary"
                          : "bg-black/[0.04] text-[#6B6B70] hover:bg-primary/15 hover:text-primary"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
