import type { Certification } from "@/data/certifications";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, AlertCircle } from "lucide-react";
import clsx from "clsx";

function mmYYYY(s?: string) {
  if (!s) return "";
  const parts = s.split("-");
  if (parts.length < 2) return s;
  const [y, m] = parts;
  return `${m}/${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired =
    c.status === "expired" ||
    (Boolean(c.expiryDate) && Boolean(c.issueDate) && c.expiryDate! < c.issueDate);

  return (
    <article
      className={clsx(
        "group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40",
        isExpired && "opacity-75"
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          {c.image ? (
            <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-muted/40 p-1 border border-border/50 group-hover:scale-105 transition-transform duration-300">
              <img
                src={c.image}
                alt={c.imageAlt ?? `Badge ${c.title}`}
                width={256}
                height={256}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              {c.issuer.substring(0, 2).toUpperCase()}
            </div>
          )}

          <div className="flex flex-col items-end gap-1">
            {c.status === "active" && (
              <Badge variant="success" className="gap-1 text-[11px]">
                <CheckCircle2 className="w-3 h-3" />
                Vérifié
              </Badge>
            )}
            {isExpired && (
              <Badge variant="destructive" className="gap-1 text-[11px]">
                <AlertCircle className="w-3 h-3" />
                Expirée
              </Badge>
            )}
            {c.status === "revoked" && (
              <Badge variant="destructive" className="gap-1 text-[11px]">
                Révoquée
              </Badge>
            )}
            <span className="text-xs text-muted-foreground font-mono mt-1">
              {mmYYYY(c.issueDate)}
              {c.expiryDate ? ` → ${mmYYYY(c.expiryDate)}` : ""}
            </span>
          </div>
        </div>

        <h3 className="font-bold text-lg leading-snug group-hover:text-primary transition-colors">
          {c.title}
        </h3>

        <p className="text-sm font-medium text-muted-foreground mt-1">
          {c.issuer}
          {c.credentialId && (
            <span className="block text-xs font-mono text-muted-foreground/80 mt-0.5">
              ID : {c.credentialId}
            </span>
          )}
        </p>

        {c.description && (
          <p className="mt-3 text-xs text-muted-foreground/90 line-clamp-2">{c.description}</p>
        )}

        {c.skills && c.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Compétences validées">
            {c.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-[11px] py-0 px-2 font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>

      <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
        {c.credentialUrl ? (
          <a
            href={c.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline group/link"
            aria-label={`Voir le certificat ${c.title}`}
          >
            <span>Vérifier le certificat</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </a>
        ) : (
          <span className="text-muted-foreground italic">Certificat officiel</span>
        )}

        {c.tags && c.tags[0] && (
          <Badge variant="outline" className="text-[10px] text-muted-foreground border-border/60">
            {c.tags[0]}
          </Badge>
        )}
      </div>
    </article>
  );
}
