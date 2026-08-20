import styles from "./Contact.module.css";

function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.header}>Contact Me</h2>
            <p className={styles.message}>
                Want to get in touch? Send me an email and I'll respond as soon as possible.
            </p>

            <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Name"
                    aria-label="Name"
                />
                <input
                    type="email"
                    className={styles.inputField}
                    placeholder="Email address"
                    aria-label="Email address"
                />
                <input
                    type="text"
                    className={styles.inputField}
                    placeholder="Subject"
                    aria-label="Subject"
                />
                <textarea
                    className={styles.textAreaField}
                    placeholder="Message"
                    aria-label="Message"
                    rows={6}
                />
                <div className={styles.buttonWrapper}>
                    <button type="submit" className={styles.submitButton}>
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;