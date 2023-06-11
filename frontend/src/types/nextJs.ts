import {
  GetStaticPropsContext as BaseGetStaticPropsContext,
  PreviewData,
  GetStaticPropsResult,
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Languages } from './i18n'

type GetStaticPropsContext<
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = BaseGetStaticPropsContext<Q, D> & {
  locale: Languages
}

export type GetStaticProps<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
> = (
  context: GetStaticPropsContext<Q, D>
) => Promise<GetStaticPropsResult<P>> | GetStaticPropsResult<P>
