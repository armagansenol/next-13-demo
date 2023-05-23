"use client"
import React, { useState } from "react"
import cn from "clsx"
import Image from "next/image"

import s from "./Img.module.scss"

type Props = {
  source: string
  width: number
  height: number
  alt: string
}

const Img = ({ source = "#", alt = "Visual", width = 500, height = 500 }: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <figure className={s.figure}>
      <div className={s.aspectRatio} style={{ "--height": height, "--width": width } as React.CSSProperties}></div>
      <Image
        className={cn(s.img, { [s.visible]: visible })}
        loading="lazy"
        src={source}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setVisible(true)}
      ></Image>
      {/* <img className={s.img} src={source} alt={alt} width={width} height={height}></img> */}
    </figure>
  )
}

export default Img
