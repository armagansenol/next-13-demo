import React from "react"
import s from "./grid-gallery.module.scss"
import Img from "../Img"

type Props = {
  contents: any[]
}

const GridGallery = ({ contents = [] }: Props) => {
  return (
    <div className={s.imgs}>
      <>
        {contents.map((content: any, i: any) => {
          return (
            <div className={s.imgC} key={i}>
              <Img
                source={content.urls.full}
                width={content.width}
                height={content.height}
                alt={content.alt_description ?? "img"}
              />
            </div>
          )
        })}
      </>
    </div>
  )
}

export default GridGallery
