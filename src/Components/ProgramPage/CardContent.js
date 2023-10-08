import React from 'react';
import styled from 'styled-components';
import { CardInStyle, CardHeader, CardFooter } from 'Components/Common/StyleDefs';

const Container = styled(CardInStyle)`
  display: flex;
  flex-direction: column;
` 

function CardContent(props) {
  const {headText, footText, children} = props;
  const headVisible = headText === 'none' ? 'hidden':'visible';
  const footVisible = footText === 'none' ? 'hidden':'visible';
  return (
    <Container>
      {headText && (<CardHeader visibility={headVisible} size={1.8}>{headText}</CardHeader>)}
      {children}
      {footText && (<CardFooter visibility={footVisible}>{footText}</CardFooter>)}
    </Container>
  )
}

export default React.memo(CardContent)
