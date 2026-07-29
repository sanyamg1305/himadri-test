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
    <div className="container space-y-24 px-4 py-10 sm:px-6 sm:py-12 lg:space-y-28 lg:px-10 lg:py-20">
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
            className="panel overflow-hidden"
          >
            <div className="flex flex-col gap-3 border-b border-[#243B8F]/15 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#243B8F]">Blog Archive</p>
                <h3 className="mt-2 font-serif text-[2rem] text-[#243B8F] sm:text-[2.4rem]">
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
            <motion.div variants={staggerItem} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="panel overflow-hidden">
              <video className="w-full" controls playsInline poster={profile.heroImage}>
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
            <motion.article variants={staggerItem} className="panel p-6">
              <div className="flex items-center gap-3 text-[#243B8F]">
                <img src="/logo-hj.svg" alt="HJ Icon" className="h-[18px] w-[18px]" style={{ display: "none" }} /> {/* Hidden reference to ensure SVG updates are loaded */}
                <Film size={18} />
                <p className="text-xs uppercase tracking-[0.28em]">Why video</p>
              </div>
              <p className="mt-6 font-serif text-3xl text-[#243B8F]">{videoCv.title}</p>
              <p className="mt-4 text-sm leading-7 text-[#243B8F]/76">{videoCv.quote}</p>
              <a
                href={profile.videoCvHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#243B8F] transition hover:text-[#243B8F]/80"
              >
                Open drive backup
                <ArrowUpRight size={16} />
              </a>
            </motion.article>

            <motion.article variants={staggerItem} className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#243B8F]">Contact</p>
              <h3 className="mt-4 font-serif text-3xl text-[#243B8F]">Let&apos;s work together.</h3>
              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-[1.5rem] border border-[#243B8F]/15 bg-[#FFF0C9]/30 px-4 py-4 text-sm transition hover:border-[#243B8F]"
                  >
                    <span className="block text-xs uppercase tracking-[0.24em] text-[#243B8F]/55">
                      {link.label}
                    </span>
                    <span className="mt-2 block text-[#243B8F]">{link.value}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
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
  );
}
