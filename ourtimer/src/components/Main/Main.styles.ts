import { makeStyles } from '@material-ui/styles'

const containerPadding = 20

export const useStyles = makeStyles({
  container: {
    height: `calc(100% - ${containerPadding * 2}px)`,
    width: `calc(100% - ${containerPadding * 2}px)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: containerPadding,
    background: 'black',
  },
  logo: {
    height: '80px',
  },
  description: {
    maxWidth: '90%',
    color: 'rgba(255, 255, 255, .7)',
    textAlign: 'center',
    fontWeight: 'lighter',
  },
  timerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
