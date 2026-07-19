"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Nos Cookies", href: "#cookies" },
  { label: "Savoir-Faire", href: "#savoir-faire" },
  { label: "Avis", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-[9000] transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(248, 245, 239, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(229, 210, 176, 0.3)"
            : "none",
          boxShadow: scrolled
            ? "0 2px 20px rgba(17, 17, 17, 0.06)"
            : "none",
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="relative flex items-center justify-center overflow-hidden transition-all duration-300 rounded-md"
              style={{
                width: "140px",
                height: "46px",
                backgroundColor: scrolled ? "transparent" : "rgba(248, 245, 239, 0.95)",
                boxShadow: scrolled ? "none" : "0 4px 15px rgba(0,0,0,0.1)"
              }}
              aria-label="UNIK Cookies - Accueil"
            >
              <Image
                src="/logo.png"
                alt="UNIK Cookies"
                fill
                className="object-cover"
                style={{
                  objectPosition: "center",
                }}
                priority
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide transition-colors duration-300 relative group"
                  style={{
                    color: scrolled ? "#111111" : "rgba(248, 245, 239, 0.95)",
                    fontFamily: "var(--font-inter)",
                    letterSpacing: "0.04em",
                    textShadow: scrolled ? "none" : "0 2px 4px rgba(0,0,0,0.4)"
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-current transition-all duration-300 w-0 group-hover:w-full"
                    style={{ background: "#B47A3B" }}
                  />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
                style={{
                  background: scrolled
                    ? "linear-gradient(135deg, #B47A3B, #6F4123)"
                    : "rgba(180, 122, 59, 0.15)",
                  color: scrolled ? "#F8F5EF" : "#E5D2B0",
                  border: "1px solid rgba(180, 122, 59, 0.4)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                <ShoppingBag size={15} />
                Commander
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              style={{ color: scrolled ? "#111111" : "#F8F5EF", cursor: "pointer" }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[8500] md:hidden flex flex-col"
            style={{ background: "#111111" }}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-between h-20 px-6">
              <div
                className="relative overflow-hidden rounded-md"
                style={{
                  width: "120px",
                  height: "40px",
                  backgroundColor: "rgba(248, 245, 239, 0.95)"
                }}
              >
                <Image
                  src="/logo.png"
                  alt="UNIK Cookies"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center" }}
                />
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                style={{ color: "#F8F5EF", cursor: "pointer" }}
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="font-display text-3xl font-medium"
                  style={{ color: "#F8F5EF" }}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/22655248182"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-caramel mt-4"
                style={{ cursor: "pointer" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span>Commander maintenant</span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
