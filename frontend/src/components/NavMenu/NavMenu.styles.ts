import { createUseStyles } from 'react-jss'
import { theme } from '../../utils/theme'

export const useStyles = createUseStyles((t: typeof theme) => ({
  nav: {
    display: 'flex',
    padding: ['1.8rem', 0],
  },

  menu: {
    [`@media (max-width: ${t.mediaMaxWidthMenuMobile})`]: {
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      zIndex: t.zIndexMobileMenu,
      background: 'rgba(0, 0, 0, .7)',
      backdropFilter: 'blur(0.5rem)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },

    [`@media (min-width: ${t.mediaMinWidthDesktop})`]: {
      display: 'block',
    },
  },

  hideMenu: {
    display: 'none',
  },

  list: {
    margin: 0,
    padding: 0,

    [`@media (max-width: ${t.mediaMaxWidthMenuMobile})`]: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-between',
      flex: 1,
      height: '15rem',
    },
  },

  listItem: {
    lineHeight: 1,

    [`@media (max-width: ${t.mediaMaxWidthMenuMobile})`]: {
      textAlign: 'center',
    },

    [`@media (min-width: ${t.mediaMinWidthDesktop})`]: {
      display: 'inline-block',

      '& + &': {
        marginLeft: '1.8rem',
      },
    },
  },

  link: {
    display: 'inline-block',
    paddingBottom: '0.4rem',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: t.fontWeightBold,
    fontSize: t.fontSize18,

    [`@media (min-width: ${t.mediaMinWidthDesktop})`]: {
      color: t.black,

      '&:hover': {
        color: t.linkColorHover,
      },
    },
  },

  active: {
    borderBottom: `0.25rem solid ${t.white}`,
  },

  hamMenu: {
    position: 'relative',
    zIndex: t.zIndexHamburger,
    width: '1.6rem',
    height: '1.6rem',
    borderRadius: 0,
    background: 'transparent',
    border: 0,
    cursor: 'pointer',
    padding: 0,

    [`@media (min-width: ${t.mediaMinWidthDesktop})`]: {
      display: 'none',
    },
  },

  hamLine: {
    position: 'absolute',
    left: 0,
    display: 'block',
    height: '.25rem',
    width: '1.6rem',
    background: t.black,
    transition: 'all 200ms ease',
    borderRadius: '.125rem',
  },


  hamLine1: {
    top: '.125rem',
  },

  hamLine2: {
    top: '50%',
    transform: 'translateY(-50%)',
    opacity: 1,
  },

  hamLine3: {
    bottom: '.125rem',
  },

  hamMenuActive: {
    '& $hamLine': {
      background: t.white,
    },

    '& $hamLine1': {
      top: '50%',
      transform: 'translateY(-50%) rotate(45deg)',
    },

    '& $hamLine2': {
      opacity: 0,
    },

    '& $hamLine3': {
      top: '50%',
      transform: 'translateY(-50%) rotate(-45deg)',
    },
  },
}))
