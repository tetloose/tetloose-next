import { Iframe } from './Iframe.component'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta: Meta<typeof Iframe> = {
  title: 'Atoms/Iframe',
  component: Iframe,
  parameters: {
    design: {
      type: 'figma',
      url: ''
    },
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Iframe>

export const YouTube: Story = {
  args: {
    src: 'https://www.youtube.com/embed/mlJp-zBlEuA?si=szaoBH71pyndoNv6',
    title: 'YouTube Video Player',
    width: 1920,
    height: 1080,
    ratio: {
      default: '16x9'
    },
    size: {
      default: 'cover'
    },
    allow:
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    allowFullScreen: true,
    loading: 'lazy'
  }
}

export const Vimeo: Story = {
  args: {
    src: 'https://player.vimeo.com/video/76979871?title=0&byline=0&portrait=0',
    title: 'Vimeo Video Player',
    width: 1920,
    height: 1080,
    ratio: {
      default: '16x9'
    },
    size: {
      default: 'cover'
    },
    allow: 'autoplay; fullscreen; picture-in-picture',
    allowFullScreen: true,
    loading: 'lazy'
  }
}

export const GoogleMaps: Story = {
  args: {
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316a0d0c91%3A0x549e56b8b5c8c5c5!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
    title: 'Google Maps',
    width: 1600,
    height: 1200,
    ratio: {
      default: '4x3',
      med: '16x9'
    },
    size: {
      default: 'cover'
    },
    loading: 'lazy',
    allowFullScreen: true
  }
}

export const Spotify: Story = {
  args: {
    src: 'https://open.spotify.com/embed/track/2vTt1dNChhPKMjmSd4l86d?utm_source=generator',
    title: 'Spotify Player',
    width: 600,
    height: 600,
    ratio: {
      default: '1x1'
    },
    allow: 'encrypted-media',
    loading: 'lazy'
  }
}
