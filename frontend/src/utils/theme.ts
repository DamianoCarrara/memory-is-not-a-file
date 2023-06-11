import { Barlow_Semi_Condensed } from '@next/font/google'

const barlowSemiCondensed = Barlow_Semi_Condensed({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const {
  style: { fontFamily },
} = barlowSemiCondensed

const colors = {
  primary: '#f1bb37',
  primaryDark: '#896e2e',
  white: '#fff',
  black: '#000',
  gray00: '#222',
  gray01: '#555',
  gray02: '#999',
  gray03: '#ddd',
  gray04: '#eee',
}

const fonts = {
  fontSize15: '.9375rem', // 15px
  fontSize16: '1rem', // 16px
  fontSize18: '1.125rem', // 18px
  fontSize20: '1.25rem', // 18px
  fontSize22: '1.375rem', // 22px
  fontSize24: '1.5rem', // 24px
  fontSize28: '1.75rem', // 28px
}

export const theme = {
  primary: colors.primary,
  primaryDark: colors.primaryDark,
  white: colors.white,
  black: colors.black,
  gray00: colors.gray00,
  gray01: colors.gray01,
  gray02: colors.gray02,
  gray03: colors.gray03,
  gray04: colors.gray04,

  baseFontFamily: fontFamily,
  baseLineHeight: 1.4,
  baseTextColor: colors.gray01,
  baseBackgroundColor: colors.white,
  fontWeightBold: 700,

  fontSizeBase: fonts.fontSize18,
  fontSize15: fonts.fontSize15,
  fontSize16: fonts.fontSize16,
  fontSize18: fonts.fontSize18,
  fontSize20: fonts.fontSize20,
  fontSize22: fonts.fontSize22,
  fontSize24: fonts.fontSize24,
  fontSize28: fonts.fontSize28,

  linkColor: colors.primary,
  linkTextDecoration: 'underline',
  linkColorHover: colors.primaryDark,
  linkTextDecorationHover: 'none',

  gridGutter: '1.2rem',
  negativeGridGutter: '-1.2rem',

  hairLineWidth: '0.0625rem',
  onePixel: '0.0625rem',

  // Media query breakpoints
  mediaBpUpSm: '576px',
  mediaBpUpMd: '768px',
  mediaBpUpLg: '992px',
  mediaBpUpXl: '1200px',
  mediaBpUpXXl: '1400px',
  mediaBpUpXXXl: '1600px',

  mediaMaxWidthMenuMobile: '991px',
  mediaMinWidthDesktop: '992px',

  zIndexMobileMenu: 1000,
  zIndexHamburger: 1001,
  zIndexModal: 1002,
}
