import React from "react";
import styles from "./ProjectBox.module.css";

interface ProjectBoxProps {
  icon?: React.ReactNode;    // you can pass in an icon component or emoji
  title: string;
  description: string;
  link: string;
}

function ProjectBox({ icon, title, description, link }: ProjectBoxProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.box}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </a>
  );
}

export default ProjectBox;