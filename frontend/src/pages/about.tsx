import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { About } from '../views/About/About'
import { GetStaticProps } from '../types'

export default About

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    locale,
    ...(await serverSideTranslations(locale, ['common', 'about'])),
  },
})
