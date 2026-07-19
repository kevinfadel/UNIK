"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { TikTokIcon } from "@/components/ui/TikTokIcon";

const posts = [
  { id: 1, image: "/cookie_double_choc.png", likes: "1.2k", alt: "Cookie double chocolat UNIK" },
  { id: 2, image: "/cookie_caramel.png", likes: "987", alt: "Cookie caramel beurre salé UNIK" },
  { id: 3, image: "/cookie_chocolate.png", likes: "2.1k", alt: "Cookie chocolat au lait UNIK" },
  { id: 4, image: "/cookie_pistachio.png", likes: "843", alt: "Cookie pistache UNIK" },
  { id: 5, image: "/cookie_lifestyle.png", likes: "3.4k", alt: "Lifestyle cookies UNIK" },
  { id: 6, image: "/cookie_double_choc.png", likes: "1.5k", alt: "Cookie fondant UNIK" },
];

export default function TikTokGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="instagram"
      ref={ref}
      className="section-padding"
      style={{ background: "#F8F5EF" }}
      aria-labelledby="instagram-title"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <a
            href="https://www.tiktok.com/@unikcookiesstore?_r=1&_t=ZS-9867U4govEz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-4"
            style={{ cursor: "pointer" }}
          >
            <span className="badge">
              <TikTokIcon size={13} color="#B47A3B" />
              @unikcookiesstore
            </span>
          </a>
          <h2
            id="instagram-title"
            className="font-display font-bold text-display-md"
            style={{ color: "#111111" }}
          >
            Notre{" "}
            <span style={{ color: "#B47A3B" }}>univers</span>
          </h2>
          <div className="divider" />
          <p
            className="mt-4 text-base max-w-md mx-auto"
            style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Suivez-nous sur TikTok pour découvrir nos nouvelles créations,
            coulisses et offres exclusives.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://www.tiktok.com/@unikcookiesstore?_r=1&_t=ZS-9867U4govEz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden block"
              style={{
                aspectRatio: "1/1",
                cursor: "pointer",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              aria-label={post.alt}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400"
                style={{
                  background: "rgba(17, 17, 17, 0.65)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <TikTokIcon size={28} color="#F8F5EF" />
                <div className="flex items-center gap-4">
                  <span
                    className="flex items-center gap-1 text-sm font-medium"
                    style={{ color: "#F8F5EF", fontFamily: "var(--font-inter)" }}
                  >
                    <Heart size={15} fill="#F8F5EF" /> {post.likes}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* TikTok CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="https://www.tiktok.com/@unikcookiesstore?_r=1&_t=ZS-9867U4govEz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)", // TikTok vibe, or just dark like #111111
              color: "#F8F5EF",
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(79, 172, 254, 0.3)",
            }}
          >
            <TikTokIcon size={17} color="#F8F5EF" />
            <span>Suivre @unikcookiesstore</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
