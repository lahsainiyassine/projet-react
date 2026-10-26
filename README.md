# Portfolio React Pro — Yassine LAHSAINI



## 📁 Structure du Projet

```text
projet-portfolio/
├── public/
│   ├── avatar.jpg                 # Photo de profil détourée
│   ├── cv-yassine-lahsaini.jpg    # CV original consultable / téléchargeable
│   ├── certs/                     # Badges officiels de certifications (SVG)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── RootLayout.tsx         # Layout global avec barre de navigation & footer
│   │   └── router.tsx             # Définition des routes React Router
│   ├── components/
│   │   ├── ui/                    # Composants UI (Button, Card, Badge, Input, Textarea, Avatar)
│   │   ├── CertificationCard.tsx  # Carte de certification avec badge et vérification
│   │   └── ThemeToggle.tsx        # Sélecteur Thème Clair / Sombre
│   ├── data/
│   │   ├── profile.ts             # Données personnelles, bio, compétences, contact
│   │   ├── projects.ts            # Projets web, logiciels, IA et EdTech
│   │   ├── experience.ts          # Parcours professionnel (stage, missions)
│   │   ├── education.ts           # Diplômes (Master, Licence ESEF, Baccalauréat)
│   │   └── certifications.ts      # Certifications avec ID, dates, compétences
│   ├── lib/
│   │   └── utils.ts               # Utilitaire cn (clsx + tailwind-merge)
│   ├── pages/
│   │   ├── Home.tsx               # Page d'accueil Hero, stats, résumé et projets phares
│   │   ├── Projects.tsx           # Page projets avec filtres de catégories et recherche
│   │   ├── Experience.tsx         # Chronologie des expériences professionnelles
│   │   ├── Education.tsx          # Chronologie des formations académiques
│   │   ├── Certifications.tsx     # Page certifications avec filtres et tri
│   │   └── Contact.tsx            # Formulaire de contact et coordonnées directes
│   ├── index.css                  # Styles Tailwind CSS et variables de thème
│   └── main.tsx                   # Point d'entrée avec HelmetProvider et RouterProvider
├── index.html                     # Racine HTML Vite avec polices et métadonnées
├── package.json
├── tailwind.config.js
├── tsconfig.json                  # Configuration TypeScript avec alias @/*
└── vercel.json                    # Configuration de réécriture SPA pour Vercel


le lien de portfolio : 
https://portfolio-yassine-theta.vercel.app/


