// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const articleCollection = defineCollection({
  // type: "content",
  schema: z.object({
    title: z.string(),
    relatedLinks: z
      .array(z.object({ text: z.string(), path: z.string() }))
      .optional(),
    // You can also transform a date string (e.g. "2022-07-08") to a Date object
    lastUpdated: z.string().transform((str) => new Date(str)),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  article: articleCollection,
};
