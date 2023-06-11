import { supportedLanguages } from "../utils"

export default {
  name: 'sellingOption',
  title: 'Photo selling options',
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
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'The price in Euro.',
      validation: (rule) => rule.required()
    },
    {
      name: 'isUnique',
      type: 'boolean',
      title: 'Is unique',
      description: 'Set true if this product is unique (e.g: sold with the original diapositive)',
      initialValue: false,
    },
    {
      name: 'printLongerSideSize',
      type: 'number',
      title: 'Print longer side size',
      description: 'The print longer side size in cm.',
      initialValue: 30,
      validation: (rule) => rule.required()
    },
    {
      name: 'showSize',
      type: 'boolean',
      title: 'Show print size',
      initialValue: true,
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          {title: 'Silver', value: 'silver'},
          {title: 'Gold', value: 'gold'},
        ],
      },
    }
  ],
  preview: {
    select: {
      title: 'title.en',
      price: 'price',
      size: 'printLongerSideSize'
    },
    prepare(selection) {
      const { title, price, size } = selection

      return {
        title: title,
        subtitle: `${price}Euro - ${size}cm`
      }
    }
  }
}
