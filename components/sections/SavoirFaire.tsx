"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Check } from "lucide-react";

const highlights = [
  "Chocolat de couverture sélectionné chez les meilleurs artisans",
  "Beurre AOP de qualité supérieure, jamais de margarine",
  "Cuisson à basse température pour une texture fondante parfaite",
  "Sans conservateurs ni arômes artificiels",
  "Chaque fournée préparée le matin même",
];

export default function SavoirFaire() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="savoir-faire"
      ref={sectionRef}
      className="section-padding overflow-hidden"
      style={{ background: "#111111" }}
      aria-labelledby="savoir-faire-title"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ height: "clamp(350px, 55vw, 620px)" }}
            >
              <motion.div
                className="absolute inset-0"
                style={{ y: imageY, scale: 1.15 }}
              >
                <Image
                  src="/cookie_lifestyle.png"
                  alt="Artisan préparant des cookies UNIK dans l'atelier"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(111,65,35,0.2) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:-right-10 p-5 rounded-2xl"
              style={{
                background: "rgba(17,17,17,0.85)",
                border: "1px solid rgba(180, 122, 59, 0.3)",
                backdropFilter: "blur(20px)",
                minWidth: "170px",
              }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div
                className="font-display font-bold text-3xl"
                style={{ color: "#B47A3B" }}
              >
                100%
              </div>
              <div
                className="text-xs mt-1 tracking-wide"
                style={{ color: "rgba(229, 210, 176, 0.7)", fontFamily: "var(--font-inter)" }}
              >
                Fait à la main
                <br />
                avec amour
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div
              className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-30 hidden md:block"
              style={{
                border: "1px solid rgba(180, 122, 59, 0.4)",
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div>
              <span
                className="text-xs font-medium tracking-[0.2em] uppercase"
                style={{ color: "#B47A3B", fontFamily: "var(--font-inter)" }}
              >
                Notre philosophie
              </span>
              <h2
                id="savoir-faire-title"
                className="font-display font-bold text-display-md mt-3"
                style={{ color: "#F8F5EF" }}
              >
                L'art du cookie{" "}
                <span className="italic" style={{ color: "#B47A3B" }}>
                  parfait
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "rgba(229, 210, 176, 0.75)",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                }}
              >
                Chez UNIK, nous avons passé des mois à perfectionner nos
                recettes. Chaque cookie est le résultat d'une obsession : créer
                la texture parfaite — croustillante à l'extérieur, fondante et
                moelleuse à l'intérieur, avec des éclats de chocolat encore
                chauds.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{
                  color: "rgba(229, 210, 176, 0.75)",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 300,
                }}
              >
                Nous ne faisons aucun compromis sur la qualité des ingrédients.
                Le chocolat, le beurre, la farine — tout est soigneusement
                sélectionné auprès de fournisseurs de confiance pour vous
                garantir une expérience gustative hors du commun.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.35 + i * 0.08,
                    duration: 0.6,
                  }}
                >
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: "rgba(180, 122, 59, 0.15)" }}
                  >
                    <Check size={12} color="#B47A3B" strokeWidth={2.5} />
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{
                      color: "rgba(229, 210, 176, 0.7)",
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.7 }}
            >
              <a
                href="https://wa.me/22655248182?text=Je%20veux%20commander%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel"
                style={{ cursor: "pointer" }}
              >
                <span>Goûter par vous-même</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
