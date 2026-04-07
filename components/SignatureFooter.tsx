"use client";

import { motion } from "framer-motion";
import { Scissors, Instagram, Phone, MapPin, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";

export function SignatureFooter() {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "+90 545 850 44 60";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Merhaba,%20randevu%20almak%20istiyorum.`;
  const instagramUrl = "https://www.instagram.com/umutsenelhairdesign/";

  const socialLinks = [
    { icon: Instagram, label: "INSTAGRAM", href: instagramUrl },
    { icon: MessageCircle, label: "WHATSAPP", href: whatsappUrl },
  ];

  return (
    <footer className="relative bg-[#050505] pt-32 pb-12 overflow-hidden flex justify-center">
      {/* Background Decorative Text */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none tracking-tighter text-[20vw] font-serif italic text-white/[0.02] whitespace-nowrap">
        Umut Şenel Hair Design
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
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
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
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white text-sm font-light transition-colors duration-300 flex items-center gap-2">
                    {social.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 py-10 md:py-12 border-y border-white/5">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1 duration-300"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
              <MapPin size={18} strokeWidth={1} className="lg:w-[20px] lg:h-[20px]" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Konum</p>
              <p className="text-xs sm:text-sm text-white font-light">Orhangazi, Narlı Sokak No:37, Pendik/İstanbul</p>
            </div>
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1 duration-300"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500 flex-shrink-0">
              <Phone size={18} strokeWidth={1} className="lg:w-[20px] lg:h-[20px]" />
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Bize Ulaşın</p>
              <p className="text-xs sm:text-sm text-white font-light">{phoneNumber}</p>
            </div>
          </a>
        </div>

        {/* Bottom Section: Copyright & Sezkon Branding */}
        <div className="mt-10 md:mt-12 flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2 lg:gap-3 mb-2">
              <Scissors className="text-gold" size={18} />
              <Image
                src="/logo.jpeg"
                alt="Umut Şenel Logo"
                width={120}
                height={30}
                className="object-contain rounded-full"
                priority
              />
            </div>
            <p className="text-zinc-600 text-[9px] lg:text-[10px] tracking-[0.2em] uppercase leading-relaxed">
              © {currentYear} UMUT ŞENEL HAIR DESIGN — TÜM HAKLARI SAKLIDIR
            </p>
          </div>

          {/* SEZKON - Agency Credit */}
          <div className="flex flex-col items-center gap-1 group">
            <span className="text-zinc-700 text-[8px] tracking-[0.3em] uppercase">Digital Experience By</span>
            <a
              href="https://www.sezkon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-gold text-[11px] tracking-[0.5em] font-medium transition-all duration-300 flex items-center gap-1"
            >
              SEZKON
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
            </a>
          </div>

          {/* Legal & Social Mobile Mix */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-zinc-600 hover:text-white text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors">Gizlilik</a>
              <a href="#" className="text-zinc-600 hover:text-white text-[9px] lg:text-[10px] tracking-[0.2em] uppercase transition-colors">Şartlar</a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-gold hover:border-gold transition-all duration-300"
                >
                  <item.icon size={12} />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}