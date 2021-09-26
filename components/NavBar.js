import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';

export default function NavigationBar() {
    const [navOpened, setNavOpened] = useState(false);

    return (
        <>
        {/* Navigation Menu */}
        <div className={styles.nav} style={navOpened ? {height: '100vh'} : {height: '0'}} onScroll={() => setNavOpened(false)}>
            {navOpened ? 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 0 329.26933 329"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                </div> : <div />
            }
        </div>
        <div className={styles.header}>
            <Link href="/" passHref={true}>
                <p className={styles.nav_item}>HOME</p>
            </Link>
            <Link href="/minigame" passHref={true}>
                <p className={styles.nav_item}>MINIGAME</p>
            </Link>
            <Link href="/donate" passHref={true}>
                <div className={styles.donate_button}>
                    <p>DONATE</p>
                </div>
            </Link>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'end', cursor: 'pointer'}} onClick={() => setNavOpened(true)}>
                <div style={{height: '1px', width: '34px', borderTop: '4px solid black'}}/>
                <div style={{height: '10px'}}/>
                <div style={{height: '1px', width: '24px', borderTop: '4px solid black'}}/>
            </div>
        </div>
        </>
    );
}