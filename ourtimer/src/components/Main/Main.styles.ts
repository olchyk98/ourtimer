import { makeStyles } from '@material-ui/styles'

const containerPadding = 20

export const useStyles = makeStyles({
  container: {
    height: `calc(100vh - ${containerPadding * 2}px)`,
    width: `calc(100vw - ${containerPadding * 2}px)`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: containerPadding,
    background: 'black',
  },
  logo: {
    width: '100%',
    maxWidth: '300px',
  },
})
