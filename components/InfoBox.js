import styles from '../styles/infobox.module.css';
import Image from 'next/image';
import Test from '../public/test.svg';

export default function InfoBox(props) {
    return (
        <div className={styles.container}>
            <div className={styles.side_image}>
                <Image src={Test} alt="carbon footprint"/>
            </div>
            <div className={styles.spacer}/>
                <div className={styles.content}>
                    <p className={styles.title}>{props.title}</p>
                    <div className={styles.paragraph}>
                        {props.children}
                    </div>
            </div>
        </div>
    );
}