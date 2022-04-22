import { Meta, Story } from '@storybook/react/types-6-0';

import { FingerprintSpinner } from '../components/FingerprintSpinner';

import { EpicProps } from '../stories/typescript';

const FingerprintSpinnerMeta: Meta = {
  title: 'Components/Fingerprint Spinner',
  component: FingerprintSpinner,
  argTypes: {
    color: { control: 'color' }
  },
};

// @ts-ignore
const Template: Story<EpicProps> = (args) => <FingerprintSpinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 400
};

export default FingerprintSpinnerMeta
