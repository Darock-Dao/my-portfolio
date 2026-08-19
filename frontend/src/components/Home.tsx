import styles from "./Home.module.css";
import ProfilePic from "./ProfilePic";
import SocialLinks from "./SocialLinks";
import profileStyles from "./ProfilePic.module.css";

function Home(){

    return(
        <div className={styles.home}>
            <ProfilePic className={profileStyles.ProfilePic} />
            <h1 className={styles.title}>
            Derek Dao | Software Developer
            </h1>

            <SocialLinks />

            <h2 className={styles.message}>
            Hello, I'm <span className={styles.name}>Derek Dao</span>. Welcome to my portfolio!
            </h2>
        </div>
    );
}

export default Home;