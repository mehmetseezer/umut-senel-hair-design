"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Clock, MessageCircle, Mail } from "lucide-react";

export function ContactSuite() {
  const phoneNumber = "5324567890";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Merhaba Umut Bey, randevu almak istiyorum.`;

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
                { icon: MapPin, title: "ADRESİMİZ", detail: "Mustafa Kemal Mah. Maidan Plaza No: 4/15, Çankaya/Ankara" },
                { icon: Phone, title: "TELEFON HATTIMIZ", detail: phoneNumber, href: `tel:${phoneNumber}` },
                { icon: Mail, title: "E-POSTA", detail: "hello@umutsenel.com", href: "mailto:hello@umutsenel.com" },
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
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all duration-500 rounded-full"
                >
                  <Instagram size={20} strokeWidth={1} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 border border-white/10 flex items-center justify-center text-white hover:text-gold hover:border-gold transition-all duration-500 rounded-full"
                >
                  <MessageCircle size={20} strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Görsel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex-1 w-full aspect-[4/5] bg-zinc-900 border border-gold/10 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 relative group shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-dark/40 z-10 group-hover:opacity-0 transition-opacity duration-1000" />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
              <div className="w-20 h-20 border border-gold/40 flex items-center justify-center text-gold bg-dark/40 backdrop-blur-md rounded-full mb-6 group-hover:scale-110 transition-transform duration-700">
                <MapPin size={32} strokeWidth={1} className="animate-pulse" />
              </div>
              <p className="text-gold font-black text-[11px] tracking-[0.6em] uppercase drop-shadow-2xl">BİZE GELİN</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1593702275677-f916c6c70ef4?q=80&w=2070&auto=format&fit=crop"
              alt="Studio Map Location"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-2000"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}