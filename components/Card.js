import Image from 'next/image';
import styles from '../styles/card.module.css';

export default function Card(props) {
    return (
        <div className={styles.card} style={{backgroundColor: props.backgroundColor}}>
            <p className={styles.card_title} style={{color: props.titleColor}}>{props.title}</p>
            <div style={{height: '10px'}}/>
            <p className={styles.card_text} style={props.textStyles}>
                {props.children}
            </p>
            <div className={styles.card_image} style={props.imageStyles}>
                <Image src={props.image} alt="card" />
            </div>
      </div>
    );
};