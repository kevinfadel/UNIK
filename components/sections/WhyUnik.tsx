"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Wheat, Heart, LeafyGreen, ChefHat } from "lucide-react";

const pillars = [
  {
    icon: Wheat,
    title: "Ingrédients Premium",
    description:
      "Nous sélectionnons uniquement les meilleurs ingrédients : chocolat de couverture, beurre de qualité supérieure, farine française.",
    color: "#B47A3B",
    bg: "rgba(180, 122, 59, 0.08)",
    border: "rgba(180, 122, 59, 0.2)",
  },
  {
    icon: LeafyGreen,
    title: "Sans Huile de Palme",
    description:
      "Nos recettes sont formulées sans huile de palme. Parce que l'excellence passe aussi par des choix responsables.",
    color: "#4A7C59",
    bg: "rgba(74, 124, 89, 0.08)",
    border: "rgba(74, 124, 89, 0.2)",
  },
  {
    icon: Heart,
    title: "Fait avec Amour",
    description:
      "Chaque cookie est préparé à la main, dans notre atelier artisanal, avec une attention particulière portée à chaque détail.",
    color: "#C25C5C",
    bg: "rgba(194, 92, 92, 0.08)",
    border: "rgba(194, 92, 92, 0.2)",
  },
  {
    icon: ChefHat,
    title: "Recettes Artisanales",
    description:
      "Nos recettes sont le fruit de longues heures de recherche et de perfectionnement pour atteindre la texture parfaite.",
    color: "#6F4123",
    bg: "rgba(111, 65, 35, 0.08)",
    border: "rgba(111, 65, 35, 0.2)",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function WhyUnik() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="pourquoi"
      ref={ref}
      className="section-padding"
      style={{ background: "#F8F5EF" }}
      aria-labelledby="why-title"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="badge mb-4">Nos engagements</span>
          <h2
            id="why-title"
            className="font-display font-bold text-display-md"
            style={{ color: "#111111" }}
          >
            Pourquoi choisir{" "}
            <span style={{ color: "#B47A3B" }}>UNIK ?</span>
          </h2>
          <div className="divider" />
          <p
            className="mt-4 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
            style={{
              color: "#8A7A6A",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
            }}
          >
            Chez UNIK, chaque cookie est préparé comme une pièce unique. Nous
            croyons qu'un cookie exceptionnel commence par des ingrédients
            d'exception.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                className="group relative p-8 rounded-2xl card-hover"
                style={{
                  background: "#FFFFFF",
                  border: `1px solid rgba(229, 210, 176, 0.4)`,
                  boxShadow: "0 2px 20px rgba(17, 17, 17, 0.04)",
                }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: pillar.bg,
                    border: `1px solid ${pillar.border}`,
                  }}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} color={pillar.color} strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3
                  className="font-display font-semibold text-xl mb-3"
                  style={{ color: "#111111" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "#8A7A6A",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                >
                  {pillar.description}
                </p>

                {/* Hover accent */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px transition-all duration-500 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
