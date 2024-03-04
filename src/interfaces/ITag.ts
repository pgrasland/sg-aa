import type IArticle from "./IArticle";

export default interface ITag {
  id: number;
  attributes: {
    tag: string;
    slug: string;
    color: 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    articles: {
      data: IArticle[];
    };
  };
}
