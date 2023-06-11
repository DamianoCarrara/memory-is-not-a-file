import { Languages } from '../types'
import { isFeatureEnabled } from './features'

export const photoDataModel = (type: 'base' | 'complete', lang: Languages) => `
  {
    _id,
    _createdAt,
    slug,
    "title": title.${lang},
    "description": description.${lang},
    ${
      isFeatureEnabled('eCommerce') && type === 'complete'
        ? `
        sellingOptions[] -> {
          _id,
          "title": title.${lang},
          price,
          printLongerSideSize,
          showSize,
          icon,
          isUnique,
        },
        `
        : ''
    }
    "image": photo.asset -> {
      "height": metadata.dimensions.height,
      "width": metadata.dimensions.width,
      "aspectRatio": metadata.dimensions.aspectRatio,
      url,
      originalFilename,
      mimeType,
    }
  }
`

export const categoryDataModel = (lang: Languages) =>
  `{ "title": title.${lang}, slug, show }`
