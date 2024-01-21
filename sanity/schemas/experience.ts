export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [{type: 'string'}],
    },
  ],
}
