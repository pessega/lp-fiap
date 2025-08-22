"use client";

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
        <h1 className={styles.title}>A Melhor Faculdade</h1>
        <h1 className={styles.title}>de Tecnologia</h1>
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
