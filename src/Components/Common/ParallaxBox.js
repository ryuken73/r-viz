import React from 'react'
import { Parallax } from 'react-scroll-parallax'

function ParallaxBox(props) {
  const {speed} = props;
  return (
    <Parallax speed={speed}>
      <div style={{fontSize:"20px", color: "white", textAlign: 'center'}}>ParallaxBox</div>
    </Parallax>
  )
}

export default React.memo(ParallaxBox)