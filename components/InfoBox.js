import Image from 'next/image';
import styles from '../styles/infobox.module.css';
import Test from '../public/test.svg';

export default function InfoBox(props) {
    return (
        <div className={styles.container}>
            <div className={styles.side_image}>
                <Image src={Test} alt="carbon"/>
            </div>
            <div className={styles.spacer}/>
                <div className={styles.content}>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.paragraph}>
                    {props.children}
                </p>
            </div>
        </div>
    );
}