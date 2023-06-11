import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  container: {
    position: 'relative',
    margin: [0, t.gridGutter],

    [`@media (min-width: ${t.mediaBpUpXXXl})`]: {
      margin: [0, 'auto'],
      width: '97.5rem', // 1560px
    },
  },

  fullWidth: {
    [`@media (min-width: ${t.mediaBpUpXXXl})`]: {
      margin: [0, t.gridGutter],
      width: 'auto',
    },
  },
}))
