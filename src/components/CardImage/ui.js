import styled, { css } from 'styled-components';

export const AspectImage = styled.div`
  img {display: none;}
    
  ${({height, width, src, type}) => css`
    background: url(${src}) center center no-repeat;
    background-size: contain;
    &:before {
      content: '';
      display: block;
      padding-top: ${100* height/width}%;
    }
  `}}
`