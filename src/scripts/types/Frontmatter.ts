
import type { ArticleMeta } from "./ArticleMeta";

export type Frontmatter = {
  title?: string,
  desc?: string,
  imgSrc?: string,
  imgAlt?: string,
  locale?: string,
  article?: ArticleMeta
};
