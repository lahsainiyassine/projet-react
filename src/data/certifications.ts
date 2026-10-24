export type Certification = {
  title: string;
  issuer: string;
  issueDate: string; // "YYYY-MM"
  expiryDate?: string; // "YYYY-MM"
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
  description?: string;
};

export const certifications: Certification[] = [
  {
    title: "Prompt Engineering & Generative AI for Developers",
    issuer: "DeepLearning.AI / OpenAI",
    issueDate: "2024-11",
    credentialId: "AI-PE-2024-8891",
    credentialUrl:
      "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
    skills: [
      "Prompt Engineering",
      "LLM APIs",
      "Few-Shot Learning",
      "Chain-of-Thought",
      "EdTech AI",
    ],
    tags: ["IA", "Prompting", "EdTech", "Python"],
    image: "/certs/ai-prompt-engineering.svg",
    imageAlt: "Badge AI Prompt Engineering Specialist",
    status: "active",
    description:
      "Certification de maîtrise des techniques de prompting avancé, intégration d'APIs LLMs et conception d'assistants conversationnels éducatifs.",
  },
  {
    title: "Java SE Professional Developer & Architecture",
    issuer: "Oracle University & IT Certification",
    issueDate: "2024-06",
    credentialId: "ORCL-JSE-49102",
    credentialUrl: "https://education.oracle.com/",
    skills: ["Java SE", "Programmation Orientée Objet", "Design Patterns", "SQL", "Clean Code"],
    tags: ["Java", "Backend", "Génie Logiciel"],
    image: "/certs/java-developer.svg",
    imageAlt: "Badge Java Software Engineer",
    status: "active",
    description:
      "Validation des compétences approfondies en conception orientée objet, manipulation avancée des collections, multithreading et persistance de données.",
  },
  {
    title: "Moodle LMS Administrator & Course Designer",
    issuer: "Moodle Academy International",
    issueDate: "2024-02",
    credentialId: "MDL-ADM-2024-019",
    credentialUrl: "https://moodle.academy/",
    skills: ["Moodle LMS", "Administration Système", "Norme SCORM", "Scénarisation Pédagogique"],
    tags: ["Moodle", "EdTech", "LMS", "E-learning"],
    image: "/certs/moodle-admin.svg",
    imageAlt: "Badge Moodle Administrator",
    status: "active",
    description:
      "Administration de plateformes d'apprentissage en ligne, gestion des flux d'inscriptions, déploiement de plugins et paramétrage des évaluations.",
  },
  {
    title: "Conception de Jeux Sérieux & Articulate Storyline",
    issuer: "EdTech Innovation Certification",
    issueDate: "2023-10",
    credentialId: "EDT-SER-9941",
    credentialUrl: "https://articulate.com/",
    skills: ["Articulate Storyline", "Genially", "H5P", "Gamification", "UX Pédagogique"],
    tags: ["EdTech", "Serious Games", "Gamification"],
    image: "/certs/edtech-storyline.svg",
    imageAlt: "Badge Serious Games & EdTech Design",
    status: "active",
    description:
      "Ingénierie de modules interactifs gamifiés, gestion des variables et déclencheurs complexes, et intégration de mécaniques ludo-éducatives.",
  },
  {
    title: "Modern Web Development: JavaScript & React UI",
    issuer: "Meta Professional Training",
    issueDate: "2023-05",
    credentialId: "META-WEB-55421",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    skills: [
      "JavaScript ES6+",
      "HTML5 Semantic",
      "CSS3 / Tailwind",
      "React Components",
      "REST API",
    ],
    tags: ["Web", "Frontend", "JavaScript", "React"],
    image: "/certs/web-dev.svg",
    imageAlt: "Badge Modern Web Development",
    status: "active",
    description:
      "Développement d'interfaces web réactives, modulaires et accessibles selon les standards modernes du W3C.",
  },
];
