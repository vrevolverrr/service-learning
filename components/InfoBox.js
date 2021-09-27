import Image from 'next/image';
import styles from '../styles/infobox.module.css';

export default function InfoBox(props) {
    return (
        <div className={styles.container}>
            <div className={styles.side_image}>
                <Image src={props.image} alt="carbon footprint"/>
            </div>
            <div style={{width: '40px', height: '40px'}}/>
                <div className={styles.content}>
                    <p className={styles.title}>{props.title}</p>
                    <div className={styles.paragraph}>
                        {props.children}
                    </div>
            </div>
        </div>
    );
}