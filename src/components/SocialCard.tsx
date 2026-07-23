import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { SocialLink } from "@/types/portfolio";

type SocialCardProps = {
  social: SocialLink;
};

export function SocialCard({ social }: SocialCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      className="panel flex h-full flex-col justify-between p-6"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-[#2b6de0]">{social.label}</p>
        <h3 className="mt-3 font-serif text-3xl text-[#0d2c5f]">{social.handle}</h3>
        <p className="mt-4 text-sm leading-7 text-[#123b73]/76">{social.summary}</p>
      </div>

      <a
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[#123b73] transition hover:text-[#2b6de0]"
      >
        Visit profile
        <ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}
