"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Cookie, SmilePlus, HandHeart, Star } from "lucide-react";

const stats = [
  { value: 15000, suffix: "+", label: "Cookies vendus", prefix: "", icon: Cookie },
  { value: 98, suffix: "%", label: "Clients satisfaits", prefix: "", icon: SmilePlus },
  { value: 100, suffix: "%", label: "Artisanal", prefix: "", icon: HandHeart },
  { value: 5, suffix: "/5", label: "Note moyenne", prefix: "", icon: Star },
];

function AnimatedCounter({
  value,
  suffix,
  prefix,
  inView,
}: {
  value: number;
  suffix: string;
  prefix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 2000;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * value));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span>
      {prefix}
      {count >= 1000 ? count.toLocaleString("fr-FR") : count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "#111111" }}
      aria-label="Statistiques UNIK Cookies"
    >
      {/* Decorative gradient blobs */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#B47A3B" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#6F4123" }}
      />

      <div className="container-custom relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-display font-bold text-display-md"
            style={{ color: "#F8F5EF" }}
          >
            La confiance en{" "}
            <span style={{ color: "#B47A3B" }}>chiffres</span>
          </h2>
          <div className="divider mt-4" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: i * 0.12,
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{
                    background: "rgba(180, 122, 59, 0.1)",
                    border: "1px solid rgba(180, 122, 59, 0.2)",
                  }}
                >
                  <Icon size={24} color="#B47A3B" />
                </div>

                <div
                  className="font-display font-black mb-2"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    background: "linear-gradient(135deg, #B47A3B, #E5D2B0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    inView={inView}
                  />
                </div>
                <p
                  className="text-sm tracking-wide"
                  style={{
                    color: "rgba(229, 210, 176, 0.6)",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 400,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee Banner */}
        <div className="mt-20 overflow-hidden">
          <div
            className="marquee-track"
            style={{ gap: "3rem" }}
          >
            {[...Array(2)].map((_, arr) =>
              ["Qualité Premium", "Fait avec Amour", "100% Artisanal", "Sans Huile de Palme", "Note 5/5", "Livraison Rapide"].map(
                (item, i) => (
                  <span
                    key={`${arr}-${i}`}
                    className="text-sm font-medium whitespace-nowrap"
                    style={{
                      color: "rgba(229, 210, 176, 0.4)",
                      fontFamily: "var(--font-inter)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                    <span
                      className="mx-6"
                      style={{ color: "#B47A3B", opacity: 0.5 }}
                    >
                      ·
                    </span>
                  </span>
                )
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
