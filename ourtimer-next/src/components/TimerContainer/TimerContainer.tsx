import Image from 'next/image'

interface TimerContainerProps {
  startTime: number
  logoUrl: string
  galleryUrls: string[]
}

export const TimerContainer = ({ startTime, logoUrl, galleryUrls }: TimerContainerProps): React.ReactElement => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <Image
        src={logoUrl}
        height="80px"
        width="200px"
      />
      <div></div>
      <div></div>
    </div>
  )
}
