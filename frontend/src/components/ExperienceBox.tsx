import type { ReactNode } from "react";
import styles from "./ExperienceBox.module.css";

interface ExperienceBoxProps {
  icon?: ReactNode;
  company: string;
  role: string;
  isActive?: boolean;
  onClick?: () => void;
}

function ExperienceBox({ icon, company, role, isActive = false, onClick }: ExperienceBoxProps) {
  return (
    <div
      className={`${styles.box} ${isActive ? styles.active : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className={styles.iconWrapper}>
        {icon ? (
          icon
        ) : (
          <div className={styles.placeholderIcon}>
            {company.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.company}>{company}</h3>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
}

export default ExperienceBox;