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
      className="flex gap-2 overflow-x-auto rounded-[1.5rem] border-2 border-[#243B8F] bg-[#FFF0C9]/10 p-3 sm:flex-wrap sm:gap-3 sm:p-4"
      aria-label="Project filters"
    >
      {projectCategories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onSelect(category.value)}
          className={cn(
            "shrink-0 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition duration-200",
            activeCategory === category.value
              ? "border-2 border-[#243B8F] bg-[#243B8F] text-[#FFF0C9] shadow-[3px_3px_0px_0px_#243B8F]"
              : "border-2 border-[#243B8F] bg-white text-[#243B8F] shadow-[3px_3px_0px_0px_#243B8F] hover:bg-[#FFF0C9]/50 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
