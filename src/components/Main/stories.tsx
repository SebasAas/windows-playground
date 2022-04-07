import Main from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Main',
  component: Main
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Basic = Template.bind({});
Basic.args = {};
