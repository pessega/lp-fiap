"use client";

import { useState } from "react";
import { FAQS } from "../../data/faqs";
import FAQItem from "./FAQItem/FAQItem";
import styles from "./FAQ.module.scss";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleItemHover = (id: number) => {
    setActiveId(id);
  };

  const handleItemLeave = () => {
    setActiveId(null);
  };

  const handleItemClick = (id: number) => {
    // Click behavior: if clicking on active item, keep it active
    // If clicking on inactive item, make it active (deactivating previous)
    setActiveId(id);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <h3 className={styles.subtitle}>Dúvidas Frequentes</h3>
        </div>

        <div className={styles.grid}>
          {FAQS.map((faq: FAQ) => (
            <FAQItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              isActive={activeId === faq.id}
              onClick={() => handleItemClick(faq.id)}
              onHover={() => handleItemHover(faq.id)}
              onLeave={handleItemLeave}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
