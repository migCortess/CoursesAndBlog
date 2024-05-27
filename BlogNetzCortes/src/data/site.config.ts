interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'migcortes', // Site author
	title: 'Blog of netzcortes', // Site title.
	description: 'this app development for share content of TI resources', // Description to display in the meta tags
	lang: 'es',
	ogLocale: 'es',
	shareMessage: 'netzcortes', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
