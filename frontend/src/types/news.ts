export interface News {
  aspectRatio: number;
  height: number;
  mimeType: string;
  originalFilename: string;
  url: string;
  width: number;
}

export interface NewsBase {
  _id: string;
  _createdAt: Date;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description?: string;
  image: News;
}

export type NewsResponse = NewsBase[];
