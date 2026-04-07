"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Wind, Crown, User, ArrowUpRight, Droplets, Leaf, Gem, Eye, Flower2, Waves } from "lucide-react";

const services = [
  {
    title: "ANATOMİK SAÇ KESİMİ",
    description: "Kafa yapınıza ve yüz hatlarınıza özel, kişiye özel tasarlanan anatomik kesim tekniği. Doğal akışa uygun şekillendirme.",
    icon: Scissors,
    duration: "60 dk",
    popular: true,
  },
  {
    title: "SAÇ KESİMİ & FÖN",
    description: "Modern fade, klasik kesim ve profesyonel fön uygulaması. Her detayda usta dokunuşu ve şekillendirme.",
    icon: Wind,
    duration: "50 dk",
    popular: false,
  },
  {
    title: "BREZİLYA FÖNÜ",
    description: "Hacimli ve doğal görünümlü, uzun süre kalıcı Brezilya fön tekniği. Saçlarınıza hareket ve canlılık kazandırır.",
    icon: Waves,
    duration: "45 dk",
    popular: true,
  },
  {
    title: "SAKAL KESİM & ŞEKİLLENDİRME",
    description: "Yüz hatlarınıza uygun, sıcak havlu destekli titiz şekillendirme ve sakal bakımı. Geleneksel yöntemlerle modern styling.",
    icon: User,
    duration: "40 dk",
    popular: false,
  },
  {
    title: "SAÇ & SAKAL BAKIMI",
    description: "Premium yağlar ve doğal ürünler ile derinlemesine saç ve sakal bakımı. Besleyici ve yenileyici kürler.",
    icon: Leaf,
    duration: "50 dk",
    popular: false,
  },
  {
    title: "CİLT BAKIMI & YÜZ MASKESİ",
    description: "Erkek cildine özel, arındırıcı ve yenileyici cilt bakımı. Doğal maske uygulaması ile canlandırma.",
    icon: Eye,
    duration: "45 dk",
    popular: true,
  },
  {
    title: "PEELİNG & DERİN TEMİZLİK",
    description: "Ölü derilerden arındıran, gözenekleri temizleyen profesyonel peeling uygulaması. Pürüzsüz ve canlı bir cilt için.",
    icon: Flower2,
    duration: "35 dk",
    popular: false,
  },
  {
    title: "PROFESYONEL SAÇ BAKIMI",
    description: "Yıpranmış saçlar için onarıcı ve besleyici bakım kürleri. Amonyaksız premium ürünlerle yoğun bakım.",
    icon: Droplets,
    duration: "40 dk",
    popular: false,
  },
  {
    title: "PROFESYONEL RENKLENDİRME",
    description: "Gri kapama ve doğal görünümlü modern renklendirme seçenekleri. Amonyaksız premium boyalar ile doğal sonuç.",
    icon: Palette,
    duration: "90 dk",
    popular: false,
  }
];

export function MinimalServices() {
  // WhatsApp Numarası (Ülke kodu ile, başında + veya 0 olmadan)
  const phoneNumber = "905458504460";

  return (
    <section id="services" className="py-32 md:py-48 w-full bg-[#050505] overflow-hidden flex justify-center">
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
            Umut Şenel Hair Design olarak, sıradan bir saç kesimini kişisel bir bakım sanatına dönüştürüyoruz.
          </motion.p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-0 lg:border-t lg:border-white/5">
          {services.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");

            const message = encodeURIComponent(`Merhaba, ${service.title} hizmetiniz için randevu almak istiyorum.`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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
                        Popüler
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
                  </div>

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