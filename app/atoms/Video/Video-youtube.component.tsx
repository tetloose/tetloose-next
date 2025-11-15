import { Iframe } from '@atoms/Iframe/Iframe.component'
import type { VideoEmbedProps } from './Video.types'

export const YouTube = ({
  modifiers = [],
  id,
  autoPlay,
  loop,
  muted,
  controls,
  ratio,
  size
}: VideoEmbedProps) => {
  if (!id) return null

  const base = `https://www.youtube.com/embed/${encodeURIComponent(String(id))}`
  const params = new URLSearchParams()
  const shouldAutoplay = !!autoPlay
  const effectiveMuted =
    typeof muted === 'boolean' ? muted : shouldAutoplay ? true : undefined

  if (shouldAutoplay) params.set('autoplay', '1')

  if (typeof controls === 'boolean')
    params.set('controls', controls ? '1' : '0')

  if (effectiveMuted) params.set('mute', '1')

  if (loop) {
    params.set('loop', '1')
    params.set('playlist', String(id))
  }

  if (shouldAutoplay) params.set('playsinline', '1')

  const src = `${base}${params.toString() ? `?${params.toString()}` : ''}`

  return (
    <Iframe
      modifiers={[...modifiers]}
      size={size}
      ratio={ratio}
      src={src}
      allow={'autoplay; encrypted-media; picture-in-picture; fullscreen'}
      allowFullScreen
      loading={'lazy'}
    />
  )
}
