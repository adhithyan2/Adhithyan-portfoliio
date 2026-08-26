import { motion } from "framer-motion";
import { achievements } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";

export default function Achievements() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
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
            Milestones
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-16 tracking-tight"
          >
            What I've Achieved.
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i + 2}
                className={`rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-[#111113] border border-white/[0.06] hover:border-primary/30"
                    : "bg-white border border-black/[0.06] shadow-sm hover:border-primary/30"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {item.value}
                </div>
                <div className={`text-xs font-medium tracking-wider uppercase ${
                  theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
                }`}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
