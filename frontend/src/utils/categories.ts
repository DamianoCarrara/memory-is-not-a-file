import { CategoriesResponse } from '../types'

const moveHomeCategoryBeforeAll = (categories: CategoriesResponse) =>
  categories.sort((x, y) =>
    // eslint-disable-next-line no-nested-ternary
    x.slug.current === 'home' ? -1 : y.slug.current === 'home' ? 1 : 0
  )

const omitHiddenCategories = (categories: CategoriesResponse) =>
  categories.filter((c) => c.show)

export const formatCategories = (categories: CategoriesResponse) =>
  moveHomeCategoryBeforeAll(omitHiddenCategories(categories))
