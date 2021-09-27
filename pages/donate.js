import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/Donate.module.css';
import InfoBox from '../components/InfoBox';
import Section from '../components/Section';
import ScrollView from '../components/ScrollView';
import Photosynthesis from '../public/donate/photosynthesis.gif';
import Reforestation0 from '../public/ape/0.jpg';
import Reforestation1 from '../public/ape/1.jpg';
import Reforestation2 from '../public/ape/2.jpg';
import Reforestation3 from '../public/ape/3.jpg';
import Reforestation4 from '../public/ape/4.jpg';

export default function Donate() {
    const [plantingSite, setPlantingSite] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {setPlantingSite(!plantingSite)}, 1500);
        return () => clearInterval(interval);
    });

    return (
        <main className={styles.main}>
            <div style={{backgroundColor: '#d9f0ff'}}>
                <div style={{height: '120px'}}/>
                <div className={styles.landing}>
                    <div style={{padding: '0 0 0 25px'}}>
                        <p style={{width: '100%', maxWidth: '500px', fontSize: '42px', fontWeight: '400'}}>
                            Offseting Your Environmental Impact
                        </p>
                        <div style={{height: '15px'}}/>
                        <p style={{width: '100%', maxWidth: '600px', fontSize: '20px', fontWeight: '300', lineHeight: '1.6'}}>
                            Plant a tree, offset your carbon footprint, make real impact. 
                            Donate to help <a href="https://apemalaysia.com/tree-planting/" target="_blank" rel="noreferrer">
                                <span style={{color: '#b3261b', fontWeight: '400'}}>APE Malaysia&apos;s Reforestation Project</span>
                            </a>.
                        </p>
                        <a title="Donation Form" href="https://docs.google.com/forms/d/e/1FAIpQLSc6tEpVx87DfyKHtW9DjeCveYwX4hCMxnBCqQ3mj7Bqx7-3xg/viewform" target="_blank" rel="noreferrer">
                            <p className={styles.donate_button}>DONATE</p>
                        </a>
                    </div>
                    <div style={{width: '20px', height: '20px'}}/>
                    <div className={styles.planting_site} style={{width: '100%', maxWidth: '680px', height: '510px', clipPath: 'inset(15px round 4%)'}} />
                </div>
                <div style={{height: '6vh'}}/>
            </div>

            <div style={{height: '10vh'}}/>

            <Section height='4vh' title="Donation Progress" 
                description="We hope to raise RM1000 on behalf of APE Malaysia. Every small contribution counts. 
                The donation progress is updated periodically.">
                <div style={{width: '90vw', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{width: 'fit-content', height: '15px'}}/>
                    <div className={styles.donation_progress} style={{width: '100%'}}>
                        <div className={styles.progress_bar} style={{width: '0'}}/>
                    </div>
                    <div style={{height: '15px'}}/>
                    <p style={{fontSize: '18px', color: '#737373'}}>
                        <span style={{fontSize: '24px', color: '#000000'}}>RM0</span> of RM1000 raised</p>
                </div>
            </Section>

            <div style={{height: '6vh'}}/>

            <Section height='2vh' title="Why Plant A Tree?" 
                description="Trees are the most efficient and cost-effective technology for the offsetting of greenhouse gases.
                By planting a tree, you support Malaysia's effort in fighting climate change.">
                <InfoBox image={Photosynthesis}>
                    Trees offset carbon dioxide (CO2) thanks to the photosynthesis supporting their life.
                    Just like we inhale oxygen (O2) and exhale CO2, trees use CO2 to produce glucose and release O2.
                    This makes them perfect machines for the reduction of anthropogenic emissions not only of CO2.
                </InfoBox>
            </Section>

            <div style={{height: '6vh'}}/>

            <Section height='2vh' title="Why Is Reforestation Important?" 
                description="The climate crisis we are experiencing is a complex phenomenon. Human beings and their actions are the main factors fuelling this crisis. They are also the only ones who can do something about it. How?
                As one of the most performant actions in the counteraction of the climate crisis, reforestation is a good starting point.">
                <ScrollView>
                    <div className={styles.slideshow_img}><Image src={Reforestation0} alt=""></Image></div>
                    <div className={styles.slideshow_img}><Image src={Reforestation0} alt=""></Image></div>
                    <div className={styles.slideshow_img}><Image src={Reforestation0} alt=""></Image></div>
                    <div className={styles.slideshow_img}><Image src={Reforestation0} alt=""></Image></div>
                </ScrollView>
            </Section>
        </main>
    );
}