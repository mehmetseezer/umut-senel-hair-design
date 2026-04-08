"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Clock, MessageCircle } from "lucide-react";

export function ContactSuite() {
  const phoneNumber = "+90 545 850 44 60";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=Merhaba%20Umut%20Bey,%20randevu%20almak%20istiyorum.`;
  const instagramUrl = "https://www.instagram.com/umutsenelhairdesign/";

  return (
    <section id="contact" className="py-48 bg-dark border-t border-white/5 flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-black text-[12px] tracking-[1em] mb-4 uppercase"
          >
            İLETİŞİME GEÇİN
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[8rem] font-serif font-black uppercase text-white leading-tight mb-12 tracking-tighter"
          >
            USTALIKLA <br /> <span className="text-gradient">BULUŞUN</span>
          </motion.h2>
          <div className="w-[100px] h-[1px] bg-gold mt-10" />
        </div>

        <div className="flex flex-col lg:flex-row gap-20 xl:gap-32 items-start">
          {/* Sol Taraf - İletişim Bilgileri */}
          <div className="flex-1 w-full">
            <p className="text-zinc-400 text-2xl font-serif mb-16 max-w-xl italic leading-relaxed">
              "Her saç kesimi bir imzadır. Randevunuzu alın ve size özel stili birlikte keşfedelim."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: MapPin, title: "ADRESİMİZ", detail: "Orhangazi Mahallesi, Narlı Sokak No: 37, Pendik / İstanbul" },
                { icon: Phone, title: "TELEFON HATTIMIZ", detail: phoneNumber, href: `tel:${phoneNumber}` },
                { icon: Clock, title: "ÇALIŞMA SAATLERİ", detail: "Pzt - Cmt: 09:00 - 20:00" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-6 group hover:translate-x-2 transition-transform duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-all duration-300 rounded-sm">
                      <item.icon size={18} strokeWidth={1} />
                    </div>
                    <h4 className="text-white text-[12px] font-black tracking-[0.4em] uppercase">{item.title}</h4>
                  </div>
                  <div>
                    {item.href ? (
                      <a href={item.href} className="text-zinc-500 text-lg font-medium hover:text-gold transition-colors block leading-tight">{item.detail}</a>
                    ) : (
                      <p className="text-zinc-500 text-lg font-medium leading-tight">{item.detail}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 flex flex-wrap gap-8 items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-gold text-dark font-black text-[11px] tracking-[0.4em] uppercase hover:bg-white transition-all duration-700 shadow-[0_15px_45px_rgba(197,160,89,0.3)] rounded-full flex items-center gap-3 group"
              >
                <MessageCircle size={18} className="group-hover:scale-110 transition-transform duration-500" />
                HIZLI RANDEVU
              </a>
              <div className="flex gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all duration-500 rounded-full hover:scale-110 group"
                >
                  <Instagram size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-500" />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all duration-500 rounded-full hover:scale-110 group"
                >
                  <MessageCircle size={20} strokeWidth={1} className="group-hover:scale-110 transition-transform duration-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Google Maps */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-[0_30px_90px_rgba(0,0,0,0.5)] group">
              {/* Üst overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30 z-10 pointer-events-none rounded-2xl group-hover:opacity-0 transition-opacity duration-700" />

              {/* Google Maps Iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.7679710508382!2d29.286758199999998!3d40.8639592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadd0a08b286a1%3A0x1b349b0f0beb5f6d!2sUmut%C5%9EenelHairDesignkuaf%C3%B6r!5e1!3m2!1str!2str!4v1775657582217!5m2!1str!2str"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Merkezde konum kartı */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-dark/80 backdrop-blur-md border border-gold/30 rounded-xl p-4 flex items-center gap-4 group-hover:bg-dark/90 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gold" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-semibold">Umut Şenel Hair Design</p>
                  <p className="text-gold/70 text-xs">Orhangazi, Narlı Sokak No:37, Pendik</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/EdHMaupsCxAS3Rxo9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gold/20 hover:bg-gold text-gold hover:text-dark rounded-lg text-xs font-bold transition-all duration-300 whitespace-nowrap"
                >
                  Yol Tarifi
                </a>
              </div>
            </div>

            {/* Harita altı bilgi metni */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-zinc-500 text-xs mt-4"
            >
              Pendik sahile sadece 5 dakika yürüme mesafesinde • Ücretsiz otopark mevcuttur
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}