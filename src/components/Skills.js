import styles from './Skills.module.css';

const skillCategories = [
    {
        category: "Frontend",
        skills: ["React.js", "Next.js", "JavaScript", "Bootstrap", "Responsive Design"]
    },
    {
        category: "Backend",
        skills: ["Laravel", "Node.js", "Express", "Java Spring Boot", "MySQL/PostgreSQL"]
    },
    {
        category: "Mobile",
        skills: ["Flutter", "Dart", "Android & iOS", "Offline Apps"]
    },
    {
        category: "Deployment & DevOps",
        skills: ["Cloudways", "Google Play Store", "Apple App Store", "Web Hosting"]
    },
    {
        category: "Practices",
        skills: ["Agile Methodologies", "JWT/OAuth", "Git", "Performance Optimization"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Expertise</h2>
                <div className={styles.grid}>
                    {skillCategories.map((item, index) => (
                        <div key={index} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{item.category}</h3>
                            <ul className={styles.skillList}>
                                {item.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
