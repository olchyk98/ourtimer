import { Variants } from 'framer-motion'

export const scrollSwitch: Variants = {
  enter: { y: [-20, 0], opacity: [0, 1] },
  exit: { y: [0, 20], opacity: [1, 0] },
}
