"use client";

import { motion, AnimatePresence } from "framer-motion";
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

const FAQItem = ({
  question,
  answer,
  isActive,
  onClick,
  onHover,
  onLeave,
}: FAQItemProps) => {
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

      <AnimatePresence>
        {isActive && (
          <motion.div
            className={styles.answer}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
