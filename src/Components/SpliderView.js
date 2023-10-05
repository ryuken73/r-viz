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
  console.log(onairProgramIds)
  return (
    <CustomSplide
      options = {{
        arrows: false,
        perPage: 1,
        pagination: false
      }}
      padding="0em"
      hasTrack={false}
      tag="section"
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