export default interface ITag {
  id: number;
  attributes: {
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
