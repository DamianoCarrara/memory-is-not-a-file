import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  header: {
    backgroundColor: t.primary,
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  logo: {
    width: '9.375rem',
    padding: ['0.8rem', 0],

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      width: '15.25rem',
      padding: ['1.5rem', 0],
    },

    [`@media (min-width: ${t.mediaBpUpXXXl})`]: {
      width: '18rem',
      padding: ['1.8rem', 0],
    },
  },

  payoff: {
    // display: 'none',
    background: t.black,

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      display: 'block',
    },
  },

  payoffImage: {
    width: '14rem',
    padding: ['0.5rem', 0],

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      width: '18rem',
      padding: ['0.6rem', 0],
    },

    [`@media (min-width: ${t.mediaBpUpXXXl})`]: {
      width: '22.375rem',
    },
  },
}))
