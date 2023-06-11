import { clsx } from 'clsx'
import { useStyles } from './Container.styles'

export interface ContainerProps {
  children: React.ReactNode
  fullWidth?: boolean
}

export const Container = ({ children, fullWidth = false }: ContainerProps) => {
  const classes = useStyles()

  return (
    <div className={clsx(classes.container, fullWidth && classes.fullWidth)}>
      {children}
    </div>
  )
}
