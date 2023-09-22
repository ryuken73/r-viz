import React from 'react';
// import {Flip} from "number-flip";
import Flip from "utils/numberFlip";
import styled from 'styled-components';

const MAX_NUMBER = 9999999;
const StyledDiv = styled.div`
`
const hideSeps = (sepElements, toNumber) => {
  const toNumberLen = toNumber.toString().length;
  if(toNumberLen < 4){
    sepElements[0].style.display = 'none';
    sepElements[1].style.display = 'none';
  } else if (toNumberLen < 7){
    sepElements[1].style.display = 'inline-block';
    sepElements[0].style.display = 'none';
  } else {
    sepElements[0].style.display = 'inline-block';
    sepElements[1].style.display = 'inline-block';
  }
}

function AnimatedNumberWithDot(props) {
  const {to} = props;
  const ref = React.useRef(null);
  const flipRef = React.useRef(null);
  React.useLayoutEffect(() => {
    console.log('### create new flip')
    if(flipRef.current !== null) return;
    flipRef.current = new Flip({
      node: ref.current,
      from: 9999999,
      separator: ',',
      duration: 0.3
    })
  }, [])

  React.useEffect(() => {
    const seps = ref.current.querySelectorAll('.sprtr')
    hideSeps(seps, to);
    flipRef.current.flipTo({ 
      to
    });
  }, [to])

  const digitLength = to.toString().length;
  const maxLength = MAX_NUMBER.toString().length;

  return (
    <StyledDiv digitLength={digitLength} ref={ref}></StyledDiv>
  )
}

export default React.memo(AnimatedNumberWithDot);
