import { motion } from "framer-motion";
import { ArrowUpRight, Film, Mail, Phone } from "lucide-react";

import { BookCard } from "@/components/BookCard";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, staggerItem } from "@/components/motionVariants";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialCard } from "@/components/SocialCard";
import { books, contactLinks, profile, socials, videoCv } from "@/data/portfolio";

export default function Media() {
  return (
    <div className="container space-y-20 px-6 py-12 lg:px-10 lg:py-16">
      <Reveal>
        <section className="space-y-8">
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
        <section className="space-y-8">
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
        <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
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
              <div className="flex items-center gap-3 text-[#2b6de0]">
                <Film size={18} />
                <p className="text-xs uppercase tracking-[0.28em]">Why video</p>
              </div>
              <p className="mt-6 font-serif text-3xl text-[#0d2c5f]">{videoCv.title}</p>
              <p className="mt-4 text-sm leading-7 text-[#123b73]/76">{videoCv.quote}</p>
              <a
                href={profile.videoCvHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#123b73] transition hover:text-[#2b6de0]"
              >
                Open drive backup
                <ArrowUpRight size={16} />
              </a>
            </motion.article>

            <motion.article variants={staggerItem} className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#2b6de0]">Contact</p>
              <h3 className="mt-4 font-serif text-3xl text-[#0d2c5f]">Let&apos;s work together.</h3>
              <div className="mt-6 grid gap-3">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-[1.5rem] border border-[#d9e8ff] bg-[#f8fbff] px-4 py-4 text-sm transition hover:border-[#2b6de0]"
                  >
                    <span className="block text-xs uppercase tracking-[0.24em] text-[#123b73]/55">
                      {link.label}
                    </span>
                    <span className="mt-2 block text-[#0d2c5f]">{link.value}</span>
                  </a>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
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
