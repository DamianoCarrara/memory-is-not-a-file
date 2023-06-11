import { createUseStyles } from 'react-jss'
import { theme } from '../../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: `${t.hairLineWidth} solid ${t.gray03}`,
    padding: ['.8rem', 0],
    fontSize: theme.fontSize18,
    minHeight: '2.5rem',

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: ['.4rem', 0],
    },
  },

  head: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    marginBottom: '.3rem',

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      marginBottom: 0,
    },
  },

  secondary: {
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    paddingRight: '0.9rem',
  },

  label: {
    flex: 1,
  },

  price: {
    fontWeight: t.fontWeightBold,
    whiteSpace: 'nowrap',
    flex: 1,

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      paddingLeft: '0.9rem',
      flex: 0,
    },
  },

  field: {
    marginLeft: '1rem',
    display: 'flex',
    alignItems: 'center',
  },

  input: {
    width: '2rem',
    height: '1.6rem',
    textAlign: 'center',
    border: 0,
    backgroundColor: t.gray03,
    '-moz-appearance': 'textfield',

    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
    },

    '&:focus, &:active:focus': {
      outline: 0,
    },

    '@media (prefers-color-scheme: dark)': {
      background: t.gray01,
    },
  },

  button: {
    position: 'relative',
    textTransform: 'uppercase',
    fontWeight: t.fontWeightBold,
    fontSize: t.fontSize16,
    color: t.gray01,
    background: t.gray03,
    border: 0,
    padding: 0,
    height: '1.6rem',
    width: '1.5rem',
    borderRadius: '.25rem',
    lineHeight: 1,
    cursor: 'pointer',
    transition: 'background-color 300ms ease',

    '&:hover': {
      backgroundColor: t.primary,
    },

    '&:active:focus': {
      top: t.onePixel,
    },

    '@media (prefers-color-scheme: dark)': {
      background: t.gray01,
      color: t.white,
    },
  },

  disabled: {
    color: t.gray02,

    '&:hover': {
      backgroundColor: t.gray03,
    },

    '&:active:focus': {
      top: 0,
    },
  },

  decreaseButton: {
    borderRadius: ['.25rem', 0, 0, '.25rem'],
  },

  increaseButton: {
    borderRadius: [0, '.25rem', '.25rem', 0],
  },

  buttonIcon: {
    verticalAlign: 'inherit',
  },
}))
