export interface SellingOption {
  _id: string
  title: string
  price: number
  printLongerSideSize: number
  showSize: boolean
  icon: 'silver' | 'gold' | null
  isUnique: boolean
}

export interface Image {
  aspectRatio: number
  height: number
  mimeType: string
  originalFilename: string
  url: string
  width: number
}

export interface PhotoBase {
  _id: string
  _createdAt: Date
  slug: {
    _type: 'slug'
    current: string
  }
  title: string
  description?: string
  sellingOptions: SellingOption[] | null
  image: Image
}

export interface PhotoComplete extends PhotoBase {
  sellingOptions: SellingOption[] | null
}

export type PhotosResponse = PhotoBase[]

export type PhotoResponse = PhotoComplete | null
