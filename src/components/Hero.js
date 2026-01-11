import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.label}>Full-Stack Developer</div>
                    <h1 className={styles.name}>
                        Lewis<br />Nhuguti
                    </h1>
                    <p className={styles.description}>
                        Crafting seamless digital experiences through modern web and mobile applications. Plus, building high-impact websites, landing pages for businesses.
                        Specialized in React, Next.js, Laravel, and Flutter.
                    </p>
                    <div className={styles.meta}>
                        <span>3+ Years Experience</span>
                        <span className={styles.separator}>•</span>
                        <span>Dar es Salaam, Tanzania</span>
                        <span className={styles.separator}>•</span>
                        <span>Available for freelance</span>
                    </div>
                    <div className={styles.actions}>
                        <a href="#contact" className={styles.primaryBtn}>
                            Get in touch
                            <span className={styles.arrow}>→</span>
                        </a>
                        <a href="#projects" className={styles.secondaryBtn}>
                            View projects
                        </a>
                    </div>
                </div>
                <div className={styles.scroll}>
                    <span>Scroll to explore</span>
                    <div className={styles.scrollLine}></div>
                </div>
            </div>
        </section>
    );
}
