import type Media from "./Media";
import type Tag from "./Tag";

export default interface Article {
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
    tags: {
      data: Tag[];
    };
    media: {
      data: Media;
    };
  };
}
