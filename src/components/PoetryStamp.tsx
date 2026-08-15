import { useState } from "react";
import { ArrowUpRight, Scissors } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Poem = {
  book: string;
  text: string;
  year: string;
  href: string;
};

const poems: Poem[] = [
  {
    book: "Sky Within",
    text: "the clouds hold\nthe words I never said.\nthey grow heavy,\nthen they fall,\nclearing the space\ninside.",
    year: "2026",
    href: "https://www.amazon.in/Poetry-book-Within-Himadri-Jain/dp/9368687307",
  },
  {
    book: "Imprints of Life",
    text: "we leave footprints\non streets we walk,\nbut life leaves imprints\non the parts of us\nwe never show.",
    year: "2024",
    href: "https://www.amazon.in/gp/product/9361850016/ref=ewc_pr_img_2?smid=A15DBATYR506U3&psc=1",
  },
  {
    book: "Lost & Found",
    text: "to be seen is scary,\nbut to shrink ourselves\nto fit in a paper town\nis far scarier.",
    year: "2026",
    href: "https://medium.com/@himadri.jain27/lost-and-found-2998981696e9",
  },
];

export function PoetryStamp() {
  const [idx, setIdx] = useState(0);

  const handleTearOff = () => {
    setIdx((prev) => (prev + 1) % poems.length);
  };

  const currentPoem = poems[idx];

  return (
    <div className="border-2 border-[#243B8F] rounded-[1.5rem] bg-white shadow-[4px_4px_0px_0px_#243B8F] overflow-hidden relative flex flex-col justify-between h-48 sm:h-52 w-full">
      {/* Lined Paper background details */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(36,59,143,0.04)_1px,transparent_1px)] bg-[size:100%_1.25rem] pointer-events-none" />

      {/* Ribbon Banner */}
      <div className="bg-[#243B8F] text-[#FFF0C9] text-[9px] font-black uppercase tracking-widest py-1.5 px-3 text-center border-b border-[#243B8F] z-10 select-none">
        Poetry • {currentPoem.book} ({currentPoem.year})
      </div>

      {/* Main Poem Area */}
      <div className="p-4 flex-1 flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={idx}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 15, opacity: 0, scaleY: 0.8 }}
            transition={{ duration: 0.3 }}
            className="font-mono text-xs leading-relaxed text-[#243B8F] whitespace-pre-line text-center italic font-semibold"
          >
            &ldquo;{currentPoem.text}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Action Row */}
      <div className="border-t border-[#243B8F]/20 p-2.5 flex items-center justify-between bg-[#FFF0C9]/10 relative z-10">
        <a
          href={currentPoem.href}
          target="_blank"
          rel="noreferrer"
          className="text-[10px] font-black uppercase text-[#243B8F] hover:underline flex items-center gap-0.5"
        >
          Read Work
          <ArrowUpRight size={11} />
        </a>
        <button
          type="button"
          onClick={handleTearOff}
          className="inline-flex items-center gap-1 border border-[#243B8F] bg-white rounded-lg px-2.5 py-1 text-[9px] font-black uppercase text-[#243B8F] shadow-[1.5px_1.5px_0px_0px_#243B8F] hover:bg-[#FFF0C9]/20 active:translate-x-[0.5px] active:translate-y-[0.5px] active:shadow-none"
        >
          <Scissors size={10} />
          Tear Off
        </button>
      </div>
    </div>
  );
}
