import React from 'react';
import styled from 'styled-components';
import { CardInStyle, CardHeader, CardFooter } from 'Components/Common/StyleDefs';

const Container = styled(CardInStyle)`
  display: flex;
  flex-direction: column;
` 

function CardContent(props) {
  const {headText, footText, children} = props;
  return (
    <Container>
      {headText && (<CardHeader size={1.8}>{headText}</CardHeader>)}
      {children}
      {footText && (<CardFooter>{footText}</CardFooter>)}

    </Container>
  )
}

export default React.memo(CardContent)
