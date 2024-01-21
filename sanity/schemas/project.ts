export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: ['WIP', 'published', '-'],
      },
    },
    {
      name: 'imageUrl',
      type: 'image',
      title: 'ImageUrl',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'stack',
      type: 'array',
      title: 'Stack',
      of: [{type: 'string'}],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [{type: 'image'}],
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'url', type: 'string', title: 'Url'},
            {name: 'name', type: 'string', title: 'Name'},
          ],
        },
      ],
    },
  ],
}
