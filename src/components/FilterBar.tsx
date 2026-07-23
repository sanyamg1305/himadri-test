import { projectCategories } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types/portfolio";

type FilterBarProps = {
  activeCategory: ProjectCategory;
  onSelect: (category: ProjectCategory) => void;
};

export function FilterBar({ activeCategory, onSelect }: FilterBarProps) {
  return (
    <div
      className="flex gap-2 overflow-x-auto rounded-[1.25rem] border border-[#e2ebfb] bg-[#fbfdff] p-2 sm:flex-wrap sm:gap-3 sm:rounded-[1.5rem] sm:p-3"
      aria-label="Project filters"
    >
      {projectCategories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onSelect(category.value)}
          className={cn(
            "shrink-0 rounded-full px-4 py-2 text-sm transition",
            activeCategory === category.value
              ? "bg-[#2b6de0] text-white"
              : "border border-[#d9e8ff] bg-white text-[#123b73]/75 hover:border-[#2b6de0] hover:bg-[#eef4ff] hover:text-[#123b73]",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
