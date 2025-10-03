import React from "react";
import styles from "./TopBar.module.css";

function TopBar() {
    const sections = ["Home", "About", "Projects", "Contact"];
  
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <nav className={styles.TopBar}>
        <ul className={styles.navList}>
          {sections.map((section) => (
            <li key={section} className={styles.navItem}>
              {section === "Home" ? (
                <a onClick={handleScrollToTop} className={styles.navLink}>
                  {section}
                </a>
              ) : (
                <a
                  href={`#${section.toLowerCase()}`}
                  className={styles.navLink}
                >
                  {section}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

export default TopBar;