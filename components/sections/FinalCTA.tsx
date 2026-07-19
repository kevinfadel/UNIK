"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag, Phone } from "lucide-react";
import { TikTokIcon } from "@/components/ui/TikTokIcon";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "#6F4123" }}
      aria-label="Commander UNIK Cookies"
    >
      {/* Decorative cookie crumbs */}
      {[
        { size: 8, top: "15%", left: "8%", opacity: 0.15, delay: 0 },
        { size: 12, top: "70%", left: "5%", opacity: 0.1, delay: 0.5 },
        { size: 6, top: "30%", right: "10%", opacity: 0.15, delay: 1 },
        { size: 10, top: "80%", right: "7%", opacity: 0.1, delay: 0.3 },
        { size: 5, top: "50%", left: "15%", opacity: 0.12, delay: 0.8 },
      ].map((crumb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: crumb.size,
            height: crumb.size,
            top: crumb.top,
            left: (crumb as any).left,
            right: (crumb as any).right,
            background: "#E5D2B0",
            opacity: crumb.opacity,
          }}
          animate={{ y: [0, -8, 0], rotate: [0, 20, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: crumb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container-custom relative">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span
            className="text-xs font-medium tracking-[0.25em] uppercase block mb-6"
            style={{ color: "rgba(229, 210, 176, 0.7)", fontFamily: "var(--font-inter)" }}
          >
            Offre limitée
          </span>

          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              color: "#F8F5EF",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Une envie de{" "}
            <span style={{ color: "#E5D2B0", fontStyle: "italic" }}>
              cookies ?
            </span>
          </h2>

          <p
            className="mt-6 text-base md:text-lg leading-relaxed"
            style={{
              color: "rgba(229, 210, 176, 0.75)",
              fontFamily: "var(--font-inter)",
              fontWeight: 300,
              maxWidth: "520px",
              margin: "1.5rem auto 0",
            }}
          >
            Commandez dès maintenant et profitez de cookies artisanaux préparés avec passion.
            <br />
            <br />
            <span style={{ color: "#F8F5EF", fontWeight: 500, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <Phone size={18} /> WhatsApp : +226 55 24 81 82
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <motion.a
              href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!%20Je%20souhaite%20passer%20une%20commande."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                background: "#F8F5EF",
                color: "#6F4123",
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(17,17,17,0.2)",
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <ShoppingBag size={17} />
              Commander maintenant
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@unikcookiesstore?_r=1&_t=ZS-9867U4govEz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm transition-all duration-300"
              style={{
                background: "transparent",
                color: "#F8F5EF",
                border: "1.5px solid rgba(248, 245, 239, 0.4)",
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              whileHover={{
                scale: 1.04,
                y: -2,
                backgroundColor: "rgba(248,245,239,0.1)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <TikTokIcon size={17} color="#F8F5EF" />
              Nous suivre
            </motion.a>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <div className="flex -space-x-2">
              {["AB", "SM", "TR", "CD"].map((initials, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: `hsl(${30 + i * 15}, 50%, ${40 + i * 8}%)`,
                    borderColor: "#6F4123",
                    color: "#F8F5EF",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {initials}
                </div>
              ))}
            </div>
            <span
              className="text-sm"
              style={{
                color: "rgba(229, 210, 176, 0.7)",
                fontFamily: "var(--font-inter)",
              }}
            >
              +15 000 cookies déjà dégustés 🍪
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
