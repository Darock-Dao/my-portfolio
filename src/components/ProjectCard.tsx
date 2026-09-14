import styles from "./ProjectCard.module.css";
import ProjectBox, { type ProjectBoxProps } from "./ProjectBox";

interface ProjectCardProps {
    title: string;
    description: string;
    projectbox: ProjectBoxProps;
}

function ProjectCard({ title, description, projectbox }: ProjectCardProps) {
    return (
        <div className={styles.container}>
            <div className={styles.textSection}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>

            <div className={styles.visualSection}>
                <ProjectBox {...projectbox} />
            </div>

        </div>
    )
}

export default ProjectCard;