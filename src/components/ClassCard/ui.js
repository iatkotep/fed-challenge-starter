import styled, { css } from 'styled-components';
import iconDuration from './assets/icon-duration.svg';
import iconDistance from './assets/icon-distance.svg';

export const Card = styled.div`
  font-family: 'Open Sans', sans-serif;
  color: #2e3134;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 rgba(46, 49, 52, 0.4);
  overflow: hidden;
`

const cardContentGutter = 16;
const trainerImgHW = 28;
export const TrainerImageWrap = styled.div`
  height: ${trainerImgHW}px;
  width: ${trainerImgHW}px;
`



export const CardContent = styled.div`
  box-sizing: border-box;
  min-height: 116px;
  padding: ${cardContentGutter}px ${2*cardContentGutter + trainerImgHW}px ${cardContentGutter}px  ${cardContentGutter}px;
  position: relative;
  ${TrainerImageWrap} {
    position: absolute;
    top: ${cardContentGutter}px;
    right: ${cardContentGutter}px;
  }
`

export const CardTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.13;
  letter-spacing: 0.01875em;
`;




export const MetaInfo = styled.div`
  display: flex;
`

const cssMetaItemStyles = type => {

  let icon;
  switch (type) {
    case 'duration':
      icon = iconDuration;
      break;
    case 'distance':
      icon = iconDistance;
      break;
    default:
      // Do nothing
  }

  const iconHW = 30;
  const iconGutter = 5;
  return css`
    background: url(${icon}) left center no-repeat;
    background-size: ${iconHW}px ${iconHW}px;
    padding-left: ${iconHW + iconGutter}px;
    background-color: lightgreen;
  `
}
export const MetaItem = styled.span`
  ${({ type }) => cssMetaItemStyles(type)}
  flex: 0;
`;



