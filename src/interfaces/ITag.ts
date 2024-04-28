import { z } from "astro:content";

export const tagSchema = z.object({
  title: z.coerce.string(),
  color: z.enum(["red", "yellow", "green", "blue", "indigo", "purple", "pink"]),
});

export type ITag = {
  id: string;
  slud: string;
  body: string;
  collection: "tags";
  data: z.infer<typeof tagSchema>;
};
