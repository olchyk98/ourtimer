import { times } from 'ramda'
import { CarouselPathItem } from './CarouselPathItem'

export const CarouselPath = ({ onSelect, selectedIndex, itemsCount }: CarouselPathProps) => (
  <div className="flex flex-col items-center justify-between w-full h-full">
    {
      times(
        (index) => (
          <CarouselPathItem
            selected={ selectedIndex === index }
            onClick={ () => onSelect(index) }
          />
        ),
        itemsCount
      )
    }
  </div>
)

export interface CarouselPathProps {
  onSelect(index: number): void
  selectedIndex: number
  itemsCount: number
}