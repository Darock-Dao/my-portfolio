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
                title="Fabflix"
                description="Full-stack movie browsing site"
                link="https://github.com/yourusername/fabflix"
                />
                <ProjectBox
                title="Envision"
                description="Hand gesture recognition library"
                link="https://github.com/yourusername/envision"
                />
                <ProjectBox
                title="Structured Light 3D"
                description="Stereo vision reconstruction"
                link="https://github.com/yourusername/structured-light"
                />
                <ProjectBox
                title="Minesweeper AI"
                description="Smart puzzle solver"
                link="https://github.com/yourusername/minesweeper-ai"
                />
            </div>
        </div>
    )
}

export default Projects