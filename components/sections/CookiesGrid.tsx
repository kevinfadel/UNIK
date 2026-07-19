"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence, Variants } from "framer-motion";
import { ShoppingBag, Star, Cookie, Droplets, Heart, Coffee, Sparkles, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const cookies = [
  {
    id: 1,
    name: "AMÉRICAIN",
    description:
      "Notre grand classique aux généreux éclats de chocolat au lait. Un cookie moelleux, riche et irrésistiblement gourmand.",
    category: "Classique",
    image: "/cookie_lifestyle.png",
    tag: "Classique",
    icon: Cookie,
  },
  {
    id: 2,
    name: "DOUBLE CHOCOLAT",
    description:
      "Une recette intense associant une pâte au cacao et de généreux éclats de chocolat au lait. Le plaisir ultime des amateurs de chocolat.",
    category: "Chocolat",
    image: "/cookie_double_choc.png",
    tag: "Gourmand",
    icon: Droplets,
  },
  {
    id: 3,
    name: "WHITE CHOC",
    description:
      "Une délicate pâte parfumée à la vanille, sublimée par de fondants morceaux de chocolat blanc pour une douceur incomparable.",
    category: "Classique",
    image: "/cookie_caramel.png",
    tag: null,
    icon: Heart,
  },
  {
    id: 4,
    name: "SPÉCULOOS",
    description:
      "Un cookie au cœur d’une onctueuse pâte de spéculoos, aux délicates notes caramélisées et épicées. Une gourmandise réconfortante.",
    category: "Spécialités",
    image: "/cookie_caramel.png",
    tag: "Réconfort",
    icon: Coffee,
  },
  {
    id: 5,
    name: "RED VELVET",
    description:
      "Une recette élégante au cacao, agrémentée de généreux éclats de chocolat blanc pour un équilibre parfait entre douceur et intensité.",
    category: "Spécialités",
    image: "/cookie_chocolate.png",
    tag: "Élégant",
    icon: Heart,
  },
  {
    id: 6,
    name: "UNIK (Signature)",
    description:
      "Notre création signature : une pâte à la vanille renfermant un cœur fondant à la pistache, accompagné de généreux éclats de chocolat au lait. Une recette exclusive qui fait toute la différence.",
    category: "Spécialités",
    image: "/cookie_pistachio.png",
    tag: "Signature",
    icon: Sparkles,
  },
];

const categories = ["Tous", "Classique", "Chocolat", "Spécialités"];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function CookiesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "Tous"
      ? cookies
      : cookies.filter((c) => c.category === activeCategory);

  return (
    <section
      id="cookies"
      ref={ref}
      className="section-padding"
      style={{ background: "#F0EAE0" }}
      aria-labelledby="cookies-title"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="badge mb-4">Notre collection</span>
          <h2
            id="cookies-title"
            className="font-display font-bold text-display-md"
            style={{ color: "#111111" }}
          >
            Nos{" "}
            <span style={{ color: "#B47A3B" }}>Cookies</span>
          </h2>
          <div className="divider" />
          <p
            className="mt-4 text-base max-w-lg mx-auto"
            style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Découvrez notre collection de cookies artisanaux, préparés avec des
            ingrédients soigneusement sélectionnés pour offrir une expérience
            gourmande unique.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background:
                  activeCategory === cat ? "#111111" : "rgba(17,17,17,0.06)",
                color: activeCategory === cat ? "#F8F5EF" : "#6B5A4A",
                border:
                  activeCategory === cat
                    ? "1px solid #111111"
                    : "1px solid rgba(17,17,17,0.1)",
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.04em",
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          key={activeCategory}
        >
          {filtered.map((cookie) => {
            const Icon = cookie.icon;
            return (
              <motion.article
                key={cookie.id}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 4px 24px rgba(17,17,17,0.06)",
                }}
                onHoverStart={() => setHoveredId(cookie.id)}
                onHoverEnd={() => setHoveredId(null)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "260px" }}
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      scale: hoveredId === cookie.id ? 1.07 : 1,
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <Image
                      src={cookie.image}
                      alt={`Cookie UNIK ${cookie.name}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>

                  {/* Tag */}
                  {cookie.tag && (
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: "rgba(17,17,17,0.85)",
                        color: "#B47A3B",
                        fontFamily: "var(--font-inter)",
                        letterSpacing: "0.05em",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {cookie.tag}
                    </div>
                  )}

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredId === cookie.id && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(17,17,17,0.8) 0%, transparent 60%)",
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <a
                          href={`https://wa.me/22655248182?text=Je%20veux%20commander%20le%20cookie%20${cookie.name}%20!`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-caramel"
                          style={{
                            fontSize: "0.8rem",
                            padding: "0.7rem 1.8rem",
                            cursor: "pointer",
                          }}
                        >
                          <ShoppingBag size={15} />
                          <span>Commander</span>
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon size={18} color="#B47A3B" />
                    <h3
                      className="font-display font-semibold text-lg leading-tight"
                      style={{ color: "#111111" }}
                    >
                      {cookie.name}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{
                      color: "#8A7A6A",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                  >
                    {cookie.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="stars flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          color="#B47A3B"
                          fill="#B47A3B"
                        />
                      ))}
                    </div>
                    <span
                      className="text-xs"
                      style={{
                        color: "#8A7A6A",
                        fontFamily: "var(--font-inter)",
                      }}
                    >
                      5.0 — Avis clients
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Formats Section */}
        <motion.div
          className="mt-24 flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {/* Boîte de 6 */}
          <Card className="flex-1 flex flex-col justify-between border-transparent" style={{ background: "#FFFFFF", boxShadow: "0 10px 40px rgba(17,17,17,0.05)" }}>
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-display text-2xl" style={{ color: "#111111" }}>
                Boîte Découverte
              </CardTitle>
              <CardDescription className="text-sm mt-2" style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)" }}>
                Idéal pour une petite faim
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <div className="my-6">
                <span className="font-display font-black text-4xl" style={{ color: "#B47A3B" }}>4 500</span>
                <span className="text-sm ml-1 font-medium" style={{ color: "#8A7A6A" }}>FCFA</span>
              </div>
              <ul className="space-y-3 text-sm text-left mx-auto max-w-[200px]" style={{ color: "#6B5A4A", fontFamily: "var(--font-inter)" }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} color="#B47A3B" />
                  <span>6 cookies au choix</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} color="#B47A3B" />
                  <span>Boîte classique</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!%20Je%20souhaite%20commander%20une%20boîte%20de%206%20cookies." target="_blank" rel="noopener noreferrer" className="btn-outline w-full" style={{ borderColor: "#B47A3B", color: "#B47A3B" }}>
                Commander
              </a>
            </CardFooter>
          </Card>

          {/* Boîte de 8 */}
          <Card className="flex-1 flex flex-col justify-between relative overflow-hidden" style={{ background: "#111111", border: "1px solid #B47A3B", boxShadow: "0 20px 40px rgba(180, 122, 59, 0.15)" }}>
            <div className="absolute top-0 right-0">
              <div className="text-[10px] font-bold uppercase py-1 px-8 translate-x-[30%] translate-y-[50%] rotate-45 text-center" style={{ background: "#B47A3B", color: "#F8F5EF", letterSpacing: "0.1em" }}>
                Populaire
              </div>
            </div>
            <CardHeader className="text-center pb-2">
              <CardTitle className="font-display text-2xl" style={{ color: "#F8F5EF" }}>
                Boîte Gourmande
              </CardTitle>
              <CardDescription className="text-sm mt-2" style={{ color: "rgba(248, 245, 239, 0.6)", fontFamily: "var(--font-inter)" }}>
                Pour les vrais amateurs
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <div className="my-6">
                <span className="font-display font-black text-5xl" style={{ color: "#F8F5EF" }}>6 000</span>
                <span className="text-sm ml-1 font-medium" style={{ color: "rgba(248, 245, 239, 0.6)" }}>FCFA</span>
              </div>
              <ul className="space-y-3 text-sm text-left mx-auto max-w-[200px]" style={{ color: "rgba(248, 245, 239, 0.8)", fontFamily: "var(--font-inter)" }}>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} color="#B47A3B" />
                  <span>8 cookies au choix</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} color="#B47A3B" />
                  <span>Emballage premium</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} color="#B47A3B" />
                  <span>Personnalisable</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <a href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!%20Je%20souhaite%20commander%20une%20boîte%20de%208%20cookies." target="_blank" rel="noopener noreferrer" className="btn-caramel w-full">
                Commander
              </a>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
