import styled from "styled-components";

const STYLE = {
  BLUR: 50,
  BLUR_HEADER: 25
}

const CommonDiv = styled.div`
  text-align: center;
  font-size: 2vh;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  backdrop-filter: blur(${STYLE.BLUR}px));
  color: white;
`
export const BigNumber = styled(CommonDiv)`
  flex: ${props => props.flex};
  background: transparent;
  font-size: ${props => props.size ? `${props.size * 2}vh` : '4vh'};
  opacity: ${props => props.opacity ? `${props.opacity}` : 1};
  transition: 0.5s all;
`
export const TextSmall = styled(CommonDiv)`
  flex: ${props => props.flex};
  font-size: ${props => props.size ? `${props.size * 2}vh` : '2vh'};
`
export const TopHeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const TopTitle = styled(CommonDiv)`
  font-size: 1.6rem;
  font-weight: bold;
  padding-top: 6vh;
  padding-bottom: 3rem;
`
export const Header = styled(CommonDiv)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  /* margin-bottom: 0.05rem; */
  position: -webkit-sticky;
  position: sticky;
  /* top: 0px; */
  top: calc(15vh);
  /* background: blue; */
  /* color: lightgrey; */
  z-index: 5;
  /* backdrop-filter: blur(${STYLE.BLUR}px);
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px); */
`
export const Contents = styled(CommonDiv)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  backdrop-filter: blur(${STYLE.BLUR}px);
`
export const SingleColumnBox = styled.div`
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
export const GraphBox = styled.div`
  width: 48%;
  backdrop-filter: blur(${STYLE.BLUR}px);
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  border-radius: 20px;
  /* border: 1px solid white; */
  margin-bottom: 2vh;
`
export const Card = styled.div`
  width: 100%;
  &:after {
    padding-bottom: 100%;
    content: "";
    display: block;
    background-color: transparent;
    /* backdrop-filter: blur(${STYLE.BLUR}px);
    -webkit-backdrop-filter: blur(${STYLE.BLUR}px); */
  }
`
export const TitleContainer = styled.div`
  display: relative;
  position: sticky;
  top: 0;
  left: 50%;
  text-align: center;
  color: white;
  backdrop-filter: blur(50px);
  z-index: 20;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 15vh;
`
export const SummaryTextContainer = styled.div`
  opacity: ${props => props.hide ? 0 : 1};
  transition: 1s all;
`
export const Title = styled.div`
  opacity: ${props => props.hide ? 0 : 1};
  font-size: 6vw;
`
export const DummyText = styled(TextSmall)`
  /* height: ${props => props.showSummary && 0}; */
  transition: 1s height;
`