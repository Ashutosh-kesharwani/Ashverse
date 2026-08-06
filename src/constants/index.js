import {
  ashverse,
  backend,
  cdss,
  cpp,
  cravio,
  express,
  git,
  javascript,
  mongodb,
  mysql,
  nodejs,
  postman,
  python,
  reactjs,
  tailwind,
  web,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "highlights", title: "Highlights" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Full Stack Development", icon: web },
  { title: "React Ecosystem", icon: reactjs },
  { title: "Backend & APIs", icon: backend },
];

export const technologies = [
  { name: "JavaScript", icon: javascript },
  { name: "C++", icon: cpp },
  { name: "Python", icon: python },
  { name: "React.js", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "Express.js", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
  { name: "Postman", icon: postman },
];

export const experiences = [
  {
    title: "Junior Associate – IT",
    company_name: "OctaScale Technologies Pvt. Ltd. · Prayagraj, India",
    icon: backend,
    iconBg: "#383E56",
    date: "Jun 2025 – Jul 2026",
    points: [
      "Resolved production-level issues in a Ruby on Rails MVC system, debugging REST APIs and SQL queries to maintain shipment-data accuracy.",
      "Tracked Jira tickets and delivered production-ready Git-based fixes in collaboration with cross-functional teams.",
    ],
  },
  {
    title: "Freelance Full Stack Developer (Project-Based)",
    company_name: "Self-Employed · Remote",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2023 – Present",
    points: [
      "Designed and built full-stack MERN applications tailored to client requirements, owning architecture, UI, and database design end-to-end.",
      "Delivered responsive, production-ready features through REST APIs using Node.js and MongoDB for multiple clients.",
    ],
  },
];

export const projects = [
  {
    name: "Cravio – Food Ordering Platform",
    image: cravio,
    description:
      "MERN food-ordering platform with discovery, cart and wishlist, Stripe Checkout, live order tracking, and an admin dashboard.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Stripe", color: "pink-text-gradient" },
    ],
    live_link: "https://cravio-mern.vercel.app/",
  },

  {
    name: "AshVerse – Personal Portfolio",
    image: ashverse,
    description:
      "Interactive portfolio with responsive sections, Three.js scenes, Framer Motion animations, and an EmailJS contact flow.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Three.js", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "pink-text-gradient" },
    ],
    live_link: "https://ashverse.vercel.app/",
  },

  {
    name: "Clinical Decision Support System (CDSS)",
    image: cdss,
    description:
      "Healthcare support interface that sends clinical inputs to ML APIs and returns real-time classification predictions.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "HTML/CSS", color: "pink-text-gradient" },
      { name: "ML APIs", color: "blue-text-gradient" },
    ],
  },
];

export const achievements = [
  "Top 10, U Hack 3.0 Hackathon (2024) for the Clinical Decision Support System.",
  "Delivered multiple full-stack freelance projects with positive client feedback.",
];

export const certifications = [
  "Web Development – IIIT Allahabad",
  "Machine Learning – IIIT Allahabad",
  "MongoDB – UCER",
];

export const education = [
  {
    institution: "United College of Engineering and Research, Prayagraj",
    detail:
      "B.Tech, Computer Science and Engineering · 2021 – 2025 · CGPA: 7.5",
  },
  {
    institution: "Vishnu Bhagwan Public School, Prayagraj",
    detail: "Class XII (CBSE) · 2020 · 92.6%",
  },
];
