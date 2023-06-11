import { siteUrl, locales, defaultLocale } from '../../utils/config'

interface AlternateLangProps {
  path: string
}

export const AlternateLang = ({ path }: AlternateLangProps) => (
  <>
    {locales.map((l) => (
      <link
        key={l}
        rel="alternate"
        hrefLang={l}
        href={`${siteUrl}${l === defaultLocale ? '' : `/${l}`}${path}`}
      />
    ))}

    <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${path}`} />
  </>
)
