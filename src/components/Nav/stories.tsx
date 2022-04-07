import Menu from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Menu',
  component: Menu
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = () => <Menu />;

export const Basic = Template.bind({});
Basic.args = {};
