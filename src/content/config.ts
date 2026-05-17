import { defineCollection, z } from 'astro:content';

const stories = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    town:        z.string(),
    order:       z.number(),
    coordinates: z.tuple([z.number(), z.number()]),
    excerpt:     z.string(),
    address:     z.string(),
    hours:       z.string(),
    admission:   z.string(),
    website:     z.string().optional(),
    heroImage:   z.string().optional(),
    tags:        z.array(z.string()),
  }),
});

export const collections = { stories };
