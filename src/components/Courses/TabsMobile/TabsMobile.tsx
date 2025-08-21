"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./TabsMobile.module.scss";

interface Course {
  title: string;
  tags: string[];
}

interface CourseCategory {
  id: string;
  name: string;
  courses: Course[];
}

interface TabsMobileProps {
  categories: CourseCategory[];
  expandedMobile: string | null;
  onToggle: (categoryId: string) => void;
}

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function TabsMobile({
  categories,
  expandedMobile,
  onToggle,
}: TabsMobileProps) {
  return (
    <div className={styles.mobile}>
      {categories.map((category, categoryIndex) => (
        <div key={category.id} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${
              expandedMobile === category.id ? styles.expanded : ""
            }`}
            onClick={() => onToggle(category.id)}
            aria-expanded={expandedMobile === category.id}
            aria-controls={`mobile-panel-${category.id}`}
          >
            <span className={styles.accordionTitle}>{category.name}</span>
            <div
              className={`${styles.accordionIcon} ${
                expandedMobile === category.id ? styles.active : ""
              }`}
            >
              <span
                className={`${styles.iconLine} ${
                  expandedMobile === category.id ? styles.active : ""
                }`}
              />
              <span
                className={`${styles.iconLine} ${
                  expandedMobile === category.id ? styles.active : ""
                }`}
              />
            </div>
          </button>

          <AnimatePresence>
            {expandedMobile === category.id && (
              <motion.div
                id={`mobile-panel-${category.id}`}
                className={styles.accordionContent}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.div
                  className={styles.accordionInner}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {category.courses.map((course, index) => (
                    <motion.div
                      key={`mobile-${category.id}-${index}`}
                      className={styles.courseItem}
                      variants={itemVariants}
                    >
                      <div className={styles.courseModality}>
                        {course.tags.join(" • ")}
                      </div>
                      <h4 className={styles.courseName}>{course.title}</h4>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {categoryIndex < categories.length - 1 && (
            <div className={styles.categoryDivider} />
          )}
        </div>
      ))}
    </div>
  );
}
