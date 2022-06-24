import Image from 'next/image'
import ChatText from '../components/ChatTextSam'
import styles from '../styles/ChatApp.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.chatHead}>
          <Link href="/">
          <div className={styles.backArrow}>
          <Image 
          src="/back-arrow.png"
          height={18}
          width={18}
          alt="back arrow"
          />
          </div>
          </Link>
          <div className={styles.blackProfile}>

          </div>
          <div>
            <p>Samuel Jr. Berokh</p>
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
        <ChatText />
        <div className={styles.inputField}>
          <input type="text" placeholder='Type a message'/>
          <span className={styles.space}></span>
          <div className={styles.sendIcon}>
            <Image
            src="/send-icon.png"
            width={25}
            height={25}
            alt="send message icon"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
