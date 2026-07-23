import type { ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

import { navLinks, profile, socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 130,
    damping: 24,
    mass: 0.2,
  });

  const socialIcons = {
    Instagram,
    YouTube: Youtube,
    LinkedIn: Linkedin,
  } as const;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7fbff] text-[#123b73]">
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-[#164fb4]"
        style={{ scaleX }}
      />

      <header className="sticky top-0 z-40 border-b border-[#e3ecfb] bg-white/92 backdrop-blur-xl">
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
                Writing in motion
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
                      ? "bg-[#164fb4] text-white"
                      : "text-[#123b73]/75 hover:bg-[#f6f9fe] hover:text-[#123b73]",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full border border-[#dbe7f8] bg-white px-4 py-2 text-sm font-medium text-[#123b73] transition hover:border-[#164fb4] hover:text-[#164fb4] md:inline-flex"
          >
            Contact
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
              This portfolio brings Himadri Jain&apos;s work together as a living, shareable space:
              part archive, part introduction, and part expression of how she thinks, writes, and
              sees the world.
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
