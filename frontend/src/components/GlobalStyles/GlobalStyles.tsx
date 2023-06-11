/*
  Import order of useNormalize and useStyles reflects injection order inside the DOM,
  please don't change it, useNormalize need to come before useStyles.
  Refs on JSS injection order here:
  https://cssinjs.org/react-jss/#injection-order
*/
import { useNormalize } from './normalize.css.8.0.1'
import { useStyles } from './GlobalStyles.styles'

export interface GlobalStylesProps {
  children: React.ReactNode
}

export const GlobalStyles = ({ children }: GlobalStylesProps) => {
  useNormalize()
  useStyles()

  return <div>{children}</div>
}
