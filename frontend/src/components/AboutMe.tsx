import React from "react";
import styles from "./AboutMe.module.css"

function AboutMe(){
    const message1 = "Growing up, I spent countless late nights playing sand box games like Minecraft and Roblox, following tutorials to build all kinds of contraptions. I did not realize it back then, but those hours were my first lessons in logic, engineering, and creativity, and was most likely what led me down the path of being a developer. I try to channel my inner childhood creativity in all of my projects :)."
    const message2 = "I am based in Orange County, California, and graduated from UC Irvine with a B.S. in Computer Science & Engineering. I’m a software developer with a background in industrial automation, currently working on end-to-end machine control software, from the HMI and application layer to hardware and PLC integration."
    const message3 = "In my free time I like to play video games, go rock climbing, cosplay, or hang out with my friends!"

    return(
        <div className = {styles.aboutMe}>
            <h2 className = {styles.header}>About Me</h2>
            <p className = {styles.message1}>{message1}</p>
            <p className = {styles.message2}>{message2}</p>
            <p className = {styles.message3}>{message3}</p>
        </div>
    )
}

export default AboutMe;