export interface Category {
  title: string
  slug: {
    _type: 'slug'
    current: string
  }
  show: boolean
}

export type CategoriesResponse = Category[]

export type CategoryResponse = Category | null
