import { ParsedUrlQuery } from 'querystring'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Photos } from '../../views/Photos/Photos'
import client from '../../utils/sanityClient'
import {
  PhotosResponse,
  CategoriesResponse,
  CategoryResponse,
  GetStaticProps,
} from '../../types'
import {
  photosQuery,
  categoriesQuery,
  categoryQuery,
} from '../../utils/queries'
import { ISRRevalidationTime } from '../../utils/config'
import { formatCategories } from '../../utils/categories'

interface Params extends ParsedUrlQuery {
  slug?: string
}

interface Props {
  photos: PhotosResponse
  categories: CategoriesResponse
  slug?: string
}

export default Photos

export async function getStaticPaths() {
  const paths = await client.fetch<string[]>(
    `*[_type == 'category'][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
  locale,
}) => {
  const { slug } = params || { slug: 'home' }

  const [photos, categories, category] = await Promise.all([
    client.fetch<PhotosResponse>(photosQuery(locale), {
      slug,
      lastCreatedAt: '',
      lastId: '',
    }),

    client
      .fetch<CategoriesResponse>(categoriesQuery(locale))
      .then(formatCategories),

    client.fetch<CategoryResponse>(categoryQuery(locale), { slug }),
  ])

  if (!category || !category.show) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      photos,
      categories,
      category,
      slug,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: ISRRevalidationTime,
  }
}
