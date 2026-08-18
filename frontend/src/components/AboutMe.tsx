import { useState, useEffect } from "react";
import styles from "./AboutMe.module.css";
import img0 from "../assets/carousel_images/image0.jpg";
import img1 from "../assets/carousel_images/IMG_6678.jpg";
import img2 from "../assets/carousel_images/801670022.190734.jpg";
import img3 from "../assets/carousel_images/image.png";

const images = [
    { src: img0, alt: "Derek Dao photo 1" },
    { src: img1, alt: "Derek Dao photo 2" },
    { src: img2, alt: "Derek Dao photo 3" },
    { src: img3, alt: "Derek Dao photo 4" }
];

function AboutMe() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

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
                    <div className={styles.carouselContainer}>
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img.src}
                                alt={img.alt}
                                className={`${styles.aboutImage} ${
                                    index === currentIndex ? styles.activeImage : ""
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;