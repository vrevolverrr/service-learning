import styles from '../styles/footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
                <Link href="/about" passHref={true}>
                    <p className={styles.footer_item}>About Us</p>
                </Link>
                <Link href="/contact" passHref={true}>
                    <p className={styles.footer_item}>Contact Us</p>
                </Link>
                <Link href="/attribution" passHref={true}>
                    <p className={styles.footer_item}>Attribution</p>
                </Link>
            </div>
            <p style={{fontSize: '14px'}}>made with ♥ by MCKL SL G8</p>
        </div>
    );
}