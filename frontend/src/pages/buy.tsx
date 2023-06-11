import path from 'path'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MarkdownPage } from '../views/MarkdownPage/MarkdownPage'
import { MarkdownPageData, GetStaticProps } from '../types'
import { getMarkdownPagesData } from '../views/MarkdownPage/utils'

export default MarkdownPage

interface Props {
  markdownPage: MarkdownPageData
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const pageName = path.parse(__filename).name
  const markdownPage = await getMarkdownPagesData(pageName, locale)

  return {
    props: {
      markdownPage,
      locale,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
