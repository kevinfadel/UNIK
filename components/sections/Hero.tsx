"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, ShoppingBag, Cookie, Wheat, Heart } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.8]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "600px" }}
      aria-label="Section héro UNIK Cookies"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: imageY }}
      >
        <Image
          src="/hero_cookie.png"
          alt="Cookie UNIK artisanal premium"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 55% 40%, rgba(111,65,35,0.35) 0%, rgba(17,17,17,0.92) 75%)",
          opacity: overlayOpacity,
        }}
      />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />

      {/* Floating Cookie Badge */}
      <motion.div
        className="absolute top-32 right-8 md:right-16 hidden md:flex flex-col items-center justify-center"
        style={{
          width: 110,
          height: 110,
          borderRadius: "50%",
          border: "1px solid rgba(180, 122, 59, 0.4)",
          background: "rgba(17,17,17,0.5)",
          backdropFilter: "blur(10px)",
        }}
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Cookie size={28} color="#B47A3B" />
        <span
          className="text-xs text-center mt-1 leading-tight"
          style={{
            color: "#E5D2B0",
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.05em",
            fontSize: "0.65rem",
          }}
        >
          100%
          <br />
          Artisanal
        </span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative h-full flex flex-col justify-center"
        style={{ y: contentY }}
      >
        <div className="container-custom">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >


            {/* Main Title */}
            <motion.h1
              variants={fadeUp}
              className="font-display font-black leading-none tracking-tight"
              style={{
                fontSize: "clamp(4rem, 10vw, 9rem)",
                color: "#F8F5EF",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              UNIK
            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="font-display italic font-medium"
              style={{
                fontSize: "clamp(1.5rem, 4vw, 3.5rem)",
                color: "#E5D2B0",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                marginTop: "0.25rem",
              }}
            >
              Cookies d'Exception
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mt-6 md:mt-8 max-w-xl leading-relaxed"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                color: "#F8F5EF",
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
            >
              Le cookie qui transforme une simple pause en véritable moment de
              plaisir. Préparé avec passion, dégusté avec émotion.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <motion.a
                href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel"
                style={{ cursor: "pointer" }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <ShoppingBag size={17} />
                <span>Commander maintenant</span>
              </motion.a>
              <motion.a
                href="#cookies"
                className="btn-outline"
                style={{
                  color: "#F8F5EF",
                  borderColor: "rgba(248, 245, 239, 0.4)",
                  cursor: "pointer",
                }}
                whileHover={{
                  scale: 1.03,
                  y: -2,
                  backgroundColor: "rgba(248,245,239,0.08)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Découvrir nos cookies</span>
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-6 mt-12"
            >
              <div className="flex items-center gap-2 text-sm" style={{ color: "#E5D2B0", fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                <Cookie size={18} color="#B47A3B" />
                <span>Sans huile de palme</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#E5D2B0", fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                <Wheat size={18} color="#B47A3B" />
                <span>Ingrédients premium</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#E5D2B0", fontFamily: "var(--font-inter)", fontWeight: 500 }}>
                <Heart size={18} color="#B47A3B" />
                <span>Fait avec amour</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span
          className="text-xs tracking-[0.2em] uppercase font-medium"
          style={{
            color: "#E5D2B0",
            fontFamily: "var(--font-inter)",
          }}
        >
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} color="#E5D2B0" />
        </motion.div>
      </motion.div>
    </section>
  );
}
