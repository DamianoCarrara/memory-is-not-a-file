import { createUseStyles } from 'react-jss'
import { theme } from '../../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  container: {
    position: 'relative',
    zIndex: 10,

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      paddingLeft: '.8rem',
      marginLeft: '1.2rem',

      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: t.hairLineWidth,
        background: t.gray01,
      },
    },

    [`@media (min-width: ${t.mediaBpUpLg})`]: {
      width: '30rem',
    },
  },
}))
