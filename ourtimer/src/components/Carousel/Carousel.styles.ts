import { makeStyles } from '@material-ui/styles'

const stepSize = 8
const transitionTime = 500

export const useStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
  },
  display: {
    width: '100%',
    height: '200px',
    position: 'relative',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    flexShrink: 0,
  },
  navigationStep: {
    height: stepSize,
    width: stepSize,
    transform: 'scale(.7)',
    background: 'gray',
    borderRadius: '50%',
    transition: `${transitionTime}ms`,
  },
  navigationStepContainer: {
    height: stepSize,
    width: stepSize,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  activeNavigationStep: {
    background: 'white',
    transform: 'scale(1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0,
    transition: `${transitionTime}ms`,
  },
  activeImage: {
    opacity: 1,
  },
})
