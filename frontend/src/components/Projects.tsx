import React from "react";
import styles from "./Projects.module.css"
import ProjectBox from "./ProjectBox";

function Projects(){
    return(
        <div className={styles.container}>
            <h2 className={styles.header}>My Projects</h2>
            <p className={styles.subtext}>I love bringing my silly ideas to life. Check out some of my favorite works below!</p>
            <div className={styles.projectsGrid}>
                <ProjectBox
                title="Envision"
                description="Hand gesture recognition library"
                link="https://yasper.me/envision"
                />
                <ProjectBox
                title="Kababayan"
                description="Connect with your local Filipino community"
                link="https://devpost.com/software/kababayan"
                />
            </div>
        </div>
    )
}

export default Projects