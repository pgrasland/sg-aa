export default interface Media {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    tags: string[];
  };
}
