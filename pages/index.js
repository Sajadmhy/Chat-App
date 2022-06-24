import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Data } from '../components/Data'
import { useState } from 'react'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Chat App</title>
        <meta name="description" content="Chat-box created with next.js" />
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
            <p>Last Message</p>
            <p>3 days ago</p>
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
            <p>Last Message</p>
            <p>3 days ago</p>
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
