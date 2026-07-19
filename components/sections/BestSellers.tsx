"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, ChevronLeft, ChevronRight, Star } from "lucide-react";

const bestSellers = [
  {
    id: 1,
    name: "Double Chocolat Noir",
    description: "Notre cookie signature, fondant et intense.",
    price: "3,90€",
    image: "/cookie_double_choc.png",
    stars: 5,
    reviews: 248,
  },
  {
    id: 2,
    name: "Caramel Beurre Salé",
    description: "L'équilibre parfait du sucré et du salé.",
    price: "3,90€",
    image: "/cookie_caramel.png",
    stars: 5,
    reviews: 189,
  },
  {
    id: 3,
    name: "Chocolat au Lait",
    description: "Généreux et réconfortant, pour tous les âges.",
    price: "3,90€",
    image: "/cookie_chocolate.png",
    stars: 5,
    reviews: 312,
  },
  {
    id: 4,
    name: "Pistache Premium",
    description: "La pistache d'Iran dans toute sa splendeur.",
    price: "4,50€",
    image: "/cookie_pistachio.png",
    stars: 5,
    reviews: 97,
  },
];

export default function BestSellers() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;

  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < bestSellers.length - visibleCount;

  const goLeft = () => setCurrentIndex((p) => Math.max(p - 1, 0));
  const goRight = () =>
    setCurrentIndex((p) =>
      Math.min(p + 1, bestSellers.length - visibleCount)
    );

  return (
    <section
      id="best-sellers"
      ref={ref}
      className="section-padding overflow-hidden"
      style={{ background: "#F8F5EF" }}
      aria-labelledby="bestsellers-title"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <span className="badge mb-4">Les favoris</span>
            <h2
              id="bestsellers-title"
              className="font-display font-bold text-display-md"
              style={{ color: "#111111" }}
            >
              Nos{" "}
              <span style={{ color: "#B47A3B" }}>Best Sellers</span>
            </h2>
            <div className="divider" style={{ margin: "1rem 0" }} />
          </div>
          {/* Navigation arrows */}
          <div className="flex gap-3">
            <button
              onClick={goLeft}
              disabled={!canGoLeft}
              aria-label="Précédent"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                border: "1.5px solid",
                borderColor: canGoLeft
                  ? "#111111"
                  : "rgba(17,17,17,0.2)",
                color: canGoLeft ? "#111111" : "rgba(17,17,17,0.3)",
                background: "transparent",
                cursor: canGoLeft ? "pointer" : "not-allowed",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goRight}
              disabled={!canGoRight}
              aria-label="Suivant"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                border: "1.5px solid",
                borderColor: canGoRight
                  ? "#111111"
                  : "rgba(17,17,17,0.2)",
                color: canGoRight ? "#111111" : "rgba(17,17,17,0.3)",
                background: "transparent",
                cursor: canGoRight ? "pointer" : "not-allowed",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * 24}px)` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          >
            {bestSellers.map((item, i) => (
              <motion.article
                key={item.id}
                className="shrink-0 group rounded-2xl overflow-hidden"
                style={{
                  width: `calc(${100 / visibleCount}% - ${(visibleCount - 1) * 24 / visibleCount}px)`,
                  minWidth: "280px",
                  background: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(17,17,17,0.06)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "220px" }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={item.image}
                      alt={`Best seller UNIK: ${item.name}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(item.stars)].map((_, j) => (
                      <Star key={j} size={13} color="#B47A3B" fill="#B47A3B" />
                    ))}
                    <span
                      className="text-xs ml-1"
                      style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)" }}
                    >
                      ({item.reviews})
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="font-display font-semibold text-lg"
                      style={{ color: "#111111" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="font-display font-bold shrink-0"
                      style={{ color: "#B47A3B" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    className="text-sm mb-5"
                    style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)" }}
                  >
                    {item.description}
                  </p>
                  <a
                    href="https://wa.me/22655248182?text=Commander%20!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                    style={{
                      background: "rgba(17,17,17,0.06)",
                      color: "#111111",
                      border: "1px solid rgba(17,17,17,0.12)",
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.04em",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "linear-gradient(135deg, #B47A3B, #6F4123)";
                      (e.currentTarget as HTMLElement).style.color = "#F8F5EF";
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(17,17,17,0.06)";
                      (e.currentTarget as HTMLElement).style.color = "#111111";
                      (e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(17,17,17,0.12)";
                    }}
                  >
                    <ShoppingBag size={15} />
                    Commander
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {bestSellers.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(Math.min(i, bestSellers.length - visibleCount))}
              className="transition-all duration-300 rounded-full"
              style={{
                width: currentIndex === i ? "24px" : "8px",
                height: "8px",
                background:
                  currentIndex === i
                    ? "#B47A3B"
                    : "rgba(17,17,17,0.2)",
                cursor: "pointer",
                border: "none",
              }}
              aria-label={`Aller au cookie ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
