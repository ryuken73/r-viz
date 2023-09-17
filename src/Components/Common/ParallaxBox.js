import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function ParallaxBox(props) {
  const {speed, children} = props;
  return (
    <Parallax speed={speed}>
      {children}
    </Parallax>
  )
}

export default React.memo(ParallaxBox)