"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Comment puis-je passer commande ?",
    answer:
      "Vous pouvez commander directement via WhatsApp ou TikTok. Il vous suffit de nous envoyer un message avec les saveurs souhaitées et nous vous répondrons dans les plus brefs délais pour confirmer votre commande et organiser la livraison.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Nos cookies sont préparés fraîchement à la commande. La livraison est généralement effectuée très rapidement. Chaque commande est soigneusement emballée pour que vos cookies arrivent en parfait état.",
  },
  {
    question: "Livrez-vous partout au Burkina Faso ?",
    answer:
      "Oui ! Nous livrons partout au Burkina Faso. Contactez-nous pour organiser votre commande et convenir des détails de la livraison.",
  },
  {
    question: "Vos cookies contiennent-ils de l'huile de palme ?",
    answer:
      "Non, absolument pas. Nous avons fait le choix de ne jamais utiliser d'huile de palme dans nos recettes. Nous utilisons du beurre de qualité supérieure AOP, ce qui donne à nos cookies leur texture si particulière et leur goût incomparable.",
  },
  {
    question: "Proposez-vous des options pour les allergies alimentaires ?",
    answer:
      "Nos cookies contiennent du gluten (farine de blé), du lait, des œufs et potentiellement des fruits à coque. Si vous avez une allergie spécifique, contactez-nous avant de commander et nous ferons notre possible pour vous proposer des alternatives adaptées.",
  },
  {
    question: "Pouvez-vous préparer des commandes personnalisées ?",
    answer:
      "Absolument ! Nous adorons créer des expériences sur mesure. Que ce soit pour un événement, un cadeau d'entreprise ou une occasion spéciale, contactez-nous et nous élaborerons ensemble une sélection personnalisée avec un emballage adapté.",
  },
  {
    question: "Quelle est la durée de conservation de vos cookies ?",
    answer:
      "Nos cookies se conservent 5 à 7 jours à température ambiante dans leur emballage. Pour une expérience optimale, nous vous conseillons de les déguster dans les 3 premiers jours. Vous pouvez également les conserver jusqu'à 1 mois au congélateur.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="section-padding"
      style={{ background: "#F8F5EF" }}
      aria-labelledby="faq-title"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="badge mb-4">Questions fréquentes</span>
            <h2
              id="faq-title"
              className="font-display font-bold text-display-md"
              style={{ color: "#111111" }}
            >
              Tout ce que vous voulez{" "}
              <span style={{ color: "#B47A3B" }}>savoir</span>
            </h2>
            <div className="divider" />
          </motion.div>

          {/* Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                className="accordion-item"
              >
                <button
                  className="accordion-trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  style={{ cursor: "pointer" }}
                >
                  <span
                    className="font-display font-medium text-lg pr-8 text-left"
                    style={{
                      color: openIndex === i ? "#B47A3B" : "#111111",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: openIndex === i
                        ? "rgba(180, 122, 59, 0.1)"
                        : "rgba(17,17,17,0.05)",
                      border: openIndex === i
                        ? "1px solid rgba(180, 122, 59, 0.3)"
                        : "1px solid transparent",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {openIndex === i ? (
                      <Minus size={15} color="#B47A3B" />
                    ) : (
                      <Plus size={15} color="#6B5A4A" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className="accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                        opacity: { duration: 0.3 },
                      }}
                    >
                      <p
                        className="pb-6 text-base leading-relaxed"
                        style={{
                          color: "#6B5A4A",
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            className="mt-12 text-center p-8 rounded-2xl"
            style={{
              background: "rgba(180, 122, 59, 0.06)",
              border: "1px solid rgba(180, 122, 59, 0.15)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h3
              className="font-display font-semibold text-xl mb-2"
              style={{ color: "#111111" }}
            >
              Vous avez une autre question ?
            </h3>
            <p
              className="text-sm mb-5"
              style={{ color: "#8A7A6A", fontFamily: "var(--font-inter)" }}
            >
              Notre équipe est disponible 7j/7 pour vous répondre.
            </p>
            <a
              href="https://wa.me/22655248182?text=Bonjour%20UNIK%20!%20J'ai%20une%20question."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-caramel"
              style={{ cursor: "pointer" }}
            >
              <span>Nous contacter</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
