import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  intro: {
    fontSize: t.fontSize20,

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      fontSize: t.fontSize22,
    },
  },

  mainImage: {
    margin: ['2rem', 0],
    position: 'relative',
    height: '16rem',

    '& img': {
      objectFit: 'cover',
    },

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      height: '25rem',
    },
  },

  bulletPoints: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    listStyle: 'none',
    margin: `0 ${t.negativeGridGutter} ${t.gridGutter}`,

    [`@media (min-width: ${t.mediaBpUpLg})`]: {
      flexDirection: 'row',
    },

    '& > li': {
      flex: '1',
      margin: `0 ${t.gridGutter} 2rem`,
      paddingBottom: t.gridGutter,
      borderBottom: `0.4rem solid ${t.black}`,

      [`@media (min-width: ${t.mediaBpUpLg})`]: {
        marginBottom: 0,
      },
    },

    '& > li > span': {
      display: 'block',
      color: t.white,
      fontSize: '3rem',
      fontWeight: t.fontWeightBold,
    },
  },
}))
