'use client'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { PhotoBase } from '../../../types'
import { useStyles } from './PhotoListItem.styles'
import { locations } from '../../../utils/locations'

interface PhotoListItemProps {
  photo: PhotoBase
}

export const PhotoListItem = ({ photo }: PhotoListItemProps) => {
  const classes = useStyles()
  const { slug, image, title } = photo

  return (

    <Link data-dimbox="my-gallery" href={image.url} className={`${classes.photo}`}  data-dimbox-caption={title} id="ok1">
      <Image
        src={image.url}
        width={500}
        height={500 / image.aspectRatio}
        alt={title}
        title={title} 
        priority={true}
        onLoadingComplete={() => dimbox.init()} 
      />
    </Link>
  )
  
  
}
