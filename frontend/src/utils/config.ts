import { Languages } from '../types'
import { i18n } from '../../next-i18next.config'

const isProd = process.env.NODE_ENV === 'production'

const vars = {
  siteName: 'Memory Is Not A File',
}

export const { siteName } = vars
export const payoff = 'Stories in images. Images for stories.'
export const getSeoTitleSiteName = (title: string) =>
  `${title} | ${vars.siteName}`
export const photosPerPage = 90
export const siteUrl = isProd
  ? 'https://memoryisnotafile.com/'
  : 'http://localhost:3000'
export const defaultLocale = i18n.defaultLocale as Languages
export const locales = i18n.locales as Languages[]
export const ISRRevalidationTime = 7200 // in seconds (3600 seconds = 1 hour)
