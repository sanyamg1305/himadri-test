import { motion } from "framer-motion";

import { staggerItem } from "@/components/motionVariants";
import type { Metric } from "@/types/portfolio";

type MetricCardProps = {
  metric: Metric;
};

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -3 }}
      className="panel h-full p-6"
    >
      <div className="subtle-divider mb-5" />
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#2b6de0]">{metric.label}</p>
      <p className="mt-4 font-serif text-[2.3rem] text-[#0d2c5f]">{metric.value}</p>
      <p className="mt-3 text-sm leading-6 text-[#123b73]/72">{metric.context}</p>
    </motion.article>
  );
}
