import styles from "./Projects.module.css";
import ProjectCard from "../ProjectCard";
import envisionScreenshot from "../../assets/envision-1.jpg"
import kababayanScreenshot from "../../assets/kababayan-1.png"
import creatorPulseScreenshot from "../../assets/creatorpulse-1.png"

function Projects() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>My Projects</h2>
            <p className={styles.subtext}>I love bringing my silly ideas to life. Check out some of my favorite works below!</p>
            <div className={styles.projectsGrid}>
                <ProjectCard
                    title="Envision"
                    description="Computer vision & ML-based hand tracking embedded device, accompanied by a custom SDK"
                    projectbox={{
                        image: envisionScreenshot,
                        link: "https://yasper.me/envision"
                    }}
                />

                <ProjectCard
                    title="Kababayan"
                    description="Hackathon-winning mobile application that allows users to browse local Filipino business and events"
                    projectbox={{
                        image: kababayanScreenshot,
                        link: "https://devpost.com/software/kababayan"
                    }}
                />

                <ProjectCard
                    title="Creator Pulse"
                    description="Real-time YouTube video view velocity tracking pipeline. See my GitHub for a Snowflake and DuckDB version!"
                    projectbox={{
                        image: creatorPulseScreenshot,
                        link: "https://github.com/Darock-Dao/creator-pulse-duckdb"
                    }}
                />

            </div>
        </div>
    )
}

export default Projects;