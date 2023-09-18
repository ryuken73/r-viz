import styled from "styled-components";

const STYLE = {
  BLUR: 50
}

const CommonDiv = styled.div`
  text-align: center;
  font-size: 4vw;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  backdrop-filter: blur(${STYLE.BLUR}px));
  color: white;
`
export const BigNumber = styled(CommonDiv)`
  flex: ${props => props.flex};
  background: transparent;
  font-size: ${props => props.size ? `${props.size}vw` : '8vw'};
  opacity: ${props => props.opacity ? `${props.opacity}` : 1};
  transition: 0.5s all;
`
export const TextSmall = styled(CommonDiv)`
  flex: ${props => props.flex};
  font-size: ${props => props.size ? `${props.size * 4}vw` : '4vw'};
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
  padding-top: 3rem;
  padding-bottom: 3rem;
`
export const Header = styled(CommonDiv)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  margin-bottom: 0.05rem;
  position: -webkit-sticky;
  position: sticky;
  /* top: 0px; */
  top: calc(25vw);
  /* background: blue; */
  /* color: lightgrey; */
  z-index: 5;
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
  width: 45%;
`
export const Card = styled.div`
  width: 100%;
  &:after {
    padding-bottom: 100%;
    content: "";
    display: block;
    background-color: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`
export const TitleContainer = styled.div`
  position: sticky;
  top: 0;
  left: 50%;
  text-align: center;
  color: white;
  /* padding-top: 1rem; */
  /* padding-bottom: 1rem; */
  backdrop-filter: blur(50px);
  border: 1px solid white;
  z-index: 20;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 25vw;
`
export const SummaryTextContainer = styled.div`
  opacity: ${props => props.hide ? 0 : 1};
  transition: 1s all;
`
export const Title = styled.div`
  font-size: 2rem;
`
export const DummyText = styled(TextSmall)`
  height: ${props => props.showSummary && 0};
  transition: 1s height;
`