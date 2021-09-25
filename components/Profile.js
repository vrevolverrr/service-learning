import Image from 'next/image';
import styles from '../styles/profile.module.css';
import Bryan from '../public/profile_imgs/bryan.jpg';

export default function Profile() {
    return (
        <div className={styles.main}>
            <div className={styles.image_container}>
                <Image src={Bryan} alt="bryan"/>
            </div>
            <div style={{width: '30px', height: '30px'}}/>
            <div className={styles.bio_container}>
                <p style={{fontSize: '20px', fontWeight: '300'}}>&quot;Small changes in our lifestyles can make a big difference, whether you realise it or not!&quot;</p>
                <div style={{height: '10px'}}/>
                <p style={{textAlign: 'right', fontSize: '20px'}}> -Soong Jun Shen</p>
            </div>
        </div>
    );
}