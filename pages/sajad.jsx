import Image from 'next/image'
import ChatText from '../components/ChatText'
import styles from '../styles/ChatApp.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { Context } from '../components/GlobalStates'
import { useContext } from 'react'

export default function Home() {
  const [setMessages] = useContext(Context);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Chat Box</title>
      </Head>
      <main className={styles.main}>
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
        <ChatText id={2} picture={"/profile-sajad.png"}/>
        <div className={styles.inputField}>
          <input type="text" placeholder='Type a message'/>
          <span className={styles.space}></span>
          <div className={styles.sendIcon}>
            <button>
            <Image
            src="/send-icon.png"
            width={25}
            height={25}
            alt="send message icon"
            />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
