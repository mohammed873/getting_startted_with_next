import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HalssonFood | home</title>
        <meta name="description" content="HalssonFood is one of the best canadian restaurants , it's famous with its delecios food" />
        <meta name="keywords" content="HalssonFood , food , fish , pitza , restaurants, canadian restaurant , pitza, burger, best food website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.titleContainer}>
          <h1 className={styles.titl}>
            We provide you the best of all
          </h1>
          <p>SERVICES | FOOD | EXPERIENCE </p>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            <Link href="/menu">
              Explore Menu
            </Link>
          </button>
          <button className={styles.btn}>
            <Link href="/Booking">
              Book a table
            </Link>
          </button>
        </div>

        <div className={styles.homeMenu}>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/pitzaIcon.png" width={128} height={128} alt="pitzaIcon"/>
              </div>
              <h1>Pitza</h1>
              <p>6 diffrente flavor</p>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/burgerIcon.png" width={128} height={128} alt="burgerIcon"/>
              </div>
              <h1>Burgers</h1>
              <p>12 exiting combinations</p>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/chickenFryIcon.webp" width={128} height={128} alt="chickenIcon" />
              </div>
              <h1>Chiken Fry</h1>
              <p>Breast | Leg | Wings</p>
            </div>
            <div className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/friesIcon.png" width={128} height={128} alt="friesIcon"/>
              </div>
              <h1>Fries</h1>
              <p>8 delicious flavor</p>
            </div> 
        </div>

      </main>
    </div>
  )
}
