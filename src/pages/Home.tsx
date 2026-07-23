import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, staggerItem } from "@/components/motionVariants";
import { SectionHeading } from "@/components/SectionHeading";
import {
  experienceHighlights,
  favoriteQuotes,
  metrics,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
const heroHighlights = [
  { label: "Organic reach", value: "200K+" },
  { label: "Content delivered", value: "100+" },
  { label: "Published books", value: "2" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="container space-y-28 px-6 py-12 lg:px-10 lg:py-16">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
        className="grid items-center gap-12 lg:grid-cols-[1.1fr,0.9fr]"
      >
        <div>
          <div className="inline-flex items-center rounded-full border border-[#e3ecfb] bg-[#fbfdff] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-[#2b6de0]">
            Writing • Storytelling • Digital Expression
          </div>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.98] text-[#0d2c5f] md:text-[4.35rem]">
            Himadri Jain shapes words, ideas, and digital storytelling into work that feels alive.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#123b73]/76 md:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="cta-primary" to="/work">
              View selected work
              <ArrowRight size={18} />
            </Link>
            <Link className="cta-secondary" to="/media">
              Open media profile
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-3"
          >
            {skills.slice(0, 6).map((skill) => (
              <motion.span key={skill} variants={staggerItem} className="tag">
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {heroHighlights.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="rounded-[1.25rem] border border-[#e2ebfb] bg-white px-5 py-4"
              >
                <p className="text-[11px] uppercase tracking-[0.26em] text-[#2b6de0]">
                  {item.label}
                </p>
                <p className="mt-2 font-serif text-3xl text-[#0d2c5f]">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            src={profile.heroImage}
            alt={profile.name}
            className="relative z-10 h-[31rem] w-full rounded-[1.75rem] object-cover shadow-[0_24px_54px_rgba(43,109,224,0.10)]"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="panel absolute -bottom-6 left-0 z-20 max-w-xs p-5"
          >
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#2b6de0]">Creative voice</p>
            <p className="mt-3 font-serif text-2xl text-[#0d2c5f]">{profile.title}</p>
            <p className="mt-2 text-sm leading-6 text-[#123b73]/72">{profile.location}</p>
            <div className="subtle-divider mt-4" />
            <p className="mt-4 text-sm leading-6 text-[#123b73]/72">
              A published author and storyteller moving between campaign ideas, social content,
              scripting, and personal expression.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <Reveal>
        <section className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <SectionHeading
            eyebrow="Creative Profile"
            title="A multidisciplinary practice shaped by writing, strategy, curiosity, and feeling."
            description={profile.story}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4"
          >
            {experienceHighlights.map((item) => (
              <motion.article key={item.title} variants={staggerItem} className="panel p-6">
                <div className="flex items-start gap-5">
                  <div className="min-w-10 pt-1">
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#2b6de0]">
                      0{experienceHighlights.indexOf(item) + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#0d2c5f]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#123b73]/76">{item.body}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Words To Return To"
            title="A few lines that carry her way of seeing the world."
            description="These are Himadri's own words, placed here as a quieter expression of the sensibility behind the work."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {favoriteQuotes.map((quote) => (
              <motion.blockquote
                key={quote}
                variants={staggerItem}
                className="panel flex min-h-[220px] flex-col justify-between p-7"
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-[#2b6de0]">
                  Himadri's words
                </p>
                <p className="mt-8 font-serif text-3xl leading-tight text-[#0d2c5f]">
                  "{quote}"
                </p>
                <div className="subtle-divider mt-8 max-w-16" />
              </motion.blockquote>
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Track Record"
            title="A body of work grounded in output, reach, and creative range."
            description="The numbers matter, but they sit beside a more human story: a creative voice that moves between books, campaigns, videos, and everyday reflections."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="Campaign concepts, production pieces, and writing-led work with personality."
              description="Each featured piece shows a different side of Himadri's practice: idea building, scripting, social thinking, filmed execution, and the instinct to make work feel emotionally true."
            />
            <Link className="cta-secondary self-start md:self-auto" to="/work">
              View full archive
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-6 xl:grid-cols-2"
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="feature" />
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="panel p-8 md:p-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#e3ecfb] bg-[#f8fbff] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-[#2b6de0]">
              Available for creative collaboration
            </div>
            <h2 className="mt-6 font-serif text-4xl text-[#0d2c5f] md:text-5xl">
              A space for collaborators, readers, brands, and anyone who connects with the work.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#123b73]/76 md:text-base">
              Explore the archive, spend time with the books and socials, or watch the video CV to
              see how the voice carries across different mediums.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="cta-primary" href={`mailto:${profile.email}`}>
                Start a conversation
                <ArrowRight size={18} />
              </a>
              <Link className="cta-secondary" to="/media">
                Open media library
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
