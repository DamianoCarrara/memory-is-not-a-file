import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  container: {
    display: 'flex',
    flexFlow: 'column nowrap',

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      flexFlow: 'row nowrap',
      alignItems: 'flex-start',
    },
  },

  photo: {
    flex: 1,
    position: 'relative',
    background: t.gray03,
    marginLeft: t.negativeGridGutter,
    marginRight: t.negativeGridGutter,

    [`@media (min-width: ${t.mediaBpUpXXXl})`]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  aside: {
    margin: [t.gridGutter, 0, 0],

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      margin: [0, 0, 0, '3rem'],
      width: '18rem',
    },

    [`@media (min-width: ${t.mediaBpUpLg})`]: {
      width: '20rem',
    },

    [`@media (min-width: ${t.mediaBpUpXl})`]: {
      width: '24rem',
    },
  },

  photoTitle: {
    fontSize: t.fontSize20,
    margin: [0, 0, '.5rem'],
    lineHeight: 1.1,
  },

  slug: {
    fontSize: theme.fontSize15,
  },

  description: {
    marginTop: '1rem',

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      marginTop: '2rem',
      fontSize: t.fontSize18,
    },

    [`@media (min-width: ${t.mediaBpUpLg})`]: {
      marginTop: '3rem',
      fontSize: t.fontSize20,
    },

    [`@media (min-width: ${t.mediaBpUpXl})`]: {
      marginTop: '6rem',
      fontSize: t.fontSize22,
    },
  },

  purchaseButton: {
    marginTop: '1.5rem',
  },
}))
