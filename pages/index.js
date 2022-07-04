import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Data } from '../components/Data'
import { useContext, useState } from 'react'
import { Context } from '../components/GlobalStates'
import moment from 'moment'

export default function Home() {
  const [messages] = useContext(Context);
  const momentFormat = 'hh:mm A DD MMM, YYYY';

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Chat App created with Next.js and love" />
        <link rel="icon" href="/chat-favicon.png" />
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
        <div className={styles.messagesBox}>
        <svg fill="none" width="120" height="120" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mb-3"><path d="M3 8V19.2271C3 20.0058 3.85082 20.4857 4.51729 20.0829L7.19371 18.4651C8.13005 17.8992 9.20333 17.6 10.2974 17.6H17C19.2091 17.6 21 15.8091 21 13.6V8C21 5.79086 19.2091 4 17 4H7C4.79086 4 3 5.79086 3 8Z" stroke="grey" strokeWidth="1.5"></path><line x1="7.75" y1="9.25" x2="16.25" y2="9.25" stroke="grey" strokeWidth="1.5" strokeLinecap="round"></line><line x1="7.75" y1="13.25" x2="12.25" y2="13.25" stroke="grey" strokeWidth="1.5" strokeLinecap="round"></line></svg>  
        <p>Start new message</p>
        <p>Messages sent after connecting with a mentee/mentor will appear here.</p>
        <button>Write a message</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>Made with 💓 by <a href='https://sajad.codes'>Sajad Mahyaei</a></div>
      </footer>
    </div>
  )
}
