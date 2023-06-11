import { ReactNode } from 'react'
import { useStyles } from './PageTitle.styles'
import { Container } from '../Container/Container'

interface PageTitleProps {
  title: string
  fullWidth?: boolean
  additionalContent?: ReactNode
}

export const PageTitle = ({
  title,
  fullWidth = false,
  additionalContent,
}: PageTitleProps) => {
  const classes = useStyles()

  return (
    <Container fullWidth={fullWidth}>
      <div className={classes.wrapper}>
        <div className={classes.title}>{title}</div>

        {additionalContent && (
          <div className={classes.additionalContent}>{additionalContent}</div>
        )}
      </div>
    </Container>
  )
}
