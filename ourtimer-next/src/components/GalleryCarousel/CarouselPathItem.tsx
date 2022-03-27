import cx from 'classnames'

export const CarouselPathItem = ({ selected, onClick }: CarouselPathItemProps) => (
  <div
    onClick={ onClick }
    className={
      cx('h-2 w-2 rounded-full bg-neutral-500', {
        ['bg-white']: selected
      })
    }
  />
)

export interface CarouselPathItemProps {
  selected: boolean
  onClick(): void
}