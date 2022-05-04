import { times } from 'ramda'
import cx from 'classnames'
import { AnimateSharedLayout } from 'framer-motion'
import { PathMenuItem } from './PathMenuItem'

export const PathMenu = ({
  onSelect,
  selectedIndex,
  itemsCount,
  direction = 'vertical',
}: PathMenuProps) => (
  <div className={cx(
    'flex items-center',
    { ['flex-col gap-y-4']: direction === 'vertical' },
    { ['gap-x-2']: direction === 'horizontal' },
  )}>
    <AnimateSharedLayout>
      {
        times(
          (index) => (
            <PathMenuItem
              key={ index }
              selected={ selectedIndex === index }
              onClick={ () => onSelect(index) }
            />
          ),
          itemsCount,
        )
      }
    </AnimateSharedLayout>
  </div>
)

export interface PathMenuProps {
  onSelect(index: number): void
  selectedIndex: number
  itemsCount: number
  direction?: 'horizontal' | 'vertical'
}
