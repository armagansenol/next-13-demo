import React from "react"
import s from "./header.module.scss"
import Link from "next/link"

const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/">home</Link>
      <Link href="gallery">gallery</Link>
      <Link href="r3f-test">r3f test</Link>
      <Link href="gltf-test">gltf test</Link>
      <Link href="measure-test">measure</Link>
    </header>
  )
}

export default Header
