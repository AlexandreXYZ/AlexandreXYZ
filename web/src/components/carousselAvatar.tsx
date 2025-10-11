'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import maskClassic from '../assets/masks/mask-classic.jpg'
import mask1 from '../assets/masks/mask1.png'
import mask6 from '../assets/masks/mask6.png'
import mask7 from '../assets/masks/mask7.png'
import { Carousel, CarouselContent } from '@/components/ui/carousel'

const images = [maskClassic, mask1, mask6, mask7]

export function CarouselAvatar() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  )

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[plugin.current]}
      className="w-full size-42"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-l-md  size-42 min-w-42 bg-contain bg-no-repeat bg-center border-gray-500 brightness-80"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </CarouselContent>
    </Carousel>
  )
}
