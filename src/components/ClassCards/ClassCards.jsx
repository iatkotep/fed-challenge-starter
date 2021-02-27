import React from 'react';
import ClassCard from '../ClassCard';
import { CardList, CardItem } from './ui';

export const ClassCards = ({classes, selectedClassIndeces}) => {
  console.log(classes);
  return (
    <CardList>
      {classes.map((classProps, i) => <CardItem key={i}><ClassCard {...classProps} /></CardItem>)}
    </CardList>
  )
}

export default ClassCards;