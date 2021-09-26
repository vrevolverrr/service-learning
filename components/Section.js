import Image from 'next/image';
import styles from '../styles/section.module.css';
import LeafIcon from '../public/leaf.svg';

export default function Section(props) {
    return (
        <div className={styles.section_div}>
            <p style={{fontSize: '40px', fontWeight: '400', textAlign: 'center'}}>{props.title}</p>
            
            <div style={{height: '3vh'}}/>

            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
                <div style={{margin: '0 10px 0 15px'}}><Image src={LeafIcon} alt="leaf icon"/></div>
                <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
            </div>

            <div style={{height: '3vh'}}/>

            <p className={styles.section_description}>
                {props.description}
            </p>

            <div style={{height: props.height || '6vh'}}/>

            {props.children}
        </div>
    );
}