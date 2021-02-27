import styled, { css } from 'styled-components';

export const AspectImage = styled.div`
  img {display: none;}
    
  ${({height, width, src, type}) => css`
    background: url(${src}) center center no-repeat;
    background-size: contain;
    width: 100%;
    &:before {
      content: '';
      display: block;
      padding-top: ${100* height/width}%;
    }
  `}}
`