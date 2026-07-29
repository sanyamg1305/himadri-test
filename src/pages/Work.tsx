import { motion } from "framer-motion";

import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { staggerContainer } from "@/components/motionVariants";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { usePortfolioStore } from "@/store/usePortfolioStore";

export default function Work() {
  const { activeCategory, setActiveCategory } = usePortfolioStore();

  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto border-4 border-[#243B8F] rounded-[2rem] bg-white p-6 md:p-12 shadow-[12px_12px_0px_0px_#243B8F] relative overflow-hidden space-y-12">
        {/* Background Outline Number */}
        <div className="absolute right-8 top-6 text-[18rem] font-black text-[#243B8F]/5 z-0 select-none pointer-events-none leading-none">
          04
        </div>

        <Reveal>
          <div className="relative z-10">
            <SectionHeading
              eyebrow="Work archive"
              title="A structured archive of campaigns, writing, strategy, and independent work."
              description="This archive is meant to feel organized without flattening the personality of the work, whether the focus is content strategy, scripting, campaign thinking, or self-initiated creative projects."
            />
          </div>
        </Reveal>

        <Reveal>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 relative z-10"
          >
            <FilterBar activeCategory={activeCategory} onSelect={setActiveCategory} />
            <p className="text-xs font-bold uppercase tracking-wider text-[#243B8F]/72">
              Showing <span className="text-[#243B8F] font-black underline">{visibleProjects.length}</span> project
              {visibleProjects.length === 1 ? "" : "s"} in the{" "}
              <span className="text-[#243B8F] font-black underline">{activeCategory.replace("-", " ")}</span> category.
            </p>
          </motion.section>
        </Reveal>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:gap-8 xl:grid-cols-2 relative z-10"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </motion.section>
      </div>
    </div>
  );
}
