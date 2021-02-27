import styled from 'styled-components';
const cardGutter = 24;
const idealCardWidth = 288;

const width2Col = 2 * idealCardWidth + 2 * cardGutter;
const width3Col = 3 * idealCardWidth + 3 * cardGutter;
const width4Col = 4 * idealCardWidth + 4 * cardGutter;


export const CardList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: ${cardGutter/2}px;
  display: flex;
  flex-wrap: wrap;
  max-width: ${width4Col}px;
`
export const CardItem = styled.li`
  box-sizing: border-box;
  padding: ${cardGutter/2}px;
  flex: 0 0 100%;
  @media screen and (min-width: ${cardGutter + width2Col}px) {
    flex: 0 0 50%;
  };
  @media screen and (min-width: ${cardGutter + width3Col}px) {
    flex: 0 0 33.3333333333%;
  };
  @media screen and (min-width: ${cardGutter + width4Col}px) {
    flex: 0 0 25%;
  };
`
