import { education } from "@/data/education";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin, BookOpen, Award, Sparkles } from "lucide-react";

function fmt(s?: string) {
  if (!s) return "Présent";
  const parts = s.split("-");
  if (parts.length < 2) return s;
  const [y, m] = parts;
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-500">
      <Helmet>
        <title>Formations &amp; Diplômes — Yassine LAHSAINI | Portfolio</title>
        <meta
          name="description"
          content="Cursus universitaire de Yassine LAHSAINI : Master en Didactique et Ingénierie Éducative, Licence en Informatique à l'ESEF, Baccalauréat Sciences Physiques."
        />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Parcours Universitaire
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
          Formations Académiques
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Double compétence synergique entre sciences informatiques pures et didactique des
          technologies émergentes en éducation.
        </p>
      </div>

      {/* Education Timeline */}
      <ol className="relative border-l-2 border-primary/20 ml-3 sm:ml-6 space-y-10 pl-6 sm:pl-8 list-none">
        {education.map((e) => (
          <li key={e.school + e.start} className="relative group">
            {/* Degree icon dot */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-background border-2 border-primary text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>

            <Card className="p-6 border border-border/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="font-extrabold text-xl text-foreground">
                      {e.degree} {e.field ? `— ${e.field}` : ""}
                    </h2>
                    {e.current && (
                      <Badge variant="success" className="text-xs">
                        En cours
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm font-semibold text-primary mt-1">@ {e.school}</p>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-muted-foreground font-mono space-y-1 shrink-0">
                  <span className="inline-flex items-center gap-1 font-medium bg-muted px-2.5 py-1 rounded-full">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {fmt(e.start)} — {e.current ? "Présent" : fmt(e.end)}
                  </span>
                  {e.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {e.location}
                    </span>
                  )}
                </div>
              </div>

              {e.description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {e.description}
                </p>
              )}

              {/* Key Courses */}
              {e.courses && e.courses.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-foreground mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-primary" />
                    <span>Modules clés étudiés :</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {e.courses.map((course) => (
                      <Badge key={course} variant="secondary" className="text-xs font-normal">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights */}
              {e.highlights && e.highlights.length > 0 && (
                <div className="pt-3 border-t border-border/60">
                  <span className="text-xs font-bold text-foreground block mb-2">
                    Faits marquants :
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    {e.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
