import Link from 'next/link'
import { useRouter } from 'next/router'
import { useWindowWidth } from '@react-hook/window-size'
import { useEffect, useState } from 'react'
import { Languages } from '../../types'
import { getTranslatedPath } from '../../utils/i18n'
import { useStyles } from './NavMenuLanguageSwitcher.styles'
import { theme } from '../../utils/theme'

interface NavMenuLanguageSwitcherProps {
  path: string
  onClick: () => void
}

export const NavMenuLanguageSwitcher = ({
  path,
  onClick,
}: NavMenuLanguageSwitcherProps) => {
  const windowWidth = useWindowWidth()
  const classes = useStyles()
  const { locale } = useRouter() as {
    locale: Languages
  }
  const [hasMobileMenu, setHasMobileMenu] = useState(true)

  useEffect(() => {
    if (windowWidth <= parseInt(theme.mediaMaxWidthMenuMobile, 10)) {
      setHasMobileMenu(true)
    } else {
      setHasMobileMenu(false)
    }
  }, [windowWidth])

  return locale === 'en' ? (
    <Link
      href={getTranslatedPath(path, 'it')}
      locale={false}
      className={classes.link}
      title="Versione italiana"
      onClick={onClick}
    >
      {hasMobileMenu ? 'Versione italiana' : 'IT'}
    </Link>
  ) : (
    <Link
      href={getTranslatedPath(path)}
      locale={false}
      className={classes.link}
      title="English version"
      onClick={onClick}
    >
      {hasMobileMenu ? 'English version' : 'EN'}
    </Link>
  )
}
