"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop",
    alt: "Classic Barber Tools",
    title: "GELENEKSEL",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    alt: "Beard Design",
    title: "TASARIM",
  },
  {
    src: "https://images.pexels.com/photos/2809652/pexels-photo-2809652.jpeg",
    alt: "Grooming Table",
    title: "MODERN",
  },
  {
    src: "https://images.pexels.com/photos/9992816/pexels-photo-9992816.jpeg",
    alt: "Luxury Cut",
    title: "USTALIK",
  },
];

export function StudioGallery() {
  return (
    <section id="gallery" className="py-48 bg-dark overflow-hidden flex justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-32 gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-black text-[12px] tracking-[1em] mb-4 uppercase"
          >
            USTALIĞIMIZDAN KESİTLER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[10rem] font-serif font-black uppercase text-white tracking-tighter leading-none"
          >
            STÜDYO <span className="text-gradient">GALERİ</span>
          </motion.h2>
          <div className="w-[150px] h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1.2, ease: "easeOut" }}
              className="relative group aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-2000 rounded-sm border border-white/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-2000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white text-[12px] font-black tracking-[0.6em] mb-4 uppercase">{image.title}</p>
                  <div className="h-[1px] w-12 bg-gold mx-auto mb-4" />
                  <p className="text-zinc-400 text-[10px] font-medium tracking-widest italic">UMUT ŞENEL SIGNATURE</p>
                </motion.div>

                {/* Decorative border revealed on hover */}
                <div className="absolute inset-6 border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}