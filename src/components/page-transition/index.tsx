"use client"

import { usePathname, useSearchParams, useRouter } from "next/navigation"

import React, { useEffect, useState } from "react"
import cn from "clsx"
import s from "./page-transition.module.scss"

type Props = {}

const PageTransition = (props: Props) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [visible, setvisible] = useState(false)

  const handleRouteChange = () => {
    console.log("lol")
  }

  //   useEffect(() => {
  //     router.events.on("routeChangeComplete", handleRouteChange)
  //     return () => {
  //       router.events.off("routeChangeComplete", handleRouteChange)
  //     }
  //   }, [router.events])

  useEffect(() => {
    const url = pathname + searchParams.toString()
    // You can now use the current URL

    console.log(url)
  }, [pathname, searchParams])

  return <div className={cn(s.transition, { [s.visible]: visible })}>PageTransition</div>
}

export default PageTransition
