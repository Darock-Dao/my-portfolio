import styles from "./ProjectBox.module.css";

export interface ProjectBoxProps {
  image: string;
  link: string;
}

function ProjectBox({ image, link }: ProjectBoxProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.box}>
      <img src={image} alt="" className={styles.image} />
    </a>
  );
}

export default ProjectBox;