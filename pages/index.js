import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Box</title>
        <meta name="description" content="Chat-box created with next.js" />
        <link rel="icon" href="/chat-favicon.png" />
      </Head>
      <main className={styles.main}>
       <div className={styles.box}>
        <div className={styles.chatHead}>
          <div className={styles.backArrow}>
          <Image 
          src="/back-arrow.png"
          height={18}
          width={18}
          alt="back arrow"
          />
          </div>
          <Image
          src="/profile.png"
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
       </div>
      </main>
    </div>
  )
}
