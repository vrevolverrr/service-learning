import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Banner from '../components/Banner';
import Section from '../components/Section';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const [submitState, setSubmitState] = useState(false);

    const onSubmit = async () => {
        const name = nameRef.current.value.trim()
        const email = emailRef.current.value.trim()
        const message = messageRef.current.value.trim()
        
        if (name == "" || email == "" || message == "") {
            toast.warning('Please fill in all fields!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        toast.info('Sending message. Please wait', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
        setSubmitState(true);

        const payload = {
            name: name,
            email: email,
            message: message
        }

        fetch('/api/email', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(_ => {
            setSubmitState(false);
            toast.success('Successfully sent message', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        });
    }

    return (
        <main className={styles.main}>
            <Banner>CONTACT US</Banner>
            <ToastContainer />

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