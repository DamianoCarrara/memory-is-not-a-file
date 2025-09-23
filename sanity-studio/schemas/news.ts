export default {
  name: "news",
  title: "News",
  type: "document",
  fields: [
    {
      name: "medium",
      title: "Titolo articolo",
      type: "string",
      description: "Titolo articolo",
    },
    {
      name: "testata",
      title: "Testata",
      type: "string",
    },
    {
      name: "description",
      title: "Descrizione",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      title: "Url news",
    },
    {
      name: "link",
      type: "string",
      title: "link"
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
      description: "Cover",
    },
     {
      name: "logo",
      type: "image",
      title: "Logo",
      description: "Logo link",
    },
    {
      name: "pressGallery",
      title: "Immagini",
      description: "galleria immagini",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
};
