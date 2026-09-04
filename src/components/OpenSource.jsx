import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { socials, activityData } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
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
      <p className={`text-xs mt-3 ${
        theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
      }`}>
        {source === "live"
          ? "Live contribution data from GitHub."
          : "Live GitHub data not reachable right now — showing placeholder activity."}
      </p>
    </div>
  );
}

export default function OpenSource() {
  const { theme } = useTheme();

  return (
    <section id="opensource" className="py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-semibold tracking-widest uppercase"
          >
            <SectionLabel index="06">Open Source</SectionLabel>
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 tracking-tight"
          >
            Building in Public.<br />
            Building for Everyone.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`text-base md:text-lg mb-12 max-w-2xl leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}
          >
            I believe software becomes more powerful when knowledge, tools, and ideas are shared. I am working toward building useful open-source projects and a freelancer-oriented ecosystem that makes it easier to turn ideas into real digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
