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
      className="border-4 border-[#243B8F] rounded-[2.25rem] bg-white shadow-[8px_8px_0px_0px_#243B8F] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#243B8F] flex h-full flex-col justify-between p-5 sm:p-6 relative"
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]/65">
          {post.platform ? `${post.platform} · ` : ""}
          {post.publishedAt} · {post.readTime}
        </p>
        <h3 className="mt-3 font-sans font-black text-2xl leading-tight text-[#243B8F] uppercase">
          {post.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#243B8F]/76 font-medium">{post.excerpt}</p>
      </div>

      <a
        href={post.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-xl border-2 border-[#243B8F] bg-[#FFF0C9] px-4 py-2.5 text-xs font-black uppercase text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] hover:bg-[#FFFDF0] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F] self-start"
      >
        {post.ctaLabel ?? "Read article"}
        <ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}
