import { z } from "astro:content";
import { tagSchema } from "./ITag";

export const articleSchema = z.object({
  title: z.string(),
  summary: z.string(),
  media: z.string(),
  pinned: z.boolean(),
  tags: z.array(tagSchema),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date(),
});

export type IArticle = {
  id: string;
  slud: string;
  body: string;
  collection: "article";
  data: z.infer<typeof articleSchema>;
};
