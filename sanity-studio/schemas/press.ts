export default {
  name: "press",
  title: "Press",
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
      title: "Url press",
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
      description: "Cover",
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
