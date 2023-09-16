import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  height: 100px;
  color: white;
`

const Title = styled.div`
  position: sticky;
  top: 50px;
  left: 50%;
  text-align: center;
  font-size: 1.6rem;
`

function TopTitle(props) {
  const {title} = props;
  return (
    <Container>
      <Title>
        {title}
      </Title>
    </Container>
  )
}

export default React.memo(TopTitle);
