import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
 
  igig: {
    width: '30px',
    position: 'absolute',
    marginBottom: '-8px',
    bottom: '25px',
    right: '25px',
  },

  imgimg: {
    maxWidth: '100%',
    display: 'block',
    marginTop: '10px',
  },

}))
