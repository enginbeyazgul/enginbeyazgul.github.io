// @ts-check
import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://enginbeyazgul.dev',
    integrations: [
        sanity({
            projectId: 'c4doe6ti',
            dataset: 'production',
            useCdn: true,
            apiVersion: '2024-03-02',
        }),
    ],
});
