import profilePic from "../assets/profile.jpg";

interface ProfilePicProps {
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

export default ProfilePic;