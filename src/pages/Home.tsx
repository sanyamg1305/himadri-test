import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Camera,
  Video,
  PenTool,
  BookOpen,
  Sparkles,
  Megaphone,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  RefreshCw,
  Award
} from "lucide-react";

import { usePortfolioStore } from "@/store/usePortfolioStore";
import { profile, metrics, experienceHighlights } from "@/data/portfolio";
import type { ProjectCategory } from "@/types/portfolio";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { setActiveCategory } = usePortfolioStore();

  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const resetSlide = () => {
    setCurrentSlide(0);
  };

  const handleCategoryClick = (category: ProjectCategory) => {
    setActiveCategory(category);
    navigate("/work");
  };

  // Mock QR code SVG rendering for a clean custom print-like aesthetic
  const renderQRCode = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#243B8F]">
      <rect width="64" height="64" rx="8" fill="#FFF0C9" />
      <path d="M8 8H24V24H8V8ZM10 10V22H22V10H10Z" fill="currentColor" />
      <path d="M40 8H56V24H40V8ZM42 10V22H54V10H42Z" fill="currentColor" />
      <path d="M8 40H24V56H8V40ZM10 42V54H22V42H10Z" fill="currentColor" />
      <path d="M14 14H18V18H14V14Z" fill="currentColor" />
      <path d="M46 14H50V18H46V14Z" fill="currentColor" />
      <path d="M14 46H18V50H14V46Z" fill="currentColor" />
      {/* Random mock QR points */}
      <rect x="28" y="8" width="4" height="4" fill="currentColor" />
      <rect x="32" y="12" width="4" height="4" fill="currentColor" />
      <rect x="28" y="20" width="8" height="4" fill="currentColor" />
      <rect x="8" y="28" width="4" height="8" fill="currentColor" />
      <rect x="16" y="32" width="8" height="4" fill="currentColor" />
      <rect x="28" y="28" width="8" height="8" fill="currentColor" />
      <rect x="40" y="28" width="4" height="4" fill="currentColor" />
      <rect x="48" y="32" width="8" height="4" fill="currentColor" />
      <rect x="40" y="40" width="8" height="4" fill="currentColor" />
      <rect x="32" y="44" width="4" height="8" fill="currentColor" />
      <rect x="44" y="48" width="12" height="4" fill="currentColor" />
      <rect x="40" y="52" width="4" height="4" fill="currentColor" />
      <rect x="52" y="52" width="4" height="4" fill="currentColor" />
    </svg>
  );

  return (
    <div className="container px-4 py-8 md:py-12">
      {/* Main Magazine Slide Deck Container */}
      <div className="max-w-6xl mx-auto border-4 border-[#243B8F] rounded-[2rem] bg-white relative overflow-hidden shadow-[12px_12px_0px_0px_#243B8F] min-h-[780px] lg:h-[80vh] lg:min-h-[780px] flex flex-col justify-between">
        
        {/* Carousel Slider */}
        <div className="relative flex-1 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            
            {/* ==================== SLIDE 1: HERO ==================== */}
            <div className="w-full shrink-0 p-6 md:p-12 flex flex-col justify-between relative h-full">
              {/* Background Outline Number */}
              <div className="absolute left-8 top-6 text-[18rem] md:text-[24rem] font-black text-[#243B8F]/5 z-0 select-none pointer-events-none leading-none">
                01
              </div>

              {/* Decorative Collaged Doodles */}
              <div className="absolute top-12 right-1/3 text-[#243B8F]/20 pointer-events-none hidden md:block">
                <Sparkles size={48} className="animate-pulse" />
                <span className="text-xs uppercase tracking-widest block mt-2">Writing in motion</span>
              </div>
              <div className="absolute bottom-24 left-12 text-[#243B8F]/15 pointer-events-none hidden lg:block">
                <PenTool size={36} />
              </div>
              <div className="absolute top-1/2 right-1/4 text-[#243B8F]/15 pointer-events-none hidden lg:block">
                <Camera size={36} />
              </div>

              {/* Hero Header Z-Index layer */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-8 items-center my-auto">
                <div className="space-y-6">
                  {/* Category Pill */}
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#243B8F] shadow-[3px_3px_0px_0px_#243B8F]">
                    <Sparkles size={12} />
                    Creative Strategy & Storytelling
                  </div>

                  {/* Giant Title */}
                  <h1 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-[#243B8F] tracking-tight uppercase">
                    HIMADRI <br />
                    <span className="text-transparent stroke-text">JAIN.</span>
                  </h1>

                  <p className="max-w-xl text-[15px] md:text-lg leading-relaxed text-[#243B8F]/85 font-medium">
                    {profile.introduction}
                  </p>

                  {/* Sideways sub-badge / metadata */}
                  <div className="flex items-center gap-3 pt-2">
                    <span className="h-px w-12 bg-[#243B8F]" />
                    <p className="text-xs uppercase tracking-[0.24em] font-semibold text-[#243B8F]/70">
                      Selected Strategy & Writing Archive
                    </p>
                  </div>
                </div>

                {/* Hero Cutout Portrait Presentation */}
                <div className="relative mx-auto lg:ml-auto max-w-[280px] sm:max-w-[320px] w-full">
                  <div className="relative border-4 border-[#243B8F] rounded-[2rem] overflow-hidden bg-white shadow-[8px_8px_0px_0px_#243B8F] aspect-[4/5] group transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#243B8F]">
                    <img
                      src={profile.heroImage}
                      alt={profile.name}
                      className="w-full h-full object-cover grayscale contrast-[1.15] group-hover:grayscale-0 transition-all duration-500"
                    />
                    {/* Vertical Side label */}
                    <div className="absolute right-0 top-0 bottom-0 bg-[#243B8F] text-[#FFF0C9] px-2 py-6 flex items-center justify-center [writing-mode:vertical-lr] select-none rounded-r-md">
                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
                        HIMADRI // 2026
                      </p>
                    </div>
                  </div>
                  
                  {/* Rotating stamp sticker */}
                  <div className="absolute -bottom-5 -right-5 z-20 w-24 h-24 flex items-center justify-center select-none pointer-events-none md:pointer-events-auto">
                    <div className="w-20 h-20 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9] shadow-[4px_4px_0px_0px_#243B8F] flex items-center justify-center relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_15s_linear_infinite] absolute inset-0">
                        <path
                          id="stampPath"
                          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                          fill="none"
                        />
                        <text className="text-[7.5px] font-black uppercase fill-[#243B8F] tracking-[0.08em]">
                          <textPath href="#stampPath" startOffset="0%">
                            D3 injection certified • D3 injection certified •
                          </textPath>
                        </text>
                      </svg>
                      <div className="absolute z-10 text-[#243B8F] font-black text-xs">D3</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page marker / slider hint */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#243B8F]/15 pt-4 mt-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]/60">
                  Slide 01 // Introduction
                </span>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9]/40 hover:bg-[#FFF0C9] px-4 py-2 text-xs font-bold text-[#243B8F] transition duration-200 shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
                >
                  Meet Himadri
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* ==================== SLIDE 2: ABOUT ==================== */}
            <div className="w-full shrink-0 p-6 md:p-12 flex flex-col justify-between relative h-full">
              {/* Background Outline Number */}
              <div className="absolute left-8 top-6 text-[18rem] md:text-[24rem] font-black text-[#243B8F]/5 z-0 select-none pointer-events-none leading-none">
                02
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.8fr,1.2fr] gap-8 items-center my-auto">
                {/* Left Column: Portrait & QR Card */}
                <div className="flex flex-col gap-5 max-w-[280px] sm:max-w-[300px] mx-auto lg:mx-0 w-full">
                  <div className="relative border-4 border-[#243B8F] rounded-[1.5rem] overflow-hidden bg-white shadow-[6px_6px_0px_0px_#243B8F] aspect-square group transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_0px_#243B8F]">
                    <img
                      src={profile.heroImage}
                      alt={profile.name}
                      className="w-full h-full object-cover grayscale contrast-[1.15] group-hover:grayscale-0 transition-all duration-500 object-top"
                    />
                  </div>
                  
                  {/* Mock QR Contact Card */}
                  <div className="border-2 border-[#243B8F] rounded-[1.5rem] bg-[#FFF0C9]/20 p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_#243B8F]">
                    {renderQRCode()}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]">
                        Resume Folder
                      </p>
                      <a
                        href={profile.resumeHref}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-[#243B8F] underline hover:text-[#243B8F]/80 flex items-center gap-1 mt-1"
                      >
                        Open Drive
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: HELLO & Info Grid */}
                <div className="space-y-6">
                  <div>
                    <h2 className="font-sans font-black text-5xl md:text-7xl text-[#243B8F] tracking-tight uppercase leading-none">
                      HELLO.
                    </h2>
                    <p className="mt-4 text-[14px] md:text-[16px] leading-relaxed text-[#243B8F]/85 font-medium">
                      I&apos;m <strong>Himadri Jain</strong>, a storyteller who moves between editorial writing, campaign strategy, scripting, and social media. I bring structured strategy together with creative curiosity to make work that sticks.
                    </p>
                  </div>

                  {/* Zine Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#243B8F]/15">
                    {/* Education & Experience */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#243B8F]/50">
                          Education
                        </h4>
                        <p className="text-xs font-bold text-[#243B8F] mt-1">
                          Informatics & Digital Marketing
                        </p>
                        <p className="text-[11px] text-[#243B8F]/85">
                          Focused on social dynamics, copy, and campaigns.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#243B8F]/50">
                          Experience
                        </h4>
                        <ul className="text-xs space-y-1.5 text-[#243B8F] font-semibold mt-1">
                          {experienceHighlights.slice(0, 3).map((item) => (
                            <li key={item.title} className="flex gap-2 items-start">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#243B8F]" />
                              <span>{item.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specialties & Software */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-[10px] uppercase tracking-wider font-bold text-[#243B8F]/50">
                          Core Specialties
                        </h4>
                        <p className="text-xs font-semibold text-[#243B8F] leading-relaxed mt-1">
                          Scriptwriting, Brand Tonality, Social Media Management, Content Cadence, and Creative Copy.
                        </p>
                      </div>
                      
                      {/* Let's Work Together Contact Block */}
                      <div className="p-3 rounded-xl bg-[#FFF0C9]/40 border-2 border-[#243B8F]/20 space-y-2">
                        <h4 className="text-[10px] uppercase tracking-widest font-black text-[#243B8F]">
                          Let&apos;s Work Together:
                        </h4>
                        <div className="space-y-1 text-[11px] font-bold text-[#243B8F]/95">
                          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:underline">
                            <Mail size={12} />
                            {profile.email}
                          </a>
                          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:underline">
                            <Phone size={12} />
                            {profile.phone}
                          </a>
                          <div className="flex items-center gap-2">
                            <MapPin size={12} />
                            {profile.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide Marker & Next Button */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#243B8F]/15 pt-4 mt-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]/60">
                  Slide 02 // Profile & Bio
                </span>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9]/40 hover:bg-[#FFF0C9] px-4 py-2 text-xs font-bold text-[#243B8F] transition duration-200 shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
                >
                  Explore Work Categories
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* ==================== SLIDE 3: TABLE OF CONTENT ==================== */}
            <div className="w-full shrink-0 p-6 md:p-12 flex flex-col justify-between relative h-full">
              {/* Background Outline Number */}
              <div className="absolute left-8 top-6 text-[18rem] md:text-[24rem] font-black text-[#243B8F]/5 z-0 select-none pointer-events-none leading-none">
                03
              </div>

              <div className="relative z-10 space-y-6 my-auto">
                <div className="text-center lg:text-left">
                  <h2 className="font-sans font-black text-4xl md:text-6xl text-[#243B8F] tracking-tight uppercase leading-none">
                    TABLE OF CONTENT.
                  </h2>
                  <p className="mt-3 text-xs md:text-sm font-bold uppercase tracking-widest text-[#243B8F]/60">
                    Click to filter and view selected creative archives
                  </p>
                </div>

                {/* Categories Zine Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                  <div
                    onClick={() => handleCategoryClick("campaign")}
                    className="border-2 border-[#243B8F] rounded-[1.5rem] bg-white p-5 text-center cursor-pointer hover:bg-[#FFF0C9]/60 hover:-translate-y-1.5 transition-all duration-300 shadow-[4px_4px_0px_0px_#243B8F] group"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF0C9] flex items-center justify-center text-[#243B8F] border border-[#243B8F]/20 group-hover:scale-110 transition duration-300">
                      <Megaphone size={24} />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#243B8F] mt-4">
                      Campaigns
                    </h3>
                    <p className="text-[10px] text-[#243B8F]/60 mt-1 font-semibold">Specs & Ideas</p>
                  </div>

                  <div
                    onClick={() => handleCategoryClick("social-strategy")}
                    className="border-2 border-[#243B8F] rounded-[1.5rem] bg-white p-5 text-center cursor-pointer hover:bg-[#FFF0C9]/60 hover:-translate-y-1.5 transition-all duration-300 shadow-[4px_4px_0px_0px_#243B8F] group"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF0C9] flex items-center justify-center text-[#243B8F] border border-[#243B8F]/20 group-hover:scale-110 transition duration-300">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#243B8F] mt-4">
                      Social Strategy
                    </h3>
                    <p className="text-[10px] text-[#243B8F]/60 mt-1 font-semibold">Festive & Cadence</p>
                  </div>

                  <div
                    onClick={() => handleCategoryClick("production")}
                    className="border-2 border-[#243B8F] rounded-[1.5rem] bg-white p-5 text-center cursor-pointer hover:bg-[#FFF0C9]/60 hover:-translate-y-1.5 transition-all duration-300 shadow-[4px_4px_0px_0px_#243B8F] group"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF0C9] flex items-center justify-center text-[#243B8F] border border-[#243B8F]/20 group-hover:scale-110 transition duration-300">
                      <Video size={24} />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#243B8F] mt-4">
                      Production
                    </h3>
                    <p className="text-[10px] text-[#243B8F]/60 mt-1 font-semibold">Video CV & Shoots</p>
                  </div>

                  <div
                    onClick={() => handleCategoryClick("writing")}
                    className="border-2 border-[#243B8F] rounded-[1.5rem] bg-white p-5 text-center cursor-pointer hover:bg-[#FFF0C9]/60 hover:-translate-y-1.5 transition-all duration-300 shadow-[4px_4px_0px_0px_#243B8F] group"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-[#FFF0C9] flex items-center justify-center text-[#243B8F] border border-[#243B8F]/20 group-hover:scale-110 transition duration-300">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#243B8F] mt-4">
                      Writing & Books
                    </h3>
                    <p className="text-[10px] text-[#243B8F]/60 mt-1 font-semibold">Author & Medium</p>
                  </div>
                </div>

                {/* Metrics Highlight block */}
                <div className="border-2 border-[#243B8F] rounded-[1.5rem] bg-[#FFF0C9]/20 p-4 md:p-5 shadow-[6px_6px_0px_0px_#243B8F]">
                  <div className="flex items-center gap-2 border-b border-[#243B8F]/15 pb-2 mb-3">
                    <Award size={16} className="text-[#243B8F]" />
                    <h4 className="text-[10px] uppercase tracking-widest font-black text-[#243B8F]">
                      Key Career Metrics
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {metrics.slice(1, 4).map((metric) => (
                      <div key={metric.label} className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-[#243B8F]/65 truncate">
                          {metric.label}
                        </p>
                        <p className="text-xl md:text-3xl font-sans font-black text-[#243B8F]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slide Marker & Next Button */}
              <div className="relative z-10 flex items-center justify-between border-t border-[#243B8F]/15 pt-4 mt-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#243B8F]/60">
                  Slide 03 // Work Chapters
                </span>
                <button
                  type="button"
                  onClick={resetSlide}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9]/40 hover:bg-[#FFF0C9] px-4 py-2 text-xs font-bold text-[#243B8F] transition duration-200 shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
                >
                  Restart Presentation
                  <RefreshCw size={12} className="animate-spin-slow" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM NAVIGATION ROW */}
        <div className="border-t-4 border-[#243B8F] bg-[#FFF0C9]/15 px-6 py-4 md:px-8 flex items-center justify-between relative z-20">
          {/* Visit site / View selected work link button */}
          <Link
            to="/work"
            onClick={() => setActiveCategory("all")}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#243B8F] bg-[#FFF0C9] hover:bg-[#FFFDF0] px-4 py-2.5 text-xs font-black uppercase text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
          >
            View selected work
            <ArrowUpRight size={14} />
          </Link>

          {/* Dots Pagination navigation */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`w-3.5 h-3.5 rounded-full border-2 border-[#243B8F] transition duration-300 ${
                  currentSlide === idx
                    ? "bg-[#243B8F] scale-110 shadow-[2px_2px_0px_0px_#243B8F]/30"
                    : "bg-white hover:bg-[#FFF0C9]/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Slide Arrow Navigation controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border-2 border-[#243B8F] bg-white hover:bg-[#FFF0C9]/40 flex items-center justify-center text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border-2 border-[#243B8F] bg-white hover:bg-[#FFF0C9]/40 flex items-center justify-center text-[#243B8F] transition shadow-[3px_3px_0px_0px_#243B8F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#243B8F]"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
