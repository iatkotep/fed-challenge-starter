import React from 'react';
import * as M from '../App/mock';

import ClassCard from './ClassCard';

export default {
  title: 'ClassCard',
  component: ClassCard,
};

const Template = (args) => <ClassCard {...args} />;

export const Standard = Template.bind({});
Standard.args = M.classes[0];