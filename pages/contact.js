import { useRef } from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const onSubmit = async () => {
        const payload = {
            name: nameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
            message: messageRef.current.value.trim(),
        }

        const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        console.log(response)
    }

    return (
        <main className={styles.main}>
            <Banner>CONTACT US</Banner>

            <div style={{height: '3vh'}}/>
            
            <Section height='5vh' title="Have A Question?" description="Feel free to contact us for any enquiries.">
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '550px', margin: '10px'}}>
                    <p className={styles.contact_label}>Name</p>
                    <input ref={nameRef} className={styles.contact_field} type="text" placeholder="John Appleseed"/>
                    
                    <div style={{height: '25px'}}/>

                    <p className={styles.contact_label}>Email</p>
                    <input ref={emailRef} className={styles.contact_field} type="email" placeholder="john@example.com"/>

                    <div style={{height: '25px'}}/>

                    <p className={styles.contact_label}>Message</p>
                    <textarea ref={messageRef} className={styles.contact_field} rows="6" placeholder="Your message"/>

                    <div style={{height: '25px'}}/>
                    
                    <div style={{textAlign: 'right'}}><button onClick={onSubmit} className={styles.contact_submit}>Submit</button></div>
                </div>
            </Section>
            <div style={{height: '4vh'}}/>
        </main>
    );
}