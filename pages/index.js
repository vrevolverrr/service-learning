import Image from 'next/image';
import { useState, useEffect } from 'react';
import TextTransition, { presets } from "react-text-transition";
import CountUp from 'react-countup';
import InfoBox from '../components/InfoBox';
import styles from '../styles/Home.module.css';
import LeafIcon from '../public/leaf.svg';

export default function Home({ uniqueUsers }) {

  // Scrolling Hero Text
  const HERO_TEXT1 = ["CARBON", "ENERGY", "CARBON", "CLIMATE", "ENERGY"];
  const HERO_TEXT2 = ["NEUTRAL", "SAVING", "OFFSET", "FRIENDLY", "EFFICIENT"];

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    // Set interval to update hero text
    const intervalId = setInterval(() =>
      setHeroIndex(heroIndex => heroIndex + 1),
      3000
    );
    // Return useEffect clean up function
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <main>
        <div className={styles.hero_container}>
          <CountUp start={0} end={uniqueUsers} duration={1.5} delay={0} separator=",">
            {({ countUpRef, start }) => (
              <span className={styles.counter} ref={countUpRef} />
            )}
          </CountUp> 
          <p className={styles.counter_text}>people reached</p>
          <div className={styles.hero_text_container}>
            <TextTransition className={styles.hero_text} noWrap={true} direction="up" text={HERO_TEXT1[heroIndex % HERO_TEXT1.length]} springConfig={presets.default} />
            <TextTransition className={styles.hero_text} noWrap={true} direction="down" text={HERO_TEXT2[heroIndex % HERO_TEXT2.length]} springConfig={presets.default} />
          </div>
          <div className={styles.hero} />
        </div>
        <InfoBox title="What is Carbon Footprint?">
          Carbon footprint is the total amount of greenhouse gas emissions caused directly and indirectly by an individual, organization, event or product.
        </InfoBox>

        {/* Causes of Carbon Footprint */}
        <div style={{width: '100%', height: '720px', padding: '40px', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#ffffff'}}>
          <p style={{fontSize: '40px', fontWeight: '400', textAlign: 'center'}}>What Are The Causes?</p>
          
          <div style={{height: '3vh'}}/>

          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
            <div style={{margin: '0 10px 0 15px'}}><Image src={LeafIcon} alt="leaf icon"/></div>
            <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
          </div>

          <div style={{height: '3vh'}}/>

            <p className={styles.section_description}>
              We live our everyday lives leaving a carbon footprint. These are how your daily activities adversely affect our environment.
            </p>

          <div style={{height: '6vh'}}/>

        </div>

        {/* Reducing Carbon Footprint */}
        <div style={{width: '100%', height: '720px', padding: '40px', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#ffffff'}}>
          <p style={{fontSize: '40px', fontWeight: '400', textAlign: 'center'}}>How Do We Reduce?</p>
          
          <div style={{height: '3vh'}}/>

          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
            <div style={{margin: '0 10px 0 15px'}}><Image src={LeafIcon} alt="leaf icon"/></div>
            <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
          </div>

          <div style={{height: '3vh'}}/>

          <p className={styles.section_description}>
            Small lifestyle changes can can reduce our carbon footprint. Every small contribution helps save our environment.
          </p>
          
          <div style={{height: '6vh'}}/>
          
          <div className={styles.scrollable_container}>
            <div className={styles.card}>
              <p style={{fontSize: '34px', fontWeight: '500'}}>FOOD</p>
            </div>
            <div className={styles.card}>
              <p style={{fontSize: '34px', fontWeight: '500'}}>TRANSPORT</p>
            </div>
            <div className={styles.card}>
              <p style={{fontSize: '34px', fontWeight: '500'}}>HOUSEHOLD</p>
            </div>
            <div className={styles.card}>
              <p style={{fontSize: '34px', fontWeight: '500'}}>CONSUMPTION</p>
            </div>
          </div>
        </div>

        {/* Donation advert banner */}
        <div style={{width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff'}}>
          <div style={{
            width: '95%', maxWidth: '1800px', height: '150px', padding: '0 20px 0 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#f5f5f5', borderRadius: '20px'}}>
            <div style={{transform: 'scale(1.4)', position: 'relative', top: '-15px'}}><Image src={LeafIcon} alt="leaf icon"/></div>
            <p style={{position: 'relative', top: '0px', textAlign: 'center', fontSize: '22px'}}>Take it a step further and plant a tree with us today.</p>
            <button style={{
              position: 'relative', top: '22px',
              width: '180px', height: '45px', fontSize: '18px', fontFamily: 'MazzardH', 
              borderRadius: '25px', border: 'none', backgroundColor: '#ff4500', color: 'white'}}>DONATE</button>
          </div>
        </div>

        <div style={{height: '3vh'}}/>

        {/* NASA Climate Time Machine iframe */}
        <div style={{width: '100%', height: 'fit-content', padding: '40px', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#ffffff'}}>
          <p style={{fontSize: '40px', fontWeight: '400', textAlign: 'center'}}>How Is Our Planet Changing?</p>
          
          <div style={{height: '3vh'}}/>

          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
            <div style={{margin: '0 10px 0 15px'}}><Image src={LeafIcon} alt="leaf icon"/></div>
            <div style={{width: '150px', height: '1px', borderTop: '2px solid #424242'}}/>
          </div>

          <div style={{height: '3vh'}}/>

          <p className={styles.section_description}>
            NASA&apos; visualizations to show how some of the key indicators of climate change have changed in Earth&apos;s recent history.
          </p>
          
          <div style={{height: '6vh'}}/>
                    
          <iframe src="https://climate.nasa.gov/interactives/climate-time-machine" width='95%' height='950px'/>

        </div>
        {/*
        <InfoBox reactive={true} title="Causes of Carbon Footprint" subtitle="There are many ways you can contribute to reducing carbon footprint.">
          {[
            {name: "Food", image: "", description: 
            <p>
              The food we consume on a daily basis affects our carbon footprint as the process of producing some foods leave a 
              greater carbon footprint than others. Here&apos;s how you can adjust your diet: <br/><br/>
              1. <span style={{fontWeight: '500'}}>Eat less meat</span>, as
              the meat industry has roughly the same carbon emissions of every car, truck and plane in the world combined.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Buy locally grown food</span>, as a significant amount of greenhouse gases are produced from transporting food 
              so buying food close to home can reduce those emissions.<br/><br/>
              3. <span style={{fontWeight: '500'}}>Avoid processed foods</span>, processed foods have higher emissions than fresh food as it includes transportation, 
              production in factories, and additional packaging.<br/><br/>
            </p>},

            {name: "Transport", image: "", description:
            <p>
              Going carless for a year could save about 2.6 tons of CO2 but since most people most likely can&apos;t 
              adjust to this change. Here&apos;s what you can do:<br/><br/>
              1. <span style={{fontWeight: '500'}}>Carpool</span>, this way you&apos;re splitting carbon emissions 
              between the number of people in your car.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Regularly service your car</span> to keep it more efficient, 
              this can increase fuel efficiency by up to 49%.<br/><br/>
              3. <span style={{fontWeight: '500'}}>Drive more efficiently</span> by avoiding accelerating and speeding unnecessarily, 
              this can reduce mileage by 33%.<br/><br/>
              4. <span style={{fontWeight: '500'}}>Use public transport</span> or walk when possible.<br/><br/>
            </p>},

            {name: "Household", image: "", description:
            <p>
              Energy inefficient homes waste significant amounts of energy through energy inefficient appliances and excessive water use.
              Here&apos;s what you should do:<br/><br/>
              1. <span style={{fontWeight: '500'}}>Improve home energy efficiency</span> by using fluorescents or LEDs to reduce emissions.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Buy products that have five-star energy efficiency labels</span>, these are the most efficient models.<br/><br/>
            </p>},

            {name: "Consumption", image: "", description:
            <p>
              This includes clothing, footwear, household and all personal goods. All these accounts for a significant amount of an individual&apos;s 
              carbon footprint that comes from gathering materials, production and transport. Here&apos;s how you can help: <br/><br/>
              1. <span style={{fontWeight: '500'}}>Reduce water usage</span>, this lowers the amount of energy required to pump, treat and heat water.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Avoid buying more than necessary</span>, this can reduce the emissions from the production of those items.<br/><br/>
            </p>},
          ]}
        </InfoBox>
        */}
      </main>
  );
}

/* TODO GET ANALYTICS */
export async function getStaticProps() {
  /**
   * Fetches analytics data on the unique users of the site
   * 
   * @returns {object} - Props to be passed to page
   */
  const res = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1000&max=1000000&count=1");
  const uniqueUsers = parseInt((await res.text()).replace('[', '').replace(']', ''));

  return {
    props: {
      uniqueUsers,
    },
    revalidate: 10,
  };
}