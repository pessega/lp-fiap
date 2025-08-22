"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./FAQItem.module.scss";

interface FAQItemProps {
  id: number;
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const FAQItem = ({
  question,
  answer,
  isActive,
  onClick,
  onHover,
  onLeave,
}: FAQItemProps) => {
  const isDesktop = useMediaQuery("(min-width: 769px)");
  return (
    <div
      className={`${styles.faqItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        className={isActive ? styles.lineActive : styles.line}
        initial={{ width: "6.5rem" }}
        animate={{
          width: isActive ? "98%" : "6.5rem",
          borderColor: isActive
            ? "$color-magenta-primary"
            : "$color-text-secondary",
        }}
        transition={{ duration: 0.4 }}
      />

      <h4
        className={`${styles.question} ${
          isActive ? styles.questionActive : ""
        }`}
      >
        {question}
      </h4>

      <motion.div
        className={styles.answer}
        initial={false}
        animate={{
          opacity: isActive ? 1 : 0,
          height: isDesktop ? "fit-content" : isActive ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <p>{answer}</p>
      </motion.div>
    </div>
  );
};

export default FAQItem;
