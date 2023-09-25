import styled from "styled-components";

const STYLE = {
  BLUR: 50,
  BLUR_HEADER: 25
}

const CommonDiv = styled.div`
  text-align: center;
  border-radius: 5px;
  font-size: ${props => props.size ? `calc((15px + 0.390625vw)*${props.size})` : `calc(15px + 0.390625vw)`};
  color: white;
`
export const BigNumber = styled(CommonDiv)`
  flex: ${props => props.flex};
  background: transparent;
  opacity: ${props => props.opacity ? `${props.opacity}` : 1};
  transition: 0.5s all;
`
export const TextNormal = styled(CommonDiv)`
  flex: ${props => props.flex};
`
export const TopHeroContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Header = styled((props) => (<CommonDiv size={0.9} {...props} />))`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  position: -webkit-sticky;
  position: sticky;
  top: calc(15vh);
  color: lightgrey;
  z-index: 5;
  text-align: left;
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  backdrop-filter: blur(${STYLE.BLUR}px);
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
  backdrop-filter: blur(${STYLE.BLUR}px);
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  border-radius: 20px;
  /* border: 1px solid white; */
  margin-bottom: 2vh;
  padding: 1vh;
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
export const CardInStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`
export const CardHeader = styled(CommonDiv)`
  text-align: left;
`
export const CardFooter = styled((props) => (<CommonDiv size={0.9} {...props} />))`
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