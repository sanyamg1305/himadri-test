import type { ReactNode } from "react";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navLinks, profile, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const socialIcons = {
    Instagram,
    YouTube: Youtube,
    LinkedIn: Linkedin,
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-[#123b73]">
      <header className="sticky top-0 z-40 border-b border-[#e3ecfb] bg-white/88 backdrop-blur-xl">
        <div className="container flex items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/logo-hj.svg"
              alt="HJ monogram logo"
              className="h-11 w-11 shrink-0"
            />
            <div>
              <p className="font-serif text-xl leading-none text-[#0d2c5f]">{profile.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.28em] text-[#2b6de0]">
                Portfolio 2026
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm transition",
                    isActive
                      ? "bg-[#2b6de0] text-white"
                      : "text-[#123b73]/75 hover:bg-[#f5f9ff] hover:text-[#123b73]",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-[#c8dcff] bg-white px-4 py-2 text-sm text-[#123b73] transition hover:border-[#2b6de0] hover:text-[#2b6de0] md:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-[#e3ecfb] bg-white">
        <div className="container grid gap-8 px-6 py-10 lg:grid-cols-[1.25fr,1fr] lg:px-10">
          <div>
            <p className="font-serif text-[1.75rem] text-[#0d2c5f]">
              Stories that move across books, campaigns, and digital spaces.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#123b73]/72">
              Built from the supplied deck and video CV, this portfolio turns Himadri Jain&apos;s
              work into a living, shareable experience with real links, playable media, and clear
              conversion paths.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.label as keyof typeof socialIcons];

                return (
                  <a
                    key={social.href}
                    className="footer-link"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    title={social.handle}
                  >
                    <Icon size={16} />
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 text-sm text-[#123b73]/85">
            <a className="footer-link" href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {profile.email}
            </a>
            <a className="footer-link" href="tel:+917470547077">
              <Phone size={16} />
              {profile.phone}
            </a>
            <a className="footer-link" href="https://maps.google.com/?q=Mumbai,Maharashtra">
              <MapPin size={16} />
              {profile.location}
            </a>
            <a className="footer-link" href={profile.resumeHref} target="_blank" rel="noreferrer">
              <ArrowUpRight size={16} />
              Resume folder
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
