import Head from 'next/head';
import React from 'react';
import styles from '../../styles/booking.module.css'

export default function Booking() {
  return (
    <>
       <Head>
        <title>HalssonFood |  Booking</title>
        <meta name="description" content="HalssonFood booking is system is simple and quick , you just fill the form as fast you can , an email confirmation will be sent to you  telling you the details of you booking " />
        <meta name="keywords" content="HalssonFood , food , , booikg , table ,canadian food, canada , menu ,  fish , pitza , restaurants, canadian restaurant , pitza, burger, best food website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <main>
         <div className={styles.bookingContainer}> 
           <div className={styles.imageContainer}>
             <img src="/pic.png" alt="Booking image"  />
           </div>
           <div className={styles.formContainer}>
           <div className={styles.divflex}>
            <div className={styles.container}>
              <form action="" method="post" className={styles.form}>
                <h1>Book now and enjoy later</h1>
                <div className={styles.formgroup}>
                   <p>Full Name</p>
                  <input type="text" id="name" className={styles.formcontrol} Placeholder="Your name" required />
                </div>
                <div className={styles.formgroup}>
                   <p>Email </p>
                  <input type="email" id="email" className={styles.formcontrol} Placeholder="Your email" required />
                </div>
                <div className={styles.formgroup}>
                   <p>Time</p>
                  <input type="time" id="email" className={styles.formcontrol} Placeholder="Your email" required />
                </div>
                <div className={styles.formgroup}>
                   <p>Date</p>
                  <input type="date" id="email" className={styles.formcontrol} Placeholder="Your email" required />
                </div>
                <br/>
                <button className={styles.bookBtn}>Book now</button>
              </form>
              
              
            </div>  
          </div>
           </div>
         </div>
       </main>
    </>
  );
}
