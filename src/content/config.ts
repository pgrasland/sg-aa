import { defineCollection, z } from "astro:content";
import { eventSchema } from "../interfaces/IEvent";
import { tagSchema } from "../interfaces/ITag";
import { articleSchema } from "../interfaces/IArticle";

const events = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: eventSchema,
});

const tags = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: tagSchema,
});

// const articles = defineCollection({
//   type: "content",
//   schema: articleSchema,
// });

export const collections = { events, tags };
