"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Wind, Crown, User, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "PREMIUM SAÇ KESİMİ",
    description: "Modern fade, klasik kesim ve kafa yapısına özel saç tasarımı. Her detayda usta dokunuşu.",
    icon: Scissors,
    price: "450₺",
    duration: "45 dk",
    popular: true,
  },
  {
    title: "SAKAL TASARIMI",
    description: "Yüz hatlarınıza uygun, sıcak havlu destekli titiz şekilllendirme. Geleneksel yöntemlerle modern styling.",
    icon: User,
    price: "300₺",
    duration: "30 dk",
    popular: false,
  },
  {
    title: "KRALİYET TIRAŞI",
    description: "Geleneksel teknikler ve premium yağlar ile rahatlatıcı tıraş. Tamamen doğal ürünler kullanılır.",
    icon: Sparkles,
    price: "400₺",
    duration: "40 dk",
    popular: true,
  },
  {
    title: "DERİN CİLT BAKIMI",
    description: "Erkek cildine özel nemlendirici ve yenileyici lüks bakım kürleri. 3 aşamalı profesyonel uygulama.",
    icon: Wind,
    price: "500₺",
    duration: "50 dk",
    popular: false,
  },
  {
    title: "PROFESYONEL RENKLENDİRME",
    description: "Gri kapama ve doğal görünümlü modern renklendirme seçenekleri. Amonyaksız premium boyalar.",
    icon: Palette,
    price: "800₺",
    duration: "90 dk",
    popular: false,
  },
  {
    title: "SIGNATURE GROOMING",
    description: "Tüm hizmetlerin bir arada olduğu, 2 saatlik özel VIP deneyimi. Özel ikramlar ve masaj dahil.",
    icon: Crown,
    price: "1200₺",
    duration: "120 dk",
    popular: true,
  },
];

export function MinimalServices() {
  // WhatsApp Numarası (Ülke kodu ile, başında + veya 0 olmadan)
  const phoneNumber = "905522403705";

  return (
    <section id="services" className="py-32 md:py-48 w-full bg-[#050505] overflow-hidden flex justify-center">
      {/* Mobilde ana container padding'ini artırdık (px-6 -> px-8) */}
      <div className="w-full max-w-[1400px] px-8 md:px-12 lg:px-20">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24 md:mb-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-medium text-xs tracking-[0.4em] uppercase">
                Hizmet Portföyü
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.05] tracking-tight"
            >
              ZAMANSIZ <br />
              <span className="font-normal italic text-[#D4AF37]">RİTÜELLER</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-md lg:pb-4"
          >
            Umut Şenel Grooming Studio olarak, sıradan bir saç kesimini kişisel bir bakım sanatına dönüştürüyoruz.
          </motion.p>
        </div>

        {/* Mobilde gap-6 ile aralarını açtık, lg'de gap-0 yapıp listeye dönüştürdük */}
        <div className="flex flex-col gap-6 lg:gap-0 lg:border-t lg:border-white/5">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");

            // Dinamik WhatsApp Mesajı
            const message = encodeURIComponent(`Merhaba, ${service.title} hizmetiniz için randevu almak istiyorum.`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                /* Mobilde: Kendi kutusu içinde geniş padding (p-8), hafif yuvarlak hatlar (rounded-3xl) ve belirgin olmayan bir arkaplan.
                   Masaüstünde (lg): Border-bottom, sıfır padding, transparan arkaplan. */
                className="group relative flex flex-col lg:flex-row lg:items-center justify-between p-8 sm:p-10 lg:p-0 lg:py-16 bg-white/[0.02] lg:bg-transparent rounded-3xl lg:rounded-none border border-white/5 lg:border-none lg:border-b lg:border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 overflow-hidden lg:overflow-visible"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-full lg:w-[40%] flex items-start lg:items-center gap-6 lg:gap-10 mb-8 lg:mb-0 relative z-10">
                  <span className="text-4xl lg:text-5xl font-light text-white/10 group-hover:text-[#D4AF37]/20 transition-colors duration-500 select-none">
                    {number}
                  </span>

                  <div className="flex flex-col gap-3 mt-1 lg:mt-0">
                    {service.popular && (
                      <span className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.2em] uppercase">
                        Günün Tercihi
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-white group-hover:text-[#D4AF37] transition-colors duration-500">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="w-full lg:w-[35%] mb-10 lg:mb-0 relative z-10 lg:pr-12">
                  <p className="text-zinc-400 group-hover:text-zinc-300 text-base md:text-lg font-light leading-relaxed transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                <div className="w-full lg:w-[25%] flex items-center justify-between lg:justify-end gap-8 relative z-10 pt-6 lg:pt-0 border-t border-white/5 lg:border-none">
                  <div className="flex flex-col items-start lg:items-end gap-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <service.icon size={14} strokeWidth={1.5} className="group-hover:text-[#D4AF37] transition-colors" />
                      <span className="text-xs font-mono tracking-widest uppercase">{service.duration}</span>
                    </div>
                    <span className="text-3xl lg:text-4xl font-light text-white tracking-tight">
                      {service.price}
                    </span>
                  </div>

                  {/* Butonu <a> tag'i ile değiştirdik ve WhatsApp URL'sini verdik */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 overflow-hidden"
                  >
                    <ArrowUpRight
                      size={24}
                      strokeWidth={1}
                      className="text-white group-hover:text-black transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}