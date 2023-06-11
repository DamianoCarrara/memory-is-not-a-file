import fs from 'fs'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Languages } from '../../types'

export const getMarkdownPagesData = async (id: string, language: Languages) => {
  const fullPath = `${process.cwd()}/src/views/MarkdownPage/pages/${language}/${id}.md`
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string }),
  }
}
