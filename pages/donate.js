import Image from 'next/image';
import styles from '../styles/Donate.module.css';
import ApeLogo from '../public/ape_logo.png';
import { useState } from 'react';


export default function Donate() {
    const [selectedDonation, setSelectedDonation] = useState(0);

    return (
        <main>
            <div className={styles.main}>
                <div className={styles.ape_logo}>
                    <a href="https://apemalaysia.com/" target="_blank" rel="noreferrer"><Image src={ApeLogo} alt="ape malaysia logo" /></a>
                </div>
                <p className={styles.title}>PLANT A TREE</p>
                <div className={styles.donate_box}>
                    <p className={styles.box_title}>APE Malaysia&apos;s<br/>Tree Planting Project</p>
                    <p className={styles.box_subtitle}>MYR 20 to plant a tree</p>
                    <div className={styles.selections}>
                        <div className={`${styles.selection_item} ${selectedDonation == 0 ? styles.active_selection_item : ''}`} 
                            onClick={() => setSelectedDonation(0)}>1 tree</div>
                        <div className={`${styles.selection_item} ${selectedDonation == 1 ? styles.active_selection_item : ''}`}
                            onClick={() => setSelectedDonation(1)}>2 trees</div>
                        <div className={`${styles.selection_item} ${selectedDonation == 2 ? styles.active_selection_item : ''}`}
                            onClick={() => setSelectedDonation(2)}>5 trees</div>
                        <div className={`${styles.selection_item} ${selectedDonation == 3 ? styles.active_selection_item : ''}`}
                            onClick={() => setSelectedDonation(3)}>10 trees</div>
                    </div>
                    <div className={styles.custom_selection}>
                        MYR
                        <input className={styles.custom_selection_input} placeholder="20.00"></input>
                    </div>
                    <button className={styles.donate_button}>Donate</button>
                    <p className={styles.disclaimer}>By donating, you agree that the funds are collected by us before donating to APE Malaysia. 
                    Partial donations will be combined with other donations to plant a tree.</p>
                </div>
            </div>
        </main>
    );
}