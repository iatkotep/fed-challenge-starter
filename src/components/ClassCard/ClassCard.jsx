import React from 'react';
import CardImage from '../CardImage';
import { Card, CardContent, CardTitle, TrainerImageWrap } from './ui';

export const ClassCard = props => {
  const {name, title, meta, url} = props;

  return (
    <Card>
      <CardImage {...{type: 'thumb', name, width: 432, height: 246}} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <TrainerImageWrap>
          <CardImage {...{type: 'trainer', name, width: 28, height: 28}} />
        </TrainerImageWrap>
      </CardContent>

    </Card>
  )
}

export default ClassCard;