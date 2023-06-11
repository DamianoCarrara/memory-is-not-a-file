import { ParsedUrlQuery } from 'querystring'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Photo } from '../../views/Photo/Photo'
import client from '../../utils/sanityClient'
import { PhotoResponse, GetStaticProps } from '../../types'
import { photoQuery } from '../../utils/queries'
import { ISRRevalidationTime } from '../../utils/config'

interface Params extends ParsedUrlQuery {
  slug?: string
}

interface Props {
  photo: PhotoResponse
}

export default Photo

export async function getStaticPaths() {
  const paths = await client.fetch<string[]>(
    `*[_type == 'photo'][].slug.current`
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
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { slug } = params!

  const photo = await client.fetch<PhotoResponse>(photoQuery(locale), { slug })

  if (!photo) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      photo,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
    revalidate: ISRRevalidationTime,
  }
}
