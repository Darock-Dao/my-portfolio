import React from "react";
import ProfilePic from "../components/ProfilePic"
import profileStyles from "../components/ProfilePic.module.css";
import styles from "./LandingPage.module.css"; 


function LandingPage() {
    return (
      <div>
        <ProfilePic className={profileStyles.ProfilePic} />
        <h1 className={styles.message}>
          Hello! I'm <span className={styles.name}>Derek Dao</span>. You can find some of the work I've done here.
          
        </h1>
      </div>
    );
  }

export default LandingPage;