import { defineCollection } from "astro:content";

import { glob } from "astro/loaders";

import z from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/articles/" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).nonempty(),
  }),
});

export const collections = { articles };
