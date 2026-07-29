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
  const visibleContributions = isFeature ? project.contribution.slice(0, 2) : project.contribution;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white shadow-[8px_8px_0px_0px_#243B8F] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#243B8F] group h-full overflow-hidden flex flex-col justify-between relative"
    >
      <div className="relative">
        {project.video ? (
          <video
            className={`w-full object-cover grayscale contrast-[1.15] group-hover:grayscale-0 transition-all duration-500 ${isFeature ? "h-56 sm:h-64 lg:h-72" : "h-52 sm:h-56 lg:h-60"}`}
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
            className={`w-full object-cover grayscale contrast-[1.15] group-hover:grayscale-0 transition-all duration-500 ${isFeature ? "h-56 sm:h-64 lg:h-72" : "h-52 sm:h-56 lg:h-60"}`}
            src={project.image}
            alt={project.title}
          />
        )}

        <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#243B8F] shadow-[3px_3px_0px_0px_#243B8F] sm:left-4 sm:top-4 sm:text-[11px] sm:tracking-[0.18em]">
          <Play size={14} />
          {project.category.replace("-", " ")}
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]/60">
            {project.role}
          </p>
          <h3 className="mt-3 font-sans font-black text-[1.7rem] leading-tight text-[#243B8F] sm:text-[2rem] uppercase">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-6 sm:leading-7 text-[#243B8F]/74 font-medium">{project.summary}</p>
        </div>

        <ul className="grid gap-3 text-sm leading-6 text-[#243B8F]/76 font-semibold">
          {visibleContributions.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 border-2 border-[#243B8F] bg-[#FFF0C9] rotate-45" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {!isFeature && project.tools?.length ? (
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-xl border-2 border-[#243B8F] bg-[#FFF0C9]/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#243B8F] shadow-[2px_2px_0px_0px_#243B8F]"
              >
                {tool}
              </span>
            ))}
          </div>
        ) : null}

        {!isFeature && project.outcomes?.length ? (
          <div className="rounded-[1.5rem] border-2 border-[#243B8F] bg-[#FFF0C9]/10 p-4 shadow-[4px_4px_0px_0px_#243B8F]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]">
              Outcome
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#243B8F]/74 font-medium">
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#243B8F] bg-[#FFF0C9] px-4 py-2.5 text-xs font-black uppercase text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] hover:bg-[#FFFDF0] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F] sm:w-auto sm:justify-start"
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
