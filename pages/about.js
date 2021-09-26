import Image from 'next/image';
import Section from '../components/Section';
import styles from '../styles/About.module.css';
import Bryan from '../public/profile_imgs/bryan.jpg';
import Adrian from '../public/profile_imgs/adrian.jpg';
import Quah from '../public/profile_imgs/quah.jpg';
import Alan from '../public/profile_imgs/alan.jpg';
import Adam from '../public/profile_imgs/adam.jpg'
import Ethan from '../public/profile_imgs/ethan.jpg'

function Profile(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px'}}>
            <div style={{width: '300px', height: '300px', clipPath: 'circle(150px)'}}>
                <Image src={props.image} alt="profile"/>
            </div>
            <div style={{height: '20px'}} />
            <p style={{fontSize: '26px'}}>{props.name}</p>
            <div style={{height: '12px'}} />
            <p style={{fontSize: '18px', color: '#3287fc'}}>{props.role}</p>
            <div style={{height: '12px'}} />
        </div>
    );
}

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <p className={styles.header_text}>ABOUT US</p>
            </div>
            
            <div style={{height: '3vh'}}/>
            
            <Section title="Our Mission" description="To raise awareness throughout the community via advocacy while 
            providing accurate statistics and data through active research and 
            collaboration to help the general public understand the issue.">
            
            </Section>
            <Section height='5vh' title="Our Team" description="Here is the team that has worked hard to bring you this service learning project in hopes of giving back to the community.">
                <div style={{maxWidth: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <Profile image={Bryan} name="Soong Jun Shen" role="Web Development"/>
                    <Profile image={Adrian} name="Adrian Chan" role="Project Coordinator"/>
                    <Profile image={Adam} name="Adam Soh Shi Jie" role="Publicity Manager"/>
                    <Profile image={Alan} name="Lee Yue Hang" role="Public Relations"/>
                    <Profile image={Quah} name="Quah Yan Shen" role="Information Research"/>
                    <Profile image={Ethan} name="Ethan Tan Kian Choong" role="Information Research"/>
                </div>
            </Section>
            <div style={{height: '6vh'}}/>
        </div>
    );
}