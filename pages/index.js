import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import TextTransition, { presets } from "react-text-transition";
import InfoBox from '../components/InfoBox';
import styles from '../styles/Home.module.css';

export default function Home({ uniqueUsers }) {

  // Scrolling Hero Text
  const HERO_TEXT1 = ["CARBON", "ENERGY"];
  const HERO_TEXT2 = ["NEUTRAL", "SAVING"];

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
    <div>
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
        <InfoBox title="Causes of Carbon Footprint">
          Carbon footprint is the total amount of greenhouse gas emissions caused directly and indirectly by an individual, organization, event or product.
        </InfoBox>
        <InfoBox reactive={true} title="Reducing Carbon Footprint" subtitle="There are many ways you can contribute to reducing carbon footprint.">
          {[
            {name: "Food", image: "", description: 
            <p>
              1. <span style={{fontWeight: '500'}}>Eat less meat</span>, as
              the meat industry has roughly the same carbon emissions of every car, truck and plane in the world combined.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Buy locally grown food</span>, as a significant amount of greenhouse gases are produced from transporting food 
              so buying food close to home can reduce those emissions.<br/><br/>
              3. <span style={{fontWeight: '500'}}>Avoid processed foods</span>, processed foods have higher emissions than fresh food as it includes transportation, 
              production in factories, and additional packaging.<br/><br/>
            </p>},

            {name: "Transport", image: "", description:
            <p style={{fontFamily: 'MazzardH'}}>
              Going carless for a year could save about 2.6 tons of co2 but since most people most likely can&apos;t 
              adjust to this change. Here&apos;s what you can do:<br/><br/>
              1. <span style={{fontWeight: '500'}}>Carpool</span>, this way you&apos;re splitting carbon emissions 
              between the number of people in your car.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Regularly service your car</span> to keep it more efficient, 
              this can increase fuel efficiency by up to 49%.<br/><br/>
              3. <span style={{fontWeight: '500'}}>Drive more efficiently</span> by avoiding accelerating and speeding unnecessarily, 
              this can reduce mileage by 33%.
              4. <span style={{fontWeight: '500'}}>Use public transport</span> or walk when possible.<br/><br/>
            </p>},

            {name: "Household", image: "", description:
            <p>
              Energy inefficient homes waste significant amounts of energy through energy inefficient appliances and excessive water use.<br/><br/>
              1. <span style={{fontWeight: '500'}}>Improve home energy efficiency</span> by using fluorescents or LEDs to reduce emissions.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Buy products that have five-star energy efficiency labels</span>, these are the most efficient models.<br/><br/>
            </p>},

            {name: "Consumption", image: "", description:
            <p>
              This includes clothing, footwear, household and all personal goods. All these accounts for a significant amount of an individual&apos;s 
              carbon footprint that comes from gathering materials, production and transport.<br/><br/>
              1. <span style={{fontWeight: '500'}}>Reduce water usage</span>, this lowers the amount of energy required to pump, treat and heat water.<br/><br/>
              2. <span style={{fontWeight: '500'}}>Avoid buying more than necessary</span>, this can reduce the emissions from the production of those items.<br/><br/>
            </p>},
          ]}
        </InfoBox>
        <InfoBox title="What is Carbon Footprint?">
          Carbon footprint is the total amount of greenhouse gas emissions caused directly and indirectly by an individual, organization, event or product.
        </InfoBox>
        <InfoBox title="What is Carbon Footprint?">
          Carbon footprint is the total amount of greenhouse gas emissions caused directly and indirectly by an individual, organization, event or product.
        </InfoBox>
      </main>
    </div>
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