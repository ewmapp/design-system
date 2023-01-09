import { AvatarStory, AvatarStoryProps } from '@ewmapp/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Avatar',
  component: AvatarStory,
  args: {
    src: `https://github.com/diego3g.png`,
    alt: `Name`,
    size: 'lg'
  }
} as Meta<AvatarStoryProps>

export const Primary: StoryObj<AvatarStoryProps> = {}
