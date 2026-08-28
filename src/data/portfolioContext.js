import {
  profile,
  socials,
  skills,
  projects,
  timeline,
} from "./portfolioData";

export function buildPortfolioContext() {
  const sections = [];

  sections.push(`About: ${profile.name} — ${profile.role}, ${profile.education}. Tagline: "${profile.tagline}". Contact: email ${socials.email}, GitHub ${socials.github}, LinkedIn ${socials.linkedin}.`);

  sections.push(`Projects: ${projects
    .map(
      (p) =>
        `${p.name} (${p.category}${p.featured ? ", featured" : ""}): ${p.tagline} Stack: ${p.stack.join(", ")}.`
    )
    .join(" | ")}`);

  sections.push(`Skills: Programming ${skills.programming.join(", ")} | Frontend ${skills.frontend.join(", ")} | Backend ${skills.backend.join(", ")} | Database ${skills.database.join(", ")} | Tools ${skills.tools.join(", ")} | Interests ${skills.interests.join(", ")}.`);

  sections.push(`Journey: ${timeline.map((t) => `${t.title}: ${t.description}`).join(" | ")}`);

  return sections.join("\n");
}