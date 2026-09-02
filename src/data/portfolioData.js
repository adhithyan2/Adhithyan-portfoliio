export const profile = {
  name: "Adhithiyan Prabaharan",
  role: "Full-Stack Developer",
  // Hero headline is now a client-first value prop.
  headlineA: "Get a Website That",
  headlineB: "Brings You More",
  headlineAccent: "Customers.",
  tagline: "Building Digital Products That Solve Real Problems.",
  // Client-first sub-line (plain language, for small businesses).
  subtitle:
    "I build fast, mobile-friendly websites, booking systems and smart tools for shops, clinics, salons, restaurants and service businesses — so you get found online and booked more.",
  education: "B.Tech Computer Science and Business Systems (CSBS), Jansons Institute of Technology",
  location: "India",
  resumeUrl: "#",
  avatarUrl: "/assets/profile.png",
  // Availability signal for freelancing.
  availability: "Currently accepting new projects",
};

export const socials = {
  github: "https://github.com/adhithyan2",
  linkedin: "https://www.linkedin.com/in/adhithyan-prabaharan-bb9632318",
  email: "adhithiyanprabaharan@gmail.com",
  // Security: personal WhatsApp number intentionally NOT exposed publicly.
  // Visitors reach via email/contact form. Keep empty.
  whatsapp: "",
  phone: "",
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
    image: "/assets/projects/queuebook.png",
    featured: true,
    // Client-first case-study framing (local businesses)
    problem:
      "Customers were walking into busy salons and clinics with no way to book ahead, so they'd either wait long or leave — and businesses lost walk-ins every day.",
    solution:
      "An appointment + queue management system with a simple booking page, live queue status, and auto-reminders via WhatsApp/SMS.",
    result: "Customers can book in seconds. Staff see the full day at a glance. No more lost walk-ins.",
    metrics: [
      { value: "100%", label: "Online booking" },
      { value: "0", label: "Lost walk-ins" },
    ],
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
    image: "/assets/projects/namma-uzhavan.png",
    featured: false,
    problem:
      "Farmers and local agro-suppliers had no easy way to find market prices, weather info or the right services — everything was scattered and word-of-mouth.",
    solution:
      "A mobile-friendly platform combining market price data, weather updates and a local service directory in one place.",
    result: "Farmers get the info they need in one tap, in their own language.",
    metrics: [
      { value: "1", label: "Place for everything" },
      { value: "24/7", label: "Access on any phone" },
    ],
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
    image: "/assets/projects/fac.png",
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
    image: "/assets/projects/ai-meeting-buddy.png",
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
    image: "/assets/projects/templatemind.png",
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
    image: "/assets/projects/smart-traffic.png",
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
  { title: "Business Websites", description: "A clean, fast website for your shop, clinic, restaurant or salon — so customers can find you on Google and trust you instantly.", icon: "Globe", shown: true },
  { title: "Appointment & Booking Systems", description: "Let customers book online (saloons, clinics, consultants) instead of calling — fewer missed calls, no double-booking.", icon: "Calendar", shown: true },
  { title: "Online Order / Enquiry Forms", description: "Turn casual visitors into leads with a simple enquiry, quote or order form that sends messages straight to your WhatsApp or email.", icon: "Layers", shown: true },
  { title: "Landing Pages & Ads", description: "A focused one-page site or landing page for a new product, offer or ad campaign — built to convert visitors into customers.", icon: "Rocket", shown: true },
  { title: "Admin Dashboards", description: "See your bookings, enquiries, customers and business data in one clean dashboard instead of notebooks and spreadsheets.", icon: "LayoutDashboard", shown: true },
  { title: "Custom / Business Software", description: "Tailor-made tools for your specific business process that off-the-shelf apps can't do — from inventory to client management.", icon: "Cog", shown: true },
  // Technical services kept but de-emphasised for local-business focus
  { title: "Full-Stack Web Applications", description: "End-to-end web applications with modern frontend, robust backend, and scalable databases.", icon: "Database", shown: false },
  { title: "Database-Driven Applications", description: "Applications built around well-designed data models and efficient database operations.", icon: "Database", shown: false },
  { title: "AI-Powered Web Applications", description: "Integrating AI and ML capabilities into web products for smarter user experiences.", icon: "Brain", shown: false },
  { title: "API Integration", description: "Connecting third-party services and building RESTful APIs to power your applications.", icon: "Plug", shown: false },
];

export const achievements = [
  { label: "Projects Built", value: "6+" },
  { label: "Full-Stack Development", value: "✓" },
  { label: "AI & Automation", value: "✓" },
  { label: "Open Source", value: "✓" },
  { label: "Continuous Learning", value: "∞" },
];

export const openSourceProjects = [
  { name: "queuebook", description: "Appointment & queue management system — book online, track live queue status, reduce wait times.", stars: 0, forks: 0, language: "JavaScript", url: "https://github.com/adhithyan2/queuebook" },
  { name: "TemplateMind-AI", description: "AI-powered PDF content editing that preserves fonts, alignment, tables and layout.", stars: 0, forks: 0, language: "Python", url: "https://github.com/adhithyan2/TemplateMind-AI" },
  { name: "namma-uzhavan", description: "Technology-driven digital platform with agricultural information and services for farmers.", stars: 0, forks: 0, language: "HTML", url: "https://github.com/adhithyan2/namma-uzhavan" },
  { name: "Agroshield", description: "Smart agriculture project focused on real-world farming challenges.", stars: 0, forks: 0, language: "HTML", url: "https://github.com/adhithyan2/Agroshield" },
  { name: "AI-Meeting-Buddy", description: "AI assistant that captures, organizes and processes meeting information.", stars: 0, forks: 0, language: "Python", url: "https://github.com/adhithyan2/AI-Meeting-Buddy." },
  { name: "Adhithyan-portfoliio", description: "This very portfolio — a React + Vite site with a custom AI chat assistant.", stars: 0, forks: 0, language: "JavaScript", url: "https://github.com/adhithyan2/Adhithyan-portfoliio" },
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
