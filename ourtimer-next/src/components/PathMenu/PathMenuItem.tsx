import { motion } from 'framer-motion'
import cx from 'classnames'

export const PathMenuItem = ({ selected, onClick }: PathMenuItemProps) => (
  <div
    onClick={ onClick }
    className={cx('h-2 w-2 rounded-full bg-neutral-500 cursor-pointer transition duration-500', {
      ['bg-transparent']: selected,
    })}
  >
    {
      selected && (
        <motion.div
          initial={ false }
          layoutId="carouselStatus"
          className="w-full h-full rounded-full bg-white"
          animate={{ opacity: [ 0, 1 ], scale: [ 1.2, 1 ] }}
          exit={{ opacity: 0, scale: 1 }}
        />
      )
    }
  </div>
)

export interface PathMenuItemProps {
  selected: boolean
  onClick(): void
}
