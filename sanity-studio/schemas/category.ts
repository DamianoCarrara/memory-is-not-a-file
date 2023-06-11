import { supportedLanguages } from "../utils"

export default {
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'object',
      description: 'This category name.',
      fields: supportedLanguages.map(lang => ({
        title: lang.title,
        name: lang.id,
        type: 'string',
        validation: (rule) => rule.required().min(4).max(100),
      })),
      validation: (rule) => rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'A slug is a unique string (typically a normalized version of title), used as part of a URL. Press "Generate" to generate a new slug from the english title. NOTE: SLUG SHOULD BE IN ENGLISH.',
      readOnly: ({ value }) => value?.current === 'home',
      options: {
        source: 'title.en',
        slugify: (input:string) => input
          .toLowerCase()
          .replace(/\s+/g, '-') //Remove spaces
          .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "") //Remove special characters
          .slice(0, 200),
        validation: (rule) => rule.required(),
      }
    },
    {
      name: 'show',
      type: 'boolean',
      title: 'Show in the website',
      description: 'Set true to show this category and all the related images in the website',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  }
}
