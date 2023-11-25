const activities = {
    name:"activities",
    title:"Activities",
    type: "document",
    fields: [
      { 
        name: "activityName",
        title:" Activity Name",
        type: "string",
      },
      { 
        name: "activityDescription",
        title:" Activity Description",
        type: "string"
      },

      {
        name: 'poster',
        title: 'Poster',
        type: 'image',
        validation: (Rule: any) => Rule.required(),
        options: {
          hotspot: true,
        }
      },
   ],
  }
  
  export default activities;
  