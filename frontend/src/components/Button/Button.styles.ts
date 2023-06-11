import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  button: {
    position: 'relative',
    textTransform: 'uppercase',
    fontWeight: t.fontWeightBold,
    fontSize: t.fontSize16,
    color: t.gray01,
    background: t.gray03,
    border: 0,
    padding: ['.75rem', '2rem'],
    borderRadius: '.25rem',
    cursor: 'pointer',
    transition:
      'box-shadow 300ms ease, color 300ms ease, background-color 300ms ease',

    '&:hover': {
      backgroundColor: t.primary,
    },

    '&:active:focus': {
      top: t.onePixel,
    },
  },

  disabled: {
    opacity: 0.5,

    '&:hover': {
      backgroundColor: t.gray03,
    },

    '&:active:focus': {
      top: 0,
    },
  },

  primary: {
    color: t.gray01,
    background: t.primary,

    '@media (prefers-color-scheme: dark)': {
      color: t.gray01,
      background: t.primary,
    },

    '&:hover': {
      color: t.black,
      backgroundColor: t.primaryDark,
    },

    '& $disabled:hover': {
      backgroundColor: t.primary,
    },
  },
}))
