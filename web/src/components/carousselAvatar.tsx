'use client'

import Autoplay from 'embla-carousel-autoplay'

import { useRef, useState } from 'react'
import maskClassic from '../assets/masks/mask-classic.jpg'
import mask1 from '../assets/masks/mask1.png'
import mask6 from '../assets/masks/mask6.png'
import mask7 from '../assets/masks/mask7.png'
import { Carousel, CarouselContent } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { Skeleton } from './ui/skeleton'

const images = [maskClassic, mask1, mask6, mask7]

export function CarouselAvatar() {
  const [imageLoaded, setImageLoaded] = useState(images.length)
  const plugin = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false, playOnInit: true }),
  )

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        plugins={[plugin.current]}
        className="w-full size-42"
      >
        <div className=" border-4 border-gray-700 rounded-md">
          <CarouselContent>
            {imageLoaded > 0 && (
              <Skeleton className="size-42 flex items-center justify-center bg-gray-800 rounded-none" />
            )}
            {images.map((image, index) => (
              <img
                onLoad={() => setImageLoaded((prev) => prev - 1)}
                key={index}
                className={cn(
                  imageLoaded > 0
                    ? 'size-0 opacity-0'
                    : 'rounded-xs size-42 brightness-90',
                )}
                src={image}
              />
            ))}
          </CarouselContent>
        </div>
      </Carousel>
    </>
  )
}
