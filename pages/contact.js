import { useRef, useState } from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [submitState, setSubmitState] = useState(false);

    const onSubmit = async () => {
        setSubmitState(true);

        const payload = {
            name: nameRef.current.value.trim(),
            email: emailRef.current.value.trim(),
            message: messageRef.current.value.trim(),
        }

        fetch('/api/email', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(_ => setSubmitState(false));
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
                    
                    <div style={{display: 'flex', justifyContent: 'right'}}>
                        <button onClick={onSubmit} disabled={submitState} 
                        className={styles.contact_submit} style={{width: submitState ? '40px': '135px'}}>
                            {submitState ? <div className={styles.loader} /> : <p>Submit</p>}
                        </button>
                    </div>
                </div>
            </Section>
            <div style={{height: '4vh'}}/>
        </main>
    );
}