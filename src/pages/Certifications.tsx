import { useMemo, useState } from "react";
import { certifications } from "@/data/certifications";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Award, SlidersHorizontal, CheckCircle2 } from "lucide-react";

type SortOption = "date-desc" | "date-asc" | "title" | "issuer";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<SortOption>("date-desc");

  const list = useMemo(() => {
    return certifications
      .filter((c) =>
        [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q.toLowerCase())
      )
      .sort((a, b) => {
        if (sort === "date-desc") return b.issueDate.localeCompare(a.issueDate);
        if (sort === "date-asc") return a.issueDate.localeCompare(b.issueDate);
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "issuer") return a.issuer.localeCompare(b.issuer);
        return 0;
      });
  }, [q, sort]);

  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-500">
      <Helmet>
        <title>Certifications &amp; Accréditations — Yassine LAHSAINI | Portfolio</title>
        <meta
          name="description"
          content="Certifications officielles de Yassine LAHSAINI en Prompt Engineering IA, Java SE, Moodle LMS, Serious Games et Développement Web."
        />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Accréditations Professionnelles
        </span>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
            Certifications &amp; Badges
          </h1>
          <Badge variant="success" className="gap-1.5 self-start sm:self-auto py-1 px-3 text-xs">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{certifications.length} Certificats Validés</span>
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Badges et compétences certifiées par des organismes internationaux en ingénierie
          logicielle, IA générative et technologies EdTech.
        </p>
      </div>

      {/* Controls: Filter & Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl border border-border/80 bg-card">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <Input
            placeholder="Filtrer (ex: IA, Java, Moodle, EdTech)..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9 text-xs rounded-xl"
            aria-label="Filtrer les certifications"
          />
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground shrink-0 hidden sm:inline" />
          <span className="text-xs text-muted-foreground shrink-0 hidden sm:inline">
            Trier par :
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="h-10 rounded-xl border border-input bg-background px-3 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Trier les certifications"
          >
            <option value="date-desc">Plus récentes d'abord</option>
            <option value="date-asc">Plus anciennes d'abord</option>
            <option value="title">Titre alphabétique</option>
            <option value="issuer">Organisme émetteur</option>
          </select>
        </div>
      </div>

      {/* Certifications Grid */}
      {list.length === 0 ? (
        <div className="p-12 text-center border rounded-2xl bg-card space-y-3">
          <Award className="w-10 h-10 text-muted-foreground mx-auto" />
          <h3 className="font-bold text-lg">Aucune certification trouvée</h3>
          <p className="text-sm text-muted-foreground">
            Aucun certificat ne correspond à votre recherche "{q}".
          </p>
          <Button variant="outline" size="sm" onClick={() => setQ("")}>
            Effacer la recherche
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c) => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))}
        </div>
      )}
    </div>
  );
}
