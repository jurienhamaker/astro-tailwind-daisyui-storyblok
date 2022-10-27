/// <reference types="@astrojs/image/client" />

declare module '@storyblok/astro' {
	type StoryblokAPI = {
		get: <Data>(
			path: string,
			options?: {
				starts_with?: string;
				version?: 'draft';
			}
		) => { data: Data };
	};

	export const useStoryblokApi: () => StoryblokAPI;
	export const renderRichText: (string: string) => any;
	export const storyblokEditable: (blok: any) => any[];
}
