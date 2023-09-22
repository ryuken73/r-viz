import React from 'react';
import {Flip} from "number-flip";
import styled from 'styled-components';

function AnimatedNumberWithDot(props) {
  const {to} = props;
  const ref = React.useRef(null);
  const flipRef = React.useRef(null);
  React.useEffect(() => {
    flipRef.current = new Flip({
      node: ref.current,
      from: 0,
      to,
      duration: 5,
      seperator: ',',
      direct: false
    })
  }, [to])

  React.useEffect(() => {
    flipRef.current.flipTo({ to });
  }, [to])

  return (
    <div ref={ref}></div>
  )
}

export default React.memo(AnimatedNumberWithDot);
