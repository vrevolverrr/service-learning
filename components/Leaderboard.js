import styles from '../styles/leaderboard.module.css';

function LeaderboardItem(props) {
    const numtrees = Math.floor(props.amount / 20);

    return (
        <div className={styles.leaderboard_item}>
            <p style={{fontSize: '32px', margin: '4px'}}>{props.emoji}</p>
            <div style={{width: '8px'}} />
            <div style={{paddingRight: '5px'}}>
                <p className={styles.leaderboard_name}>{props.name}</p>
                <div style={{height: '4px'}} />
                <p className={styles.leaderboard_message}>{props.children}</p>
            </div>
            <div style={{width: '100px', textAlign: 'center', marginLeft: 'auto', marginRight: '0'}}>
                {props.amount >= 20 ? <div className={styles.leaderboard_donation_tree}>{numtrees} tree{numtrees > 1 ? 's' : ''}</div> : <div />}
                {props.amount >= 20 ? <div style={{height: '4px'}}/> : <div />}
                <p className={styles.leaderboard_donation_amount}>RM{props.amount}</p>
            </div>
        </div>
    );
}

export default function Leaderboard() {
    return (
        <>
        <p style={{color: "#666666"}}>The donations are sorted based on most recent</p>
        <div style={{height: '10px'}}/>
        <div className={styles.leaderboard}>
            <LeaderboardItem name="Gene" amount={20} emoji='🌏'>Love Our Earth!</LeaderboardItem>
            <LeaderboardItem name="Vanessa" amount={20} emoji='🌏'></LeaderboardItem>
            <LeaderboardItem name="Fifi" amount={5} emoji='💚'>for our earth {'<3'}</LeaderboardItem>
            <LeaderboardItem name="Ruby" amount={20} emoji='🌱'>Earth is our only home</LeaderboardItem>
            <LeaderboardItem name="Adam Soh" amount={20} emoji='✨'>Stand together for our Mother Earth!</LeaderboardItem>
            <LeaderboardItem name="Selvi" amount={20} emoji='🍂'>Save the Nature</LeaderboardItem>
            <LeaderboardItem name="Shreeess" amount={5} emoji='🍀'>Let&apos;s save mother nature!</LeaderboardItem>
            <LeaderboardItem name="Eloise" amount={20} emoji='🌏'>let&apos;s do our part to protect our planet!</LeaderboardItem>
            <LeaderboardItem name="SPSoong" amount={30} emoji='❤️'>Love Earth, Love Environment, Love Us!</LeaderboardItem>
            <LeaderboardItem name="phang chuen" amount={5} emoji='❤️'></LeaderboardItem>
            <LeaderboardItem name="7un" amount={20} emoji='👆🏻'></LeaderboardItem>
            <LeaderboardItem name="stanley" amount={10} emoji='❤️'></LeaderboardItem>
            <LeaderboardItem name="Mango" amount={10} emoji='🌳'></LeaderboardItem>
            <LeaderboardItem name="Anonymous" amount={5} emoji='✨'></LeaderboardItem>
        </div>
        </>
    );
}