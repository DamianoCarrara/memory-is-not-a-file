import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  pageTemplate: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
  },

  main: {
    flex: 1,
  },

  yellowBackground: {
    color: t.black,
    background: t.primary,
  },
}))
