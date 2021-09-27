import Banner from '../components/Banner';
import Section from '../components/Section';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <main className={styles.main}>
            <Banner>CONTACT US</Banner>

            <div style={{height: '3vh'}}/>
            
            <Section title="Have A Question?" description="Feel free to contact us for any enquiries through the 
            following:">

            </Section>
        </main>
    );
}