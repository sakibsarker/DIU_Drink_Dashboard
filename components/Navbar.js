import React from 'react'
import Link from 'next/link'
import style from "../styles/Navbar.module.css"
const Navbar = () => {
  return (
    <div className={style.nav_container}>
        <ul className={style.nav_ul}>
            <li className={style.li}>
                <Link href="/">Home</Link>
            </li>
            <li className={style.li}>
                <Link href="/teacher">Teacher</Link>
            </li>
            <li className={style.li}>
                <Link href="/history">History</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar