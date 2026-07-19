"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie M.",
    location: "Paris",
    avatar: "SM",
    color: "#B47A3B",
    rating: 5,
    text: "Ces cookies sont absolument incroyables. Le double chocolat est fondant comme jamais j'en ai mangé. J'en commande maintenant toutes les semaines !",
    date: "Il y a 3 jours",
    verified: true,
  },
  {
    id: 2,
    name: "Thomas R.",
    location: "Lyon",
    avatar: "TR",
    color: "#6F4123",
    rating: 5,
    text: "UNIK, c'est la révélation cookies de l'année. La qualité des ingrédients se sent vraiment. Mes enfants en sont fous, et moi aussi !",
    date: "Il y a 1 semaine",
    verified: true,
  },
  {
    id: 3,
    name: "Camille D.",
    location: "Bordeaux",
    avatar: "CD",
    color: "#8A5228",
    rating: 5,
    text: "J'ai offert une box pour l'anniversaire d'une amie et elle était aux anges. La présentation est magnifique, le goût encore meilleur.",
    date: "Il y a 2 semaines",
    verified: true,
  },
  {
    id: 4,
    name: "Alexandre B.",
    location: "Marseille",
    avatar: "AB",
    color: "#C99050",
    rating: 5,
    text: "Le cookie caramel beurre salé est une masterclass. C'est exactement ce que je cherchais depuis longtemps. Livraison rapide, emballage parfait.",
    date: "Il y a 1 mois",
    verified: true,
  },
  {
    id: 5,
    name: "Lucie F.",
    location: "Nantes",
    avatar: "LF",
    color: "#4A7C59",
    rating: 5,
    text: "Je suis très exigeante sur la qualité, et UNIK répond à toutes mes attentes. On sent vraiment la différence avec les cookies industriels.",
    date: "Il y a 3 semaines",
    verified: true,
  },
  {
    id: 6,
    name: "Marc T.",
    location: "Toulouse",
    avatar: "MT",
    color: "#B47A3B",
    rating: 5,
    text: "Une expérience unique à chaque bouchée. Le rapport qualité/prix est excellent pour des cookies aussi premium. Je recommande à 100%.",
    date: "Il y a 2 mois",
    verified: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="avis"
      ref={ref}
      className="section-padding"
      style={{ background: "#F0EAE0" }}
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="badge mb-4">Ils nous font confiance</span>
          <h2
            id="testimonials-title"
            className="font-display font-bold text-display-md"
            style={{ color: "#111111" }}
          >
            Ce que disent nos{" "}
            <span style={{ color: "#B47A3B" }}>clients</span>
          </h2>
          <div className="divider" />
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} color="#B47A3B" fill="#B47A3B" />
              ))}
            </div>
            <span
              className="text-base font-semibold"
              style={{ color: "#111111", fontFamily: "var(--font-inter)" }}
            >
              4.9/5
            </span>
            <span
              className="text-sm"
              style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)" }}
            >
              · +500 avis vérifiés
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {testimonials.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              className="relative p-7 rounded-2xl group"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 2px 20px rgba(17,17,17,0.05)",
                border: "1px solid rgba(229, 210, 176, 0.3)",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(111,65,35,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
              >
                <Quote size={36} color="#B47A3B" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} color="#B47A3B" fill="#B47A3B" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{
                  color: "#4A3A2A",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 400,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    background: `linear-gradient(135deg, ${review.color}22, ${review.color}44)`,
                    color: review.color,
                    border: `1px solid ${review.color}33`,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "#111111", fontFamily: "var(--font-inter)" }}
                    >
                      {review.name}
                    </span>
                    {review.verified && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(74, 124, 89, 0.1)",
                          color: "#4A7C59",
                          fontFamily: "var(--font-inter)",
                          border: "1px solid rgba(74, 124, 89, 0.2)",
                        }}
                      >
                        ✓ Vérifié
                      </span>
                    )}
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)" }}
                  >
                    {review.location} · {review.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://instagram.com/unik.cookies"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ cursor: "pointer" }}
          >
            <span>Voir tous les avis</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
