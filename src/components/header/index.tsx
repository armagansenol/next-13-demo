import React from "react"
import s from "./header.module.scss"
import Link from "next/link"

const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/">home</Link>
      <Link href="gallery">gallery</Link>
      <Link href="r3f-test">r3f test</Link>
    </header>
  )
}

export default Header
