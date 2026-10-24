import { useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  FileDown,
  Github,
  Linkedin,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network transmission or send to mailto/Formspree
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <div className="space-y-10 py-4 animate-in fade-in duration-500">
      <Helmet>
        <title>Contact — Yassine LAHSAINI | Portfolio</title>
        <meta
          name="description"
          content="Contactez Yassine LAHSAINI pour vos projets en développement logiciel, intégration EdTech ou collaborations technologiques."
        />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-primary">
          Discutons de votre projet
        </span>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground">
          Prendre Contact
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
          Que ce soit pour une opportunité professionnelle, une consultation en ingénierie éducative
          ou un développement web sur mesure, n'hésitez pas à m'écrire.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="p-6 border border-border/80 space-y-6">
            <h2 className="font-extrabold text-xl text-foreground flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>Coordonnées directes</span>
            </h2>

            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-muted/40 hover:bg-muted transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground block">Email</span>
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {profile.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="flex items-start gap-3.5 p-3 rounded-xl bg-muted/40 hover:bg-muted transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground block">
                    Téléphone / WhatsApp
                  </span>
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {profile.phone}
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-muted/40">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground block">
                    Localisation
                  </span>
                  <span className="text-sm font-bold text-foreground">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-4 border-t border-border/60">
              <span className="text-xs font-bold text-foreground block mb-3">
                Réseaux &amp; Plateformes :
              </span>
              <div className="flex gap-2">
                <a
                  href="https://github.com/yassine-lahsaini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-border/80 bg-background hover:bg-accent text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/yassine-lahsaini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-border/80 bg-background hover:bg-accent text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Download CV Card action */}
            <div className="pt-2">
              <a
                href={profile.cvUrl}
                download="CV_Yassine_LAHSAINI.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-xs transition-colors"
              >
                <FileDown className="w-4 h-4 text-primary" />
                <span>Télécharger le CV au format original</span>
              </a>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 border border-border/80">
            <h2 className="font-extrabold text-xl text-foreground mb-1">Envoyez-moi un message</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Remplissez le formulaire ci-dessous, je vous répondrai dans les plus brefs délais.
            </p>

            {submitted ? (
              <div className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-3 animate-in zoom-in-95 duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-foreground">Message envoyé avec succès !</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Merci pour votre message. Je vous recontacterai à l'adresse indiquée dans les plus
                  brefs délais.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSubmitted(false)}
                  className="mt-4"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground" htmlFor="name">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground" htmlFor="email">
                      Adresse Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="nom@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground" htmlFor="subject">
                    Objet de votre demande *
                  </label>
                  <Input
                    id="subject"
                    required
                    placeholder="ex: Proposition de projet, Recrutement, Collaboration..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground" htmlFor="message">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full gap-2 font-semibold shadow-md shadow-primary/20 rounded-xl"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
