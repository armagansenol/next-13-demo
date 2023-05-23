"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import React, { ReactElement } from "react"

type Props = {
  children?: ReactElement | any
}

const Smooth = ({ children }: Props) => {
  const options = {
    duration: 1.4,
    easing: (t: any) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
  }
  return (
    <ReactLenis root options={{ ...options }}>
      {children}
    </ReactLenis>
  )
}

export default Smooth
