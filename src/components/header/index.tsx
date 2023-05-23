import React from "react"
import s from "./header.module.scss"
import Link from "next/link"

const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/">Home</Link>
      <Link href="gallery">Gallery</Link>
    </header>
  )
}

export default Header
