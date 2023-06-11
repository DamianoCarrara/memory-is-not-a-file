import Image from 'next/legacy/image'
import goldIcon from '../../assets/gold-icon.svg'
import silverIcon from '../../assets/silver-icon.svg'
import whiteIcon from '../../assets/white-icon.svg'
import { useStyles } from './SellingIcon.styles'

type IconType = 'gold' | 'silver' | null

interface SellingIconProps {
  type: IconType
  alt?: string
  title?: string
  size?: number
}

const getIcon = (iconType?: IconType) => {
  if (iconType === 'gold') return goldIcon as string
  if (iconType === 'silver') return silverIcon as string

  return whiteIcon as string
}

export const SellingIcon = ({
  type,
  alt,
  title,
  size = 25,
}: SellingIconProps) => {
  const classes = useStyles()

  return (
    <div className={classes.icon}>
      <Image
        src={getIcon(type)}
        width={size}
        height={size}
        alt={alt}
        title={title}
        layout="fixed"
      />
    </div>
  )
}
