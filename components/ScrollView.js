import { useRef, useState } from 'react';
import styles from '../styles/scrollview.module.css';

export default function ScrollView(props) {
    const ref = useRef();
    const [scrollState, setScrollState] = useState({
        isScrolling: false,
        scrollX: 0,
        clientX: 0,
    });

    const onMouseDown = e => setScrollState({...scrollState, isScrolling: true, clientX: e.clientX});
    const onMouseUp = () => setScrollState({...scrollState, isScrolling: false});
    const onMouseMove = e => {
        const { isScrolling, clientX, scrollX } = scrollState;
        if (isScrolling) {
            const scrollPos = Math.min(Math.max(0, scrollX + clientX - e.clientX), ref.current.clientWidth / 1.5);
            ref.current.scrollLeft = scrollPos;
            setScrollState({...scrollState, scrollX: scrollPos, clientX: e.clientX});
        }
    };

    return (
        <div ref={ref} className={styles.scrollable_container} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
            {props.children.map((e, i) => <div key={`card ${i}`} style={{flex: 'flex: 0 0 auto'}}>{e}</div>)}
        </div>
    );
}