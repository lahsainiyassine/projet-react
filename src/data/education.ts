export interface Education {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  current?: boolean;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
  description?: string;
}

export const education: Education[] = [
  {
    school: "Université & Faculté des Sciences de l'Éducation",
    degree: "Master",
    field: "Didactique & Ingénierie Éducative (Option : Technologies émergentes en éducation)",
    location: "Maroc",
    start: "2025-09",
    end: "2027-07",
    current: true,
    courses: [
      "Technologies émergentes en éducation & IA",
      "Conception de dispositifs de formation et e-learning",
      "Didactique numérique & Scénarisation pédagogique",
      "Méthodologie de recherche en ingénierie éducative",
      "Évaluation des apprentissages assistée par le numérique",
    ],
    highlights: [
      "Option d'excellence : Technologies émergentes en éducation et IA appliquée",
      "Projets de recherche sur l'intégration des LLMs et Serious Games en contexte scolaire",
    ],
    description:
      "Formation de haut niveau alliant sciences cognitives, ingénierie pédagogique avancée et technologies logicielles de pointe pour concevoir les dispositifs éducatifs de demain.",
  },
  {
    school: "École Supérieure de l'Éducation et de la Formation (ESEF)",
    degree: "Licence",
    field: "Informatique",
    location: "Maroc",
    start: "2022-09",
    end: "2025-07",
    current: false,
    courses: [
      "Algorithmique avancée et POO (Java, C/C++)",
      "Bases de Données Relationnelles & SQL",
      "Développement Web Full-Stack (JS, PHP, HTML/CSS)",
      "Architecture Réseaux & Systèmes d'Information",
      "Génie Logiciel & Modélisation UML",
    ],
    highlights: [
      "Diplômé en Informatique avec mention",
      "Projets pratiques d'envergure en développement logiciel et architectures web",
      "Stage pratique de 2 ans en environnement éducatif réel",
    ],
    description:
      "Cursus intensif axé sur les fondamentaux de l'informatique, le génie logiciel moderne et l'application des technologies numériques à l'apprentissage.",
  },
  {
    school: "Lycée d'Enseignement Secondaire Qualifiant",
    degree: "Baccalauréat",
    field: "Sciences Physiques",
    location: "Taza, Maroc",
    start: "2020-09",
    end: "2021-06",
    current: false,
    courses: [
      "Physique-Chimie appliquée",
      "Mathématiques approfondies",
      "Sciences de la Vie et de la Terre",
      "Philosophie et Langues",
    ],
    highlights: [
      "Baccalauréat scientifique obtenu avec mention",
      "Solide socle en raisonnement logique et modélisation mathématique",
    ],
    description:
      "Formation scientifique rigoureuse consolidant les compétences d'analyse quantitative et de logique déductive.",
  },
];
