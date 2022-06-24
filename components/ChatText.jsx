import styles from '../styles/ChatText.module.css';
import { Data } from './Data';
import Image from 'next/image';
import { Context } from './GlobalStates';
import { useContext, useRef, useEffect } from 'react';

export default function ChatText(props) {
    const [messages] = useContext(Context);
    const messageRef = useRef();

    useEffect(() => {
        scrollToBottom();
      },[messages])
    
    const scrollToBottom = () => {
        messageRef.current?.scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <div className={styles.container}>
            {messages.map((value , index) =>
                <>
                    <div key={index} className={value.id === props.id ? styles.myMessage : styles.hisMessage}>
                        <p>{value.text}</p>
                        <p className={styles.date}>{value.date}</p>
                    </div>
                    <div className={styles.chatProfile} style={{display: value.id === props.id ? 'none' : 'block'}}>
                    <Image 
                    src={props.picture}
                    height={30}
                    width={30}
                    alt="profile"
                    /> 
                    </div>
                    <div ref={messageRef} className={styles.spaceAround} style={{marginTop: value.id !== Data[index+1]?.id ? '15px' : 0}}></div>
                </>
            )}
        </div>
    )
}