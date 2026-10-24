import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FileDown,
  Mail,
  MapPin,
  Sparkles,
  Layers,
  GraduationCap,
  Award,
  CheckCircle,
  ExternalLink,
  Code,
  FolderGit2,
} from "lucide-react";

export default function Home() {
  // JSON-LD structured data for SEO and Google Knowledge Graph
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taza",
      addressCountry: "Maroc",
    },
    email: profile.email,
    telephone: profile.phone,
    description: profile.about,
    image: profile.avatar,
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.school,
    })),
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      url: c.credentialUrl,
    })),
  };

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 py-4 animate-in fade-in duration-500">
      {/* Helmet SEO */}
      <Helmet>
        <title>{profile.name} — Portfolio | Développeur Informatique &amp; Ingénieur EdTech</title>
        <meta
          name="description"
          content="Portfolio professionnel de Yassine LAHSAINI : Développeur Informatique et Ingénieur EdTech. Conception de solutions logicielles, plateformes interactives et intégration de l'IA."
        />
        <meta property="og:title" content={`${profile.name} — Portfolio`} />
        <meta
          property="og:description"
          content="Développeur Informatique & Ingénieur EdTech. Spécialiste Java, Web Full-Stack, LMS Moodle et IA générative."
        />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="grid gap-10 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponible pour de nouvelles opportunités</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
              Bonjour, je suis <br />
              <span className="text-gradient">{profile.name}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-muted-foreground">{profile.role}</h2>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {profile.about}
          </p>

          {/* Location & Quick badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-medium bg-muted px-2.5 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-primary" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1 font-medium bg-muted px-2.5 py-1 rounded-full">
              <GraduationCap className="w-3.5 h-3.5 text-primary" /> Master EdTech &amp; IA
            </span>
            <span className="inline-flex items-center gap-1 font-medium bg-muted px-2.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> Licence Informatique
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <Link to="/projects">
              <Button
                size="lg"
                className="gap-2 font-semibold shadow-lg shadow-primary/20 rounded-xl"
              >
                <span>Explorer les projets</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>

            <Link to="/contact">
              <Button size="lg" variant="outline" className="gap-2 rounded-xl">
                <Mail className="w-4 h-4" />
                <span>Me contacter</span>
              </Button>
            </Link>

            <a
              href={profile.cvUrl}
              download="CV_Yassine_LAHSAINI.jpg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="ghost"
                className="gap-2 rounded-xl text-muted-foreground hover:text-foreground"
              >
                <FileDown className="w-4 h-4" />
                <span>Mon CV</span>
              </Button>
            </a>
          </div>
        </div>

        {/* Profile Card / Avatar Visual */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group w-full max-w-sm">
            {/* Ambient background glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 opacity-30 blur-2xl group-hover:opacity-60 transition duration-500"></div>

            <Card className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/90 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-36 h-36 rounded-full overflow-hidden ring-4 ring-primary/30 p-1 bg-gradient-to-tr from-primary to-cyan-400">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-full h-full object-cover rounded-full"
                    width={144}
                    height={144}
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-extrabold text-xl text-foreground">{profile.name}</h3>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider">
                    {profile.role}
                  </p>
                </div>

                <div className="w-full grid grid-cols-2 gap-2 pt-2 border-t border-border/60 text-left">
                  {profile.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-2.5 rounded-xl bg-muted/50 border border-border/40"
                    >
                      <p className="text-lg font-black text-foreground">{stat.value}</p>
                      <p className="text-[11px] font-medium text-muted-foreground leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-between pt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Profil vérifié
                  </span>
                  <a
                    href={profile.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-primary transition-colors font-medium"
                  >
                    <span>Voir CV original</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlights / Bio Details */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {profile.bioDetails.map((detail, index) => (
          <Card key={index} className="p-5 hover:border-primary/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{detail}</p>
            </div>
          </Card>
        ))}
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Réalisations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Projets Sélectionnés
            </h2>
          </div>
          <Link to="/projects">
            <Button variant="ghost" className="gap-1.5 text-sm text-primary hover:text-primary">
              <span>Voir tous les projets ({projects.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden border border-border/80 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <Badge variant="tech">{project.category}</Badge>
                  {project.period && <span className="font-mono">{project.period}</span>}
                </div>

                <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[11px] font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-border/50 mt-auto flex items-center justify-between text-xs">
                {project.repo ? (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
                  >
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>Dépôt GitHub</span>
                  </a>
                ) : (
                  <span className="text-muted-foreground italic">Code source sécurisé</span>
                )}
                <Link to="/projects" className="text-muted-foreground hover:text-foreground">
                  Détails →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills & Technologies Matrix */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Expertise Technique
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Compétences &amp; Outils
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profile.skills.map((group) => (
            <Card key={group.category} className="p-6 border border-border/80">
              <h3 className="font-bold text-sm text-foreground mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-card text-xs font-medium py-1 px-2.5 border-border/80 hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Soft Skills & Languages Bar */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 border border-border/80">
          <h3 className="font-bold text-base text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Soft Skills &amp; Méthodes de Travail
          </h3>
          <div className="grid grid-cols-2 gap-2.5">
            {profile.softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border border-border/80">
          <h3 className="font-bold text-base text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            Langues Pratiquées
          </h3>
          <div className="space-y-3">
            {profile.languages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">{lang.name}</span>
                <span className="text-muted-foreground">{lang.level}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Quick CTA Banner */}
      <section className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-foreground">
            Vous avez un projet ou une collaboration ?
          </h3>
          <p className="text-sm text-muted-foreground max-w-xl">
            Disponible pour des opportunités en développement logiciel, ingénierie EdTech ou
            intégration IA.
          </p>
        </div>
        <Link to="/contact">
          <Button size="lg" className="gap-2 font-semibold rounded-xl">
            <Mail className="w-4 h-4" />
            <span>Prendre contact</span>
          </Button>
        </Link>
      </section>
    </div>
  );
}
