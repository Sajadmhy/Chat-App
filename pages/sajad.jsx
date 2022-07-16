import Image from 'next/image'
import ChatText from '../components/ChatText'
import styles from '../styles/ChatApp.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { Context } from '../components/GlobalStates'
import { useContext, useEffect, useRef, useState } from 'react'
import moment from 'moment'

export default function Sajad() {
  const [messages, setMessages] = useContext(Context);
  const [newMessage, setNewMessage] = useState('');
  const id = 2;
  const momentFormat = 'hh:mm A DD MMM, YYYY';

  const submitMessage = () => {
    const newInput = {
      id , text: newMessage, date: moment().format('hh:mm A DD MMM, YYYY'),
    }
    const newData = [...messages]
    newData.push(newInput);
    setMessages(newData); 
    setNewMessage("");
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
      </Head>
      <main className={styles.main}>

      <div className={styles.messagesList}>
          
          <div className={styles.chatHead}>
           Messages
          </div>
          <Link href="/sajad">
          <div className={styles.card}>
            <Image
            src="/profile-sajad.png"
            width={60}
            height={60}
            alt="Sajad"
            priority
            />
            <div className={styles.details}>
              <p>Sajad Mahyaei</p>
              <p>{ messages[messages.length-1].text.length > 60 ?
               messages[messages.length-1].text.slice(0,50).concat('...') : messages[messages.length-1].text }</p>
              <p>{moment(messages[messages.length-1].date , momentFormat).diff(moment(), 'days') === 0 ? 'Today' : `${-moment(messages[messages.length-1].date , momentFormat).diff(moment(), 'days')} days ago`} </p>
            </div>
            <span className={styles.space}></span>
            <Image 
            src="/dots.png"
            height={20}
            width={20}
            alt="see more dots"
            priority
            />
          </div>
            </Link>
            <Link href="/samuel">
          <div className={styles.card}>
          <Image
            src="/profile-sam.png"
            width={60}
            height={60}
            alt="Samuel"
            priority
            />
            <div className={styles.details}>
              <p>Samuel Jr. Berokh</p>
              <p>{ messages[messages.length-1].text.length > 60 ?
               messages[messages.length-1].text.slice(0,50).concat('...') : messages[messages.length-1].text }</p>
              <p>{moment(messages[messages.length-1].date, momentFormat).diff(moment(), 'days') === 0 ? 'Today' : `${-moment(messages[messages.length-1].date, momentFormat).diff(moment(), 'days')} days ago`} </p>
            </div>
            <span className={styles.space}></span>
            <Image 
            src="/dots.png"
            height={20}
            width={20}
            alt="see more dots"
            priority
            />
          </div>
            </Link>
  
            </div>
        <div className={styles.chatText}>
         <div className={styles.chatHead}>
          <Link href="/"><div className={styles.backArrow}>
          <Image 
          src="/back-arrow.png"
          height={18}
          width={18}
          alt="back arrow"
          />
          </div>
          </Link>
          <Image
          src="/profile-sajad.png"
          height={60}
          width={60}
          alt="profile picture"
          property
          />
          <div>
            <p>Sajad Mahyaei</p>
            <p><span className={styles.dot}></span>Online</p>
          </div>
          <span className={styles.space}></span>
          <div className={styles.threeDots}>
          <Image 
          src="/dots.png"
          height={20}
          width={20}
          alt="see more dots"
          priority
          />
          </div> 
        </div>
        <ChatText id={id} picture={"/profile-sajad.png"}/>
        <div className={styles.inputField}>
          <input value={newMessage} onChange={e => setNewMessage(e.target.value)} 
          type="text" placeholder='Type a message'
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newMessage) {
              submitMessage()
            }
          }}/>
          <span className={styles.space}></span>
          <div className={styles.sendIcon}>
            <button disabled={!newMessage} onClick={submitMessage}>
            <Image
            src="/send-icon.png"
            width={25}
            height={25}
            alt="send message icon"
            />
            </button>
          </div>
         </div>
        </div>
      </main>
    </div>
  )
}
