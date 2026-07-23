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
} from "@/data/portfolio";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);
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
    <div className="container space-y-24 px-4 py-10 sm:px-6 sm:py-12 lg:space-y-32 lg:px-10 lg:py-20">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.7 }}
        className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:gap-12"
      >
        <div>
          <div className="inline-flex items-center rounded-full border border-[#e3ecfb] bg-[#fbfdff] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#2b6de0] sm:px-4 sm:text-[11px] sm:tracking-[0.26em]">
            Writing • Storytelling • Digital Expression
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-[2.9rem] leading-[0.98] text-[#0d2c5f] sm:mt-8 sm:text-[3.6rem] md:text-[4.35rem]">
            Himadri Jain shapes words, ideas, and digital storytelling into work that feels alive.
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#123b73]/76 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link className="cta-primary" to="/work">
              View selected work
              <ArrowRight size={18} />
            </Link>
            <Link className="cta-secondary" to="/media">
              Explore books and media
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-8 grid gap-3 border-t border-[#dbe7f8] pt-6 sm:mt-10 sm:grid-cols-3"
          >
            {heroHighlights.map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="px-1 py-1"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#2b6de0] sm:text-[11px] sm:tracking-[0.26em]">
                  {item.label}
                </p>
                <p className="mt-2 font-serif text-[2rem] text-[#0d2c5f] sm:text-3xl">{item.value}</p>
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
            className="relative z-10 h-[22rem] w-full rounded-[1.5rem] object-cover shadow-[0_24px_54px_rgba(43,109,224,0.10)] sm:h-[27rem] sm:rounded-[1.75rem] lg:h-[31rem]"
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
            className="panel relative z-20 mt-4 max-w-xs p-4 sm:absolute sm:-bottom-6 sm:left-0 sm:mt-0 sm:p-5"
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
        <section className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-16">
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
            className="grid gap-5"
          >
            {experienceHighlights.map((item) => (
              <motion.article key={item.title} variants={staggerItem} className="panel p-6 sm:p-7">
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-8 pt-1 sm:min-w-10">
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
        <section className="px-1">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#2b6de0] sm:text-[11px] sm:tracking-[0.24em]">
            Himadri&apos;s words
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {favoriteQuotes.map((quote) => (
              <blockquote key={quote} className="border-l border-[#dbe7f8] pl-5">
                <p className="font-serif text-[1.85rem] leading-tight text-[#0d2c5f] sm:text-[2.3rem]">
                  "{quote}"
                </p>
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-10">
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
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {metrics.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="A focused selection of work instead of the full archive."
              description="Two pieces up front keep the homepage easier to scan, while the full archive stays available for deeper exploration."
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
            <div className="mt-8">
              <a className="cta-primary" href={`mailto:${profile.email}`}>
                Start a conversation
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
