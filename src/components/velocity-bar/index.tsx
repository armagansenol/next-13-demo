"use client"

import React, { useEffect, useState } from "react"
import s from "./velocity-bar.module.scss"
import { useLenis } from "@studio-freight/react-lenis"
import { gsap } from "gsap"

type Props = {}

const VelocityBar = (props: Props) => {
  const [vel, setVel] = useState(0)
  const [scaleY, setScaleY] = useState(0)
  const [tY, setTY] = useState(0)

  const lenis = useLenis((lenis: any) => {
    // called every scroll

    // console.log(lenis)
    setVel(gsap.utils.mapRange(0, 500, 1, 0.6, Math.abs(lenis.velocity)))
    setScaleY(gsap.utils.mapRange(0, 500, 1, 0.1, Math.abs(lenis.velocity)))
    setTY(gsap.utils.mapRange(0, 500, 0, 500, lenis.velocity))
  })

  useEffect(() => {
    console.log(vel)
  }, [vel])

  return (
    <div className={s.velocityBar}>
      <div className={s.bounce} style={{ transform: `scaleY(${vel}) scaleX(${scaleY}) translateY(${-tY}%) ` }}>
        velocity
      </div>
    </div>
  )
}

export default VelocityBar
