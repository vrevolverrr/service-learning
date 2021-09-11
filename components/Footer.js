import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
                <p className={styles.footer_item}>Contact Us</p>
                <p className={styles.footer_item}>About Us</p>
                <p className={styles.footer_item}>Attribution</p>
            </div>
            <p style={{fontSize: '14px'}}>made with ♥ by MCKL SL G8</p>
        </div>
    );
}