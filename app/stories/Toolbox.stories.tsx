import { IconLeaf, IconMicroscope } from '@tabler/icons';
import React from 'react';

import Toolbox from '../components/lists/Toolbox'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Toolbox',
  component: Toolbox,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Toolbox {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Toolbox',
   title: 'Toolbox',

   
};
