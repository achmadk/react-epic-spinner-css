import { Meta, Story } from '@storybook/react/types-6-0';

import { CirclesToRhombusesSpinner } from '../components/CirclesToRhombusesSpinner';

import { EpicProps } from './typescript';

const CirclesToRhombusesSpinnerMeta: Meta = {
  title: 'Components/Circles To Rhombuses Spinner',
  component: CirclesToRhombusesSpinner,
  argTypes: {
    color: { control: 'color' }
  },
};

// @ts-ignore
const Template: Story<EpicProps> = (args) => <CirclesToRhombusesSpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 80
};

export default CirclesToRhombusesSpinnerMeta
