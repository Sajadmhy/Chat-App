import styles from '../styles/ChatText.module.css';
import { Data } from './Data';

export default function ChatText() {
    return (
        <div className={styles.container}>
            {Data.map((value , index) => 
                <div key={index} className={value.id === 2 ? styles.myMessage : styles.hisMessage}>
                    <p>{value.text}</p>
                    <p className={styles.date}>{value.date}</p>
                </div>
            )}
        </div>
    )
}