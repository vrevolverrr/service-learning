import { useState, useEffect } from 'react';
import { getVisitorCount, updateVisitorCount } from '../services/firebase';
import TextTransition, { presets } from "react-text-transition";
import CountUp from 'react-countup';
import Card from '../components/Card';
import InfoBox from '../components/InfoBox';
import ScrollView from '../components/ScrollView';
import styles from '../styles/Home.module.css';
import CarbonFootprintIcon from '../public/carbonfootprint.svg';
import FoodIcon from '../public/reducing/food.png';
import TransportIcon from '../public/reducing/car.png';
import HouseholdIcon from '../public/reducing/house.png'
import ConsumptionIcon from '../public/reducing/consumption.png'
import ClimateIcon from '../public/effects/climate.png';
import HealthIcon from '../public/effects/lungs.png';
import EcosystemIcon from '../public/effects/tree.png';
import PollutionIcon from '../public/effects/rain.png';
import Section from '../components/Section';
import Advert from '../components/Advert';

export default function Home({ uniqueUsers }) {

  var updatedCount = false;

  if (process.browser && document.cookie == '') {
    updateVisitorCount();
    document.cookie = "visited=true";
    updatedCount = true;
  }

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
        {/* Landing Page Hero Section */}
        <div className={styles.hero_container}>
          <CountUp start={0} end={updatedCount ? uniqueUsers + 1 : uniqueUsers} duration={1.5} delay={0} separator=",">
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

        <div style={{height: '3vh'}}/>

        {/* What Is Carbon Footprint */}
        <InfoBox title="What is Carbon Footprint?" image={CarbonFootprintIcon}>
          Carbon footprint is the total amount of greenhouse gas emissions caused directly and indirectly by an individual, organization, event or product.
        </InfoBox>

        <div style={{height: '3vh'}}/>

        {/* Reducing Carbon Footprint */}
        <Section title="How Do We Reduce?" description="Small lifestyle changes can can reduce our carbon footprint. Every small contribution helps save our environment.">
        <ScrollView>
            <Card title="FOOD" image={FoodIcon} backgroundColor="#AFE8AE" titleColor="#013D00">
              The food we comsume affects our carbon footprint as the process of producing some foods leave a greater carbon 
              footprint than others. Eating less meat helps a lot since the meat industry is one of the largest culprits of 
              carbon emissions accouting for 14.5% of total man-made emissions every year.
            </Card>
            <Card title="TRANSPORT" image={TransportIcon} backgroundColor="#AFE8AE" titleColor="#013D00" imageStyles={{transform: 'scaleX(-1)'}}>
              Going carless for a year could reduce about 2.6 tons of carbon emissions. However, this is impractical for most people. Carpooling is a
              good alternative to this as your carbon footprint is split between several people. Always use public transport<br/>or walk when possible
              especially for shorter journeys.
            </Card>
            <Card title="HOUSEHOLD" image={HouseholdIcon} backgroundColor="#AFE8AE" titleColor="#013D00" imageStyles={{width: '500px', height: '500px', left: '290px', top: '-200px'}}>
              Many homes waste significant amounts of energy through energy inefficient appliances. Home energy efficiency 
              can be improved by using fluorescents or LEDs to replace high power bulbs. Also take note of energy efficiency labels of appliances 
              and only get products with five-star energy efficiency labels.
            </Card>
            <Card title="CONSUMPTION" image={ConsumptionIcon} backgroundColor="#AFE8AE" titleColor="#013D00" imageStyles={{width: '260px', height: '260px', left: '340px', top: '-185px'}}>
              This includes personal goods which accounts for a significant amount of an individual&apos;s carbon footprint that comes 
              from production and transport. Reducing water usage lowers the amount of energy required 
              to pump, treat and heat water. Also avoid buying more than necessary to prevent excessive production.
            </Card>
          </ScrollView>
        </Section>

        <div style={{height: '8vh'}}/>

        {/* Effects of Carbon Footprint */}
        <Section title="What Are The Effects?" 
          description="We live our everyday lives leaving a carbon footprint. These are how your daily activities adversely affect our environment.">
          <ScrollView>
            <Card title="CLIMATE CHANGE" image={ClimateIcon} imageStyles={{left: '325px', top: '-220px'}} 
            backgroundColor="#AED7E8" titleColor="#004360">
              The rise in average global temperature is a result of the high carbon emissions. 
              This warming causes extreme weather events like tropical storms, drought and heat waves which negatively affects 
              the agriculture sector as crops are unable to grow optimally which in turn affects the livelihood of Malaysian farmers.
            </Card>
            <Card title="HEALTH EFFECTS" image={HealthIcon} backgroundColor="#AED7E8" titleColor="#004360" imageStyles={{transform: 'rotate(4deg)'}}>
              Exposure to too much of greenhouse gases can lead to health effects such as headaches, dizziness, 
              restlessness, a tingling or pins or needles feeling, difficulty breathing, sweating, tiredness, 
              increased heart rate, elevated blood pressure, coma, asphyxia, and convulsion.
            </Card>
            <Card title="ECOSYSTEM" image={EcosystemIcon} backgroundColor="#AED7E8" titleColor="#004360" imageStyles={{width: '420px', height: '420px', left: '320px', top: '-210px'}}>
              Malaysia is the home of rich biodiversity. Most plants and animals live are sensitive to climate conditions, 
              such as temperature and rainfall patterns. Therefore, the change in the climate conditions has affected the plants and 
              animals here as well as the makeup of the entire ecosystem.
            </Card>
            <Card title="POLLUTION" image={PollutionIcon} backgroundColor="#AED7E8" titleColor="#004360" imageStyles={{width: '220px', height: '220px', left: '330px', top: '-190px'}}>
              The emission of greenhouse gases is a major contributor to air pollution. One of the little-discussed issue with air pollution is 
              acid rain. As the greenhouse gases combine with moisture in the air, acid rain is formed. Acid rain damages forests, freshwater, 
              soil and even causing the corrosion of buildings.
            </Card>
          </ScrollView>
        </Section>


        <div style={{height: '6vh'}}/>

        <Advert href="/donate" buttonText="Donate">
          Take it a step further and plant a tree with us today.
        </Advert>

        <div style={{height: '8vh'}}/>

        {/* NASA Climate Time Machine iframe */}
        <Section title="How Is Our Planet Changing?" 
          description="NASA&apos; visualizations to show how some of the key indicators of climate change have changed in Earth&apos;s recent history.">
          <iframe src="https://climate.nasa.gov/interactives/climate-time-machine" width='95%' height='950px'/>
        </Section>

        <div style={{height: '3vh'}}/>

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

  // const cookies = context.req.headers.cookie;
  const uniqueUsers = await getVisitorCount();

  return {
    props: {
      uniqueUsers,
    },
  };
}