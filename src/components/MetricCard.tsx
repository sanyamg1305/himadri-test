import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { Metric } from "@/types/portfolio";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  const isLongValue = metric.value.length > 10;

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -3 }}
      className="panel h-full p-5 sm:p-6"
    >
      <div className="subtle-divider mb-5" />
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#2b6de0] sm:text-[11px] sm:tracking-[0.28em]">
        {metric.label}
      </p>
      <p
        className={`mt-4 font-serif leading-[0.95] text-[#0d2c5f] ${isLongValue ? "max-w-[8ch] text-[1.75rem] sm:max-w-none sm:text-[2.15rem]" : "text-[2rem] sm:text-[2.3rem]"}`}
      >
        {metric.value}
      </p>
      <p className="mt-3 text-sm leading-6 text-[#123b73]/72">{metric.context}</p>
    </motion.article>
  );
}
