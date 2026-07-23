import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BookOpenText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { MetricCard } from "@/components/MetricCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { staggerContainer, staggerItem } from "@/components/motionVariants";
import { SectionHeading } from "@/components/SectionHeading";
import {
  experienceHighlights,
  metrics,
  profile,
  projects,
  skills,
} from "@/data/portfolio";

const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e3ecfb] bg-[#f8fbff] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#2b6de0]">
            <Sparkles size={14} />
            Literary editorial portfolio
          </div>
          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[0.95] text-[#0d2c5f] md:text-7xl">
            Himadri Jain turns words, strategy, and digital intuition into stories that move.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#123b73]/76 md:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link className="cta-primary" to="/work">
              Explore the work
              <ArrowRight size={18} />
            </Link>
            <Link className="cta-secondary" to="/media">
              Watch the video CV
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
            <p className="text-xs uppercase tracking-[0.24em] text-[#2b6de0]">Positioning</p>
            <p className="mt-3 font-serif text-2xl text-[#0d2c5f]">{profile.title}</p>
            <p className="mt-2 text-sm leading-6 text-[#123b73]/72">{profile.location}</p>
          </motion.div>
        </div>
      </motion.section>

      <Reveal>
        <section className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr]">
          <SectionHeading
            eyebrow="Who she is"
            title="Where poetry meets placement, and intuition meets execution."
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
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-full border border-[#c8dcff] bg-[#f5f9ff] p-2 text-[#2b6de0]">
                    <BadgeCheck size={18} />
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
            eyebrow="Proof in numbers"
            title="A fast-moving body of work with range, output, and audience impact."
            description="The original portfolio deck blended writing, brand thinking, and content execution. These numbers anchor that narrative with concrete signals of craft and momentum."
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
              eyebrow="Featured work"
              title="Campaigns, writing, and production experiments with real texture."
              description="Each featured piece comes directly from the supplied material and shows a different side of Himadri's practice: idea building, scripting, social thinking, or filmed execution."
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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e3ecfb] bg-[#f8fbff] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#2b6de0]">
              <BookOpenText size={14} />
              Ready to collaborate
            </div>
            <h2 className="mt-6 font-serif text-4xl text-[#0d2c5f] md:text-5xl">
              From page to platform, this portfolio is built for meaningful creative partnerships.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#123b73]/76 md:text-base">
              Explore the full archive, dive into books and socials, or watch the video CV to see
              how the voice translates across mediums.
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
