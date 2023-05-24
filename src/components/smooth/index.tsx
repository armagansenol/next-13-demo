"use client"

import { ReactLenis, useLenis } from "@studio-freight/react-lenis"
import React, { ReactElement, useEffect } from "react"
import VelocityBar from "../velocity-bar"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"

type Props = {
  children?: ReactElement | any
}

const Smooth = ({ children }: Props) => {
  const enabled = false

  const lenis = useLenis()

  useEffect(() => {
    if (lenis) lenis.on("scroll", ScrollTrigger.update)

    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000)
    // })
  }, [])

  useEffect(() => {
    if (!enabled) return

    window.history.scrollRestoration = "manual"
  }, [enabled])

  const options = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  }

  return (
    <>
      {enabled ? (
        <>
          <ReactLenis root options={{ ...options }}>
            {children}
          </ReactLenis>

          <VelocityBar />
        </>
      ) : (
        <div>{children}</div>
      )}
    </>
  )
}

export default Smooth
