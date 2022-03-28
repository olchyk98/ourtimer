import { useState, useEffect, useRef, useContext } from 'react'
import { ScreenContext } from '../../contexts'
import { CarouselImage } from './CarouselImage'
import { PathMenu } from '../PathMenu'

export function GalleryCarousel ({ lifeTime = 5e3 }: GalleryCarouselProps): React.ReactElement {
  const { galleryUrls } = useContext(ScreenContext)
  const [ imageIndex, setImageIndex ] = useState(0)
  const scrollIntervalId = useRef<NodeJS.Timer | null>(null)

  function startTimer (): void {
    const { current: intervalId } = scrollIntervalId

    if (intervalId) {
      clearInterval(intervalId)
    }

    scrollIntervalId.current = setInterval(() => {
      setImageIndex(
        (currentIndex) => (
          currentIndex >= galleryUrls.length - 1
            ? 0
            : currentIndex + 1
        )
      )

    }, lifeTime)
  }

  function scrollToImage (index: number): void {
    startTimer()
    setImageIndex(index)
  }

  useEffect(() => {
    scrollToImage(0)
  }, [ galleryUrls, lifeTime ])

  return (
    <div className="flex items-stretch relative sm:w-[400px] w-[300px] h-[200px]">
      <div className="w-full rounded-md shadow overflow-hidden">
        <CarouselImage
          url={ galleryUrls[imageIndex] }
        />
      </div>
      <div className="w-12 shrink-0 flex justify-center relative">
        <PathMenu
          itemsCount={ galleryUrls.length }
          onSelect={ scrollToImage }
          selectedIndex={ imageIndex }
        />
      </div>
    </div>
  )
}

export interface GalleryCarouselProps {
  lifeTime?: number
}
