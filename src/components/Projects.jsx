import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronRight, X } from "lucide-react";
import { projects } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import TiltCard from "./TiltCard";
import SectionLabel from "./SectionLabel";

function ProjectPlaceholder({ name, className = "" }) {
  const initials = name.replace(/[^a-zA-Z ]/g, "").split(/\s+/).filter(Boolean).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-primary/20 via-primary/5 to-transparent ${className}`}>
      <span className="text-primary/40 text-5xl font-bold select-none">{initials}</span>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const { theme } = useTheme();

  if (project.featured) {
    return (
      <TiltCard className="col-span-1 md:col-span-2 lg:col-span-3" maxTilt={4}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: (index - 3) * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
          onClick={() => onOpen(project)}
          className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 glass-card ${
            theme === "dark"
              ? "hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,212,170,0.08)]"
              : "hover:border-primary/30 shadow-sm hover:shadow-lg"
          }`}
        >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 h-56 md:h-auto min-h-[280px] relative overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => { e.target.style.display = "none"; e.target.parentNode.classList.add('hidden-fallback'); }}
              />
            ) : null}
            <ProjectPlaceholder name={project.name} className="w-full h-full absolute inset-0" />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-primary text-[#0A0A0B] text-xs font-semibold rounded-lg">
                FEATURED
              </span>
            </div>
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
              {project.name}
            </h3>
            <p className={`text-sm md:text-base mb-6 leading-relaxed ${
              theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
            }`}>
              {project.tagline}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-1 text-xs rounded-md font-medium ${
                    theme === "dark"
                      ? "bg-white/[0.06] text-[#8A8A8E]"
                      : "bg-black/[0.04] text-[#6B6B70]"
                  }`}
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 5 && (
                <span className={`px-2.5 py-1 text-xs rounded-md font-medium ${
                  theme === "dark" ? "bg-white/[0.06] text-[#8A8A8E]" : "bg-black/[0.04] text-[#6B6B70]"
                }`}>
                  +{project.stack.length - 5}
                </span>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View Details <ChevronRight size={16} />
              </span>
            </div>
          </div>
        </div>
        </motion.div>
      </TiltCard>
    );
  }

  return (
    <TiltCard maxTilt={6}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: (index - 3) * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
        onClick={() => onOpen(project)}
        className={`group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 glass-card ${
          theme === "dark"
            ? "hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(0,212,170,0.08)]"
            : "hover:border-primary/30 shadow-sm hover:shadow-lg"
        }`}
      >
      <div className="h-48 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        ) : null}
        <ProjectPlaceholder name={project.name} className="w-full h-full absolute inset-0" />
      </div>
      <div className="p-6">
        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          {project.category}
        </span>
        <h3 className="text-lg font-bold mt-2 mb-2 tracking-tight">
          {project.name}
        </h3>
        <p className={`text-sm mb-4 leading-relaxed ${
          theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
        }`}>
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-2 py-1 text-xs rounded-md font-medium ${
                theme === "dark"
                  ? "bg-white/[0.06] text-[#8A8A8E]"
                  : "bg-black/[0.04] text-[#6B6B70]"
              }`}
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className={`px-2 py-1 text-xs rounded-md font-medium ${
              theme === "dark" ? "bg-white/[0.06] text-[#8A8A8E]" : "bg-black/[0.04] text-[#6B6B70]"
            }`}>
              +{project.stack.length - 3}
            </span>
          )}
        </div>
        <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details <ChevronRight size={16} />
        </span>
      </div>
      </motion.div>
    </TiltCard>
  );
}

function ProjectModal({ project, onClose }) {
  const { theme } = useTheme();

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
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl p-8 ${
          theme === "dark"
            ? "bg-[#111113] border border-white/[0.08]"
            : "bg-white border border-black/[0.08] shadow-xl"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <span className="text-primary text-xs font-semibold tracking-widest uppercase">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-2 tracking-tight">
          {project.name}
        </h3>
        <p className={`text-sm mb-6 leading-relaxed ${
          theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
        }`}>
          {project.description}
        </p>

        {project.problem && project.solution && (
          <div className={`mb-6 rounded-xl p-5 ${
            theme === "dark" ? "bg-white/[0.03]" : "bg-black/[0.02]"
          }`}>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              The Business Problem
            </h4>
            <p className="text-sm mb-3">{project.problem}</p>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              How I Solved It
            </h4>
            <p className="text-sm mb-3">{project.solution}</p>
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              The Result
            </h4>
            <p className="text-sm">{project.result}</p>
            {project.metrics && (
              <div className="flex flex-wrap gap-6 mt-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold text-primary">{m.value}</div>
                    <div className={`text-xs ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {project.features && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Key Features
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feat) => (
                <span
                  key={feat}
                  className={`px-3 py-1.5 text-sm rounded-lg font-medium ${
                    theme === "dark"
                      ? "bg-white/[0.06] text-[#8A8A8E]"
                      : "bg-black/[0.04] text-[#6B6B70]"
                  }`}
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 text-sm rounded-lg font-medium ${
                  theme === "dark"
                    ? "bg-primary/10 text-primary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {project.githubUrl && project.githubUrl !== "PLACEHOLDER_GITHUB_URL" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Github size={16} /> GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "PLACEHOLDER_LIVE_DEMO" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-[#0A0A0B] font-semibold text-sm rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MoreProjectsTile() {
  const { theme } = useTheme();

  return (
    <div
      className={`rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-8 min-h-[280px] transition-all duration-300 ${
        theme === "dark"
          ? "border-white/10 hover:border-primary/30"
          : "border-black/10 hover:border-primary/30"
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
        theme === "dark" ? "bg-white/[0.06]" : "bg-black/[0.04]"
      }`}>
        <ChevronRight size={24} className="text-primary" />
      </div>
      <h3 className="text-lg font-bold mb-2">More Projects</h3>
      <p className={`text-sm text-center ${theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}`}>
        More projects coming soon. Always building, always learning.
      </p>
    </div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");
  const { ref, controls } = useScrollReveal();

  const filters = ["All", "Full-Stack", "AI"];
  const visibleProjects =
    filter === "All" ? projects : projects.filter((p) => p.filter === filter);

  return (
    <section id="projects" className="py-24 md:py-32">
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
            <SectionLabel index="03">Projects</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-10 tracking-tight"
          >
            Things I've Built.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex flex-wrap items-center gap-2 mb-14"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                  filter === f
                    ? "bg-primary text-[#0A0A0B] shadow-[0_4px_20px_rgba(0,212,170,0.25)]"
                    : theme === "dark"
                    ? "bg-white/[0.06] text-[#8A8A8E] hover:bg-white/[0.1] hover:text-white"
                    : "bg-black/[0.04] text-[#6B6B70] hover:bg-black/[0.08] hover:text-[#0A0A0B]"
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>

          <div key={filter} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + 3}
                onOpen={setSelected}
              />
            ))}
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
