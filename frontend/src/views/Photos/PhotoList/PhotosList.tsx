import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import useScrollPosition from '@react-hook/window-scroll'
import { useWindowSize } from '@react-hook/window-size'
import useSize from '@react-hook/size'
import { useTranslation } from 'next-i18next'

import { MasonryGrid } from '../MasonryGrid/MasonryGrid'
import client from '../../../utils/sanityClient'
import { Category, PhotosResponse } from '../../../types'
import { PhotoListItem } from '../PhotoListItem/PhotoListItem'
import { ListMessage } from '../ListMessage/ListMessage'
import { photosQuery } from '../../../utils/queries'
import { Icon, Spinner } from '../../../components/Icons'
import { useStore } from '../../../utils/store'
import { defaultLocale } from '../../../utils/config'

interface PhotoListProps {
  photos: PhotosResponse
  category: Category
  pageContainerRef: React.RefObject<HTMLDivElement>
}

// A threshold value in px defining when the infinite scroll will call next page of photos.
const infiniteScrollThreshold = 250

export const PhotosList = ({
  photos,
  category,
  pageContainerRef,
}: PhotoListProps) => {
  const { t } = useTranslation('common')
  const locale = useStore((state) => state.locale)
  const lastPhoto = photos?.length > 0 && photos[photos.length - 1]
  const [windowWidth, windowHeight] = useWindowSize()
  const [pageWidth, pageHeight] = useSize(pageContainerRef, {
    initialWidth: 0,
    initialHeight: 0,
  })
  const scrollY = useScrollPosition()

  const fetchPhotos = async ({
    pageParam = {
      lastCreatedAt: lastPhoto ? lastPhoto._createdAt : '',
      lastId: lastPhoto ? lastPhoto._id : '',
    },
  }) => {
    const { lastCreatedAt, lastId } = pageParam
    const res = await client.fetch<PhotosResponse>(
      photosQuery(locale || defaultLocale),
      {
        slug: category.slug.current,
        lastCreatedAt,
        lastId,
      }
    )

    return res
  }

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(['photos', category.slug.current], fetchPhotos, {
      enabled: false,
      getNextPageParam: (photosResponse) => {
        const last = photosResponse[photosResponse.length - 1]

        return last
          ? { lastCreatedAt: last._createdAt, lastId: last._id }
          : undefined
      },
    })

  useEffect(() => {
    if (
      hasNextPage !== false &&
      scrollY > pageHeight - windowHeight - infiniteScrollThreshold
    ) {
      void fetchNextPage()
    }
  }, [
    pageWidth,
    pageHeight,
    windowWidth,
    windowHeight,
    scrollY,
    fetchNextPage,
    hasNextPage,
  ])

  if (status === 'error')
    return (
      <ListMessage>
        {t('An error is occurred fetching data. Try to refresh the page.')}
      </ListMessage>
    )

  if (!photos?.length)
    return <ListMessage>{t('This category is empty')}</ListMessage>

  return photos ? (
    <>
      <MasonryGrid> 
        {photos.map((photo) => (
          <PhotoListItem photo={photo} key={photo.slug.current} />
        ))}

        {data &&
          data.pages.map((nextPhotos) =>
            nextPhotos.map((p) => (
              <PhotoListItem photo={p} key={p.slug.current} />
            ))
          )}   
      </MasonryGrid>
      {isFetchingNextPage && (
        <ListMessage>
          {t('Loading')} <Icon icon={Spinner} spin />
        </ListMessage>
      )}
    </>
  ) : null
}
