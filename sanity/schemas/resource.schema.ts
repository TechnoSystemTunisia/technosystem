const schema = {
  name:"resource",
  title:"Resource",
  type: "document",
  fields: [
    { 
      name: "projectName",
      title:" Project Name",
      type: "string",
    },
    { 
      name: "projecDescription",
      title:" Project Description",
      type: "string"
    },
    { 
      name: "projectClient",
      title:" Project Client",
      type: "string"
    },
    { 
      name: "projectImages",
      title:" Project Images",
      type: 'array',
      of: 
      [
        {
          type: 'image',
          name: 'poster',
          title:'Poster',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'width',
              type: 'number',
              title: 'Width',
            },
            {
              name: 'height',
              type: 'number',
              title: 'Height',
            }
          ]
        },
        {
          title: 'URL',
          name: 'urlObject',
          type: 'object',
          fields: [
            {
              title: 'URL',
              name: 'urlField',
              type: 'url'
            }
          ]
        }
      ]
    },
 ],
}

export default schema;
