import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { socials, activityData } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const GH_USERNAME = "adhithyan2";

function ContributionGraph() {
  const { theme } = useTheme();
  const [cells, setCells] = useState(
    activityData.map((d) => ({ level: getLevel(d.count), count: d.count }))
  );
  const [source, setSource] = useState("placeholder");

  function getLevel(count) {
    if (count === 0) return 0;
    if (count <= 1) return 1;
    if (count <= 2) return 2;
    if (count <= 3) return 3;
    return 4;
  }

  useEffect(() => {
    let cancelled = false;
    fetch(`https://github-contributions-api.deno.dev/${GH_USERNAME}.json`)
      .then((r) => {
        if (!r.ok) throw new Error(`API ${r.status}`);
        return r.json();
      })
      .then((data) => {
        if (cancelled || !data?.contributions) return;
        const weeks = data.contributions;
        const flat = weeks.flatMap((w) => w);
        const recent = flat.slice(-91);
        if (recent.length > 0) {
          setCells(recent.map((item) => ({ level: getLevel(item.count || 0), count: item.count || 0 })));
          setSource("live");
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  const getColor = (level) => {
    if (theme === "dark") {
      const colors = ["#161617", "#0e4429", "#006d32", "#26a641", "#39d353"];
      return colors[level];
    }
    const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];
    return colors[level];
  };

  return (
    <div>
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-[3px] min-w-fit">
          {cells.map((cell, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              <div
                className="w-[11px] h-[11px] rounded-[2px] transition-colors duration-300"
                style={{ backgroundColor: getColor(cell.level) }}
                title={`${cell.count} contribution${cell.count === 1 ? "" : "s"}`}
              />
            </div>
          ))}
        </div>
      </div>
      <p className="eyebrow text-[10px] mt-3 text-[#9a9a9a]">
        {source === "live"
          ? "Live contribution data from GitHub."
          : "Live GitHub data not reachable right now — showing placeholder activity."}
      </p>
    </div>
  );
}

export default function OpenSource() {
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
          <motion.span variants={fadeUp}>
            <SectionLabel index="06">Open Source</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            Building in public.<br />
            Building for everyone.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base md:text-lg mb-12 max-w-2xl leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]"
          >
            I believe software becomes more powerful when knowledge, tools, and ideas are shared. I am working toward building useful open-source projects and a freelancer-oriented ecosystem that makes it easier to turn ideas into real digital products.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 mb-16">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="pill pill-solid px-6 py-3">
              <Github size={16} /> GitHub Profile
            </a>
            <a href="#" className="pill pill-outline px-6 py-3">
              <ExternalLink size={16} /> Open Source Projects
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={4}>
            <h3 className="eyebrow text-[#666] dark:text-[#9a9a9a] mb-5">Activity</h3>
            <div className="card-line p-6">
              <ContributionGraph />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}