import Banner from '../components/Banner';
import Section from '../components/Section';
import styles from '../styles/Attribution.module.css';

export default function Attribution() {
    return (
        <main className={styles.main}>
            <Banner>Attribution</Banner>
                        
            <div style={{height: '3vh'}}/>
            
            <Section height='2vh' title="Resources" description="We are grateful to all the 
            resources we used in this project which include programming libraries and 
            graphical assets that helped make this project a success.">
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <div style={{height: '20px'}}/>
                    <a href='https://www.freepik.com/' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        Earth Vector by freepik - www.freepik.com
                    </a>
                    <a href='https://www.freepik.com/' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        Carbon Footprint Vector by vectorjuice - www.freepik.com
                    </a>
                    <a href='https://reactjs.org/' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        Web Development Framework - www.reactjs.org
                    </a>
                    <a href='https://nextjs.org/' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        Web Development Framework - www.nextjs.org
                    </a>
                    <a href='https://github.com/WinterCore/react-text-transition' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        React Library - react text transition
                    </a>
                    <a href='https://github.com/glennreyes/react-countup' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        React Library - react countup
                    </a>
                    <a href='https://github.com/WinterCore/react-text-transition' style={{fontSize: '18px', margin: '10px', color: '#1a88db'}}>
                        React Library - react text transition
                    </a>
                </div>
            </Section>

            <div style={{height: '3vh'}}/>
        </main>
    );
}