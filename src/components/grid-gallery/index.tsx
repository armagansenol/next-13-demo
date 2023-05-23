"use client"
import React, { useEffect, useState } from "react"
import s from "./grid-gallery.module.scss"
import Img from "../Img"

const DetailPanel = dynamic(() => import("@/components/detail-panel"), { ssr: false })

import dynamic from "next/dynamic"

type Props = {
  contents: any[]
}

const GridGallery = ({ contents = [] }: Props) => {
  const [currentContent, setCurrentContent] = useState(null)

  function handleCurrent(content: any) {
    setCurrentContent(content)
  }

  useEffect(() => {
    console.log(currentContent)
  }, [currentContent])

  // window.history.scrollRestoration = "manual"

  return (
    <div className={s.imgs}>
      <>
        {contents.map((content: any, i: any) => {
          return (
            <div className={s.imgC} key={i} onClick={() => handleCurrent(content)}>
              <Img
                source={content.urls.regular}
                width={content.width}
                height={content.height}
                alt={content.alt_description ?? "img"}
              />
            </div>
          )
        })}
      </>
      <>
        <DetailPanel content={currentContent}></DetailPanel>
      </>
    </div>
  )
}

export default GridGallery
