"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const pgHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / pgHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/logo-fiap.svg"
          alt="Logo FIAP"
          width={144}
          height={39}
          priority
        />
      </div>
      <div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />
    </header>
  );
}
