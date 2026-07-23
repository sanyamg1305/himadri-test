import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { BookEntry } from "@/types/portfolio";

type BookCardProps = {
  book: BookEntry;
};

export function BookCard({ book }: BookCardProps) {
  return (
    <motion.article variants={staggerItem} whileHover={{ y: -4 }} className="panel h-full overflow-hidden">
      <img className="h-80 w-full object-cover transition duration-500 hover:scale-[1.01]" src={book.image} alt={book.title} />
      <div className="p-6">
        <h3 className="font-serif text-3xl text-[#0d2c5f]">{book.title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#123b73]/76">{book.description}</p>
        <a
          href={book.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-[#123b73] transition hover:text-[#2b6de0]"
        >
          Buy on Amazon
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
