import React from "react";
import ProfilePic from "../components/ProfilePic"
import TopBar from "../components/TopBar"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import SocialLinks from "../components/SocialLinks";
import profileStyles from "../components/ProfilePic.module.css";
import styles from "./LandingPage.module.css"; 


function LandingPage() {
    return (
      <div>
        <TopBar/>

        <div id = "home"></div>

        <ProfilePic className={profileStyles.ProfilePic} />
        <h1 className={styles.title}>
        Derek Dao | Software Developer
        </h1>

        <SocialLinks />

        <h2 className={styles.message}>
        Hello! I'm <span className={styles.name}>Derek Dao</span>. You can find some of the work I've done here.
        </h2>

        <section id = "about" className = "aboutSection">
          <AboutMe/>
        </section>

        <section id = "projects" className = "projectSection">
          <Projects/>
        </section>

      </div>
    );
  }

export default LandingPage;