import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={`section ${styles.about}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.imageColumn}>
                        <div className={styles.imageWrapper}>
                            {/* User needs to add me.jpg to public folder */}
                            <img src="/lewy.jpg" alt="Lewis Nhuguti" className={styles.profileImage} />
                        </div>
                    </div>
                    <div className={styles.contentColumn}>
                        <div className={styles.intro}>
                            <h2 className={styles.title}>About</h2>
                            <div className={styles.divider}></div>
                            <p className={styles.bio}>
                                I'm a highly dedicated Full Stack Developer with over 3 years of experience and a passion for cloud technologies.
                                Based in Kigamboni, Dar es Salaam, I combine technical expertise with strong problem-solving skills
                                to build robust web and mobile applications. My background includes developing financial systems
                                like the CRDB Kilimo loan app and optimizing digital platforms for performance.
                            </p>
                        </div>

                        <div className={styles.details}>
                            <div className={styles.block}>
                                <h3>Background</h3>
                                <p>
                                    With expertise spanning React, Next.js, Laravel, Java Spring Boot, and Flutter,
                                    I build seamless experiences across web and mobile platforms. My approach combines
                                    technical precision with user-centered design, ensuring every project delivers
                                    both functionality and delight.
                                </p>
                            </div>

                            <div className={styles.block}>
                                <h3>Education</h3>
                                <div className={styles.education}>
                                    <div>
                                        <p className={styles.degree}>Bachelor's degree, Information Technology</p>
                                        <p className={styles.school}>National Institute of Transport</p>
                                    </div>
                                    <p className={styles.date}>2019 — 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
