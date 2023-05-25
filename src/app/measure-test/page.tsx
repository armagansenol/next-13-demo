"use client"

import cn from "clsx"
import s from "./measure-test.module.scss"
import React, { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/all"
import useMeasure from "react-use-measure"
gsap.registerPlugin(ScrollTrigger)

const MeasureTest = () => {
  const [ref, bounds] = useMeasure({ scroll: true })

  useEffect(() => {
    console.log(bounds)

    const box = document.querySelector("[data-box]")

    // gsap.to(box, {
    //   xPercent: 300,
    //   scrollTrigger: {
    //     trigger: box,
    //     markers: true,
    //     scrub: true,
    //   },
    // })

    console.log(gsap.utils.mapRange(0, bounds.height, 0, 10, Math.round(xy[1] - bounds.top)))

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        // console.log(instance)
        instance.kill()
      })

      // This in case a scroll animation is active while the route is updated
      gsap.killTweensOf(window)
    }
  }, [bounds])

  // The rest is just for hover and mouse tracking
  const [big, setBig] = useState(false)
  const [hovered, setHover] = useState(false)
  const [xy, setXY] = useState([0, 0])

  return (
    <main className={s.measureTest}>
      <div className={cn(s.section, s.one)}></div>
      <div className={cn(s.section, s.two)}></div>
      <div className={cn(s.section, s.three)}></div>
      <div className={cn(s.section, s.four)}></div>
      <div className={cn(s.section, s.five)}></div>

      <div
        className={s.box}
        ref={ref}
        data-box
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={({ clientX, clientY }) => setXY([clientX, clientY])}
        onClick={() => setBig(!big)}
        style={{
          transform: `translateY(${gsap.utils.mapRange(0, bounds.height, 0, 10, Math.round(xy[1] - bounds.top))}`,
        }}
      >
        <p>x: {bounds.x}</p>
        <p>y: {bounds.y}</p>
        <p>width: {bounds.width}</p>
        <p>height: {bounds.height}</p>
        <p>top: {bounds.top}</p>
        <p>left: {bounds.left}</p>
        <p>right: {bounds.right}</p>
        <p>bottom: {bounds.bottom}</p>
        <p>mouse x: {Math.round(xy[0] - bounds.left)}px</p>
        <p>mouse y: {Math.round(xy[1] - bounds.top)}px </p>
      </div>
    </main>
  )
}

export default MeasureTest
