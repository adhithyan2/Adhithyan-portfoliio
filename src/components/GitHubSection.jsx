import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, Database } from "lucide-react";
import { openSourceProjects, socials } from "../data/portfolioData";
import { useTheme } from "../hooks/useTheme";
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "../hooks/useScrollReveal";

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

function LanguageBars({ languages, theme }) {
  const entries = Object.entries(languages).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0);

  return (
    <div className="mb-6">
      <div
        className="h-1.5 w-full rounded-full overflow-hidden flex"
        style={{ background: theme === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)" }}
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
      <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 mt-2.5">
        {entries.map(([lang, bytes]) => (
          <span key={lang} className="flex items-center gap-1.5 text-xs">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: LANG_COLORS[lang] || "#8B5CF6" }}
            />
            <span className={theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"}>
              {lang} {Math.round((bytes / total) * 100)}%
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const { theme } = useTheme();
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
      updated: repo.updated_at,
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
            Repositories
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-16 tracking-tight"
          >
            {repos ? "Live From GitHub." : "Featured Repos."}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reposToShow.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={scaleIn}
                custom={i + 2}
                className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                  theme === "dark"
                    ? "bg-[#111113] border border-white/[0.06] hover:border-primary/30"
                    : "bg-white border border-black/[0.06] shadow-sm hover:shadow-md hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-base font-bold tracking-tight group-hover:text-primary transition-colors">
                    {repo.name}
                  </h3>
                  <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${
                    theme === "dark"
                      ? "bg-white/[0.06] text-[#8A8A8E]"
                      : "bg-black/[0.04] text-[#6B6B70]"
                  }`}>
                    {repo.language}
                  </span>
                </div>
                <p className={`text-sm mb-6 leading-relaxed ${
                  theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
                }`}>
                  {repo.description || "No description provided yet."}
                </p>
                {repo.languages && <LanguageBars languages={repo.languages} theme={theme} />}
                <div className={`flex items-center gap-4 text-xs ${
                  theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
                }`}>
                  <span className="flex items-center gap-1">
                    <Star size={14} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} /> {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          {error && (
            <motion.p
              variants={fadeUp}
              custom={6}
              className={`mt-6 flex items-center gap-2 text-xs ${
                theme === "dark" ? "text-[#8A8A8E]" : "text-[#6B6B70]"
              }`}
            >
              <Database size={14} /> Couldn't reach GitHub API — showing placeholders. The repos load live on most visitors' devices.
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}