import { useState, useMemo } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ExternalLink, FolderGit2, CheckCircle2, Sparkles, Layers } from "lucide-react";

const categories: ProjectCategory[] = [
  "Tous",
  "Web & Full-Stack",
  "EdTech & Serious Games",
  "Intelligence Artificielle",
  "Logiciel & Systèmes",
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = selectedCategory === "Tous" || project.category === selectedCategory;
      const matchesSearch = [project.title, project.subtitle, project.summary, ...project.tags]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-500">
      <Helmet>
        <title>Projets — Yassine LAHSAINI | Portfolio</title>
        <meta
          name="description"
          content="Découvrez les projets de développement logiciel, applications EdTech, Serious Games et intégration IA réalisés par Yassine LAHSAINI."
        />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Portfolio &amp; Réalisations
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
          Projets &amp; Applications
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Sélection de solutions logicielles complètes, plateformes web, applications
          ludo-éducatives (Serious Games) et prototypes d'IA appliqués à l'éducation.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="rounded-full text-xs transition-all"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            placeholder="Rechercher (ex: Java, EdTech, IA)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 text-xs rounded-xl"
            aria-label="Filtrer les projets"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center border rounded-2xl bg-card space-y-3">
          <Layers className="w-10 h-10 text-muted-foreground mx-auto" />
          <h3 className="font-bold text-lg">Aucun projet trouvé</h3>
          <p className="text-sm text-muted-foreground">
            Essayez de modifier votre mot-clé de recherche ou sélectionnez une autre catégorie.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedCategory("Tous");
              setSearchQuery("");
            }}
          >
            Réinitialiser les filtres
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="tech" className="text-[11px]">
                    {p.category}
                  </Badge>
                  {p.period && (
                    <span className="text-xs font-mono text-muted-foreground">{p.period}</span>
                  )}
                </div>

                <div>
                  <h2 className="font-extrabold text-xl text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-xs font-semibold text-primary/90 mt-0.5">{p.subtitle}</p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.description}
                </p>

                {p.features && p.features.length > 0 && (
                  <div className="space-y-1.5 pt-2 border-t border-border/50">
                    <span className="text-[11px] font-bold text-foreground block">
                      Points Clés :
                    </span>
                    <ul className="space-y-1 text-xs text-muted-foreground">
                      {p.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[11px] font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
                {p.repo ? (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
                    aria-label={`Code source de ${p.title}`}
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>Code GitHub</span>
                  </a>
                ) : (
                  <span className="text-muted-foreground text-xs italic">
                    Projet Académique / Privé
                  </span>
                )}

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-foreground hover:text-primary hover:underline"
                  >
                    <span>Démo Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
