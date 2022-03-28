import { AnimatePresence, motion } from 'framer-motion'

export const CarouselImage = ({ url }: CarouselImageProps): React.ReactElement => (
  <AnimatePresence initial={ true } exitBeforeEnter={ true }>
    <motion.img
      key={ url }
      src={ url }
      className="rounded h-full w-full object-cover"
      exit={{ opacity: 0 }}
      animate={{ opacity: [ 0, 1 ] }}
      transition={{ type: 'keyframes', duration: .3 }}
    />
  </AnimatePresence>
)

export interface CarouselImageProps {
  url: string
}
