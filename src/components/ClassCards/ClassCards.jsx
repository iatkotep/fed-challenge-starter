import React, { useContext } from 'react';
import ClassCard from '../ClassCard';
import ClassesContext from '../App/hooks/ClassesContext';
import { CardList, CardItem } from './ui';



export const ClassCards = ({classes}) => {
  const { selectedClassIndeces } = useContext(ClassesContext);
  return (
    <CardList>
      {classes.map((classProps, i) => (
        <CardItem key={i}>
          <ClassCard {...classProps} classIdx={i} isSelected={selectedClassIndeces.includes(i)} />
        </CardItem>
      ))}
    </CardList>
  )
}

export default ClassCards;