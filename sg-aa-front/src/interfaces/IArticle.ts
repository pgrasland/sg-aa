import type IMedia from "./IMedia";
import type Tag from "./ITag";

export default interface IArticle {
  id: number;
  attributes: {
    slug: string;
    title: string;
    content: string;
    summary: string;
    commentary: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    pinned: boolean;
    tags: {
      data: Tag[];
    };
    media: {
      data: IMedia;
    };
  };
}
