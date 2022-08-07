import { IconLeaf, IconMicroscope } from '@tabler/icons';
import React from 'react';

import Toolbox from '../components/lists/Toolbox';

export default {
  title: 'Toolbox',
  component: Toolbox,
};


const Template = (args: JSX.IntrinsicAttributes) => <Toolbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Toolbox',
   title: 'Toolbox'
};
