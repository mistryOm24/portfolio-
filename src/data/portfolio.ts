export const portfolioData = {
  // Personal Information
  personal: {
    name: "Om Mistry",
    title: "Frontend Developer",
    location: "Ahmedabad, Gujarat",
    email: "mistryom18@gmail.com",
    phone: "+91 93136 52019",
    experience: "1.5+",
    projectsCount: "10+",
    technologiesCount: "5+",
  },

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    name: "Om Mistry",
    title: "Software Developer | Software Engineer ",
    description:
      "I build exceptional digital experiences with modern web technologies. Passionate about creating clean, performant, and user-focused applications.",
    cta: {
      primary: "View My Work",
      secondary: "Get In Touch",
    },
  },

  // About Section
  about: {
    title: "About Me",
    description: [
      "I am a Software Developer with 1.5+ years of experience in building scalable web applications using JavaScript, TypeScript, React.js, Node.js, Express.js, MongoDB, and REST APIs. I have worked on multiple live projects and have experience with Redux Toolkit, Firebase, and modern web technologies. I am passionate about developing high-quality software and continuously learning new technologies. I would be excited to contribute my skills and grow with Saawahi IT Solution LLP.",
    ],
    stats: [
      { value: "1.5+", label: "Years Experience", color: "text-blue-400" },
      { value: "10+", label: "Projects Built", color: "text-purple-400" },
      { value: "5+", label: "Technologies", color: "text-green-400" },
    ],
    features: [
      {
        title: "Clean Code",
        description: "Writing maintainable code",
        gradient: "from-blue-500 to-purple-500",
      },
      {
        title: "Performance",
        description: "Optimized user experience",
        gradient: "from-purple-500 to-pink-500",
      },
      {
        title: "User-Focused",
        description: "Intuitive interfaces",
        gradient: "from-green-500 to-blue-500",
      },
    ],
  },

  // Skills Section
  skills: {
    title: "Technical Skills",
    categories: [
      {
        name: "Frontend",
        color: "from-blue-500 to-cyan-500",
        skills: [
          { name: "HTML5", level: 90 },
          { name: "JavaScript (ES6+)", level: 95 },
          { name: "TypeScript", level: 85 },
          { name: "React.js", level: 90 },
          { name: "Next.js", level: 80 },
          { name: "React Router", level: 90 },
          { name: "Redux Toolkit", level: 90 },
          { name: "Zustand", level: 80 },
          { name: "Node.js", level: 80 },
          { name: "Express.js", level: 80 },
          { name: "NestJS", level: 75 },
          { name: "REST APIs", level: 85 },
          { name: "MongoDB", level: 80 },
          { name: "SQL", level: 75 },
          { name: "Firebase", level: 85 },
          { name: "Supabase", level: 75 },
        ],
      },
      {
        name: "Styling & UI",
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "CSS3", level: 85 },
          { name: "Tailwind CSS", level: 90 },
          { name: "Bootstrap", level: 80 },
          { name: "Sass", level: 75 },
          { name: "Material UI", level: 85 },
          { name: "Shadcn/UI", level: 90 },
          { name: "Styled Components", level: 70 },
          { name: "Responsive Design", level: 95 },
        ],
      },
      {
        name: "Tools & Others",
        color: "from-green-500 to-emerald-500",
        skills: [
          { name: "Git", level: 85 },
          { name: "GitHub", level: 85 },
          { name: "Postman", level: 85 },
          { name: "Webpack", level: 70 },
          { name: "Vite", level: 85 },
          { name: "npm", level: 85 },
          { name: "VS Code", level: 95 },
          { name: "Notion", level: 80 },
        ],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    list: [
      {
        id: 1,
        title: "BoiFate AI",
        category: "professional",
        description:
          "AI-powered medical analytics platform with real-time insights and secure user flows.",
        tech: [
          "React",
          "TypeScript",
          "Firebase",
          "Payment Gateway",
          "REST APIs",
        ],
        highlights: [
          "Built complete frontend architecture using React",
          "Implemented Firebase authentication and onboarding flow",
          "Integrated payment gateway for subscriptions",
          "Connected real-time APIs for medical analytics",
        ],
        links: {
          live: "https://biofateai1.web.app",
          github: "",
        },
      },
      {
        id: 2,
        title: "Bug Nova",
        category: "professional",
        description:
          "Bug tracking and team collaboration tool with role-based access and CRUD workflows.",
        tech: ["React", "NestJS", "TypeScript", "Redux"],
        highlights: [
          "Developed full UI, routing, and role-based access system",
          "Built and integrated CRUD APIs using NestJS",
          "Handled team collaboration and permission flows",
          "Owned major frontend and backend features",
        ],
        links: {
          live: "",
          github: "",
        },
      },
      {
        id: 3,
        title: "Personal Project",
        category: "personal",
        description: "Something cool is brewing here. Stay tuned!",
        tech: [],
        highlights: [],
        links: { live: "", github: "" },
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Let's Work Together",
    subtitle:
      "I'm currently open to frontend or full-stack opportunities. If you have a project, role, or idea, feel free to reach out.",
    methods: [
      {
        label: "Email",
        value: "mistryom18@gmail.com",
        href: "mailto:mistryom18@gmail.com?subject=Portfolio Contact&body=Hi Om, I'm interested in discussing a project with you.",
        color: "from-blue-500 to-cyan-500",
      },
      {
        label: "Phone",
        value: "+91 93136 52019",
        href: "tel:+919313652019",
        color: "from-green-500 to-emerald-500",
      },
      {
        label: "Location",
        value: "Ahmedabad, Gujarat",
        href: null,
        color: "from-purple-500 to-pink-500",
      },
    ],
    social: [
      {
        name: "GitHub",
        href: "https://github.com/mistriom",
        icon: "github",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/om-mistri-1857a8234",
        icon: "linkedin",
      },
      {
        name: "HackerRank",
        href: "https://www.hackerrank.com/profile/mistryom18",
        icon: "hackerrank",
      },
      {
        name: "Leetcode",
        href: "https://leetcode.com/u/code_om",
        icon: "leetcode",
      },
    ],
    cta: {
      title: "Ready to hire me?",
      description:
        "I'm available for full-time roles, freelance work, and long-term projects. Let's discuss how I can help bring your ideas to life.",
      email:
        "mailto:mistryom18@gmail.com?subject=Portfolio Contact&body=Hi Om, I'm interested in discussing a project with you.",
      resume: "/resume/Om_Mistry_Resume.pdf",
      responseTime: "Usually within 24 hours",
    },
  },

  // Tour Guide
  tour: {
    steps: [
      {
        target: "hero-name",
        text: "Welcome! This is my portfolio. Let me show you around.",
      },
      {
        target: "about-title",
        text: "Learn about my experience and skills here.",
      },
      { target: "skills-title", text: "Check out my technical expertise." },
      { target: "projects-title", text: "Explore my real-world projects." },
      {
        target: "contact-get-in-touch",
        text: "Ready to connect? Find my contact info here.",
      },
    ],
  },

  // Chatbot
  chatbot: {
    greeting:
      "Hi! I'm Om's AI assistant. Ask me about his skills, projects, or experience!",
    responses: {
      skills:
        "Om specializes in React, TypeScript, Next.js, and Tailwind CSS with 1.5+ years of experience.",
      projects:
        "He's built 10+ projects including e-commerce platforms, dashboards, and web applications.",
      experience:
        "Om has 1.5+ years of frontend development experience with real-world applications.",
      contact:
        "You can reach Om through the contact section below or connect on LinkedIn!",
    },
  },
};
