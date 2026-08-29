import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, X } from "lucide-react";
import { projects } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

function ProjectPlaceholder({ name, className = "" }) {
  const initials = name.replace(/[^a-zA-Z ]/g, "").split(/\s+/).filter(Boolean).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-transparent ${className}`}>
      <span className="text-primary/40 text-5xl font-bold select-none">{initials}</span>
    </div>
  );
}

const rowReveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
};

function FeaturedProject({ project, onOpen }) {
  return (
    <motion.div
      {...rowReveal}
      onClick={() => onOpen(project)}
      className="group relative grid md:grid-cols-2 rounded-2xl overflow-hidden cursor-pointer border border-[#d2d2d2] dark:border-white/10 bg-white dark:bg-[#111113] transition-colors duration-300 hover:border-primary/50"
    >
      <div className="h-60 md:h-auto min-h-[280px] relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.classList.add("hidden-fallback");
            }}
          />
        ) : null}
        <ProjectPlaceholder name={project.name} className="w-full h-full absolute inset-0" />
        <span className="eyebrow absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white dark:bg-[#111113] border border-[#d2d2d2] dark:border-white/15 text-[#1a1a1a] dark:text-white text-[10px]">
          Featured
        </span>
      </div>
      <div className="p-8 md:p-10 flex flex-col justify-center">
        <span className="eyebrow text-[#666] dark:text-[#9a9a9a]">
          {project.category} — 01
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold tracking-[-0.02em] mt-4 mb-4">
          {project.name}
        </h3>
        <p className="text-base mb-8 leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="eyebrow text-[10px] text-[#3d3d3d] dark:text-[#c9c9cc] px-2.5 py-1.5 rounded-full border border-[#d2d2d2] dark:border-white/15"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 font-semibold text-sm w-fit group-hover:gap-3 transition-all text-[#1a1a1a] dark:text-white">
          View Case Study <ArrowUpRight size={18} />
        </span>
      </div>
    </motion.div>
  );
}

function WorkRow({ project, number, onOpen }) {
  return (
    <motion.div
      {...rowReveal}
      onClick={() => onOpen(project)}
      className="row-line hover-band group cursor-pointer grid grid-cols-12 items-center gap-4 py-6"
    >
      <span className="col-span-2 md:col-span-1 eyebrow tabular-nums text-[#9a9a9a]">
        {String(number).padStart(2, "0")}
      </span>
      <div className="col-span-7 md:col-span-6">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-sm mt-1 text-[#4e4e4e] dark:text-[#9a9a9a] hidden md:block">
          {project.tagline}
        </p>
      </div>
      <div className="col-span-2 hidden lg:block eyebrow text-[11px] text-[#666] dark:text-[#8A8A8E]">
        {project.filter}
      </div>
      <div className="col-span-3 lg:col-span-3 text-right">
        <span className="inline-flex items-center gap-1.5 font-semibold text-sm text-[#1a1a1a] dark:text-white">
          View
          <ArrowUpRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </motion.div>
  );
}

function MoreProjectsTile() {
  return (
    <div className="row-line hover-band grid grid-cols-12 items-center gap-4 py-6">
      <span className="col-span-2 md:col-span-1 eyebrow tabular-nums text-[#9a9a9a]">99</span>
      <div className="col-span-10 md:col-span-11">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">More Projects</h3>
        <p className="text-sm mt-1 text-[#4e4e4e] dark:text-[#9a9a9a]">
          Coming soon — always building, always learning.
        </p>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl p-8 border bg-white dark:bg-[#111113] border-[#d2d2d2] dark:border-white/10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-[#666] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <span className="eyebrow text-[#666] dark:text-[#9a9a9a]">{project.category}</span>
        <h3 className="text-2xl md:text-3xl font-extrabold mt-3 mb-3 tracking-tight">
          {project.name}
        </h3>
        <p className="text-sm mb-6 leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]">
          {project.description}
        </p>

        {project.features && (
          <div className="mb-6">
            <h4 className="eyebrow text-[#666] dark:text-[#9a9a9a] mb-3">Key Features</h4>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feat) => (
                <span
                  key={feat}
                  className="text-sm px-3 py-1.5 rounded-lg border border-[#d2d2d2] dark:border-white/15 text-[#3d3d3d] dark:text-[#c9c9cc]"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <h4 className="eyebrow text-[#666] dark:text-[#9a9a9a] mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1.5 rounded-lg border border-[#d2d2d2] dark:border-white/15 text-[#3d3d3d] dark:text-[#c9c9cc]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {project.githubUrl && project.githubUrl !== "PLACEHOLDER_GITHUB_URL" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-solid px-5 py-2.5"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "PLACEHOLDER_LIVE_DEMO" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pill pill-outline px-5 py-2.5"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

const FILTERS = ["All", "Full-Stack", "AI"];

export default function Projects() {
  const { ref, controls } = useScrollReveal();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const visibleProjects =
    filter === "All" ? projects : projects.filter((p) => p.filter === filter);
  const featured = visibleProjects.find((p) => p.featured);
  const rest = visibleProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0C0C0E]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="03">Selected Work</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05]"
          >
            Recent projects that<br />
            <span className="text-primary">solve real problems.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-14 flex flex-wrap items-center gap-8 border-b border-[#d2d2d2] dark:border-white/10"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`eyebrow text-[11px] pb-3 -mb-px border-b-2 transition-colors duration-200 ${
                  filter === f
                    ? "border-primary text-[#1a1a1a] dark:text-white"
                    : "border-transparent text-[#666] dark:text-[#8A8A8E] hover:text-[#1a1a1a] dark:hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          <div key={filter} className="mt-10 space-y-0">
            {featured && <FeaturedProject project={featured} onOpen={setSelected} />}

            {rest.length > 0 && (
              <div className={featured ? "mt-12" : ""}>
                {rest.map((project, i) => (
                  <WorkRow
                    key={project.id}
                    project={project}
                    number={i + (featured ? 2 : 1)}
                    onOpen={setSelected}
                  />
                ))}
              </div>
            )}

            {filter === "All" && <MoreProjectsTile />}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}