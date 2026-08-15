import { motion } from "framer-motion";
import { ArrowUpRight, Film, Mail, Phone } from "lucide-react";

import { BookCard } from "@/components/BookCard";
import { MediumCard } from "@/components/MediumCard";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, staggerItem } from "@/components/motionVariants";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialCard } from "@/components/SocialCard";
import {
  blogspotProfile,
  books,
  contactLinks,
  mediumPosts,
  mediumProfile,
  profile,
  socials,
  videoCv,
} from "@/data/portfolio";

export default function Media() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto border-4 border-[#243B8F] rounded-[2rem] bg-white p-6 md:p-12 shadow-[12px_12px_0px_0px_#243B8F] relative overflow-hidden space-y-16">
        {/* Background Outline Number */}
        <div className="absolute right-8 top-6 text-[18rem] font-black text-[#243B8F]/5 z-0 select-none pointer-events-none leading-none">
          05
        </div>
      <Reveal>
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Books"
            title="Published work that reflects authorship, imagination, and a lasting creative voice."
            description="The books anchor the portfolio in something deeply personal: long-form writing that carries Himadri's voice beyond campaigns and short-form content."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2"
          >
            {books.map((book) => (
              <BookCard key={book.title} book={book} />
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Podcast"
            title="1% Better Podcast"
            description="A self-driven audio project hosting conversations and snippets on habits, growth, and creative paths."
          />
          
          {/* Cassette-themed Spotify Frame */}
          <div className="max-w-2xl mx-auto border-4 border-[#243B8F] rounded-[2rem] bg-[#FFF0C9]/40 p-4 md:p-6 shadow-[8px_8px_0px_0px_#243B8F] relative overflow-hidden space-y-4">
            {/* Cassette Header Zine Labels */}
            <div className="flex items-center justify-between border-b-2 border-[#243B8F] pb-3 mb-2">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#243B8F] bg-[#FFF0C9] px-2 py-0.5 border border-[#243B8F] rounded-md shadow-[2px_2px_0px_0px_#243B8F] select-none">
                Side A
              </div>
              <p className="text-[11px] font-sans font-black uppercase tracking-widest text-[#243B8F]/80 select-none">
                1% BETTER PODCAST DECK
              </p>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#243B8F]/60 select-none">
                Cassette Player
              </div>
            </div>

            {/* Spotify Player Iframe */}
            <div className="relative border-4 border-[#243B8F] rounded-[1.5rem] overflow-hidden bg-white shadow-[4px_4px_0px_0px_#243B8F]">
              <iframe
                src="https://open.spotify.com/embed/show/7tR1X8PBC9CXBbsfrxg21L?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="1% Better Podcast by Himadri Jain"
                className="w-full bg-[#FFF0C9]/10"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Writing"
            title="A reading space for essays, reflections, and longer-form thoughts."
            description={mediumProfile.bio}
          />
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={mediumProfile.href}
              target="_blank"
              rel="noreferrer"
              className="cta-primary"
            >
              Visit Medium profile
              <ArrowUpRight size={18} />
            </a>
            <a
              href={blogspotProfile.href}
              target="_blank"
              rel="noreferrer"
              className="cta-secondary"
            >
              Open Blogspot archive
            </a>
            <p className="text-sm text-[#243B8F]/70">{mediumProfile.handle}</p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {mediumPosts.map((post) => (
              <MediumCard key={post.href} post={post} />
            ))}
          </motion.div>

          <motion.div
            variants={staggerItem}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white overflow-hidden shadow-[8px_8px_0px_0px_#243B8F] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#243B8F] relative"
          >
            <div className="flex flex-col gap-3 border-b-2 border-[#243B8F] bg-[#FFF0C9]/20 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]">Blog Archive</p>
                <h3 className="mt-2 font-sans font-black text-2xl text-[#243B8F] uppercase">
                  Embedded from Blogs by Himadri
                </h3>
              </div>
              <a
                href={blogspotProfile.href}
                target="_blank"
                rel="noreferrer"
                className="cta-secondary self-start sm:self-auto"
              >
                Open in new tab
              </a>
            </div>

            <iframe
              src={blogspotProfile.href}
              title="Blogs by Himadri"
              loading="lazy"
              className="h-[720px] w-full border-0 bg-white"
            />
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-10">
          <SectionHeading
            eyebrow="Social ecosystem"
            title="Three channels with distinct audiences, moods, formats, and ways of speaking."
            description="Each platform holds a different version of the voice, showing how Himadri adapts storytelling across public, personal, reflective, and conversational spaces."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {socials.map((social) => (
              <SocialCard key={social.label} social={social} />
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-14">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Video CV"
              title="A direct video introduction for collaborators, curious viewers, and future opportunities."
              description="The local video CV is embedded here so visitors can move from reading the portfolio to hearing the person behind it in a more immediate, human format."
            />
            <motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white overflow-hidden shadow-[8px_8px_0px_0px_#243B8F] relative">
              <video className="w-full grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-500" controls playsInline poster={profile.heroImage}>
                <source src={videoCv.src} type="video/mp4" />
              </video>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6"
          >
            <motion.article variants={staggerItem} className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white p-6 shadow-[8px_8px_0px_0px_#243B8F] relative flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#243B8F]">
                  <img src="/logo-hj.svg" alt="HJ Icon" className="h-[18px] w-[18px]" style={{ display: "none" }} /> {/* Hidden reference to ensure SVG updates are loaded */}
                  <Film size={18} />
                  <p className="text-xs uppercase tracking-[0.28em]">Why video</p>
                </div>
                <p className="mt-6 font-sans font-black text-2xl text-[#243B8F] uppercase leading-tight">{videoCv.title}</p>
                <p className="mt-4 text-sm leading-7 text-[#243B8F]/76 font-medium">{videoCv.quote}</p>
              </div>
              <a
                href={profile.videoCvHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#243B8F] bg-[#FFF0C9] px-4 py-2.5 text-xs font-black uppercase text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] hover:bg-[#FFFDF0] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F] self-start"
              >
                Open drive backup
                <ArrowUpRight size={16} />
              </a>
            </motion.article>

            <motion.article variants={staggerItem} className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white p-6 shadow-[8px_8px_0px_0px_#243B8F] relative space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#243B8F]/60">Contact</p>
                <h3 className="mt-3 font-sans font-black text-2xl text-[#243B8F] uppercase">Let&apos;s work together.</h3>
              </div>
              <div className="grid gap-4 pt-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-xl border-2 border-[#243B8F] bg-[#FFF0C9]/20 hover:bg-[#FFF0C9]/40 p-4 transition shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-[#243B8F]/55">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-sm font-bold text-[#243B8F]">{link.value}</span>
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a className="cta-primary" href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  Email Himadri
                </a>
                <a className="cta-secondary" href="tel:+917470547077">
                  <Phone size={18} />
                  Call now
                </a>
              </div>
            </motion.article>
          </motion.div>
        </section>
      </Reveal>
      </div>
    </div>
  );
}
