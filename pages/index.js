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
      </main>
      <footer className={styles.footer}>
        <div>Made with 💓 by <a href='https://sajad.codes'>Sajad Mahyaei</a></div>
      </footer>
    </div>
  )
}
