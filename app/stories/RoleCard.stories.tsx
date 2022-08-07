import { IconLeaf, IconMicroscope } from '@tabler/icons';
import React from 'react';

import RoleCard from '../components/cards/RoleCard'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'RoleCard',
  component: RoleCard,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <RoleCard {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'RoleCard',
   title: 'React Developer',
   description: 'Implements modern React architecture and best practices while maintaining a familiarity with legacy methodologies. Translates pre-16.8 codebases into fresh, concurrent-mode enabled @latest.',
   icon: <IconLeaf size={28} stroke={1.5} />,
   gradient: { deg: 0, from: 'cyan', to: 'pink' }

   
};

export const Secondary = Template.bind({})
Secondary.args = {
    primary: true,
    label: 'RoleCard',
    title: 'UI Engineer',
    description: 'Approaches application architecture and UI design with empathy and knowledge of assistive technologies and W3C and WAI-ARIA standards. Delivers a rad experience to users of all stripes.',
    icon: <IconMicroscope size={28} stroke={1.5} />,
    gradient: { deg: 17, from: 'pink', to: 'purple' }
 
    
 };