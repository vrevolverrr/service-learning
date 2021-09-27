import styles from '../styles/banner.module.css';

export default function Banner(props) {
    return (
        <div className={styles.banner}>
            <p className={styles.banner_text}>{props.children}</p>
        </div>
    );
}