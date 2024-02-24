export default interface Article {
  id: number;
  attributes: {
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
