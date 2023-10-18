import React from 'react';
import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import { 
  useListProgramsQuery ,
  useOnairProgramIdsQuery
} from 'hooks/useDataQuery';
import ProgramPage from 'Components/ProgramPage';

const CustomSplide = styled(Splide)`
  padding: ${props => props.padding || `1em !important`};
  width: 100%;
  -webkit-transform: translate3d(0, 0, 0);
`
const CustomSplideTrack = styled(SplideTrack)`
  overflow: clip;
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 100%;
    }
  }
`
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
    <CustomSplide
      options = {{
        speed: 400,
        easing: 'linear',
        arrows: false,
        perPage: 1,
        pagination: false,
        noDrag: '.noSwiping'
      }}
      padding="0em"
      hasTrack={false}
      tag="section"
      ref={splideRef}
      onMove={handleMove}
      onVisible={handleVisible}
    >
      <CustomSplideTrack>
        {listPrograms?.map(program => (
          <SplideSlide 
            key={program.programId}
          >
            <ProgramPage
              programId={program.programId}
              programTitle={program.programTitle}
              programImage={program.programImage}
              isOnair={onairProgramIds?.includes(program.programId)}
            ></ProgramPage>
          </SplideSlide>
        ))}
      </CustomSplideTrack>
    </CustomSplide>
  )
}

export default React.memo(SpliderView);