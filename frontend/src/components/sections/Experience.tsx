import { useState } from "react";
import styles from "./Experience.module.css";
import ExperienceBox from "../ExperienceBox";

interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  iconText?: string;
  paragraphs: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 0,
    company: "MachineLogix",
    role: "Software Engineer",
    period: "Oct. 2025 – Present",
    location: "Irvine, CA",
    iconText: "ML",
    paragraphs: [
      "Worked on industrial automation software, developing intuitive HMI interfaces and high-reliability machine control systems.",
      "Engineered full-stack features to interface directly with PLC hardware and robotic peripherals, optimizing data acquisition and diagnostics.",
      "Collaborated with cross-functional engineering teams to validate machine logic, deploy code to physical systems, and improve operational uptime."
    ],
    skills: [".NET", "Visual Basic", "C#", "C++", "PLC Ladder Logic", "SQL", "REST APIs", "Embedded Software", "Git"]
  },
  {
    id: 1,
    company: "SAIC",
    role: "Software Engineer Intern",
    period: "June 2024 – April 2025",
    location: "Remote",
    iconText: "SAIC",
    paragraphs: [
      "Designed and implemented RESTful APIs and built the TypeScript/React front end for a RAG LLM chatbot on AWS, integrating with a company-wide data science platform to deliver 20+ AI use cases to 3,000+ employees.",
      "Engineered a scalable AWS web-scraping pipeline to monitor thousands of documentation updates in real time, reducing data latency by 90% and improving LLM response freshness. ",
      "Integrated 8 internal REST APIs connecting data pipelines to AI-assisted processes."
    ],
    skills: ["Python", "React.JS", "AWS", "Vector Databases", "REST APIs", "RAG Model AI", "Git"]
  },
  {
    id: 2,
    company: "SAIC",
    role: "Backend Engineer Intern",
    period: "June 2023 – Aug 2023",
    location: "Remote",
    iconText: "SAIC",
    paragraphs: [
      "Developed a Python script generating test data, automating UAT workflows and reducing engineers’ testing time by 15%.",
      "Built and deployed a web-based internal tool (Python/Flask + D3.js) to extract and visualize PLM data, rendering hierarchical datasets as an interactive tree and improving data exploration efficiency for 50+ engineers.",
    ],
    skills: ["Python", "Flask", "D3.js", "SQL"]
  }
];

function Experience() {
  const [selectedId, setSelectedId] = useState(0);
  const activeExperience = experiences.find((e) => e.id === selectedId) || experiences[0];

  return (
    <div className={styles.experience}>
      <h2 className={styles.header}>Experience</h2>

      <div className={styles.contentContainer}>
        {/* Left Column: Selectable Experience Boxes */}
        <div className={styles.experienceBoxColumn}>
          {experiences.map((exp) => (
            <ExperienceBox
              key={exp.id}
              company={exp.company}
              role={exp.role}
              isActive={selectedId === exp.id}
              onClick={() => setSelectedId(exp.id)}
            />
          ))}
        </div>

        {/* Right Column: Detailed Experience Description */}
        <div className={styles.experienceDescriptionColumn} key={activeExperience.id}>
          <div className={styles.roleHeader}>
            <div className={styles.roleTitleGroup}>
              <h3 className={styles.roleTitle}>{activeExperience.role}</h3>
              <h4 className={styles.companyName}>@ {activeExperience.company}</h4>
            </div>
            <div className={styles.metaGroup}>
              <span className={styles.period}>{activeExperience.period}</span>
              <span className={styles.location}>{activeExperience.location}</span>
            </div>
          </div>

          <div className={styles.paragraphs}>
            {activeExperience.paragraphs.map((p, idx) => (
              <p key={idx} className={styles.descriptionText}>
                {p}
              </p>
            ))}
          </div>

          {activeExperience.skills && (
            <div className={styles.skillsContainer}>
              {activeExperience.skills.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;