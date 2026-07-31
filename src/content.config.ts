import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each cooking post is a Markdown file in src/content/cooking/.
// The schema below type-checks the frontmatter at build time, so a
// missing date or title fails the build instead of shipping broken.
const cooking = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cooking' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    note: z.string(),          // short blurb shown on the card
    image: image().optional(),
  }),
});

export const collections = { cooking };
