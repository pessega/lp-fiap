"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 360);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

        <p className={styles.subtitle}>
          {isMobile ? (
            <>
              SO <br /> BRE
            </>
          ) : (
            "SOBRE"
          )}
        </p>
      </div>
    </section>
  );
}
