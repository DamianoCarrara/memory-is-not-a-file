export interface Press {
  aspectRatio: number;
  height: number;
  mimeType: string;
  originalFilename: string;
  url: string;
  width: number;
}

export interface PressBase {
  _id: string;
  _createdAt: Date;
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;
  description?: string;
  image: Press;
}

export type PresssResponse = PressBase[];
