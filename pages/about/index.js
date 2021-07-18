import React from 'react';
import styles from '../../styles/about.module.css'
import Link from 'next/link'
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>HalssonFood | about</title>
        <meta name="description" content=" this a definition about halsson : HalssonFood is one of the best canadian restaurants , it's famous with its delecios food" />
        <meta name="keywords" content="about HalssonFood , about page , food , fish , pitza , restaurants, canadian restaurant , pitza, burger, best food website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main>
       <div className={styles.title}>
          <h1> HalssonFood </h1>
          <h3>You desire and we deliver</h3>
       </div>
       <div className={styles.detailsContainer}>
          <div className={styles.imageContainer}>
            <img src="/pic1.jpg" alt="header image (food)" />
          </div>
          <div className={styles.descriptionContainer}>
             <h3>HalssonFood</h3>
              <p>we consider ourselves , one of the best resturants in canda , we are in this buisness 14 years now , we only hire the best , and we only deliver good food quality.</p>
               <p>Words are not enough to descripe how good we are , feel free to <Link href="/menu"><a>explore our menu</a></Link>.</p>
               <div className={styles.subImageContainer}>
                 <img  src="/pic2.jpg" alt="food" />
               </div>
          </div>
       </div>
     </main>
    </>
  );
}
