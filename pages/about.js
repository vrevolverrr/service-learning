import Image from 'next/image';
import styles from '../styles/About.module.css';
import Bryan from '../public/profile_imgs/bryan.jpg';
import Adrian from '../public/profile_imgs/adrian.jpg';

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
            <p style={{fontSize: '40px'}}>OUR MISSION</p>
            <div style={{height: '20px'}}/>
            <div style={{width: '100%', maxWidth: '800px', height: 'fit-content', padding: '25px 20px 25px 20px', backgroundColor: "#ffffff", display: 'flex', lineHeight: '1.5',
            textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: '25px', boxShadow: '#64646f33 0px 7px 29px 0px'}}>
                <p style={{fontSize: '22px'}}>To raise awareness throughout the community via advocacy while providing accurate statistics and data through active research and 
                collaboration to help the general public understand the issue.</p>
            </div>
            <div style={{height: '50px'}}/>
            <p style={{fontSize: '40px'}}>OUR TEAM</p>
            <div style={{height: '10px'}}/>
            <div style={{maxWidth: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                <Profile image={Bryan} name="Soong Jun Shen" role="Web Development"/>
                <Profile image={Adrian} name="Adrian Chan" role="Project Coordinator"/>
                <Profile image={Bryan} name="Adam Soh Shi Jie" role="Public Relations"/>
                <Profile image={Bryan} name="Lee Yue Hang" role="Role"/>
                <Profile image={Bryan} name="Quah Yan Shen" role="Role"/>
                <Profile image={Bryan} name="Ethan Tan Kian Choong" role="Role"/>
            </div>
            <div style={{height: '30px'}}/>
        </div>
    );
}