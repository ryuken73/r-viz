import React from 'react';
import styled from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
// import '@splidejs/react-splide/css/core';
import { 
  useListProgramsQuery ,
  useOnairProgramIdsQuery
} from 'hooks/useDataQuery';
import ProgramPage from 'Components/ProgramPage';

function SpliderView(props) {
  const { data: listPrograms, isLoading } = useListProgramsQuery({autoRunning: true});
  const { data: onairProgramIds } = useOnairProgramIdsQuery({autoRunning: true});
  const splideRef = React.useRef(null);
  console.log(onairProgramIds)
  const handleMove = React.useCallback((a, b, c) => {
    console.log('##### move', a, b, c, splideRef.current.splide.index);
  }, [])
  const handleVisible = React.useCallback((slide) => {
    console.log('##### visible', slide);
  }, [])
  return (
    <SwipeableViews
    >
        {listPrograms?.map(program => (
            <ProgramPage
              programId={program.programId}
              programTitle={program.programTitle}
              programImage={program.programImage}
              isOnair={onairProgramIds?.includes(program.programId)}
            ></ProgramPage>
        ))}
    </SwipeableViews>
  )
}

export default React.memo(SpliderView);