
import { z, defineCollection } from 'astro:content';
import { glob } from "astro/loaders";

const article = defineCollection({
  loader: glob({
    pattern: "**/pages/*.{md,mdx,astro}",
    base: "./src/contents/articles"
  }),
  schema: z.object({
    draft: z.boolean().nullish(),
    title: z.string(),
    desc: z.string().nullish(),
    imgSrc: z.string().nullish(),
    imgAlt: z.string().nullish(),
    article: z.object({
      author: z.array(z.string()).nullish(),
      published_time: z.date().nullish(),
      modification_time: z.date().nullish(),
      expiration_time: z.date().nullish(),
      expiration_msg: z.string().nullish(),
      ogp_section: z.string().nullish(),
      tag: z.array(z.string()).nullish()
    }).nullish()
  })
});

export const collections = {
  article
};
