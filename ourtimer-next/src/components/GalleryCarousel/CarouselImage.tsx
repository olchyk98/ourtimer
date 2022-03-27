import Image from 'next/image'

export const CarouselImage = ({ url }: CarouselImageProps): React.ReactElement => (
  <div className="overflow-hidden rounded-sm w-[300px] h-[200px]">
    <img
      className="h-full w-full object-cover"
      src={ url }
    />
  </div>
)

export interface CarouselImageProps {
  url: string
}