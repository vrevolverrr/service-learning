import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css';
import Logo from '../public/logo_mini.svg';

function NavItem(props) {
    return (
        <Link href={props.href} passHref={true}>
            <p style={{padding: '10px', color: props.active ? '#ffffff' : '#003023', cursor: 'pointer'}}
                onClick={props.onClick}>
                {props.children}
            </p>
        </Link>
    );
}


export default function NavigationBar() {
    const router = useRouter();

    const [navOpened, setNavOpened] = useState(false);
    const [navItems, setNavItems] = useState(false);

    const openNavMenu = () => {
        setNavOpened(true);
        setTimeout(() => setNavItems(true), 200);
    }

    const closeNavMenu = () => {
        setNavItems(false);
        setNavOpened(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', closeNavMenu);

        return () => window.removeEventListener('scroll', closeNavMenu);
    });

    return (
        <>
        {/* Logo Home */}
        <Link href="/" passHref={true}>
            <div className={styles.logo}><Image src={Logo} alt="carbon zero logo"></Image></div>
        </Link>
        
        {/* Navigation Menu */}
        <div className={styles.nav} style={navOpened ? {height: '100vh'} : {height: '0'}}>
            {navItems ? 
                <div className={styles.navmenu}>
                    <div style={{position: 'absolute', right: '10px', top: '0', cursor: 'pointer'}} onClick={closeNavMenu}>
                        <svg height="24px" width="24px" viewBox="0 0 329.26933 329"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
                    </div>
                    <NavItem active={router.pathname == "/"} href="/" onClick={closeNavMenu}>
                        Home
                    </NavItem>
                    <NavItem active={router.pathname == "/about"} href="/about" onClick={closeNavMenu}>
                        About Us
                    </NavItem>
                    <NavItem active={router.pathname == "/contact"} href="/contact" onClick={closeNavMenu}>
                        Contact Us
                    </NavItem>
                    <NavItem active={router.pathname == "/attribution"} href="/attribution" onClick={closeNavMenu}>
                        Attribution
                    </NavItem>
                    <NavItem active={router.pathname == "/donate"} href="/donate" onClick={closeNavMenu}>
                        Donate
                    </NavItem>
                </div> 
                : <div />
            }
        </div>
        <div className={styles.header}>
            <a title="Instagram Page" href="https://www.instagram.com/carbon_zero_sl" target="_blank" rel="noreferrer">
                <svg className={styles.social_media_icon} strokeWidth="0" fill="#000000" viewBox="0 0 448 512" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <Link href="/donate" passHref={true}>
                <div className={styles.donate_button}>
                    <p>DONATE</p>
                </div>
            </Link>
        </div>
        <div className={styles.menu} onClick={openNavMenu}>
                <div style={{height: '1px', width: '34px', borderTop: '4px solid black'}}/>
                <div style={{height: '10px'}}/>
                <div style={{height: '1px', width: '24px', borderTop: '4px solid black'}}/>
        </div>
        </>
    );
}