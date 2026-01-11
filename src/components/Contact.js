import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section ${styles.contact}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>Let's work together</h2>
                    <p className={styles.subtitle}>
                        I'm currently available for freelance projects and full-time opportunities.
                        Let's create something exceptional.
                    </p>

                    <div className={styles.links}>
                        <a href="mailto:lewisnhuguti@gmail.com" className={styles.link}>
                            <span className={styles.label}>Email</span>
                            <span className={styles.value}>lewisnhuguti@gmail.com</span>
                        </a>
                        <a href="tel:+255625128516" className={styles.link}>
                            <span className={styles.label}>Phone</span>
                            <span className={styles.value}>+255 625 128 516</span>
                        </a>
                        <div className={styles.link}>
                            <span className={styles.label}>Location</span>
                            <span className={styles.value}>Tanzania (Open to Relocation)</span>
                        </div>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <p>&copy; {new Date().getFullYear()} Lewis Nhuguti</p>
                    <p>Designed & Built with Next.js</p>
                </footer>
            </div>
        </section>
    );
}
