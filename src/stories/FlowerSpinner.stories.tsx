import { Meta, Story } from '@storybook/react/types-6-0';

import { FlowerSpinner } from '../components/FlowerSpinner';

import { EpicProps } from '../stories/typescript';

const FlowerSpinnerMeta: Meta = {
  title: 'Components/Flower Spinner',
  component: FlowerSpinner,
  argTypes: {
    color: { control: 'color' }
  },
};

// @ts-ignore
const Template: Story<EpicProps> = (args) => <FlowerSpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 400
};

export default FlowerSpinnerMeta
