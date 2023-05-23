import React, { useEffect, useState } from "react"
import s from "./detail-panel.module.scss"
import cn from "clsx"
import Img from "../Img"

type Props = {
  content?: any
}

const DetailPanel = ({ content = null }: Props) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (content !== null) {
      setActive(true)
    }
  }, [content])

  return (
    <div className={cn(s.detailPanel, { [s.active]: active })} onClick={() => setActive(false)}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        <div className={s.imgC}>
          <Img
            source={content?.urls.regular}
            width={content?.width}
            height={content?.height}
            alt={content?.alt_description ?? "img"}
            loading="eager"
          />
        </div>
      </div>
    </div>
  )
}

export default DetailPanel
