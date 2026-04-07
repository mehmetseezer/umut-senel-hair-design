"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Scissors, Crown, Star, Sparkles } from "lucide-react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1170&auto=format&fit=crop",
    alt: "Barber at work",
    title: "USTALIK",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    alt: "Classic shave",
    title: "GELENEK",
  },
  {
    src: "https://images.pexels.com/photos/2809652/pexels-photo-2809652.jpeg",
    alt: "Modern grooming",
    title: "MODERN",
  },
  {
    src: "https://images.pexels.com/photos/9992816/pexels-photo-9992816.jpeg",
    alt: "Luxury service",
    title: "LÜKS",
  },
];

// Berber temalı ikonlar
const barberIcons = [
  { icon: Scissors, position: "top-20 left-10", delay: 0, rotate: 45 },
  { icon: Crown, position: "top-32 right-20", delay: 1, rotate: -15 },
  { icon: Star, position: "bottom-40 left-24", delay: 2, rotate: 0 },
  { icon: Sparkles, position: "bottom-32 right-16", delay: 1.5, rotate: 25 },
  { icon: Scissors, position: "top-1/2 left-5", delay: 0.5, rotate: -30 },
  { icon: Crown, position: "top-1/3 right-8", delay: 2.5, rotate: 10 },
];

export function ElevatedHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 0.25,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-dark/95 to-dark">

      {/* Background Carousel - Daha yumuşak ve görünür */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 1.2 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentIndex].src}
              alt={heroImages[currentIndex].alt}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Hafif overlay - görünürlük için */}
            <div className="absolute inset-0 bg-dark/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Berber İkonları - Dekoratif */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {barberIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ opacity: 0.15, scale: 1, rotate: item.rotate }}
            transition={{ delay: item.delay, duration: 1, ease: "easeOut" }}
            className={`absolute ${item.position}`}
          >
            <item.icon size={40} className="text-gold" strokeWidth={1} />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-[1]" />

      {/* Carousel Navigation Buttons */}
      <div className="absolute left-4 md:left-10 z-30 top-1/2 -translate-y-1/2">
        <button
          onClick={handlePrev}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 bg-dark/30 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-500 group"
        >
          <ChevronLeft size={18} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>
      <div className="absolute right-4 md:right-10 z-30 top-1/2 -translate-y-1/2">
        <button
          onClick={handleNext}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold/30 bg-dark/30 backdrop-blur-sm flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all duration-500 group"
        >
          <ChevronRight size={18} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-500 rounded-full ${index === currentIndex
              ? "w-10 h-1 bg-gold"
              : "w-2 h-1 bg-gold/30 hover:bg-gold/60"
              }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 flex flex-col items-center max-w-5xl">
        <motion.div
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.3em", opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-gold font-black text-[10px] md:text-[11px] uppercase mb-8 md:mb-10 flex items-center gap-4"
        >
          <div className="h-[1px] w-8 md:w-10 bg-gold/40" />
          EST. 2023
          <div className="h-[1px] w-8 md:w-10 bg-gold/40" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-black uppercase leading-[0.85] tracking-tighter text-white mb-10 md:mb-16"
        >
          UMUT <br /> <span className="text-gradient">ŞENEL</span>
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1.8, delay: 0.6 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8 md:mb-10"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center"
        >
          <a
            href="#services"
            className="text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all duration-500 hover:scale-105"
          >
            KEŞFET
          </a>
          <div className="w-px h-5 bg-white/10 hidden sm:block" />
          <a
            href="#contact"
            className="group relative px-8 md:px-12 py-3.5 md:py-4 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 text-gold text-[10px] md:text-[11px] font-black tracking-[0.3em] uppercase group-hover:text-dark transition-colors duration-500">
              RANDEVU AL
              <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 border border-gold/40 group-hover:border-gold transition-colors duration-500" />
            <div className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </div>

      {/* Dekoratif Alt Çizgi - Berber fırçası efekti */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "60px" }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-1"
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-1 h-8 bg-gold/30 rounded-full" />
        ))}
      </motion.div>

      {/* Current Image Title - Minimal */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-12 right-6 md:right-12 z-20 text-right hidden md:block"
      >
        <p className="text-gold/30 text-[9px] tracking-[0.3em] font-mono">
          {String(currentIndex + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
        </p>
      </motion.div>
    </section>
  );
}