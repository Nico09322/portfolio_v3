
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        projects: defineCollection({
            type: 'page',
            source: '**/*.md',
            schema: z.object({
                title: z.string(),
                description: z.string(),
                image: z.string().optional(),
                order: z.number().optional(),
                gallery: z.array(z.string()).optional(),
                skills: z.array(z.object({
                    name: z.string(),
                    bild: z.string()
                }).optional())
            })
        })
    }
})