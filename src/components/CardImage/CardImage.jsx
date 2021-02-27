import React from "react";
import {AspectImage} from './ui';

export const CardImage = ({type, name, height, width}) => {
  const src = `/images/${name}-${type}.jpg`;
  console.log(src);
  return (
    <AspectImage {...{type, height, width, src}}>
      <img {...{src}} alt={name}/>
    </AspectImage>
  )
}
export default CardImage;