import Image from 'next/image'
import React from 'react'
import "./style.css";
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
export default function Header() {
  return (
    <div className="header">
      <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"></link>
      <div className="container">
        <div className="left">
          <Link href="/"><Image src="/images/logo.png" width={130} height={17} /></Link>
          <ul className="mainmenu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Products</Link></li>
            <li><Link href="/">Games <FaAngleDown /></Link></li>
          </ul>
        </div>
        <div className="right">
          <Link href="/" className="username">
            <Image src="/images/alex.png" width={42} height={40} alt="image profile" />
            Alex
          </Link>
          <Link href="/" className="signout">Sign Out <FaArrowRight /></Link>
        </div>
      </div>
    </div>
  )
}
