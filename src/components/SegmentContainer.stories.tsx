import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import SegmentContainer, { Props } from './SegmentContainer'

export default {
  title: 'common/SegmentContainer',
  component: SegmentContainer,
} as Meta

const Template: Story<Props> = (args) => <SegmentContainer {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'test',
  title: 'Test',
  children: <div>hello world</div>,
}
