import React from 'react'
import clsx from 'clsx'
import useStyles from './Icon.styles'

interface IconProps {
  size?: string
  icon: React.ElementType
  spin?: boolean
  className?: string
}

const Icon = ({
  size = '1em',
  icon,
  spin = false,
  className,
}: IconProps): JSX.Element => {
  const IconComponent = icon
  const classes = useStyles()

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      height={size}
      width={size}
      className={clsx('icon', classes.icon, spin && classes.spin, className)}
    >
      <IconComponent />
    </svg>
  )
}

export default Icon
