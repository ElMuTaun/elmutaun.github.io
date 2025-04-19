
/* See https://ogp.me/#type_article for article object */
export type ArticleMeta = {
  author?: string[],
  published_time?: string,
  modified_time?: string,
  expiration_time?: string,
  expiration_link?: string, // href for updated info
  ogp_section?: string, // Category of article
  tag?: string[]
};
