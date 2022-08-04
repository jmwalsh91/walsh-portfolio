import React from 'react';

import AboutGrid from '../components/layouts/AboutGrid'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'AboutGrid',
  component: AboutGrid,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <AboutGrid {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'AboutGrid',
};