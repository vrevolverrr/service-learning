import Link from 'next/link';
import Image from 'next/image';
import LeafIcon from '../public/leaf.svg';

export default function Advert(props) {
    const donateButton = 
        <button style={{
            position: 'relative', top: '22px', cursor: 'pointer',
            width: '180px', height: '45px', fontSize: '18px', fontFamily: 'MazzardH', 
            borderRadius: '25px', border: 'none', backgroundColor: '#ff4500', color: 'white'}}>
                {props.buttonText}
        </button>;

    return (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '5px'}}>
            <div style={{
                width: '95%', maxWidth: '1800px', height: '150px', padding: '0 20px 0 20px', display: 'flex', 
                flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
                backgroundColor: '#f0f0f0', borderRadius: '20px'}}>
                
                <div style={{transform: 'scale(1.4)', position: 'relative', top: '-15px'}}><Image src={LeafIcon} alt="leaf icon"/></div>
                <p style={{position: 'relative', top: '0px', textAlign: 'center', fontSize: '20px'}}>{props.children}</p>
                
                {props.external ? 
                <a title={props.title} href={props.href} target="_blank" rel="noreferrer">
                    {donateButton}
                </a> : 
                <Link href={props.href} passHref={true}>
                    {donateButton}
                </Link>}
   
            </div>
        </div>
    );
}