export interface Experience {
  id: string;
  role: string;
  organization: string;
  type: "Stage" | "Professionnel" | "Académique" | "Indépendant";
  location: string;
  start: string;
  end: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  keyAchievement?: string;
}

export const experiences: Experience[] = [
  {
    id: "technicien-edtech",
    role: "Technicien Informatique & Intégrateur EdTech",
    organization: "Établissement Scolaire",
    type: "Stage",
    location: "Taza, Maroc",
    start: "2023-09",
    end: "2025-06",
    current: false,
    summary:
      "Stage long terme (2 ans) axé sur la gestion du système d'information de l'établissement et le déploiement d'outils numériques éducatifs.",
    responsibilities: [
      "Gestion et maintenance préventive du parc informatique (serveurs, postes clients, périphériques et réseau local).",
      "Optimisation et administration des plateformes numériques éducatives et des espaces numériques de travail.",
      "Résolution proactive des incidents techniques matériels et logiciels avec un haut taux de disponibilité.",
      "Accompagnement pédagogique et technique du corps professoral pour l'adoption des solutions EdTech.",
      "Configuration et sécurisation des accès réseau et application des politiques de sauvegarde des données.",
    ],
    technologies: [
      "Systèmes & Réseaux",
      "Maintenance SI",
      "EdTech",
      "Moodle",
      "Windows/Linux",
      "Support Utilisateurs",
    ],
    keyAchievement:
      "Digitalisation des salles de cours et réduction drastique des temps d'indisponibilité du réseau scolaire.",
  },
  {
    id: "dev-club-sportif",
    role: "Développeur Logiciel & Web Full-Stack",
    organization: "Projet Club Sportif & Projets Numériques",
    type: "Indépendant",
    location: "Taza, Maroc",
    start: "2024-01",
    end: "2025-02",
    current: false,
    summary:
      "Conception architecturale et réalisation technique d'une plateforme web sur mesure pour la gestion associative et sportive.",
    responsibilities: [
      "Analyse du besoin fonctionnel, rédaction du cahier des charges et modélisation des entités relationnelles.",
      "Développement backend en Java avec gestion sécurisée des sessions et transactions SQL.",
      "Conception d'une interface utilisateur intuitive et réactive en JavaScript Vanilla et CSS moderne.",
      "Tests d'intégration, optimisation des temps de réponse et documentation utilisateur.",
    ],
    technologies: ["Java", "SQL", "JavaScript", "HTML5/CSS3", "Git", "Figma"],
    keyAchievement:
      "Plateforme complète opérationnelle avec automatisation du suivi des membres et des plannings.",
  },
  {
    id: "concepteur-serious-game",
    role: "Concepteur Développeur de Jeux Sérieux",
    organization: "Projet de Recherche & Développement Académique",
    type: "Académique",
    location: "Maroc",
    start: "2024-03",
    end: "2024-07",
    current: false,
    summary:
      "Création d'une application didactique interactive pour collégiens associant programmation web et sciences de l'apprentissage.",
    responsibilities: [
      "Conception du scénario pédagogique et des mécaniques de gamification adaptées aux élèves du secondaire.",
      "Développement de modules interactifs de simulation sous JavaScript moderne avec rendus dynamiques.",
      "Intégration d'évaluations formatives avec score et rétroaction personnalisée en temps réel.",
      "Mesure de l'impact motivationnel et de la rétention des connaissances scientifiques.",
    ],
    technologies: ["JavaScript", "Gamification", "Canvas", "EdTech", "Didactique des Sciences"],
    keyAchievement:
      "Application plébiscitée lors des présentations académiques pour son ergonomie et sa valeur pédagogique.",
  },
];
