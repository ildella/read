
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/apps" | "/read" | "/read/articles" | "/read/collections" | "/read/collections/[publication]" | "/read/queue" | "/read/settings" | "/read/[documentId]";
		RouteParams(): {
			"/read/collections/[publication]": { publication: string };
			"/read/[documentId]": { documentId: string }
		};
		LayoutParams(): {
			"/": { publication?: string; documentId?: string };
			"/apps": Record<string, never>;
			"/read": { publication?: string; documentId?: string };
			"/read/articles": Record<string, never>;
			"/read/collections": { publication?: string };
			"/read/collections/[publication]": { publication: string };
			"/read/queue": Record<string, never>;
			"/read/settings": Record<string, never>;
			"/read/[documentId]": { documentId: string }
		};
		Pathname(): "/" | "/apps" | "/apps/" | "/read" | "/read/" | "/read/articles" | "/read/articles/" | "/read/collections" | "/read/collections/" | `/read/collections/${string}` & {} | `/read/collections/${string}/` & {} | "/read/queue" | "/read/queue/" | "/read/settings" | "/read/settings/" | `/read/${string}` & {} | `/read/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/about.txt" | "/favicon.ico" | "/icons/Chromium_Based_Browsers_Add-ons_logo.png" | "/icons/png/android-chrome-192x192.png" | "/icons/png/android-chrome-512x512.png" | "/icons/png/apple-touch-icon.png" | "/icons/png/favicon-16x16.png" | "/icons/png/favicon-32x32.png" | "/icons/png/logo.png" | "/icons/read/article.svg" | "/icons/read/preferences-svgrepo-com.svg" | "/icons/read/settings-svgrepo-com.svg" | "/icons/read/settings.svg" | "/icons/svg/Firefox_Browser_Add-ons_logo.svg" | "/icons/svg/archive-down-svgrepo-com.svg" | "/icons/svg/arrow-up-svgrepo-com.svg" | "/icons/svg/articles.svg" | "/icons/svg/back-svgrepo-com.svg" | "/icons/svg/bin-xmark-svgrepo-com.svg" | "/icons/svg/bookmark-svgrepo.com.svg" | "/icons/svg/chat-dots-svgrepo-com.svg" | "/icons/svg/check-svgrepo-com.svg" | "/icons/svg/chrome-svgrepo-com.svg" | "/icons/svg/close-svgrepo-com.svg" | "/icons/svg/collection.svg" | "/icons/svg/collections-svgrepo-com.svg" | "/icons/svg/collections.svg" | "/icons/svg/decrease-svgrepo-com.svg" | "/icons/svg/edit-2-svgrepo-com.svg" | "/icons/svg/fa-comments.svg" | "/icons/svg/fa-image.svg" | "/icons/svg/firefox-svgrepo-com.svg" | "/icons/svg/hifispeaker-fill-svgrepo-com.svg" | "/icons/svg/home-filled-svgrepo-com.svg" | "/icons/svg/minus-svgrepo-com.svg" | "/icons/svg/paper-clip-svgrepo-com.svg" | "/icons/svg/plus-svgrepo-com.svg" | "/icons/svg/preference.svg" | "/icons/svg/queue-fill-svgrepo-com.svg" | "/icons/svg/queue-svgrepo-com.svg" | "/icons/svg/queue-thin-svgrepo-com.svg" | "/icons/svg/robot-face-svgrepo-com.svg" | "/icons/svg/search.svg" | "/icons/svg/settings-1389-svgrepo-com.svg" | "/icons/svg/settings-2-svgrepo-com.svg" | "/icons/svg/settings-svgrepo-com.svg" | "/icons/svg/settings.svg" | "/icons/svg/squares-four-fill-svgrepo-com.svg" | "/icons/svg/squares-four-thin-svgrepo-com.svg" | "/icons/svg/sync-svgrepo-com.svg" | "/icons/svg/talk-bubbles-outline-badged-svgrepo-com.svg" | "/icons/svg/three-dots-vertical-svgrepo-com.svg" | "/icons/svg/trash-bin-minimalistic-svgrepo-com.svg" | "/icons/svg/trash-bin-trash-svgrepo-com.svg" | "/icons/svg/trash-xmark-alt-svgrepo-com.svg" | "/robots.txt" | "/sitemap.xml" | string & {};
	}
}