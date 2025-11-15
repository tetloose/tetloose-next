import { Video } from './Video.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Video.Html5> = {
  title: 'Atoms/Video',
  component: Video.Html5,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type StoryHtml5 = StoryObj<typeof Video.Html5>
type StoryYouTube = StoryObj<typeof Video.YouTube>
type StoryVimeo = StoryObj<typeof Video.YouTube>

export const Html5Video: StoryHtml5 = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    width: 1920,
    height: 1080,
    ratio: {
      default: '16x9'
    },
    size: {
      default: 'cover'
    },
    controls: true,
    preload: 'metadata',
    playsInline: true
  }
}

export const Html5VideoAutoplay: StoryHtml5 = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    width: 1920,
    height: 1080,
    ratio: {
      default: '16x9'
    },
    size: {
      default: 'cover'
    },
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    controls: false
  }
}

export const Html5VideoWithPoster: StoryHtml5 = {
  args: {
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    poster:
      'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217',
    width: 1920,
    height: 1080,
    ratio: {
      default: '16x9'
    },
    size: {
      default: 'cover'
    },
    controls: true,
    preload: 'none',
    playsInline: true
  }
}

export const YouTubeVideo: StoryYouTube = {
  render: (args) => <Video.YouTube {...args} />,
  args: {
    id: 'mlJp-zBlEuA',
    ratio: { default: '16x9' },
    size: { default: 'cover' }
  }
}

export const YouTubeVideoAutoplay: StoryYouTube = {
  render: (args) => <Video.YouTube {...args} />,
  args: {
    id: 'mlJp-zBlEuA',
    ratio: { default: '16x9' },
    size: { default: 'cover' },
    autoPlay: true
  }
}

export const VimeoVideo: StoryVimeo = {
  render: (args) => <Video.Vimeo {...args} />,
  args: {
    id: '76979871',
    ratio: { default: '16x9' },
    size: { default: 'cover' }
  }
}

export const VimeoVideoAutoplay: StoryVimeo = {
  render: (args) => <Video.Vimeo {...args} />,
  args: {
    id: '76979871',
    ratio: { default: '16x9' },
    size: { default: 'cover' },
    autoPlay: true
  }
}
