import styles from '../styles/infobox.module.css';
import Image from 'next/image';
import Test from '../public/test.svg';
import { useState } from 'react';
import Collapsible from 'react-collapsible';

export default function InfoBox(props) {
    const [reactionStates, setReactionStates] = useState([]);

    // Normal Info Box
    if (!props.reactive) {
        return (
            <div className={styles.container}>
                <div className={styles.side_image}>
                    <Image src={Test} alt="carbon"/>
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

    // Reactive Info Box
    return (
        <div className={styles.container}>
            <div className={styles.side_image}>
                <Image src={Test} alt="carbon"/>
            </div>
            <div className={styles.spacer}/>
                <div className={styles.content}>
                    <p className={styles.title}>{props.title}</p>
                    <div className={styles.paragraph}>
                        {props.subtitle}
                        <div style={{border: '1px solid #d6d6d6', marginTop: '12px'}} />
                        {props.children.map((selection, index) => 
                            <>
                                <Collapsible key={`selection-${index}`} transitionTime={220} 
                                triggerOpenedClassName={styles.collapsible_trigger} triggerClassName={styles.collapsible_trigger}
                                onTriggerOpening={() => setReactionStates(state => [...state, index])}
                                onTriggerClosing={() => setReactionStates(state => state.filter(item => item != index))}
                                trigger={
                                    <div className={styles.trigger}>
                                        {selection.name}
                                        <i className={`${styles.arrow} ${reactionStates.includes(index) ? styles.arrow_up : styles.arrow_down}`} />
                                    </div>}>{selection.description}</Collapsible>
                                <div style={{border: '1px solid #d6d6d6'}} key={`border-${index}`}></div>
                            </>
                            )}
                    </div>
            </div>
        </div>
    );
}