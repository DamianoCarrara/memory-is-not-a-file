import { ReactNode } from 'react'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import clsx from 'clsx'
import { Container } from '../Container/Container'
import { locations } from '../../utils/locations'
import { useStyles } from './Footer.styles'
import { siteName } from '../../utils/config'
import { isFeatureEnabled } from '../../utils/features'

interface FooterProps {
  languageSwitcher: ReactNode
  yellowBackground?: boolean
}

export const Footer = ({ languageSwitcher, yellowBackground }: FooterProps) => {
  const { t } = useTranslation('common')
  const classes = useStyles()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={clsx(
        classes.footer,
        yellowBackground && classes.yellowBackground
      )}
    >
      <Container fullWidth>
        <span className={classes.item}>
          Copyright © 2023 {siteName}
        </span>

        {isFeatureEnabled('eCommerce') && (
          <>
            <span className={classes.item}>
              <Link href={locations.privacyPolicy}>{t('Privacy policy')}</Link>
            </span>

            <span className={classes.item}>
              <Link href={locations.termsAndConditions}>
                {t('Terms and conditions')}
              </Link>
            </span>
          </>
        )}

        {languageSwitcher}
      </Container>
    </footer>
  )
}
