"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ParallaxText from "./ParallaxText/ParallaxText";
import styles from "./Differentiators.module.scss";

export default function Differentiators() {
  return (
    <section className={styles.differentiators}>
      <ParallaxText baseVelocity={-1} divLine>
        CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.
      </ParallaxText>
      <ParallaxText baseVelocity={1} divLine>
        TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
      </ParallaxText>

      <div className={styles.imageWrapper}>
        <motion.div
          className={styles.revealMask}
          initial={{ height: "100%" }}
          whileInView={{ height: "0%" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <Image
          src="/images/intro.png"
          alt="Intro"
          width={1200}
          height={600}
          className={styles.image}
        />
      </div>

      <div className={styles.outlinedTextWrapper}>
        <ParallaxText baseVelocity={-1} outlined fontSize="big">
          SKILLS • CONHECIMENTO • SKILLS
        </ParallaxText>
        <ParallaxText baseVelocity={1} outlined italic fontSize="big">
          MUITO ALÉM DOS TUTORIAIS
        </ParallaxText>
      </div>
    </section>
  );
}
