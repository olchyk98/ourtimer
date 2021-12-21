import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  },
  value: {
    fontSize: '4rem',
    fontWeight: 'bold',
    margin: 0,
    textStroke: '2px white',
    color: 'transparent',
  },
  label: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, .7)',
    fontWeight: 'lighter',
  },
})
