import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
                <p className={styles.item}>Contact Us</p>
                <p className={styles.item}>About Us</p>
                <p className={styles.item}>Attribution</p>
            </div>
            <p style={{fontSize: '14px'}}>made with ♥ MCKL SL G8</p>
        </footer>
    );
}