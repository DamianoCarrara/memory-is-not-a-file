import { containsWhitespace } from "../utils"
import { supportedLanguages } from "../utils"

export default {
    name: 'photo',
    title: 'Photos',
    type: 'document',
    fields: [
      {
        name: 'slug',
        type: 'slug',
        title: 'Photo ID',
        validation: (rule) => rule.required()
          .custom((s: { current: string }) => s && s.current.length >= 100
              ? 'Must be at most 100 characters long'
              : true
          )
          .custom((s: { current: string }) => s && s.current.length < 4
              ? 'Must be at least 4 characters long'
              : true
          )
          .custom((s: { current: string }) => s && containsWhitespace(s.current)
              ? `The Photo ID can't contain white spaces`
              : true
          )
      },
      {
        name: 'title',
        title: 'Title',
        type: 'object',
        fields: supportedLanguages.map(lang => ({
          title: lang.title,
          name: lang.id,
          type: 'string',
          validation: (rule) => rule.required().min(4).max(100),
        })),
        validation: (rule) => rule.required()
      },
      {
        name: 'description',
        title: 'Description',
        type: 'object',
        fields: supportedLanguages.map(lang => ({
          title: lang.title,
          name: lang.id,
          type: 'text',
          rows: 4,
        })),
      },
      {
        name: 'photo',
        type: 'image',
        title: 'Photo',
        description: 'The image file'
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'category' },
          },
        ],
        description: 'Select one or more categories where you want the photo will appear.',
        validation: (rule) => rule.required().min(1)
      },
      {
        name: 'sellingOptions',
        title: 'Selling options',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: { type: 'sellingOption' },
          },
        ],
        initialValue: [],
        description: 'Assign one or more selling options to this photo. If you don\'t assign any, the selling button and related information will disappear from the photo detail page.',
        validation: (rule) => rule.unique()
      },
    ],
    preview: {
      select: {
        title: 'title.en',
        slug: 'slug',
        image: 'photo',
      },
      prepare(selection) {
        const { title, slug, image } = selection

        return {
          title,
          subtitle: slug.current,
          media: image
        }
      }
    }
  }
