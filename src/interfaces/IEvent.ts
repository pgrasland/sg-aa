
export default interface IEvent {
  id: number;
  attributes: {
    slug: string;
    date: string;
    title: string;
    details: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}
