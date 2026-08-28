import {
  profile,
  socials,
  skills,
  projects,
  timeline,
  services,
  achievements,
  openSourceProjects,
} from "./portfolioData";

export function buildPortfolioContext() {
  const sections = [];

  sections.push(`# About Adhithiyan Prabaharan
- Name: ${profile.name}
- Role: ${profile.role}
- Tagline: ${profile.tagline}
- Education: ${profile.education}
- Location: ${profile.location}
- Email: ${socials.email}
- GitHub: ${socials.github}
- LinkedIn: ${socials.linkedin}`);

  sections.push(`# Skills
- Programming: ${skills.programming.join(", ")}
- Frontend: ${skills.frontend.join(", ")}
- Backend: ${skills.backend.join(", ")}
- Database: ${skills.database.join(", ")}
- Tools & Platforms: ${skills.tools.join(", ")}
- Areas of Interest: ${skills.interests.join(", ")}`);

  sections.push(`# Projects
${projects
  .map(
    (p) =>
      `- ${p.name} (${p.category}${p.featured ? ", FEATURED" : ""}): ${p.tagline}. Description: ${p.description}. Tech stack: ${p.stack.join(", ")}.`
  )
  .join("\n")}`);

  sections.push(`# Experience / Journey
${timeline
  .map((t, i) => `- ${i + 1}. ${t.stage} - ${t.title}: ${t.description}`)
  .join("\n")}`);

  sections.push(`# Services Offered
${services.map((s) => `- ${s.title}: ${s.description}`).join("\n")}`);

  sections.push(`# Achievements
${achievements
  .map((a) => `- ${a.label}: ${a.value}`)
  .join("\n")}`);

  sections.push(`# Open Source Projects
${openSourceProjects
  .map((r) => `- ${r.name}: ${r.description} (${r.language})`)
  .join("\n")}`);

  sections.push(`# Professional summary
Adhithiyan is a B.Tech Computer Science and Business Systems (CSBS) student at Jansons Institute of Technology who builds software that solves real problems. He works on full-stack web development, AI-powered applications, and open-source software. He values clean code, thoughtful design, and continuous learning.`);

  return sections.join("\n\n");
}