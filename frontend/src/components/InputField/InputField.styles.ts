import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  item: {
    marginBottom: '.5rem',
  },

  label: {
    display: 'block',
  },

  input: {
    backgroundColor: t.white,
    border: `${t.onePixel} solid ${t.gray02}`,
    borderRadius: 0,
    width: '100%',
    padding: ['.3rem'],
    transition: 'box-shadow 200ms ease',

    '&:focus, &:active:focus': {
      outline: 0,
      boxShadow: `0 0 0 .1875rem ${t.primary}`,
    },

    '@media (prefers-color-scheme: dark)': {
      backgroundColor: t.gray01,
      border: 0,
    },
  },
}))
