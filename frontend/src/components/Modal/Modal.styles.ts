import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  modal: {
    display: 'flex',
    flexFlow: 'column nowrap',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: t.zIndexModal,
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    outline: 0,
    padding: 0,
    opacity: 1,
    animation: '$show .3s ease',

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      padding: t.gridGutter,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, .4)',
    },
  },

  '@keyframes show': {
    '0%': {
      display: 'none',
      opacity: 0,
    },
    '1%': {
      display: 'block',
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },

  modalOpen: {
    overflow: 'hidden',
  },

  modalDialog: {
    background: t.white,
    overflowY: 'auto',
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '100%',
    height: '100%',

    [`@media (min-width: ${t.mediaBpUpSm})`]: {
      height: 'auto',
    },

    [`@media (min-width: ${t.mediaBpUpMd})`]: {
      width: '45rem',
    },

    '@media (prefers-color-scheme: dark)': {
      background: t.gray00,
    },
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: `${t.onePixel} solid ${t.gray03}`,
  },

  title: {
    flex: 1,
    fontSize: t.fontSize22,
    margin: 0,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginRight: '.5rem',
    paddingLeft: '1rem',
    textTransform: 'uppercase',
  },

  content: {
    margin: ['1rem', 0],
    padding: [0, '1rem'],
    overflowY: 'auto',
    flex: 1,
  },

  footer: {
    textAlign: 'right',
    padding: [0, '1rem', '1rem'],
  },
}))
