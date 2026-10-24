export interface Profile {
  name: string;
  role: string;
  subtitle: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
  cvUrl: string;
  socials: {
    label: string;
    href: string;
    icon: string;
  }[];
  about: string;
  bioDetails: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  softSkills: string[];
  languages: {
    name: string;
    level: string;
    stars: number;
  }[];
  interests: string[];
  stats: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
}

export const profile: Profile = {
  name: "Yassine LAHSAINI",
  role: "Développeur Informatique & Ingénieur EdTech",
  subtitle:
    "Conception de solutions logicielles, plateformes interactives et intégration de l'IA pour l'éducation.",
  location: "Taza, Maroc",
  phone: "+212 638 859 482",
  email: "lahsainiyassine29@gmail.com",
  avatar: "/avatar.jpg",
  cvUrl: "/cv-yassine-lahsaini.jpg",
  socials: [
    { label: "GitHub", href: "https://github.com/yassine-lahsaini", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yassine-lahsaini", icon: "linkedin" },
    { label: "Email", href: "mailto:lahsainiyassine29@gmail.com", icon: "mail" },
    { label: "Téléphone", href: "tel:+212638859482", icon: "phone" },
  ],
  about:
    "Récemment diplômé en Informatique et actuellement en Master d'Ingénierie Éducative, je combine expertise technique et vision pédagogique. Passionné par l'intégration de l'IA et le développement logiciel, je vise à concevoir des systèmes d'information et des dispositifs d'apprentissage innovants. Rigoureux et créatif, je souhaite apporter de la valeur ajoutée à des projets numériques ambitieux.",
  bioDetails: [
    "Expertise en développement Full-Stack (Java, JavaScript, SQL, architectures logicielles modulaires).",
    "Spécialiste de la conception et du déploiement de solutions EdTech (LMS Moodle, Scénarisation pédagogique).",
    "Intégration d'outils d'Intelligence Artificielle générative et Prompt Engineering dans les flux éducatifs.",
    "Expérience concrète de 2 ans en gestion de parc informatique et maintenance préventive en établissement scolaire.",
  ],
  skills: [
    {
      category: "Langages & Développement",
      items: [
        "Java",
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "PHP",
        "C / C++",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "React",
      ],
    },
    {
      category: "Bases de Données & Backend",
      items: [
        "SQL (MySQL/PostgreSQL)",
        "MongoDB",
        "Architecture REST",
        "Modélisation relationnelle",
        "POO & Design Patterns",
      ],
    },
    {
      category: "EdTech & Ingénierie Pédagogique",
      items: [
        "Moodle (LMS)",
        "Articulate Storyline",
        "Genially / H5P",
        "Jeux Sérieux (Serious Games)",
        "Didactique Numérique",
      ],
    },
    {
      category: "Intelligence Artificielle & Outils",
      items: [
        "Prompt Engineering (LLM)",
        "Automatisation IA",
        "Figma",
        "Canva",
        "Git & GitHub",
        "Trello",
        "Jira",
        "Notion",
      ],
    },
  ],
  softSkills: [
    "Esprit d'équipe & Collaboration",
    "Autonomie & Résolution de problèmes",
    "Gestion du temps & Organisation",
    "Rigueur & Sens du détail",
    "Adaptabilité & Agilité",
    "Créativité & Innovation pédagogique",
  ],
  languages: [
    { name: "Arabe", level: "Langue maternelle", stars: 5 },
    { name: "Français", level: "Courant / Professionnel", stars: 5 },
    { name: "Anglais", level: "Intermédiaire technique", stars: 3 },
  ],
  interests: [
    "Innovation Pédagogique & EdTech",
    "Intelligence Artificielle & LLMs",
    "Veille Technologique & Open Source",
    "UX/UI Design & Expérience Utilisateur",
  ],
  stats: [
    { label: "Expérience", value: "2 Ans+", sublabel: "En établissement scolaire" },
    { label: "Formation", value: "Master", sublabel: "Ingénierie Éducative & IA" },
    { label: "Projets", value: "10+", sublabel: "Académiques & Personnels" },
    { label: "Compétences", value: "15+", sublabel: "Technologies & Outils" },
  ],
};
