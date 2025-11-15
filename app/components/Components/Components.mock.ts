import type { Components } from './Components.types'

export const componentsMock: Components[] = [
  {
    layout: 'hero',
    title: {
      tag: 'h1',
      text: 'Hero',
      size: 'h1',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      textAlign: { default: 'center' },
      color: 'white'
    },
    image: {
      src: 'http://localhost:3000/api/media/example.jpg',
      width: 200,
      height: 150,
      alt: ''
    }
  },
  {
    layout: 'richText',
    richText:
      '<p style="text-align: center;">Saved by the Band are a Brighton-based function band for hire, delivering high-energy live performances for weddings, parties, corporate events and everything in between. Known for their tight musicianship and infectious stage presence, they bring a setlist packed with dancefloor-fillers – from timeless classics to modern chart-toppers.</p>\r\n<p style="text-align: center;">Whether it’s indie, pop, rock, soul or a bit of everything, Saved by the Band tailor their show to suit the crowd and keep the party going all night. With professional sound and lighting, and a slick, reliable setup, they take the stress out of live entertainment so you can focus on having a great time.</p>\r\n<p style="text-align: center;">Available for events across the South East and beyond, Saved by the Band are the perfect soundtrack to your next big night.</p>\r\n<p style="text-align: center;"><a class="primary" href="mailto:hi@sbtb.uk" target="_blank" rel="noopener">Get in contact now</a></p>'
  }
]
