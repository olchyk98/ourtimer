import { useState, useEffect } from 'react'
import { CarouselImage } from './CarouselImage'
import { CarouselPath } from './CarouselPath'

// TODO: Animations

export function GalleryCarousel ({ photoUrls, lifeTime = 5e3 }: GalleryCarouselProps): React.ReactElement {
  const [ imageIndex, setImageIndex ] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = imageIndex >= photoUrls.length - 1
        ? 0
        : imageIndex + 1

      setImageIndex(nextIndex)
    }, lifeTime)

    return () => clearInterval(intervalId)
  }, [ photoUrls, lifeTime ])

  return (
    <div className="flex items-stretch h-48 relative">
      <div className="w-full">
        <CarouselImage url={ photoUrls[imageIndex] } />
      </div>
      <div className="w-12 shrink-0 relative">
        <CarouselPath
          itemsCount={ photoUrls.length }
          onSelect={ (index) => setImageIndex(index) }
          selectedIndex={ imageIndex }
        />
      </div>
    </div>
  )
}

export interface GalleryCarouselProps {
  photoUrls: string[]
  lifeTime?: number
}