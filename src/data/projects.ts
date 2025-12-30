export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "BoiFate AI",
    description:
      "AI-powered medical analytics platform with real-time insights and secure user flows.",
    tech: ["React", "TypeScript", "Firebase", "Payment Gateway", "REST APIs"],
    highlights: [
      "Built complete frontend architecture using React",
      "Implemented Firebase authentication and onboarding flow",
      "Integrated payment gateway for subscriptions",
      "Connected real-time APIs for medical analytics",
    ],
    liveUrl: "#",
  },
  {
    title: "Bug Nova",
    description:
      "Bug tracking and team collaboration tool with role-based access and CRUD workflows.",
    tech: ["React", "NestJS", "TypeScript", "Redux"],
    highlights: [
      "Developed full UI, routing, and role-based access system",
      "Built and integrated CRUD APIs using NestJS",
      "Handled team collaboration and permission flows",
      "Owned major frontend and backend features",
    ],
    liveUrl: "#",
  },
  {
    title: "AI Chatbot",
    description:
      "Interactive AI chatbot with real-time responses using Google AI APIs.",
    tech: ["React", "JavaScript", "Google AI APIs"],
    highlights: [
      "Designed responsive and interactive chat UI",
      "Integrated Google AI APIs for real-time responses",
      "Improved response accuracy and user experience",
    ],
  },
];
