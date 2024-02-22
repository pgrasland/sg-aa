export default interface Article {
  id: number;
  attributes: {
    slug: string;
    title: string;
    content: string;
    media: string;
    summary: string;
    commentary: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    tags: string[];
  };
}
