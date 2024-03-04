import type IMedia from "./IMedia";
import type ITag from "./ITag";

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
      data: ITag[];
    };
    media: {
      data: IMedia;
    };
  };
}
