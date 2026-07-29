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
      className="panel flex h-full flex-col justify-between p-5 sm:p-6"
    >
      <div>
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#243B8F] sm:text-xs sm:tracking-[0.32em]">
          {social.label}
        </p>
        <h3 className="mt-3 font-serif text-[2rem] text-[#243B8F] sm:text-3xl">{social.handle}</h3>
        <p className="mt-4 text-sm leading-7 text-[#243B8F]/76">{social.summary}</p>
      </div>

      <a
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-[#243B8F] transition hover:text-[#243B8F]/80"
      >
        Visit profile
        <ArrowUpRight size={16} />
      </a>
    </motion.article>
  );
}
