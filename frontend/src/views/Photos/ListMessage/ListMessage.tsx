import { ReactNode } from 'react'
import { Container } from '../../../components/Container/Container'
import { useStyles } from './ListMessage.styles'

interface ListMessageProps {
  children: ReactNode
}

export const ListMessage = ({ children }: ListMessageProps) => {
  const classes = useStyles()

  return (
    <Container fullWidth>
      <div className={classes.listMessage}>{children}</div>
    </Container>
  )
}
