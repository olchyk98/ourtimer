import { AnimatePresence, motion } from 'framer-motion'

export const CarouselImage = ({ url }: CarouselImageProps): React.ReactElement => (
  <AnimatePresence initial={ true } exitBeforeEnter={ true }>
    <motion.div key={ url } className="relative block">
      <motion.img
        key={ url }
        src={ url }
        className="rounded h-full w-full object-cover relative block"
        exit={{ opacity: 0 }}
        animate={{ opacity: [ 0, 1 ] }}
        transition={{ type: 'keyframes', duration: .3 }}
      />
    </motion.div>
  </AnimatePresence>
)

export interface CarouselImageProps {
  url: string
}
