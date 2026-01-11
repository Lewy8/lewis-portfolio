import styles from './Experience.module.css';

const experiences = [
    {
        role: "Full Stack Developer",
        company: "Uhuru-Notam Company",
        period: "Apr 2024 - Present",
        location: "Dar es Salaam, Tanzania",
        highlights: [
            "Collaborated in the development of the CRDB Bank farmer's batch loan application management system (Kilimo), revolutionizing the process from paper to digital.",
            "Developed 'Wezesha', a government loan management system integrated with CRDB Bank for tracking and empowering women and youth groups.",
            "Improved website speed and performance by implementing AMP (Accelerated Mobile Pages).",
            "Coding interactive website features that lead to an increase in user engagement."
        ]
    },
    {
        role: "Full Stack Developer",
        company: "Freelance",
        period: "Jan 2023 - Mar 2024",
        location: "Remote",
        highlights: [
            "Developed custom web applications using Laravel and React for diverse clients.",
            "Built cross-platform mobile apps using Flutter with offline-first capabilities.",
            "Managed end-to-end development lifecycle from requirement gathering to deployment."
        ]
    },
    {
        role: "IT Support Intern",
        company: "Tanzania Ports Authority (TPA HQ)",
        period: "2020 - 2021",
        location: "Dar es Salaam, Tanzania",
        highlights: [
            "Performed network management and troubleshooting for SAP systems.",
            "Handled software installation, maintenance, and computer troubleshooting.",
            "Assisted users with technical problems and hardware issues."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className={`section ${styles.experience}`}>
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.header}>
                                <div>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <div className={styles.company}>{exp.company}</div>
                                </div>
                                <div className={styles.meta}>
                                    <div className={styles.period}>{exp.period}</div>
                                    <div className={styles.location}>{exp.location}</div>
                                </div>
                            </div>
                            <ul className={styles.highlights}>
                                {exp.highlights.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
