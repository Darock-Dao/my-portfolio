import React from "react";
import styles from "./TopBar.module.css";

function TopBar(){

    const sections = ["Home", "About", "Projects", "Contact"];

    return (
        <nav className={styles.TopBar}>
          <ul className={styles.navList}>
            {sections.map((section) => (
              <li key={section} className={styles.navItem}>
                <a href={`#${section.toLowerCase()}`} className={styles.navLink}>
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      );
}

export default TopBar;