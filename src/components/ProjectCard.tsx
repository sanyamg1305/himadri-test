import { ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { ProjectEntry } from "@/types/portfolio";

type ProjectCardProps = {
  project: ProjectEntry;
  variant?: "feature" | "detail";
};

export function ProjectCard({ project, variant = "detail" }: ProjectCardProps) {
  const isFeature = variant === "feature";

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="panel group h-full overflow-hidden"
    >
      <div className="relative">
        {project.video ? (
          <video
            className={`w-full object-cover transition duration-500 group-hover:scale-[1.01] ${isFeature ? "h-72" : "h-60"}`}
            poster={project.image}
            autoPlay
            loop
            muted
            playsInline
            controls={!isFeature}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <img
            className={`w-full object-cover transition duration-500 group-hover:scale-[1.01] ${isFeature ? "h-72" : "h-60"}`}
            src={project.image}
            alt={project.title}
          />
        )}

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#dce8fb] bg-white/95 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#123b73] backdrop-blur">
          <Play size={14} />
          {project.category.replace("-", " ")}
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#2b6de0]">{project.role}</p>
          <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[#0d2c5f]">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#123b73]/74">{project.summary}</p>
        </div>

        <ul className="grid gap-3 text-sm leading-6 text-[#123b73]/76">
          {project.contribution.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#2b6de0]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {project.tools?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[#e2ebfb] bg-[#f8fbff] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#123b73]/75"
              >
                {tool}
              </span>
            ))}
          </div>
        ) : null}

        {project.outcomes?.length ? (
          <div className="rounded-[1.25rem] border border-[#e2ebfb] bg-[#fbfdff] p-4">
            <p className="text-[11px] uppercase tracking-[0.26em] text-[#2b6de0]">Outcome</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#123b73]/74">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.hrefs?.length ? (
          <div className="flex flex-wrap gap-3">
            {project.hrefs.map((link) => (
              <a
                key={link.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#c8dcff] bg-white px-4 py-2 text-sm text-[#123b73] transition hover:border-[#2b6de0] hover:text-[#2b6de0]"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
