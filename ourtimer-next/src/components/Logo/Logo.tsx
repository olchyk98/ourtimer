import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { scrollSwitch } from '../../animations'

export const Logo = ({ src, height = 80 }: LogoProps): React.ReactElement => (
  <AnimatePresence
    exitBeforeEnter={true}
    initial={false}>
    <motion.div
      key={src}
      variants={scrollSwitch}
      animate="enter"
      exit="exit"
      transition={{ type: 'keyframes', duration: .3 }}
    >
      <img
        style={{ height }}
        src={src}
      />
    </motion.div>
  </AnimatePresence>
)

export interface LogoProps {
  src: string
  height?: number
}
