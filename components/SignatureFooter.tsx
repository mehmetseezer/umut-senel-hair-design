"use client";

import { motion } from "framer-motion";
import { Scissors, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function SignatureFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: "INSTAGRAM", href: "#" },
    { icon: Youtube, label: "YOUTUBE", href: "#" },
    { icon: Scissors, label: "TİKTOK", href: "#" },
  ];

  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden flex justify-center">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none tracking-tighter text-[20vw] font-serif italic text-white/[0.02] whitespace-nowrap">
        Umut Şenel Grooming
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Section: Big CTA & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 lg:gap-8"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight">
              Kişisel stilinize <br />
              <span className="italic text-gold">yeni bir soluk</span> getirin.
            </h2>
            <a
              href="https://wa.me/905522403705"
              className="group flex items-center gap-3 lg:gap-4 text-gold font-medium tracking-[0.2em] text-xs sm:text-sm uppercase transition-all w-fit"
            >
              <span className="border-b border-gold/30 pb-1 group-hover:border-gold transition-all">Hemen Randevu Alın</span>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all duration-500">
                <ArrowUpRight size={16} strokeWidth={1.5} className="lg:w-[18px] lg:h-[18px]" />
              </div>
            </a>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 lg:pl-20">
            {/* Quick Links */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Menü</p>
              <nav className="flex flex-col gap-3 lg:gap-4">
                {["Ana Sayfa", "Hizmetler", "Galeri", "İletişim"].map((item) => (
                  <a key={item} href={`#${item === "Ana Sayfa" ? "home" : item.toLowerCase()}`} className="text-zinc-400 hover:text-white text-sm font-light transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4 lg:gap-6">
              <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Hizmetler</p>
              <nav className="flex flex-col gap-3 lg:gap-4">
                {["Saç Kesimi", "Sakal Tasarımı", "Cilt Bakımı", "VIP Paket"].map((item) => (
                  <a key={item} href="#services" className="text-zinc-400 hover:text-white text-sm font-light transition-colors duration-300">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Socials - Desktop */}
            <div className="hidden md:flex flex-col gap-4 lg:gap-6">
              <p className="text-white text-[10px] font-bold tracking-[0.3em] uppercase opacity-50">Sosyal Medya</p>
              <nav className="flex flex-col gap-3 lg:gap-4">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} className="text-zinc-400 hover:text-white text-sm font-light transition-colors duration-300 flex items-center gap-2">
                    {social.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 py-10 md:py-12 border-y border-white/5">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
              <MapPin size={18} strokeWidth={1} className="lg:w-[20px] lg:h-[20px]" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Konum</p>
              <p className="text-xs sm:text-sm text-white font-light">Maidan Plaza, Çankaya/Ankara</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
              <Phone size={18} strokeWidth={1} className="lg:w-[20px] lg:h-[20px]" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Bize Ulaşın</p>
              <p className="text-xs sm:text-sm text-white font-light">+90 (552) 240 37 05</p>
            </div>
          </div>

          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
              <Mail size={18} strokeWidth={1} className="lg:w-[20px] lg:h-[20px]" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">E-Posta</p>
              <p className="text-xs sm:text-sm text-white font-light">hello@umutsenel.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2 lg:gap-3 mb-2">
              <Scissors className="text-gold" size={18} />
              <span className="text-lg lg:text-xl font-serif font-light tracking-[0.2em] text-white">
                UMUT <span className="text-gold font-bold">ŞENEL</span>
              </span>
            </div>
            <p className="text-zinc-600 text-[9px] lg:text-[10px] tracking-[0.2em] uppercase leading-relaxed">
              © {currentYear} GROOMING STUDIO — ALL RIGHTS RESERVED
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            <a href="#" className="text-zinc-600 hover:text-white text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors">Privacy</a>
            <a href="#" className="text-zinc-600 hover:text-white text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors">Terms</a>
            <a href="#" className="text-zinc-600 hover:text-white text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors">Cookie Policy</a>
          </div>

          {/* Minimal Social Icons for Mobile */}
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map((item, i) => (
              <a key={i} href={item.href} className="w-7 h-7 lg:w-8 lg:h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all">
                <item.icon size={12} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}