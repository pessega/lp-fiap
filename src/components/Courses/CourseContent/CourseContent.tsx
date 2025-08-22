"use client";

import { motion, AnimatePresence } from "framer-motion";
import styles from "./CourseContent.module.scss";

interface Course {
  title: string;
  tags: string[];
}

interface CourseCategory {
  id: string;
  name: string;
  courses: Course[];
}

interface CourseContentProps {
  categories: CourseCategory[];
  activeTab: string;
}

const contentVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: {
      duration: 0.2,
    },
  },
};

export default function CourseContent({
  categories,
  activeTab,
}: CourseContentProps) {
  function capitalizeWords(str: string) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <section className={styles.content}>
      <AnimatePresence mode="wait">
        {categories.map(
          (category) =>
            activeTab === category.id && (
              <motion.div
                key={category.id}
                id={`panel-${category.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${category.id}`}
                className={styles.panel}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className={styles.categoryTitle}>
                  {capitalizeWords(category.name)}
                </h3>
                <div className={styles.courseList}>
                  {category.courses.map((course, index) => (
                    <motion.div
                      key={`${category.id}-${index}`}
                      className={styles.courseItem}
                      variants={itemVariants}
                    >
                      <div className={styles.courseContent}>
                        <h4 className={styles.courseTitle}>{course.title}</h4>
                        <div className={styles.courseTags}>
                          {course.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </section>
  );
}
