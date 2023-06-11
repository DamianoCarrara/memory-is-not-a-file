import { NextPage } from 'next'
import { PageTemplate } from '../../components/PageTemplate/PageTemplate'
import { PageTitle } from '../../components/PageTitle/PageTitle'
import { Container } from '../../components/Container/Container'
import { getSeoTitleSiteName } from '../../utils/config'
import { MarkdownPageData } from '../../types'

interface MarkdownPageProps {
  markdownPage: MarkdownPageData
  pageName: string
}

export const MarkdownPage: NextPage<MarkdownPageProps> = ({ markdownPage }) =>
  markdownPage ? (
    <PageTemplate
      path={`/${markdownPage.id}/`}
      htmlTitle={getSeoTitleSiteName(markdownPage.title)}
    >
      <article>
        <PageTitle title={markdownPage.title} />

        <Container>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: markdownPage.contentHtml }}
          />
        </Container>
      </article>
    </PageTemplate>
  ) : null
