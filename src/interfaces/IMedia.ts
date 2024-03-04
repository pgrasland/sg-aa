export default interface IMedia {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    url: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    width: number;
    height: number;
  };
}
