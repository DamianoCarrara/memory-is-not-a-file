import { createUseStyles } from 'react-jss'
import { theme } from '../../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  photo: {
    position: 'relative',
    display: 'block',
    marginBottom: '.5rem',
    background: t.gray03,

    '& > span': {
      display: 'block !important',
    },

    '&:before': {
      content: '""',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      opacity: 0,
      transition: 'opacity 200ms ease',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 1,
    },

    '&:hover:before': {
      opacity: 1,
    },
  },

  sellingIcon: {
    position: 'absolute',
    top: '.7rem',
    right: '.7rem',
    zIndex: 2,
  },
}))
