import Section from '../components/Section';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <p className={styles.header_text}>CONTACT US</p>
            </div>

            <div style={{height: '3vh'}}/>
            
            <Section title="Have A Question?" description="Feel free to contact us for any enquiries through the 
            following:">

            </Section>
        </main>
    );
}