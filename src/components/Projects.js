import styles from './Projects.module.css';

const projects = [
    {
        title: "KikobaPro",
        tech: ["Flutter", "Dart", "Laravel", "RESTful API"],
        description: "Mobile app for managing loans and savings for local saving groups. Integrated with Laravel backend via RESTful APIs with offline-first architecture.",
        category: "Mobile"
    },
    {
        title: "Suit Company App",
        tech: ["Flutter", "Dart", "Firebase", "IsarDB"],
        description: "Comprehensive management and e-commerce app for tailors to track clients, measurements, and orders. Features robust offline capabilities using IsarDB.",
        category: "Mobile"
    },
    {
        title: "CRDB Loan Management System",
        tech: ["Spring Boot", "Next.js", "GraphQL", "PostgreSQL"],
        description: "Enterprise-level loan management solution for CRDB Bank (Kilimo & Wezesha), streamlining loan processing for farmers and government-supported groups.",
        category: "Web"
    },
    {
        title: "Filament Laravel Application",
        tech: ["Laravel", "Filament", "PHP", "MySQL"],
        description: "Admin panel application built with Laravel Filament for efficient data management and administration.",
        category: "Backend"
    },
    {
        title: "Laravel Web Application",
        tech: ["Laravel", "PHP", "MySQL", "Blade"],
        description: "Custom web application built with Laravel framework featuring robust backend architecture.",
        category: "Backend"
    }
];

export default function Projects() {
    return (
        <section id="projects" className={`section ${styles.projects}`}>
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.category}>{project.category}</div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tech}>
                                {project.tech.map((item, idx) => (
                                    <span key={idx} className={styles.tag}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
