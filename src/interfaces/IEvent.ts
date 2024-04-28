import { z } from "astro:content";

export const eventSchema = z.object({
  date: z.coerce.date(),
  title: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  publishedAt: z.coerce.date(),
});

export type IEvent = {
  id: string;
  slug: string;
  body: string;
  collection: "events";
  data: z.infer<typeof eventSchema>;
};
