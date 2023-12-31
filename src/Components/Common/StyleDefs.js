import styled from "styled-components";

const STYLE = {
  BLUR: 50,
  BLUR_HEADER: 25
}

const COLOR_DOWN_DROP = '#ffffff7d';
const COLOR_DOWN_DROP_DARK = '#000111';
// const COLOR_DOWN_DROP_DARK = '#160e23';
const COLOR_DOWN_DROP_BLACK = '#4c3434e0';

const CommonDiv = styled.div`
  text-align: center;
  border-radius: 5px;
  font-size: ${props => props.size ? `calc((15px + 0.390625vw)*${props.size})` : `calc(15px + 0.390625vw)`};
  color: white;
  /* * big number not change between swipe in ios safari if below removed! */
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
  /* */
`
export const BigNumber = styled(CommonDiv)`
  flex: ${props => props.flex};
  background: transparent;
  opacity: ${props => props.opacity ? `${props.opacity}` : 1};
  transition: 0.5s all;
  color: ${props => props.color};
`
export const TextNormal = styled(CommonDiv)`
  color: ${props => props.color};
  flex: ${props => props.flex};
`
export const TopHeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Header = styled((props) => (<CommonDiv size={0.9} {...props} />))`
  position: ${props => !props.noBackground && 'sticky'};
  position: ${props => !props.noBackground && '-webkit-sticky'};

  top: calc(15vh + 2rem);

  /* color: lightgrey; */
  color: darkcyan;
  /* opacity: 0.6; */
  opacity: 1;
  z-index: 5;
  text-align: left;
  margin: -1vh;
  padding: 1vh;

  background-color: ${props => !props.noBackground && 'rgb(18, 18, 18)'};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  backdrop-filter: blur(${STYLE.BLUR}px); */
`
export const Contents = styled(CommonDiv)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  backdrop-filter: blur(${STYLE.BLUR}px);
`
export const SingleColumnBox = styled.div`
  visibility: ${props => props.hide && 'hidden'};
`;

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`
export const GraphBoxOld = styled.div`
  /* width: 45%; */
  /* backdrop-filter: blur(${STYLE.BLUR}px);
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px); */
  border-radius: 20px;
  /* border: 1px solid white; */
  /* margin-bottom: 2vh; */
  padding: 1vh;
  background-color: ${COLOR_DOWN_DROP_DARK};
  /* box-shadow: 0 10px 15px rgb(0 0 0 / 20%); */
  box-shadow: 
    rgba(255, 0, 255, 0.3) 0px 3px 3px -2px, 
    rgba(255, 0, 255, 0.14) 0px 3px 4px 0px, 
    rgba(255, 0, 255, 0.12) 0px 1px 8px 0px;
  backdrop-filter: blur(33px);
  background-blend-mode: overlay;
`
export const GraphBox = styled.div`
  /* width: 45%; */
  /* backdrop-filter: blur(${STYLE.BLUR}px); */
  /* -webkit-backdrop-filter: blur(${STYLE.BLUR}px); */

  border-radius: 20px;
  background-color: rgb(18, 18, 18);

  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px; */
  /* background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)); */

  /* border: 1px solid white; */
  /* margin-bottom: 2vh; */

  padding: 1vh;
  
  /* backdrop-filter: blur(1px); */
  background-blend-mode: overlay;
`
export const LastGraphBox = styled.div`
  /* width: 45%; */
`
export const Card = styled.div`
  position: relative;
  width: 100%;
  color: white;
  &:after {
    padding-bottom: 100%;
    content: "";
    display: block;
    background-color: transparent;
  }
`
export const LastCard = styled.div`
  position: relative;
  width: 100%;
  color: white;
  &:after {
    padding-bottom: 50%;
    content: "";
    display: block;
    background-color: transparent;
  }
`
export const CardInStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
export const CardHeader = styled(CommonDiv)`
  /* position: absolute; */
  visibility: ${props => props.visibility};
  /* backdrop-filter: blur(50px); */
  text-align: left;
`
export const CardFooter = styled((props) => (<CommonDiv size={0.9} {...props} />))`
  /* position: absolute; */
  visibility: ${props => props.visibility};
  /* backdrop-filter: blur(50px); */
  bottom: 0px;
  text-align: left;
  margin-top: auto;
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
  /* transform: ${props => props.openDrawer && 'scale(0.9)'}; */
  /* transition: all 0.5s; */
`
export const SummaryTextContainer = styled.div`
  opacity: ${props => props.hide ? 0 : 1};
  transition: 1s all;
  display: flex;
`
export const Title = styled(CommonDiv)`
  opacity: ${props => props.hide ? 0 : 1};
`
export const DummyText = styled(TextNormal)`
  /* height: ${props => props.showSummary && 0}; */
  transition: 1s height;
`

export const Sep = styled(CommonDiv)`
  margin-left: 4px;
  margin-right: 4px;
`