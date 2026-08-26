import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { socials, activityData } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";

function ContributionGraph() {
  const { theme } = useTheme();
  const weeks = 52;
  const levels = [0, 1, 2, 3, 4];

  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count <= 1) return 1;
    if (count <= 2) return 2;
    if (count <= 3) return 3;
    return 4;
  };

  const getColor = (level) => {
    if (theme === "dark") {
      const colors = ["#161617", "#0e4429", "#006d32", "#26a641", "#39d353"];
      return colors[level];
    }
    const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
    return colors[level];
  };

  const cells = activityData.map((d) => ({
    ...d,
    level: getLevel(d.count),
  }));

  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex gap-[3px] min-w-fit">
        {cells.map((cell, i) => (
          <div key={i} className="flex flex-col gap-[3px]">
            <div
              className="w-[11px] h-[11px] rounded-[2px] transition-colors"
              style={{ backgroundColor: getColor(cell.level) }}
              title={`${cell.count} contributions`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OpenSource() {
  const { theme } = useTheme();
  const { ref, controls } = useScrollReveal();

  return (
    <section id="opensource" className="py-24 md:py-32">
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
            Open Source
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 tracking-tight"
          >
            Building in Public.<br />
            Building for Everyone.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`text-base md:text-lg mb-12 max-w-2xl leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            I believe software becomes more powerful when knowledge, tools, and ideas are shared. I am working toward building useful open-source projects and a freelancer-oriented ecosystem that makes it easier to turn ideas into real digital products.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4 mb-16"
          >
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Github size={18} /> GitHub Profile
            </a>
            <a
              href="#"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl border transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] ${
                theme === "dark"
                  ? "border-white/15 text-white hover:bg-white/5"
                  : "border-black/15 text-[#0A0A0B] hover:bg-black/5"
              }`}
            >
              <ExternalLink size={18} /> Open Source Projects
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={4}>
            <h3 className={`text-sm font-semibold tracking-widest uppercase mb-4 ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}>
              Activity
            </h3>
            <div className={`rounded-2xl p-6 ${
              theme === "dark"
                ? "bg-[#111113] border border-white/[0.06]"
                : "bg-white border border-black/[0.06] shadow-sm"
            }`}>
              <ContributionGraph />
              <p className={`text-xs mt-3 ${
                theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
              }`}>
                Placeholder contribution activity — connect to GitHub API for real data.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
