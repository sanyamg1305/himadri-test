import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { MediumEntry } from "@/types/portfolio";

type MediumCardProps = {
  post: MediumEntry;
};

export function MediumCard({ post }: MediumCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="panel flex h-full flex-col justify-between p-5 sm:p-6"
    >
      <div>
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#2b6de0]">
          {post.publishedAt} · {post.readTime}
        </p>
        <h3 className="mt-3 font-serif text-[2rem] leading-tight text-[#0d2c5f] sm:text-3xl">
          {post.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#123b73]/76">{post.excerpt}</p>
      </div>

      <a
        href={post.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[#123b73] transition hover:text-[#2b6de0]"
      >
        Read on Medium
        <ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}
