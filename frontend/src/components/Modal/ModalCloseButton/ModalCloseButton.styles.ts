import { createUseStyles } from 'react-jss'
import { theme } from '../../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  modalCloseButton: {
    width: '2.8rem',
    height: '2.8rem',
    margin: 0,
    padding: 0,
    display: 'inline-block',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    userSelect: 'none',
    border: 0,
    borderLeft: `${t.onePixel} solid ${t.gray03}`,
    fontSize: t.fontSize15,
    position: 'relative',
    transition:
      'box-shadow 300ms ease, color 300ms ease, background-color 300ms ease',
    color: t.gray01,
    background: t.primary,

    '@media (prefers-color-scheme: dark)': {
      color: t.gray01,
      background: t.primary,
    },

    '&:focus, &:active:focus': {
      outline: 0,
      boxShadow: `0 0 0 .1875rem ${t.gray01}`,
      color: t.primaryDark,
    },

    '&:active, .&:focus:active': {
      position: 'relative',
      top: t.onePixel,
    },

    '&:hover': {
      color: t.black,
      background: t.primaryDark,
    },
  },

  srOnly: {
    position: 'absolute',
    width: t.onePixel,
    height: t.onePixel,
    padding: 0,
    margin: `-${t.onePixel}`,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0,
  },
}))
