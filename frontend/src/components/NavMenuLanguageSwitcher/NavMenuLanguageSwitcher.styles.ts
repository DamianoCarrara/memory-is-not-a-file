import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  link: {
    display: 'inline-block',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: t.fontWeightBold,
    fontSize: t.fontSize15,
    border: `${t.onePixel} solid ${t.primary}`,
    padding: ['.3rem', '1rem'],

    [`@media (min-width: ${t.mediaMinWidthDesktop})`]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '1.8rem',
      height: '1.8rem',
      padding: 0,
      color: t.black,
      borderColor: t.black,

      '&:hover': {
        color: t.linkColorHover,
      },
    },
  },
}))
