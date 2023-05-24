"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

import s from "./scrolltrigger-text.module.scss"

import React, { useEffect } from "react"

type Props = {}

const ScrollTriggerText = (props: Props) => {
  useEffect(() => {
    const text = document.querySelector("[data-text]")
    const textInner = document.querySelector("[data-text-inner]")

    gsap.to(textInner, {
      xPercent: 100,
      scrollTrigger: {
        trigger: text,
        scrub: true,
        markers: true,
      },
    })
  }, [])

  return (
    <div className={s.text} data-text>
      <p data-text-inner>lol</p>
    </div>
  )
}

export default ScrollTriggerText
