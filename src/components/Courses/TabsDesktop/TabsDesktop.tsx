"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./TabsDesktop.module.scss";

interface CourseCategory {
  id: string;
  name: string;
}

interface TabsDesktopProps {
  categories: CourseCategory[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

const lineVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: {
    scaleX: 0.3,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delay: 0.3,
    },
  },
  exit: {
    scaleX: 0,
    originX: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn",
      delay: 0.3,
    },
  },
};

export default function TabsDesktop({
  categories,
  activeTab,
  onTabClick,
}: TabsDesktopProps) {
  return (
    <nav
      className={styles.tabs}
      role="tablist"
      aria-label="Categorias de cursos"
    >
      {categories.map((category) => (
        <button
          key={category.id}
          role="tab"
          aria-selected={activeTab === category.id}
          aria-controls={`panel-${category.id}`}
          className={`${styles.tab} ${
            activeTab === category.id ? styles.active : ""
          }`}
          onClick={() => onTabClick(category.id)}
        >
          <AnimatePresence>
            {activeTab === category.id && (
              <motion.div
                className={styles.tabIndicator}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            )}
          </AnimatePresence>
          <span className={styles.tabText}>{category.name}</span>
        </button>
      ))}
    </nav>
  );
}
