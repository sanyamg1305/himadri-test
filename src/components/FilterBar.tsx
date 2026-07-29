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
      className="flex gap-2 overflow-x-auto rounded-[1.25rem] border border-[#243B8F]/15 bg-[#FFF0C9]/40 p-2 sm:flex-wrap sm:gap-3 sm:rounded-[1.5rem] sm:p-3"
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
              ? "bg-[#243B8F] text-white"
              : "border border-[#243B8F]/15 bg-white text-[#243B8F]/75 hover:border-[#243B8F] hover:bg-[#FFF0C9] hover:text-[#243B8F]",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
