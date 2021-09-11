import Image from 'next/image';
import styles from '../styles/Donate.module.css';
import SplashArt from '../public/donate_splash.svg';
import ApeLogo from '../public/ape_logo.png';


export default function Donate() {
    return (
        <main>
            <div className={styles.main}>
                <div className={styles.ape_logo}>
                    <Image src={ApeLogo} alt="ape malaysia logo" />
                </div>
                <p className={styles.title}>PLANT A TREE</p>
                <div className={styles.donate_box}>
                    <p className={styles.box_title}>APE Malaysia&apos;s<br/>Tree Planting Project</p>
                    <p className={styles.box_subtitle}>MYR 20 to plant a tree</p>
                    <div className={styles.selections}>
                        <div className={styles.selection_item}>1 tree</div>
                        <div className={styles.selection_item}>2 trees</div>
                        <div className={styles.selection_item}>5 trees</div>
                        <div className={styles.selection_item}>10 trees</div>
                    </div>
                    <div className={styles.custom_selection}>
                        MYR
                        <input className={styles.custom_selection_input} placeholder="20.00"></input>
                    </div>
                    <button className={styles.donate_button}>Donate</button>
                </div>
            </div>
        </main>
    );
}