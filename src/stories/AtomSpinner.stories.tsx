import { Meta, Story } from '@storybook/react/types-6-0';

import { AtomSpinner } from '../components/AtomSpinner';

import { EpicProps } from '../stories/typescript';

const AtomSpinnerMeta: Meta = {
  title: 'Components/Atom Spinner',
  component: AtomSpinner,
  argTypes: {
    color: { control: 'color' }
  },
};

// @ts-ignore
const Template: Story<EpicProps> = (args) => <AtomSpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 400
};

export default AtomSpinnerMeta
