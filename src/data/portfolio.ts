export const portfolioData = {
  // Personal Information
  personal: {
    name: "Om Mistry",
    title: "Frontend Developer",
    location: "Ahmedabad, Gujarat",
    email: "mistryom024@gmail.com",
    phone: "+91 93136 52019",
    experience: "1.5+",
    projectsCount: "10+",
    technologiesCount: "5+",
  },

  // Hero Section
  hero: {
    greeting: "Hi, I'm",
    name: "Om Mistry",
    title: "Frontend Developer",
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
      "I'm a passionate Frontend Developer with 1.5+ years of experience building real-world applications using React, TypeScript, and modern frontend tools.",
      "I focus on creating clean UI, optimizing performance, and building scalable architecture that delivers exceptional user experiences.",
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
          { name: "React", level: 90 },
          { name: "TypeScript", level: 85 },
          { name: "Next.js", level: 80 },
          { name: "JavaScript", level: 95 },
        ],
      },
      {
        name: "Styling",
        color: "from-purple-500 to-pink-500",
        skills: [
          { name: "Tailwind CSS", level: 90 },
          { name: "CSS3", level: 85 },
          { name: "Sass", level: 75 },
          { name: "Styled Components", level: 70 },
        ],
      },
      {
        name: "Tools & Others",
        color: "from-green-500 to-emerald-500",
        skills: [
          { name: "Git", level: 85 },
          { name: "Webpack", level: 70 },
          { name: "REST APIs", level: 80 },
          { name: "Responsive Design", level: 95 },
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
        title: "E-Commerce Platform",
        description:
          "Full-featured online store with cart, checkout, and admin panel",
        image: "/projects/ecommerce.jpg",
        tech: ["React", "TypeScript", "Tailwind", "Node.js"],
        status: "Live",
        links: {
          live: "https://example.com",
          github: "https://github.com",
        },
      },
      {
        id: 2,
        title: "Task Management App",
        description:
          "Collaborative project management tool with real-time updates",
        image: "/projects/taskapp.jpg",
        tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        status: "In Development",
        links: {
          live: "https://example.com",
          github: "https://github.com",
        },
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather app with location-based forecasts",
        image: "/projects/weather.jpg",
        tech: ["React", "JavaScript", "CSS3", "Weather API"],
        status: "Live",
        links: {
          live: "https://example.com",
          github: "https://github.com",
        },
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
        value: "mistryom024@gmail.com",
        href: "mailto:mistryom024@gmail.com?subject=Portfolio Contact&body=Hi Om, I'm interested in discussing a project with you.",
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
        href: "https://github.com/",
        icon: "github",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: "linkedin",
      },
    ],
    cta: {
      title: "Ready to hire me?",
      description:
        "I'm available for full-time roles, freelance work, and long-term projects. Let's discuss how I can help bring your ideas to life.",
      email:
        "mailto:mistryom024@gmail.com?subject=Portfolio Contact&body=Hi Om, I'm interested in discussing a project with you.",
      resume: "/resume/Om_Mistry_Resume.pdf",
      responseTime: "Usually within 24 hours",
    },
  },

  // Tour Guide
  tour: {
    steps: [
      {
        target: "hero",
        text: "Welcome! This is my portfolio. Let me show you around.",
      },
      { target: "about", text: "Learn about my experience and skills here." },
      { target: "skills", text: "Check out my technical expertise." },
      { target: "projects", text: "Explore my real-world projects." },
      {
        target: "contact",
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
