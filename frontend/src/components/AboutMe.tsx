import styles from "./AboutMe.module.css";
import aboutPhoto from "../assets/image0.jpg";

function AboutMe() {
    const message1 =
  "Growing up, I spent countless late nights playing sandbox games like Minecraft and Roblox, following tutorials to build all kinds of contraptions. I didn’t realize it then, but those hours were my first lessons in logic, engineering, and creativity. I try to carry that same curiosity into everything I build.";

const message2 =
  "I’m based in Orange County, California, and graduated from UC Irvine with a B.S. in Computer Science & Engineering. I’m a software developer with a background in full-stack development and industrial automation.";

const message3 =
  "Outside of work, I enjoy video games, rock climbing, cosplay, and spending time with friends!";

    return (
        <div className={styles.aboutMe}>
            <h2 className={styles.header}>About Me</h2>
            <div className={styles.contentContainer}>
                <div className={styles.textColumn}>
                    <p className={styles.message}>{message1}</p>
                    <p className={styles.message}>{message2}</p>
                    <p className={styles.message}>{message3}</p>
                </div>
                <div className={styles.imageColumn}>
                    <img
                        src={aboutPhoto}
                        alt="Derek Dao"
                        className={styles.aboutImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;