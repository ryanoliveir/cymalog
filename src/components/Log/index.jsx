import styles from './Log.module.css'

const Log = ({id, title, toLog}) => {

    function sendLogRoute(){
        console.log('sendLogRoute');
        toLog(title.toLowerCase());
    }

    return (
        <div onClick={sendLogRoute} className={styles.log}>
            <h2>{title}</h2>
            <p>ID: {id}</p>
        </div>
    )
}

export default Log;
