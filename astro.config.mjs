import cloudflare from '@astrojs/cloudflare';
import image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import storyblok from '@storyblok/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
	server: {
		host: '0.0.0.0',
	},
	integrations: [
		storyblok({
			accessToken: process.env.STORYBLOK_TOKEN,
			components: {
				page: 'storyblok/Page',
				hero: 'storyblok/components/Hero',
			},
		}),
		tailwind(),
		react(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		prefetch(),
	],
	output: 'server',
	adapter: cloudflare(),
});
