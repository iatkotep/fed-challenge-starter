import React, { useContext } from 'react';
import iconPlaylist from './assets/icon-playlist.svg';
import CardImage from '../CardImage';
import * as CardImageUI from '../CardImage/ui';
import { Card, ThumbWrap, WorkoutsDisplay, WorkoutRow, CardContent, CardTitle, MetaInfo, MetaItem, TrainerImageWrap, ClassLink } from './ui';
import ClassesContext from '../App/hooks/ClassesContext';
export const ClassCard = props => {
  const {toggleClassSelection} = useContext(ClassesContext);
  const {name, title, workouts, meta, url, classIdx, isSelected = false} = props;

  return (
    <Card {...{isSelected, onClick: () => toggleClassSelection(classIdx)}}>
      <ThumbWrap>
        <CardImage {...{type: 'thumb', name, width: 432, height: 246}} />
        {workouts && (
        <WorkoutsDisplay>
          <WorkoutRow type={'count'}>{workouts.length}</WorkoutRow>
          <WorkoutRow type={'text'}>Workouts</WorkoutRow>
          <WorkoutRow type={'icon'}><CardImageUI.AspectImage width={24} height={24} src={iconPlaylist}></CardImageUI.AspectImage></WorkoutRow>
        </WorkoutsDisplay>
      )}
      </ThumbWrap>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        {meta && (
          <MetaInfo>
            {meta.map(({type, value}, i) => <MetaItem {...{key: i, type}}>{value}</MetaItem>)}
          </MetaInfo>
        )}
        <ClassLink {...{isSelected, href: url}}>View Details</ClassLink>
        <TrainerImageWrap>
          <CardImage {...{type: 'trainer', name, width: 28, height: 28}} />
        </TrainerImageWrap>
      </CardContent>

    </Card>
  )
}

export default ClassCard;