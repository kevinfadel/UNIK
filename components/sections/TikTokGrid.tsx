"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, X, Play } from "lucide-react";
import { TikTokIcon } from "@/components/ui/TikTokIcon";

const posts = [
  { 
    id: 1, 
    image: "/cookie_double_choc.png", 
    likes: "240", 
    alt: "Noix de pécan à l’honneur UNIK", 
    videoId: "7662141780539804936" 
  },
  { 
    id: 2, 
    image: "/cookie_caramel.png", 
    likes: "554", 
    alt: "Gourmandise UNIK - Profiter", 
    videoId: "7660990322775756050" 
  },
  { 
    id: 3, 
    image: "/cookie_chocolate.png", 
    likes: "86", 
    alt: "Parcours du combattant cookie UNIK", 
    videoId: "7660281206482767112" 
  },
  { 
    id: 4, 
    image: "/cookie_pistachio.png", 
    likes: "579", 
    alt: "Saveur de la semaine UNIK", 
    videoId: "7659390191374699794" 
  },
  { 
    id: 5, 
    image: "/cookie_lifestyle.png", 
    likes: "188", 
    alt: "Demande en mariage avec UNIK", 
    videoId: "7658653744896183560" 
  },
  { 
    id: 6, 
    image: "/cookie_double_choc.png", 
    likes: "3.2k", 
    alt: "Unik Cookie - 100% burkinabè", 
    videoId: "7533551228152794373" 
  },
];

export default function TikTokGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [activePost, setActivePost] = useState<typeof posts[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Disable scroll when modal is active
  useEffect(() => {
    if (activePost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePost]);

  // Reset loading state when active post changes
  useEffect(() => {
    if (activePost) {
      setIsLoading(true);
    }
  }, [activePost]);

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
            Notre <span style={{ color: "#B47A3B" }}>univers</span>
          </h2>
          <div className="divider" />
          <p
            className="mt-4 text-base max-w-md mx-auto"
            style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)", fontWeight: 300 }}
          >
            Suivez-nous sur TikTok pour découvrir nos nouvelles créations,
            coulisses et offres exclusives. Cliquez sur une image pour regarder la vidéo.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`https://www.tiktok.com/@unikcookiesstore/video/${post.videoId}`}
              onClick={(e) => {
                e.preventDefault();
                setActivePost(post);
              }}
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
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-[#B47A3B] text-[#F8F5EF] transform scale-75 group-hover:scale-100 transition-transform duration-350 shadow-lg"
                >
                  <Play size={20} fill="#F8F5EF" className="translate-x-0.5" />
                </div>
                <div className="flex items-center gap-4 mt-1">
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
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "#111111",
              color: "#F8F5EF",
              fontFamily: "var(--font-inter)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <TikTokIcon size={17} color="#F8F5EF" />
            <span>Suivre @unikcookiesstore</span>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[400px] aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 hover:scale-105 transition-all shadow-md"
                aria-label="Fermer la vidéo"
              >
                <X size={20} />
              </button>

              {/* Loading Spinner */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-950 text-neutral-400 gap-3">
                  <div 
                    className="w-10 h-10 border-4 border-t-[#B47A3B] border-neutral-800 rounded-full animate-spin" 
                  />
                  <p className="text-xs font-medium tracking-wide">Chargement de la vidéo...</p>
                </div>
              )}

              {/* TikTok Player Iframe */}
              <iframe
                src={`https://www.tiktok.com/player/v1/${activePost.videoId}?music_info=1&description=1`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
