import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import {
  Menu,
  X,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  GraduationCap,
  Award,
  Briefcase,
  FolderGit2,
  Send,
  Home as HomeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Accueil", icon: HomeIcon, end: true },
  { to: "/projects", label: "Projets", icon: FolderGit2 },
  { to: "/experience", label: "Parcours", icon: Briefcase },
  { to: "/education", label: "Formations", icon: GraduationCap },
  { to: "/certifications", label: "Certifications", icon: Award },
  { to: "/contact", label: "Contact", icon: Send },
];

export default function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-border/70 glass">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 sm:px-6 h-16">
          {/* Logo / Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary rounded-xl p-1"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary transition-all duration-300">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
                {profile.name}
              </span>
              <span className="text-[11px] text-muted-foreground font-medium hidden sm:inline-block leading-tight">
                Développeur &amp; EdTech
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1.5 bg-muted/40 p-1.5 rounded-full border border-border/50 text-sm font-medium"
            aria-label="Navigation principale"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`
                }
              >
                <item.icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Actions: Theme Toggle & CV Download */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href={profile.cvUrl}
              download="CV_Yassine_LAHSAINI.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex"
            >
              <Button
                size="sm"
                variant="outline"
                className="gap-2 text-xs font-semibold rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>CV</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <nav
            className="md:hidden border-b border-border/70 bg-card px-4 py-4 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200"
            aria-label="Navigation mobile"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
            <div className="pt-2 border-t border-border/60">
              <a
                href={profile.cvUrl}
                download="CV_Yassine_LAHSAINI.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow"
              >
                <FileDown className="w-4 h-4" />
                <span>Télécharger le CV</span>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1 mx-auto max-w-6xl w-full p-4 sm:p-6 lg:p-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/70 bg-card/60 backdrop-blur-sm py-10 mt-12 text-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="font-bold text-foreground">{profile.name}</span>
            </div>
            <p className="text-xs text-muted-foreground text-center md:text-left">
              {profile.role} • {profile.location}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yassine-lahsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Profil GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/yassine-lahsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Profil LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Envoyer un email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Appeler"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} • Conçu avec React, Vite, TS &amp; Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
