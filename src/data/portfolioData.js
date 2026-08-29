export const profile = {
  name: "Adhithiyan Prabaharan",
  role: "Full-Stack Developer",
  tagline: "Building Digital Products That Solve Real Problems.",
  subtitle: "CSBS Student • Full-Stack Developer • AI Enthusiast • Open-Source Builder",
  education: "B.Tech Computer Science and Business Systems (CSBS), Jansons Institute of Technology",
  location: "India",
  resumeUrl: "#",
  avatarUrl: "/assets/profile.png",
};

export const socials = {
  github: "https://github.com/adhithyan2",
  linkedin: "https://www.linkedin.com/in/adhithyan-prabaharan-bb9632318",
  email: "adhithiyanprabaharan@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Open Source", href: "#opensource" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  programming: ["Python", "Java", "C++", "JavaScript"],
  frontend: ["React.js", "Vite", "Tailwind CSS", "HTML", "CSS", "React Router", "Framer Motion"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  database: ["MongoDB", "MySQL"],
  tools: ["Git", "GitHub", "Firebase", "VS Code"],
  interests: ["Full-Stack Development", "Artificial Intelligence", "Machine Learning", "UI/UX", "Automation", "Open Source"],
};

export const projects = [
  {
    id: "queuebook",
    name: "QueueBook",
    category: "Full-Stack Web Application",
    filter: "Full-Stack",
    tagline: "An appointment and queue management platform that eliminates physical waiting.",
    description:
      "An appointment and queue management platform that helps users book services, track live queue status, estimate waiting time, and manage appointments without physically waiting in line.",
    features: [
      "Appointment Booking",
      "Live Queue Status",
      "Estimated Waiting Time",
      "Customer Dashboard",
      "Business Dashboard",
      "Appointment History",
      "Notifications",
      "QR-based Queue Info",
      "Service Discovery",
    ],
    stack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase/JWT", "Socket.IO"],
    githubUrl: "PLACEHOLDER_GITHUB_URL",
    liveUrl: "PLACEHOLDER_LIVE_DEMO",
    image: "/assets/projects/queuebook.svg",
    featured: true,
  },
  {
    id: "namma-uzhavan",
    name: "Namma Uzhavan",
    category: "Smart Agriculture / Real-World Problem Solving",
    filter: "Full-Stack",
    tagline: "Technology-driven solutions for farmers.",
    description:
      "An agriculture-focused digital platform designed to provide useful technology-driven solutions for farmers and improve access to agricultural information and services.",
    features: [
      "Agricultural Information Hub",
      "Market Price Data",
      "Weather Integration",
      "Farmer Community",
      "Service Directory",
    ],
    stack: ["React.js", "Node.js", "REST APIs", "MongoDB", "AI Features"],
    githubUrl: "PLACEHOLDER_GITHUB_URL",
    liveUrl: "PLACEHOLDER_LIVE_DEMO",
    image: "/assets/projects/namma-uzhavan.svg",
    featured: false,
  },
  {
    id: "fac",
    name: "FAC — Facial Attendance Checker",
    category: "AI / Computer Vision",
    filter: "AI",
    tagline: "Automate attendance with facial recognition.",
    description:
      "A facial recognition based attendance system designed to automate attendance management using computer vision.",
    features: [
      "Real-time Face Detection",
      "Face Encoding & Matching",
      "Attendance Logging",
      "Admin Dashboard",
      "Batch Processing",
    ],
    stack: ["Python", "OpenCV", "Face Recognition", "Flask"],
    githubUrl: "PLACEHOLDER_GITHUB_URL",
    liveUrl: null,
    image: "/assets/projects/fac.svg",
    featured: false,
  },
  {
    id: "ai-meeting-buddy",
    name: "AI Meeting Buddy",
    category: "Artificial Intelligence",
    filter: "AI",
    tagline: "Your AI-powered meeting productivity assistant.",
    description:
      "An AI-powered productivity concept designed to assist users during meetings by helping capture, organize, and process important meeting information.",
    features: [
      "Meeting Notes Generation",
      "Action Item Extraction",
      "Topic Categorization",
      "Searchable Meeting History",
      "Smart Summaries",
    ],
    stack: ["Python", "AI/ML", "APIs", "React"],
    githubUrl: "PLACEHOLDER_GITHUB_URL",
    liveUrl: null,
    image: "/assets/projects/ai-meeting-buddy.svg",
    featured: false,
  },
  {
    id: "templatemind",
    name: "TemplateMind AI",
    category: "AI / Document Technology",
    filter: "AI",
    tagline: "Edit the content. Keep the design.",
    description:
      "An AI-powered document editing and generation concept focused on modifying PDF content while preserving the original document's fonts, alignment, colors, tables, headers, footers, and overall layout.",
    features: [
      "PDF Content Editing",
      "Layout Preservation",
      "Font & Color Matching",
      "Table Structure Maintained",
      "AI-powered Generation",
    ],
    stack: ["React", "Tailwind CSS", "Python", "FastAPI", "PyMuPDF", "pdfplumber", "ReportLab", "AI APIs"],
    githubUrl: "PLACEHOLDER_GITHUB_URL",
    liveUrl: "PLACEHOLDER_LIVE_DEMO",
    image: "/assets/projects/templatemind.svg",
    featured: false,
  },
  {
    id: "smart-traffic",
    name: "Smart Traffic Management System",
    category: "Smart City / AI",
    filter: "AI",
    tagline: "Intelligent traffic flow for smarter cities.",
    description:
      "A smart traffic management project concept focused on using technology and intelligent systems to improve traffic flow and urban transportation.",
    features: [
      "Traffic Pattern Analysis",
      "Signal Optimization",
      "Real-time Monitoring",
      "Predictive Modeling",
      "Dashboard Visualization",
    ],
    stack: ["Python", "AI/ML", "IoT Concepts", "Data Visualization"],
    githubUrl: "PLACEHOLDER_GITHUB_URL",
    liveUrl: null,
    image: "/assets/projects/smart-traffic.svg",
    featured: false,
  },
];

export const timeline = [
  {
    stage: "Foundation",
    title: "Programming Fundamentals",
    description: "Started with core programming concepts, learning problem-solving approaches and computational thinking.",
  },
  {
    stage: "Languages",
    title: "Python, Java & C++",
    description: "Built strong foundations across multiple programming paradigms — object-oriented, functional, and procedural.",
  },
  {
    stage: "Data & Web",
    title: "Databases & Web Development",
    description: "Dove into MongoDB, MySQL, HTML, CSS, and JavaScript — understanding how data flows through web applications.",
  },
  {
    stage: "Real Products",
    title: "Building Real-World Applications",
    description: "Transitioned from tutorials to shipping actual products — solving real problems for real users.",
  },
  {
    stage: "Full Stack",
    title: "Full-Stack Projects",
    description: "Mastered end-to-end development with React, Node.js, Express, and database design across multiple projects.",
  },
  {
    stage: "AI & Beyond",
    title: "AI, Automation & Open Source",
    description: "Exploring AI-powered applications, automation, and building toward an open-source freelancer ecosystem.",
  },
];

export const services = [
  { title: "Business Websites", description: "Professional, fast-loading websites tailored for businesses that need an effective online presence.", icon: "Globe" },
  { title: "Portfolio Websites", description: "Personal portfolio sites that showcase your work and tell your story with style.", icon: "User" },
  { title: "Full-Stack Web Applications", description: "End-to-end web applications with modern frontend, robust backend, and scalable databases.", icon: "Layers" },
  { title: "Landing Pages", description: "High-converting landing pages designed to capture attention and drive action.", icon: "Rocket" },
  { title: "Admin Dashboards", description: "Clean, intuitive admin panels for managing data, users, and business operations.", icon: "LayoutDashboard" },
  { title: "Appointment & Booking Systems", description: "Custom scheduling and queue management solutions like QueueBook.", icon: "Calendar" },
  { title: "Database-Driven Applications", description: "Applications built around well-designed data models and efficient database operations.", icon: "Database" },
  { title: "AI-Powered Web Applications", description: "Integrating AI and ML capabilities into web products for smarter user experiences.", icon: "Brain" },
  { title: "API Integration", description: "Connecting third-party services and building RESTful APIs to power your applications.", icon: "Plug" },
  { title: "Custom Software Solutions", description: "Bespoke software built to solve specific business problems that off-the-shelf tools can't.", icon: "Cog" },
];

export const achievements = [
  { label: "Projects Built", value: "6+" },
  { label: "Full-Stack Development", value: "✓" },
  { label: "AI & Automation", value: "✓" },
  { label: "Open Source", value: "✓" },
  { label: "Continuous Learning", value: "∞" },
];

export const openSourceProjects = [
  { name: "queuebook-core", description: "Core engine for the QueueBook appointment & queue management system", stars: 0, forks: 0, language: "JavaScript", url: "#", image: "/assets/projects/queuebook.svg" },
  { name: "template-mind", description: "AI-powered PDF content editing while preserving layout", stars: 0, forks: 0, language: "Python", url: "#", image: "/assets/projects/templatemind.svg" },
  { name: "fac-toolkit", description: "Facial recognition attendance toolkit — plug-and-play", stars: 0, forks: 0, language: "Python", url: "#", image: "/assets/projects/fac.svg" },
];

export const activityData = [
  { week: -52, count: 0 }, { week: -51, count: 0 }, { week: -50, count: 0 }, { week: -49, count: 1 },
  { week: -48, count: 0 }, { week: -47, count: 0 }, { week: -46, count: 2 }, { week: -45, count: 0 },
  { week: -44, count: 0 }, { week: -43, count: 1 }, { week: -42, count: 0 }, { week: -41, count: 0 },
  { week: -40, count: 3 }, { week: -39, count: 0 }, { week: -38, count: 0 }, { week: -37, count: 1 },
  { week: -36, count: 0 }, { week: -35, count: 2 }, { week: -34, count: 0 }, { week: -33, count: 0 },
  { week: -32, count: 1 }, { week: -31, count: 0 }, { week: -30, count: 0 }, { week: -29, count: 4 },
  { week: -28, count: 0 }, { week: -27, count: 1 }, { week: -26, count: 0 }, { week: -25, count: 0 },
  { week: -24, count: 2 }, { week: -23, count: 0 }, { week: -22, count: 3 }, { week: -21, count: 0 },
  { week: -20, count: 1 }, { week: -19, count: 0 }, { week: -18, count: 0 }, { week: -17, count: 2 },
  { week: -16, count: 0 }, { week: -15, count: 1 }, { week: -14, count: 0 }, { week: -13, count: 3 },
  { week: -12, count: 0 }, { week: -11, count: 0 }, { week: -10, count: 2 }, { week: -9, count: 1 },
  { week: -8, count: 0 }, { week: -7, count: 4 }, { week: -6, count: 0 }, { week: -5, count: 1 },
  { week: -4, count: 2 }, { week: -3, count: 0 }, { week: -2, count: 1 }, { week: -1, count: 3 },
];
