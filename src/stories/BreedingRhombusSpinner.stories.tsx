import { Meta, Story } from '@storybook/react/types-6-0';

import { BreedingRhombusSpinner } from '../components/BreedingRhombusSpinner';

import { EpicProps } from '../stories/typescript';

const BreedingRhombusSpinnerMeta: Meta = {
  title: 'Components/Breeding Rhombus Spinner',
  component: BreedingRhombusSpinner,
  argTypes: {
    color: { control: 'color' }
  },
};

// @ts-ignore
const Template: Story<EpicProps> = (args) => <BreedingRhombusSpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 400
};

export default BreedingRhombusSpinnerMeta
