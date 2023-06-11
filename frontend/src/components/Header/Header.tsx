import Image from 'next/legacy/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { useStyles } from './Header.styles'
import logoPath from '../../assets/memory-is-not-a-file-logo.svg'
import payoffPath from '../../assets/stories-in-images-images-for-stories.svg'
import { Container } from '../Container/Container'
import { siteName, payoff } from '../../utils/config'
import { locations } from '../../utils/locations'

interface HeaderProps {
  children: ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <Container fullWidth>
        <div className={classes.wrapper}>
          <div className={classes.logo}>
            <Link href={locations.home}>
              <Image
                src={logoPath as string}
                alt={`${siteName} logo`}
                title={siteName}
                layout="responsive"
              />
            </Link>
          </div>

          {children}
        </div>
      </Container>

      <div className={classes.payoff}>
        <Container fullWidth>
          <div className={classes.payoffImage}>
            <Image
              src={payoffPath as string}
              alt={payoff}
              title={payoff}
              layout="responsive"
            />
          </div>
        </Container>
      </div>
    </header>
  )
}
