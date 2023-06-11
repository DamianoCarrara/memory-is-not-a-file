import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  wrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      flexFlow: 'row nowrap',
      alignItems: 'center',
    },
  },

  title: {
    fontWeight: t.fontWeightBold,
    fontSize: t.fontSize22,
    textTransform: 'uppercase',
    padding: ['1.2rem', 0],

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      fontSize: t.fontSize24,
      padding: ['1.4rem', 0],
    },

    [`@media (min-width: ${t.mediaBpUpLg})`]: {
      fontSize: t.fontSize28,
      padding: ['2rem', 0],
    },
  },

  additionalContent: {
    flex: 1,
  },
}))
