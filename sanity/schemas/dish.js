import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_desc',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'image',
      title: 'Dish Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    }
  ],
})
