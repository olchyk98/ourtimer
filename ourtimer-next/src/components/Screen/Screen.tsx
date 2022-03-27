import Image from 'next/image'
import { GalleryCarousel } from '../GalleryCarousel'
import { TimerContainer } from '../TimerContainer'

export const Screen = ({ startTime, logoUrl, galleryUrls }: ScreenProps): React.ReactElement => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between p-10">
      <div>
        <Image
          priority={true}
          src={logoUrl}
          height="80px"
          width="200px"
        />
      </div>
      <TimerContainer
        startTime={ startTime }
      />
      <GalleryCarousel
        photoUrls={ galleryUrls }
      />
    </div>
  )
}

interface ScreenProps {
  startTime: number
  logoUrl: string
  galleryUrls: string[]
}
