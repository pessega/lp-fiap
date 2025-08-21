"use client";

import { useState } from "react";
import { COURSES } from "../../data/courses";
import TabsDesktop from "./TabsDesktop/TabsDesktop";
import TabsMobile from "./TabsMobile/TabsMobile";
import CourseContent from "./CourseContent/CourseContent";
import styles from "./Courses.module.scss";

export default function Courses() {
  const [activeTab, setActiveTab] = useState<string>("tecnologia");
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleMobileToggle = (categoryId: string) => {
    setExpandedMobile(expandedMobile === categoryId ? null : categoryId);
  };

  const categories = COURSES.map(({ id, name }) => ({ id, name }));

  return (
    <section className={styles.courses} aria-labelledby="courses-title">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h2 id="courses-title" className={styles.title}>
              Cursos
            </h2>
            <p className={styles.subtitle}>Cursos de Curta Duração</p>
          </div>

          <div className={styles.desktopTabs}>
            <TabsDesktop
              categories={categories}
              activeTab={activeTab}
              onTabClick={handleTabClick}
            />
          </div>
        </header>

        <div className={styles.desktopContent}>
          <CourseContent categories={COURSES} activeTab={activeTab} />
        </div>

        <div className={styles.mobileContent}>
          <TabsMobile
            categories={COURSES}
            expandedMobile={expandedMobile}
            onToggle={handleMobileToggle}
          />
        </div>
      </div>
    </section>
  );
}
