import React from "react";
import profilePic from "../assets/profile.jpg"
import styles from "./ProfilePic.module.css"

interface ProfilePicProps{
    className?: string;
}

function ProfilePic({ className }: ProfilePicProps) {
    return (
      <img
        src={profilePic}
        alt="My Profile"
        className={`${className || ""}`}
      />
    );
  }

export default ProfilePic