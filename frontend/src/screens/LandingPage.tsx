import React from "react";
import ProfilePic from "../components/ProfilePic"
import styles from "../components/ProfilePic.module.css";

function LandingPage(){
    
    const message = "Hello! I'm Derek Dao. You can find some of the work I've done here. "

    return (
        <div>
            <ProfilePic className = {styles.ProfilePic}/>
            <h1>{message}</h1>
        </div>
    )
}

export default LandingPage;