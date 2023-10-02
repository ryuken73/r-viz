import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem;
  background: black;
  position: relative;
  border: 1px solid white;
  border-radius: 8px;
  color: white;
  box-sizing: border-box;
  width: fit-content;
  height: 2rem;
  margin: 0 auto;
  font-size: 0.8rem;
  font-weight: bold;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.5rem;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 2;
`
const Sliding = styled.div`
  position: absolute;
  z-index: 1;
  background-color: darkslategray;
  height: 1.5rem;
  width: 4rem;
  border-radius: 5px;
  box-sizing: border-box;
  transition: 0.25s ease-out;
`

const itemList = {
  'daily': '1일',
  'weekly': '1주',
  'monthly': '1개월',
  'halfYearly': '6개월',
  'yearly': '1년'
}

function SlidingRadio() {
  const slideRef = React.useRef(null);
  const onClickItem = React.useCallback((event) => {
    slideRef.current.style.transform = `translateX(${event.target.id * 100}%)`;
  }, [])
  return (
    <Container onClick={onClickItem}>
      {Object.keys(itemList).map((key, index) => (
        <Item key={key} id={index}>
          <div id={index}>
            {itemList[key]}
          </div>
        </Item>
      ))}
      <Sliding ref={slideRef}></Sliding>
    </Container>
  )
}

export default React.memo(SlidingRadio);
