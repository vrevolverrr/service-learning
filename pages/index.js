import Image from 'next/image';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import TextTransition, { presets } from "react-text-transition";
import styles from '../styles/Home.module.css';
import HeroBanner from '../public/hero.svg';

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
          {/*<CountUp start={0} end={uniqueUsers} duration={1.5} delay={0} separator=",">
            {({ countUpRef, start }) => (
              <span className={styles.counter} ref={countUpRef} />
            )}
          </CountUp> 
          <p className={styles.counter_text}>people reached</p>*/}
          <div className={styles.hero_text_container}>
            <TextTransition className={styles.hero_text} noWrap={true} direction="up" text={HERO_TEXT1[heroIndex % HERO_TEXT1.length]} springConfig={presets.default} />
            <TextTransition className={styles.hero_text} noWrap={true} direction="down" text={HERO_TEXT2[heroIndex % HERO_TEXT2.length]} springConfig={presets.default} />
          </div>
          <div className={styles.hero} />
        </div>
        <div className={styles.infobox}>
        </div>
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
  const res = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1000&max=1000000&count=1")
  const uniqueUsers = parseInt((await res.text()).replace('[', '').replace(']', ''));

  return {
    props: {
      uniqueUsers,
    },
    revalidate: 10,
  }
}