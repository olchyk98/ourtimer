import { memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TextLabel } from '../TextLabel'
import { scrollSwitch } from '../../animations'

export const Counter = memo(
  ({ value, label, animationKey }: CounterProps) => (
    <AnimatePresence initial={false} exitBeforeEnter={true}>
      <motion.div
        key={animationKey}
        variants={scrollSwitch}
        transition={{ type: 'keyframes', duration: .2 }}
        animate={{ opacity: [ 0, 1 ] }}
        exit="exit"
        className="space-y-5 flex-col flex items-center">
          <span className="text-white text-6xl font-semibold">{enforceTwoDigits(value)}</span>
          <TextLabel>{label}</TextLabel>
      </motion.div>
    </AnimatePresence>
  )
)

const enforceTwoDigits = (value: number): string => (
  value
    .toString()
    .padStart(2, '0')
)

export interface CounterProps {
  value: number
  label: string
  animationKey: string
}
