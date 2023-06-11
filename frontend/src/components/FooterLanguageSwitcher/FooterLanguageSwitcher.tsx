import Link from 'next/link'
import { useRouter } from 'next/router'
import { Languages } from '../../types'
import { getTranslatedPath } from '../../utils/i18n'
import { useStyles } from './FooterLanguageSwitcher.styles'

interface FooterLanguageSwitcherProps {
  path: string
}

export const FooterLanguageSwitcher = ({
  path,
}: FooterLanguageSwitcherProps) => {
  const classes = useStyles()
  const { locale } = useRouter() as {
    locale: Languages
  }

  return locale === 'en' ? (
    <Link
      href={getTranslatedPath(path, 'it')}
      locale={false}
      className={classes.item}
    >
      Versione italiana
    </Link>
  ) : (
    <Link
      href={getTranslatedPath(path)}
      locale={false}
      className={classes.item}
    >
      English version
    </Link>
  )
}
