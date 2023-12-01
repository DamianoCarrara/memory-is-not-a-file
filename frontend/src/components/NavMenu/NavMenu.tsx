import { ReactNode, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useWindowWidth } from '@react-hook/window-size/throttled'
import Link from 'next/link'
import { clsx } from 'clsx'
import { useRouter } from 'next/router'
import { theme } from '../../utils/theme'
import { useStyles } from './NavMenu.styles'
import { locations, locationsBase } from '../../utils/locations'
import { isFeatureEnabled } from '../../utils/features'

interface NavMenuProps {
  renderLanguageSwitcher: (props: {
    setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void
  }) => ReactNode
}

export const NavMenu = ({ renderLanguageSwitcher }: NavMenuProps) => {
  const { t } = useTranslation('common')
  const { pathname } = useRouter()
  const classes = useStyles()
  const windowWidth = useWindowWidth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const isHomeActive =
    pathname === locations.home ||
    pathname.includes(locationsBase.category) ||
    pathname.includes(locationsBase.photo)

  useEffect(() => {
    if (windowWidth >= parseInt(theme.mediaMinWidthDesktop, 10)) {
      setIsMobile(false)
      setIsMobileMenuOpen(false)
    } else {
      setIsMobile(true)
    }
  }, [windowWidth])

  return (
    <nav className={classes.nav} role="navigation" aria-label="Main menu">
      <button
        type="button"
        className={clsx(
          classes.hamMenu,
          isMobileMenuOpen && classes.hamMenuActive
        )}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-controls="main-menu"
        aria-label={t('Open the menu')}
      >
        <span
          className={clsx(classes.hamLine, classes.hamLine1)}
          aria-hidden="true"
        />
        <span
          className={clsx(classes.hamLine, classes.hamLine2)}
          aria-hidden="true"
        />
        <span
          className={clsx(classes.hamLine, classes.hamLine3)}
          aria-hidden="true"
        />
      </button>

      <div
        id="main-menu"
        className={clsx(
          classes.menu,
          isMobile && !isMobileMenuOpen && classes.hideMenu
        )}
      >
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <Link
              href={locations.home}
              className={clsx(classes.link, isHomeActive && classes.active)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('Photo album')}
            </Link>
          </li>

          <li className={classes.listItem}>
            <Link
              href={locations.about}
              className={clsx(
                classes.link,
                pathname.includes(locationsBase.about) && classes.active
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('About')}
            </Link>
          </li>

          <li className={classes.listItem}>
            <Link
              href={locations.contacts}
              className={clsx(
                classes.link,
                pathname.includes(locationsBase.contacts) && classes.active
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('Contacts')}
            </Link>
          </li>

          {isFeatureEnabled('eCommerce') && (
            <li className={classes.listItem}>
              <Link
                href={locations.buy}
                className={clsx(
                  classes.link,
                  pathname.includes(locationsBase.buy) && classes.active
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('Buy')}
              </Link>
            </li>
          )}

          <li className={classes.listItem}>
            {renderLanguageSwitcher({ setIsMobileMenuOpen })}
          </li>
        </ul>
       
      </div>
    </nav>
  )
}
