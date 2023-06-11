import { siteUrl } from './config'
import { Languages } from '../types'

export const getTranslatedPath = (
  path: string,
  localePathString?: Languages
) => {
  const locale = localePathString ? `/${localePathString}` : ''

  return `${siteUrl}${locale}${path}`
}
