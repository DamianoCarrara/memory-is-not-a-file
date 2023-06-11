import { createUseStyles } from 'react-jss'
import { theme } from '../../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  listMessage: {
    textAlign: 'center',
    padding: t.gridGutter,
    backgroundColor: t.gray04,

    '@media (prefers-color-scheme: dark)': {
      backgroundColor: t.gray01,
    },
  },
}))
