export type ProjectCategory =
  | "Tous"
  | "Web & Full-Stack"
  | "EdTech & Serious Games"
  | "Intelligence Artificielle"
  | "Logiciel & Systèmes";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  category: ProjectCategory;
  tags: string[];
  summary: string;
  description: string;
  features: string[];
  link?: string;
  repo?: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "club-sportif",
    title: "Plateforme Club Sportif",
    subtitle: "Conception & Développement Full-Stack",
    period: "2024 - 2025",
    category: "Web & Full-Stack",
    featured: true,
    tags: ["Java", "SQL", "JavaScript", "HTML/CSS", "Full-Stack", "Architecture MVC"],
    summary:
      "Plateforme web complète pour la gestion intégrale d'un club : adhérents, plannings, cotisations et interfaces interactives.",
    description:
      "Conception et développement complet d'une application web pour automatiser les opérations d'un club de sport. Modélisation de la base de données relationnelle, développement des contrôleurs backend en Java et implémentation d'une interface frontend responsive et dynamique en JavaScript.",
    features: [
      "Gestion centralisée des membres, inscriptions et cotisations",
      "Tableau de bord dynamique pour les entraîneurs et administrateurs",
      "Calendrier interactif des événements et séances d'entraînement",
      "Architecture de base de données relationnelle normalisée (SQL)",
    ],
    repo: "https://github.com/yassine-lahsaini/club-sportif-platform",
  },
  {
    id: "task-management",
    title: "Task Management System",
    subtitle: "Développeur Logiciel & Architecture",
    period: "2024",
    category: "Logiciel & Systèmes",
    featured: true,
    tags: ["Java", "SQL", "HTML5", "CSS3", "JavaScript", "Dashboard"],
    summary:
      "Plateforme de gestion de tâches collaborative avec authentification sécurisée et tableau de bord analytique.",
    description:
      "Plateforme logicielle collaborative permettant aux équipes de suivre leurs projets en toute simplicité. Dotée d'un module d'authentification robuste, d'un tableau de bord avec indicateurs de progression et d'une gestion granulaire des permissions d'accès.",
    features: [
      "Système d'authentification chiffré et gestion des rôles",
      "Vue Kanban et organisation des tâches par priorités",
      "Statistiques d'avancement et métriques de productivité",
      "Persistance relationnelle avec requêtes SQL optimisées",
    ],
    repo: "https://github.com/yassine-lahsaini/task-management-system",
  },
  {
    id: "jeux-serieux",
    title: "Application Interactive (Jeux Sérieux)",
    subtitle: "Concepteur & Développeur EdTech",
    period: "2024",
    category: "EdTech & Serious Games",
    featured: true,
    tags: ["JavaScript", "Gamification", "Jeux Sérieux", "Pédagogie", "EdTech", "Canvas"],
    summary:
      "Application ludo-éducative interactive pour collégiens dédiée à l'apprentissage des sciences par la simulation.",
    description:
      "Création d'un jeu sérieux immersif conçu pour les élèves de collège afin de rendre l'enseignement scientifique intuitif et captivant. Alliant principes didactiques et mécaniques de gamification, l'application favorise l'apprentissage actif par l'expérimentation virtuelle.",
    features: [
      "Scénarisation didactique par niveaux progressifs",
      "Simulations interactives et animations ludiques",
      "Système de récompenses et badges de réussite",
      "Évaluation formative avec rétroaction immédiate",
    ],
    repo: "https://github.com/yassine-lahsaini/serious-game-science",
  },
  {
    id: "edtech-moodle",
    title: "Dispositif E-Learning & Modules H5P",
    subtitle: "Ingénierie Pédagogique & LMS",
    period: "2023 - 2025",
    category: "EdTech & Serious Games",
    featured: false,
    tags: ["Moodle", "Articulate Storyline", "Genially", "H5P", "SCORM", "Didactique"],
    summary:
      "Déploiement d'un espace LMS Moodle avec modules interactifs Storyline et contenus enrichis H5P.",
    description:
      "Mise en place d'un environnement d'apprentissage numérique personnalisé sur Moodle. Création de modules interactifs auto-rythmés via Articulate Storyline et enrichissement des activités avec Genially et H5P pour maximiser l'engagement des apprenants.",
    features: [
      "Configuration et personnalisation du LMS Moodle",
      "Exportation et intégration de paquets compatibles SCORM",
      "Conception d'activités pédagogiques interactives (QCM, drag-and-drop)",
      "Suivi fin des compétences et rapports de progression",
    ],
  },
  {
    id: "ia-education",
    title: "Assistant IA & Prompt Engineering Éducatif",
    subtitle: "Système d'Accompagnement Didactique",
    period: "2025",
    category: "Intelligence Artificielle",
    featured: false,
    tags: ["Prompt Engineering", "IA Générative", "Python", "LLMs", "EdTech"],
    summary:
      "Solutions d'IA générative et prompts avancés pour l'assistance pédagogique et la génération de matériel didactique.",
    description:
      "Projet exploratoire et appliqué d'ingénierie de prompts et d'agents IA pour le secteur éducatif. Automatisation de la création de grilles d'évaluation, remédiation personnalisée pour les élèves en difficulté et génération de synthèses de cours adaptatives.",
    features: [
      "Templates de prompts optimisés (Few-Shot, Chain-of-Thought)",
      "Générateur automatique d'exercices différenciés",
      "Interface d'interaction pour formateurs et apprenants",
      "Alignement avec les référentiels pédagogiques officiels",
    ],
    repo: "https://github.com/yassine-lahsaini/ai-edtech-prompts",
  },
];
