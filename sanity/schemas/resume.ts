export default {
  name: 'resume',
  type: 'document',
  title: 'Resume',
  fields: [
    {
      name: 'version',
      type: 'string',
      title: 'Version',
    },
    {
      name: 'file',
      type: 'file',
      title: 'File',
    },
  ],
  orderings: [
    {
      title: "Created at, New",
      name: "lastVersion",
      by: [
        {field: "_createdAt", direction: "desc"}
      ]
    }
  ]
}
