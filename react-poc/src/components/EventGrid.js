import styles from '../Styles/EventStyles.module.css'

function EventGrid({Events}){
const backGround = {
    color :'#f5428d'
}
    return (
        <div className={styles.eventwrap}>
            <div style={backGround}> {Events.color}</div>
               
        </div>
    );
}

export default EventGrid;