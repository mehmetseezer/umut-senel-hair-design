"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Scissors, Menu, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "ANA SAYFA", href: "#home" },
  { name: "HİZMETLER", href: "#services" },
  { name: "GALERİ", href: "#gallery" },
  { name: "İLETİŞİM", href: "#contact" },
];

export function ElegantNavbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("ANA SAYFA");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll bazlı transformlar
  const navbarHeight = useTransform(scrollY, [0, 100], ["120px", "80px"]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);
  const buttonScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  return (
    <motion.header
      style={{ height: navbarHeight }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-700",
        isScrolled
          ? "bg-dark/95 backdrop-blur-xl border-b border-gold/20 shadow-2xl"
          : "bg-transparent border-b border-gold/10"
      )}
    >
      <div className="w-full max-w-7xl mx-auto h-full px-6 md:px-10">
        <div className="flex items-center justify-between h-full">

          {/* Logo Bölümü - Logo + Yazı */}
          <motion.a
            href="#home"
            style={{ scale: logoScale }}
            className="flex items-center gap-4 group shrink-0"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-gold/20 blur-2xl rounded-full group-hover:bg-gold/30 transition-all duration-500" />
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold/10 to-transparent border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-all duration-500">
                <Scissors
                  className="text-gold transition-all duration-500 group-hover:rotate-45 group-hover:scale-110"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
            </div>

            {/* Logo Container - Sabit boyut ve taşma koruması */}
            <div className="relative overflow-hidden shrink-0">
              <Image
                src="/logo.jpeg"
                alt="Umut Şenel Logo"
                width={120}
                height={40}
                className="w-auto h-[35px] md:h-[40px] object-contain"
                priority
              />
            </div>

            {/* Marka Yazısı - Responsive */}
            <div className="hidden sm:block border-l border-gold/30 pl-4">
              <div className="flex flex-col">
                <span className="text-white font-serif text-sm md:text-base tracking-wide whitespace-nowrap">
                  UMUT ŞENEL
                </span>
                <span className="text-gold/70 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
                  HAIR DESIGN
                </span>
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigasyon */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className="group relative py-2"
              >
                <span className={cn(
                  "text-[13px] font-bold tracking-[0.25em] uppercase transition-all duration-500 whitespace-nowrap",
                  activeLink === link.name
                    ? "text-gold"
                    : "text-white/60 group-hover:text-white"
                )}>
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-0 left-0 h-[2px] bg-gold"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                {activeLink === link.name && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-0 left-0 h-[2px] bg-gold"
                    style={{ width: "100%" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Sağ Taraf - Randevu Butonu ve Sosyal */}
          <div className="hidden lg:flex items-center gap-8">
            <motion.a
              href="#contact"
              style={{ scale: buttonScale }}
              className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/40 hover:border-gold/80 transition-all duration-500 shrink-0"
            >
              <span className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                <span className="text-gold text-[11px] font-black tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-500">
                  RANDEVU AL
                </span>
                <ChevronRight
                  size={14}
                  className="text-gold group-hover:translate-x-1 group-hover:text-white transition-all duration-500"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold/80 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>

            {/* Dekoratif Çizgi */}
            <div className="w-px h-8 bg-gold/20" />

            {/* Telefon Numarası */}
            <a href="tel:+905458504460" className="text-white/40 hover:text-gold text-sm font-mono tracking-wider transition-colors duration-300 whitespace-nowrap">
              +90 545 850 44 60
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-12 h-12 rounded-full border border-gold/30 hover:border-gold/60 hover:bg-gold/5 transition-all duration-500 group shrink-0"
          >
            {isOpen ? (
              <X size={22} className="text-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            ) : (
              <Menu size={22} className="text-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full screen style */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "100vh", opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden fixed top-[80px] left-0 right-0 bg-dark/98 backdrop-blur-xl overflow-hidden z-50 border-t border-gold/20"
      >
        <div className="flex flex-col h-full py-12 px-8 gap-12">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between py-4 border-b border-gold/10 hover:border-gold/30 transition-all duration-300"
              >
                <span className="text-2xl font-serif font-bold tracking-wider text-white group-hover:text-gold transition-colors duration-300">
                  {link.name}
                </span>
                <ChevronRight size={20} className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 space-y-6"
          >
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-gold to-gold/80 text-dark font-black text-center tracking-[0.2em] text-sm uppercase rounded-full"
            >
              RANDEVU AL
              <ChevronRight size={18} />
            </a>

            <div className="text-center">
              <p className="text-gold/40 text-[10px] tracking-[0.2em] mb-2">7/24 REZERVASYON</p>
              <a href="tel:+905522403705" className="text-white/60 hover:text-gold text-lg font-mono tracking-wider transition-colors duration-300">
                +90 552 240 37 05
              </a>
            </div>
          </motion.div>

          {/* Mobile Social */}
          <div className="flex justify-center gap-6 pt-8 mt-auto">
            {["INSTAGRAM", "FACEBOOK", "YOUTUBE"].map((social) => (
              <a key={social} href="#" className="text-[10px] tracking-[0.2em] text-gold/40 hover:text-gold transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}

// cn helper function
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}