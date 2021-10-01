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
            <LeaderboardItem name="7un" amount={20} emoji='👆🏻'></LeaderboardItem>
            <LeaderboardItem name="Stanley" amount={10} emoji='❤️'></LeaderboardItem>
            <LeaderboardItem name="Mango" amount={10} emoji='🌳'></LeaderboardItem>
            <LeaderboardItem name="Anonymous" amount={5} emoji='✨'></LeaderboardItem>
        </div>
        </>
    );
}