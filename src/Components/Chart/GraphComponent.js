import React from 'react';
import CardContent from 'Components/ProgramPage/CardContent';
import {
  GraphBox,
  Header,
  Card,
} from 'Components/Common/StyleDefs';


export default function GraphComponent(props) {
  const {programId, type: chartType, title, headText, footText, children, onClickGraph} = props;
  const handleClick = React.useCallback(() => {
    onClickGraph(programId, chartType);
  }, [chartType, onClickGraph, programId])
  return (
    <GraphBox onClick={handleClick}>
      <Header>{title}</Header>
      <Card>
        <CardContent
          headText={headText}
          footText={footText}
        >
          {children}
        </CardContent>
      </Card>
    </GraphBox>
  )
}
