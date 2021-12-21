import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexWrap: 'wrap',
    
    '> *': {
      flexShrink: 0,
    },
  },
})
