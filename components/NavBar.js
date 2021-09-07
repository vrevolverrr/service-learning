import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function NavigationBar() {
    return (
        <div className={styles.header}>
            <Link href="/" passHref={true}>
                <p className={styles.nav_item}>HOME</p>
            </Link>
            <Link href="/minigame" passHref={true}>
                <p className={styles.nav_item}>MINIGAME</p>
            </Link>
            <div className={styles.donate_button}>
                <p>DONATE</p>
            </div>
        </div>
    );
}