import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Failed to send email");
            }

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <div className={styles.contact}>
            <h2 className={styles.header}>Contact Me</h2>
            <p className={styles.message}>
                Want to get in touch? Send me an email and I'll respond as soon as possible.
            </p>

            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    className={styles.inputField}
                    placeholder="Name"
                    aria-label="Name"
                    required
                />
                <input
                    type="email"
                    name="email"
                    className={styles.inputField}
                    placeholder="Email address"
                    aria-label="Email address"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    className={styles.inputField}
                    placeholder="Subject"
                    aria-label="Subject"
                    required
                />
                <textarea
                    name="message"
                    className={styles.textAreaField}
                    placeholder="Message"
                    aria-label="Message"
                    rows={6}
                    required
                />
                
                {status === "success" && (
                    <p style={{ color: "#4ade80", textAlign: "center", marginBottom: "1rem" }}>
                        Email sent successfully!
                    </p>
                )}
                {status === "error" && (
                    <p style={{ color: "#f87171", textAlign: "center", marginBottom: "1rem" }}>
                        {errorMessage}
                    </p>
                )}

                <div className={styles.buttonWrapper}>
                    <button type="submit" className={styles.submitButton} disabled={status === "loading"}>
                        {status === "loading" ? "SENDING..." : "SUBMIT"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;