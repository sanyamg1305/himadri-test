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
    <div className="container space-y-12 px-6 py-12 lg:px-10 lg:py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Work archive"
          title="A structured archive of campaigns, writing, strategy, and independent work."
          description="This archive is meant to feel organized without flattening the personality of the work, whether the focus is content strategy, scripting, campaign thinking, or self-initiated creative projects."
        />
      </Reveal>

      <Reveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <FilterBar activeCategory={activeCategory} onSelect={setActiveCategory} />
          <p className="text-sm leading-7 text-[#123b73]/72">
            Showing <span className="text-[#0d2c5f]">{visibleProjects.length}</span> project
            {visibleProjects.length === 1 ? "" : "s"} in the{" "}
            <span className="text-[#2b6de0]">{activeCategory.replace("-", " ")}</span> category.
          </p>
        </motion.section>
      </Reveal>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-6 xl:grid-cols-2"
      >
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.section>
    </div>
  );
}
