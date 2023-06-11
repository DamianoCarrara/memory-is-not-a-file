import Masonry, { MasonryProps } from 'react-masonry-css'
import { ReactNode } from 'react'
import { useStyles } from './MasonryGrid.styles'

interface MasonryGridProps {
  breakpointCols?: MasonryProps['breakpointCols']
  children: ReactNode
}

const breakpointColumns = {
  default: 5,
  1600: 4,
  1024: 3,
  768: 2,
}

export const MasonryGrid = ({
  children,
  breakpointCols = breakpointColumns,
}: MasonryGridProps) => {
  const classes = useStyles()

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className={classes.container}
      columnClassName={classes.column}
      data-dimbox="my-gallery"
    >
      {children}
    </Masonry>
  )
}
