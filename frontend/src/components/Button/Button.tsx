import clsx from 'clsx'
import { HTMLProps, ReactNode } from 'react'
import { useStyles } from './Button.styles'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  color?: 'default' | 'primary'
}

export const Button = ({
  children,
  type = 'button',
  disabled = false,
  color = 'default',
  ...rest
}: ButtonProps) => {
  const classes = useStyles()

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        classes.button,
        disabled && classes.disabled,
        color === 'primary' && classes.primary
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      {children}
    </button>
  )
}
