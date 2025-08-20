"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.05 }}
        >
          A Melhor Faculdade
        </motion.h1>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          de Tecnologia
        </motion.h1>
        <p className={styles.subtitle}>SOBRE</p>
      </div>
    </section>
  );
}
