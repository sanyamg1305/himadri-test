import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { BookEntry } from "@/types/portfolio";

type BookCardProps = {
  book: BookEntry;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white shadow-[8px_8px_0px_0px_#243B8F] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#243B8F] h-full overflow-hidden flex flex-col justify-between relative"
    >
      <img
        className="h-64 w-full object-cover grayscale contrast-[1.15] hover:grayscale-0 transition-all duration-500 sm:h-80"
        src={book.image}
        alt={book.title}
      />
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-sans font-black text-2xl text-[#243B8F] uppercase">{book.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#243B8F]/76 font-medium">{book.description}</p>
        </div>
        <a
          href={book.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#243B8F] bg-[#FFF0C9] px-4 py-2.5 text-xs font-black uppercase text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] hover:bg-[#FFFDF0] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F] self-start"
        >
          Buy on Amazon
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
