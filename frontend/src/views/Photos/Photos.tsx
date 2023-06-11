import { NextPage } from 'next'
import { useRef } from 'react'
import { useTranslation } from 'next-i18next'
import {
  PhotosResponse,
  CategoriesResponse,
  CategoryResponse,
} from '../../types'
import { PageTemplate } from '../../components/PageTemplate/PageTemplate'
import { PhotosList } from './PhotoList/PhotosList'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { CategorySelect } from './CategorySelect/CategorySelect'
import { getSeoTitleSiteName } from '../../utils/config'
import { locations } from '../../utils/locations'

interface PhotosProps {
  photos?: PhotosResponse
  categories?: CategoriesResponse
  slug?: string
  category?: CategoryResponse
}

export const Photos: NextPage<PhotosProps> = ({
  photos,
  categories,
  slug,
  category,
}) => {
  const { t } = useTranslation('common')
  const pageContainerRef = useRef<HTMLDivElement>(null)

  if (photos && categories && slug && category) {
    const path = slug === 'home' ? '' : locations.category(slug)

    return (
      <PageTemplate
        ref={pageContainerRef}
        path={path}
        htmlTitle={getSeoTitleSiteName(`${category.title}`)}
      >
        <PageTitle
          fullWidth
          title={t('Photo album')}
          additionalContent={
            <CategorySelect slug={slug} categories={categories} />
          }
        />
        <PhotosList
          photos={photos}
          category={category}
          pageContainerRef={pageContainerRef}
        />
      </PageTemplate>
    )
  }

  return null
}
