import styled from "styled-components";

const STYLE = {
  BLUR: 50
}

const CommonDiv = styled.div`
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  -webkit-backdrop-filter: blur(${STYLE.BLUR}px);
  backdrop-filter: blur(${STYLE.BLUR}px));
  color: white;
`
export const BigNumber = styled(CommonDiv)`
  flex: ${props => props.flex};
  background: transparent;
  font-size: ${props => props.size ? `${props.size}rem` : '2rem'};
  opacity: ${props => props.opacity ? `${props.opacity}` : 1};
  transition: 1s all;
`
export const TextSmall = styled(CommonDiv)`
  flex: ${props => props.flex};
  font-size: ${props => props.size ? `${props.size}rem` : '1rem'};
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
  top: 25vw;
  /* background: blue; */
  /* color: lightgrey; */
  z-index: 5;
`
export const Contents = styled(CommonDiv)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  backdrop-filter: blur(${STYLE.BLUR}px);
`