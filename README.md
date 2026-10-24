# Portfolio React Pro — Yassine LAHSAINI

Portfolio moderne, responsive et performant développé avec **React**, **Vite**, **TypeScript**, **Tailwind CSS** et des composants inspirés de **shadcn/ui**.

Ce portfolio présente le profil, les réalisations, le parcours et les certifications de **Yassine LAHSAINI**, Développeur Informatique & Ingénieur EdTech.

---

## 🚀 Fonctionnalités Clés

- **⚡ Stack Ultra-Rapide** : Propulsé par Vite 6 + React 18 + TypeScript strict.
- **🎨 UI Moderne & Épurée** : Tailwind CSS avec design system complet (palette light/dark, glassmorphism, typographie soignée).
- **🌓 Mode Sombre / Clair** : Basculement dynamique avec mémorisation dans le `localStorage` et détection des préférences système.
- **🧭 Routage Multi-Pages SPA** : Gestion fluide avec `react-router-dom` (Home, Projets, Parcours, Formations, Certifications, Contact) + configuration SPA Vercel (`vercel.json`).
- **🗂️ Données 100% Centralisées** : Tout le contenu est découplé dans `src/data/*` (`profile.ts`, `projects.ts`, `experience.ts`, `education.ts`, `certifications.ts`).
- **🏅 Page Certifications Interactive** : Recherche en direct, filtrage par compétences/mots-clés, tri par date ou titre, et badges SVG vectoriels haute définition.
- **📱 Responsive & Accessible** : Menu tiroir mobile, contrastes respectés, accessibilité ARIA et navigation au clavier.
- **🔍 SEO & Données Structurées** : Balises dynamiques par page (`react-helmet-async`) et métadonnées JSON-LD (Schema.org `Person`, `EducationalOrganization`, `EducationalOccupationalCredential`).
- **✉️ Formulaire de Contact & Téléchargement CV** : Formulaire interactif et accès direct au CV original.

---

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
```

---

## 🛠️ Commandes Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

| Commande | Action |
| :--- | :--- |
| `npm run dev` | Lance le serveur de développement local (`http://localhost:5173`) |
| `npm run build` | Vérifie le typage TypeScript (`tsc -b`) et compile pour la production (`vite build`) |
| `npm run preview` | Prévisualise localement le build de production |
| `npm run lint` | Analyse le code avec ESLint pour détecter d'éventuelles erreurs |
| `npm run format` | Formate l'ensemble du projet avec Prettier |

---

## 🌐 Déploiement sur Vercel (CI Automatique)

1. Initialiser le dépôt Git et commiter les modifications :
   ```bash
   git add .
   git commit -m "feat: portfolio pro Yassine LAHSAINI v1.0"
   git branch -M main
   ```
2. Lier votre dépôt GitHub :
   ```bash
   git remote add origin https://github.com/<votre-utilisateur>/projet-portfolio.git
   git push -u origin main
   ```
3. Rendez-vous sur [Vercel](https://vercel.com) :
   - Cliquez sur **Add New...** > **Project**.
   - Importez le dépôt GitHub `projet-portfolio`.
   - Vercel détecte automatiquement le framework **Vite**.
   - Build Command : `npm run build`
   - Output Directory : `dist`
   - Cliquez sur **Deploy**.

Grâce au fichier `vercel.json` inclus dans le projet, le routage SPA fonctionne immédiatement sans aucune erreur 404 lors du rechargement des pages internes (`/projects`, `/experience`, etc.).
