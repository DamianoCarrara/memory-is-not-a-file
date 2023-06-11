import { photoDataModel, categoryDataModel } from './dataModels'
import { photosPerPage } from './config'
import { Languages } from '../types'

// https://www.sanity.io/docs/paginating-with-groq
export const photosQuery = (lang: Languages) => `
  *[
    _type == "photo"
    && $slug in categories[]->slug.current
    && (
      _createdAt > $lastCreatedAt
      || (_createdAt == $lastCreatedAt && _id > $lastId)
    )
  ] | order(_createdAt) [0...${photosPerPage}]
  ${photoDataModel('base', lang)}
`

export const photoQuery = (lang: Languages) => `
  *[
    _type == "photo" && slug.current == $slug
  ] ${photoDataModel('complete', lang)}[0]
`

export const categoriesQuery = (lang: Languages) => `
  *[
    _type == 'category'
  ] | order(title.${lang} asc) ${categoryDataModel(lang)}
`

export const categoryQuery = (lang: Languages) => `
  *[
    _type == 'category' && slug.current == $slug
  ] ${categoryDataModel(lang)}[0]
`
