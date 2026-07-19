"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Mail, Heart } from "lucide-react";

const footerLinks = [
  { label: "Nos Cookies", href: "#cookies" },
  { label: "Savoir-Faire", href: "#savoir-faire" },
  { label: "Avis Clients", href: "#avis" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#111111" }}
      role="contentinfo"
    >
      {/* Top decorative line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #B47A3B, #6F4123, transparent)",
        }}
      />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <div 
                className="relative overflow-hidden mb-2 rounded-md" 
                style={{ 
                  width: "160px", 
                  height: "54px",
                  backgroundColor: "rgba(248, 245, 239, 0.95)"
                }}
              >
                <Image
                  src="/logo.png"
                  alt="UNIK Cookies"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center left" }}
                />
              </div>
              <p
                className="text-xs tracking-[0.3em] uppercase mt-2"
                style={{ color: "#B47A3B", fontFamily: "var(--font-inter)" }}
              >
                Cookies d'Exception
              </p>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "rgba(229, 210, 176, 0.6)",
                fontFamily: "var(--font-inter)",
                maxWidth: "280px",
              }}
            >
              Chaque cookie est préparé comme une pièce unique, avec des
              ingrédients soigneusement sélectionnés pour vous offrir une
              expérience gourmande inoubliable.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.tiktok.com/@unikcookiesstore?_r=1&_t=ZS-9867U4govEz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok UNIK Cookies"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(180, 122, 59, 0.1)",
                  border: "1px solid rgba(180, 122, 59, 0.2)",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#B47A3B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width={18}
                  height={18}
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://wa.me/22655248182"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp UNIK Cookies"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(37, 211, 102, 0.1)",
                  border: "1px solid rgba(37, 211, 102, 0.2)",
                  cursor: "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#25D366"
                  width={18}
                  height={18}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:hello@unik-cookies.com"
                aria-label="Email UNIK Cookies"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: "rgba(248, 245, 239, 0.05)",
                  border: "1px solid rgba(248, 245, 239, 0.1)",
                  cursor: "pointer",
                }}
              >
                <Mail size={18} color="rgba(248, 245, 239, 0.6)" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-5">
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#B47A3B", fontFamily: "var(--font-inter)" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-300"
                  style={{
                    color: "rgba(229, 210, 176, 0.6)",
                    fontFamily: "var(--font-inter)",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#B47A3B")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(229, 210, 176, 0.6)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Order */}
          <div className="space-y-5">
            <h3
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#B47A3B", fontFamily: "var(--font-inter)" }}
            >
              Commander
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "rgba(229, 210, 176, 0.6)",
                fontFamily: "var(--font-inter)",
              }}
            >
              Commandez directement via WhatsApp ou TikTok. Livraison
              disponible dans tout le Burkina Faso.
            </p>
            <a
              href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #B47A3B, #6F4123)",
                color: "#F8F5EF",
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              <span>Commander sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(229, 210, 176, 0.1)" }}
        >
          <p
            className="text-xs text-center"
            style={{
              color: "rgba(229, 210, 176, 0.4)",
              fontFamily: "var(--font-inter)",
            }}
          >
            © {new Date().getFullYear()} UNIK Cookies. Tous droits réservés.
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{
              color: "rgba(229, 210, 176, 0.4)",
              fontFamily: "var(--font-inter)",
            }}
          >
            Fait avec <Heart size={12} color="#B47A3B" fill="#B47A3B" /> et
            passion artisanale
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs transition-colors duration-300"
              style={{
                color: "rgba(229, 210, 176, 0.4)",
                fontFamily: "var(--font-inter)",
                cursor: "pointer",
              }}
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-xs transition-colors duration-300"
              style={{
                color: "rgba(229, 210, 176, 0.4)",
                fontFamily: "var(--font-inter)",
                cursor: "pointer",
              }}
            >
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
