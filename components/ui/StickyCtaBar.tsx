"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

export default function StickyCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) {
        setVisible(window.scrollY > 600);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[8000] hidden md:flex items-center justify-between px-8 py-4"
          style={{
            background: "rgba(17, 17, 17, 0.96)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(180, 122, 59, 0.2)",
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 30 }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(180, 122, 59, 0.15)" }}
            >
              <ShoppingBag size={20} color="#B47A3B" />
            </div>
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "#F8F5EF", fontFamily: "var(--font-inter)" }}
              >
                🍪 Offre spéciale — Commandez vos cookies dès aujourd'hui
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(229, 210, 176, 0.6)" }}
              >
                UNIK Cookies — Des cookies d'exception
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/22655248182?text=Je%20souhaite%20commander%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-caramel text-sm"
              style={{ padding: "0.625rem 1.75rem", cursor: "pointer" }}
            >
              <span>Commander maintenant</span>
            </a>
            <button
              onClick={() => setDismissed(true)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Fermer"
              style={{ cursor: "pointer" }}
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
