import styled, { css } from 'styled-components';
import iconDuration from './assets/icon-duration.svg';
import iconDistance from './assets/icon-distance.svg';


const selectTransitionTime = 0.25;

export const Card = styled.div`
  transition: box-shadow ${selectTransitionTime}s;
  
  font-family: 'Open Sans', sans-serif;
  color: #2e3134;
  border-radius: 4px;
  box-shadow: ${({isSelected}) => isSelected
    ? '0 7px 12px 0 rgba(46, 49, 52, 0.3)'
    : '0 1px 2px 0 rgba(46, 49, 52, 0.4)'
  };
  overflow: hidden;
  cursor: pointer;
`

const cardContentGutter = 16;
const trainerImgHW = 28;
export const TrainerImageWrap = styled.div`
  height: ${trainerImgHW}px;
  width: ${trainerImgHW}px;
`

export const WorkoutsDisplay = styled.div`
  background-color: rgba(0, 12, 40, 0.54);
  color: #fff;
  display: flex;
  font-size: 10px;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  width: 112px;
`

const cssWorkoutRowStyles = type => {
  switch (type) {
    case 'count':
      return css`
        font-size: 24px;
        font-weight: 800;
      `;
    case 'icon':
      return css`
        width: 24px;
      `;
    default:
      return css``;
  }
}
export const WorkoutRow = styled.div`
  ${({type}) => cssWorkoutRowStyles(type)};
  padding: 3px;

`
export const ThumbWrap = styled.div`
  position: relative;
  ${WorkoutsDisplay} {
    position: absolute;
    top: 0; bottom: 0; right: 0;
    
  }
`

export const ClassLink = styled.a`
  transition: opacity ${selectTransitionTime}s;
  ${({isSelected}) => isSelected 
      ? css`
        opacity: 1;
        pointer-events: all;
      ` 
      : css`
        opacity: 0;
        pointer-events: none;
      `
  }
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.14;
  letter-spacing: 0.035714286em;
  color: #0069d2;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
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
  ${ClassLink} {
    position: absolute;
    bottom: ${cardContentGutter}px;
    left: ${cardContentGutter}px;
  }
`

export const CardTitle = styled.h2`
  margin: 0 0 8px;
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

  const iconHW = 12;
  const iconGutter = 4;
  return css`
    background: url(${icon}) left center no-repeat;
    background-size: ${iconHW}px ${iconHW}px;
    padding-left: ${iconHW + iconGutter}px;
  `
}
export const MetaItem = styled.span`
  ${({ type }) => cssMetaItemStyles(type)}
  flex: 0;
  font-size: 10px;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.03em;
  white-space: nowrap;
  & + & {
    margin-left: 6px;
  }
`;

