import { experiences } from "@/data/experience";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, CheckCircle2, Trophy, Building } from "lucide-react";

function formatPeriod(start: string, end: string, current: boolean) {
  const [sY, sM] = start.split("-");
  const startStr = `${sM}/${sY}`;
  if (current) return `${startStr} — Présent`;
  const [eY, eM] = end.split("-");
  return `${startStr} — ${eM}/${eY}`;
}

export default function Experience() {
  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-500">
      <Helmet>
        <title>Parcours Professionnel — Yassine LAHSAINI | Portfolio</title>
        <meta
          name="description"
          content="Expériences professionnelles de Yassine LAHSAINI : Technicien Informatique, Intégrateur EdTech, Développeur Logiciel et Web."
        />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Carrière &amp; Expériences
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
          Parcours Professionnel
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Expérience de terrain en gestion de systèmes d'information scolaires, intégration de
          dispositifs EdTech et réalisations en développement logiciel.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-primary/20 ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline icon dot */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-background border-2 border-primary text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            <Card className="p-6 border border-border/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-extrabold text-xl text-foreground">{exp.role}</h2>
                    <Badge
                      variant={exp.type === "Stage" ? "tech" : "secondary"}
                      className="text-xs"
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  <p className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-1">
                    <Building className="w-4 h-4" />
                    <span>{exp.organization}</span>
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-muted-foreground font-mono space-y-1 shrink-0">
                  <span className="inline-flex items-center gap-1 font-medium bg-muted px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {formatPeriod(exp.start, exp.end, exp.current)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{exp.summary}</p>

              {/* Responsibilities */}
              <div className="space-y-2 mb-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Missions &amp; Responsabilités :
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Achievement */}
              {exp.keyAchievement && (
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 flex items-start gap-2.5 mb-4 text-xs text-foreground">
                  <Trophy className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Résultat clé : </span>
                    <span className="text-muted-foreground">{exp.keyAchievement}</span>
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs font-mono">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
