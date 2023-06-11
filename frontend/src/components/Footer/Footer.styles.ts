import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  footer: {
    padding: ['1rem', 0],
    fontSize: t.fontSize15,

    '& a': {
      color: t.baseTextColor,
      textDecoration: 'none',

      '@media (prefers-color-scheme: dark)': {
        color: t.white,
      },
    },

    '& a:hover': {
      color: t.linkColor,
      textDecoration: 'none',
    },
  },

  yellowBackground: {
    '& a': {
      color: t.black,
      textDecoration: 'none',
    },

    '& a:hover': {
      color: t.primaryDark,
      textDecoration: 'none',
    },
  },

  item: {
    position: 'relative',
    marginLeft: '.5rem',
    paddingLeft: '.5rem',
    whiteSpace: 'nowrap',

    '&:before': {
      content: '"|"',
      position: 'absolute',
      top: 0,
      left: 0,
    },

    '&:first-of-type': {
      marginLeft: 0,
      paddingLeft: 0,
    },

    '&:first-of-type:before': {
      content: "''",
    },
  },
}))
