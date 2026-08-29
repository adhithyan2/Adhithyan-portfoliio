import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ArrowUpRight, Database } from "lucide-react";
import { openSourceProjects, socials } from "../data/portfolioData";
import { useScrollReveal, fadeUp, staggerContainer } from "../hooks/useScrollReveal";
import SectionLabel from "./SectionLabel";

const GH_USERNAME = "adhithyan2";

const LANG_COLORS = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "Jupyter Notebook": "#DA5B0B",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  Markdown: "#083fa1",
  PHP: "#4F5D95",
  Go: "#00ADD8",
  Rust: "#dea584",
  Dart: "#00B4AB",
  Swift: "#F05138",
  Vue: "#41b883",
  Kotlin: "#A97BFF",
};

function LanguageBars({ languages }) {
  const entries = Object.entries(languages).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

  return (
    <div className="mt-4">
      <div
        className="h-1 w-full overflow-hidden flex rounded-full"
        style={{ background: "rgba(128,128,128,0.15)" }}
      >
        {entries.map(([lang, bytes]) => (
          <span
            key={lang}
            style={{
              width: `${(bytes / total) * 100}%`,
              background: LANG_COLORS[lang] || "#8B5CF6",
            }}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-x-3.5 gap-y-1 mt-2">
        {entries.map(([lang, bytes]) => (
          <span key={lang} className="eyebrow text-[10px] flex items-center gap-1.5 text-[#9a9a9a]">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: LANG_COLORS[lang] || "#8B5CF6" }}
            />
            {lang} {Math.round((bytes / total) * 100)}%
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const { ref, controls } = useScrollReveal();
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const normalize = (repo) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language || "—",
      stars: repo.stargazers_count ?? 0,
      forks: repo.forks_count ?? 0,
      url: repo.html_url || socials.github,
      languages: repo._languages || null,
    });

    fetch(`https://api.github.com/users/${GH_USERNAME}/repos?sort=updated&per_page=6`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API ${r.status}`);
        return r.json();
      })
      .then(async (data) => {
        if (cancelled) return;
        if (!Array.isArray(data) || data.length === 0) {
          setError(true);
          return;
        }
        const langResults = await Promise.all(
          data.map((repo) =>
            fetch(`https://api.github.com/repos/${GH_USERNAME}/${repo.name}/languages`)
              .then((r) => (r.ok ? r.json() : null))
              .catch(() => null)
          )
        );
        if (cancelled) return;
        setRepos(
          data.map((repo, i) => {
            const langs = langResults[i];
            if (!langs || Object.keys(langs).length < 2) {
              return normalize({ ...repo, _languages: null });
            }
            return normalize({ ...repo, _languages: langs });
          })
        );
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const reposToShow = repos || openSourceProjects;

  return (
    <section id="repositories" className="py-24 md:py-32 bg-[#FAFAFA] dark:bg-[#0C0C0E]">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp}>
            <SectionLabel index="07">Repositories</SectionLabel>
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6"
          >
            {repos ? "Live from GitHub." : "Featured repositories."}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base md:text-lg mb-16 max-w-2xl leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a]"
          >
            Open-source work and experiments — built in public, shipped for real users.
          </motion.p>

          <div>
            {reposToShow.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i + 3}
                className="row-line hover-band group block grid grid-cols-12 gap-4 py-6"
              >
                <span className="col-span-2 md:col-span-1 eyebrow tabular-nums text-[#9a9a9a] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <h3 className="text-base md:text-lg font-extrabold tracking-tight group-hover:text-primary transition-colors">
                      {repo.name}
                    </h3>
                    <span className="pill-outline eyebrow text-[10px] px-2.5 py-0.5">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#4e4e4e] dark:text-[#9a9a9a] mt-1 max-w-2xl">
                    {repo.description || "No description provided yet."}
                  </p>
                  {repo.languages && <LanguageBars languages={repo.languages} />}
                  <div className="flex items-center gap-4 mt-3">
                    <span className="eyebrow text-[11px] tabular-nums text-[#9a9a9a] flex items-center gap-1.5">
                      <Star size={13} /> {repo.stars}
                    </span>
                    <span className="eyebrow text-[11px] tabular-nums text-[#9a9a9a] flex items-center gap-1.5">
                      <GitFork size={13} /> {repo.forks}
                    </span>
                    <span className="ml-auto eyebrow text-[11px] text-[#666] dark:text-[#9a9a9a] flex items-center gap-1 group-hover:text-primary transition-colors">
                      View <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {error && (
            <motion.p
              variants={fadeUp}
              custom={8}
              className="eyebrow text-[11px] mt-6 flex items-center gap-2 text-[#9a9a9a]"
            >
              <Database size={14} /> Couldn't reach GitHub API — showing placeholders. The repos load live on most visitors' devices.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}