import React from 'react';
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
       <div className="navContainer">
           <div className="navLogo"> 
                <Link href="/">
                    <a style={{color: 'darkBlue' , textDecoration:'none', fontSize:"20px" }}>HalssonFood</a>
                </Link>
           </div>
           <div className="navMenu">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/Booking">
                    <a>Booking</a>
                </Link>
           </div>
       </div>
       <hr/>
    </>
  );
}
