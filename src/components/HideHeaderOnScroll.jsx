import { Slide, useScrollTrigger } from "@material-ui/core"
import React from "react"

const HideHeaderOnScroll = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideHeaderOnScroll
