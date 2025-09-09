import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
		title: 'Data Use Apps',
		tagline: 'Dinosaurs are cool',
		favicon: 'img/favicon.ico',
		// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
		future: {
				v4: true, // Improve compatibility with the upcoming Docusaurus v4
		},

		// Set the production url of your site here
		url: 'https://hisptz.github.io',
		// Set the /<baseUrl>/ pathname under which your site is served
		// For GitHub pages deployment, it is often '/<projectName>/'
		baseUrl: '/data-use-apps-docs/',

		// GitHub pages deployment config.
		// If you aren't using GitHub pages, you don't need these.
		organizationName: 'hisptz', // Usually your GitHub org/user name.
		projectName: 'data-use-apps-docs', // Usually your repo name.
		onBrokenLinks: 'throw',
		onBrokenMarkdownLinks: 'warn',
		// Even if you don't use internationalization, you can use this field to set
		// useful metadata like html lang. For example, if your site is Chinese, you
		// may want to replace "en" with "zh-Hans".
		i18n: {
				defaultLocale: 'en',
				locales: ['en'],
		},

		presets: [
				[
						'classic',
						{
								docs: {
										sidebarPath: './sidebars.ts',
										routeBasePath: '/'
										// Please change this to your repo.
										// Remove this to remove the "edit this page" links.
								},
								blog: false,
								theme: {
										customCss: './src/css/custom.css',
								},
						} satisfies Preset.Options,
				],
		],

		themeConfig: {
				// Replace with your project's social card
				image: 'img/docusaurus-social-card.jpg',
				navbar: {
						title: 'Data Use Apps',
						items: [
								{
										type: 'docSidebar',
										sidebarId: 'overviewSidebar',
										position: 'left',
										label: 'Overview',
								},
								{
										type: 'docSidebar',
										sidebarId: 'scorecardSidebar',
										position: 'left',
										label: 'Scorecard',
								},
								{
										type: 'docSidebar',
										sidebarId: 'bnaSidebar',
										position: 'left',
										label: 'Bottleneck Analysis (BNA)',
								},
								{
										type: 'docSidebar',
										sidebarId: 'actionTrackerSidebar',
										position: 'left',
										label: 'Action Tracker',
								},
								{
										type: 'docSidebar',
										sidebarId: 'standaloneActionTrackerSidebar',
										position: 'left',
										label: 'Standalone Action Tracker',
								},
						],
				},
				footer: {
						style: 'dark',
						links: [
								{
										title: 'Docs',
										items: [
												{
														label: 'Overview',
														to: '/overview/intro',
												},
												{
														label: 'Scorecard',
														to: '/scorecard/intro',
												},
												{
														label: 'Bottleneck Analysis (BNA)',
														to: '/bna/intro',
												},
												{
														label: 'Action Tracker',
														to: '/action-tracker/intro',
												},
												{
														label: 'Standalone Action Tracker',
														to: '/standalone-action-tracker/intro',
												},
										],
								},
								{
										title: 'Community',
										items: [
												{
														label: 'Stack Overflow',
														href: 'https://stackoverflow.com/questions/tagged/docusaurus',
												},
												{
														label: 'Discord',
														href: 'https://discordapp.com/invite/docusaurus',
												},
												{
														label: 'X',
														href: 'https://x.com/docusaurus',
												},
										],
								},
								{
										title: 'More',
										items: [
												{
														label: 'GitHub',
														href: 'https://github.com/hisptz/data-use-apps-docs',
												},
										],
								},
						],
						copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
				},
				prism: {
						theme: prismThemes.github,
						darkTheme: prismThemes.dracula,
				},
		} satisfies Preset.ThemeConfig,
};

export default config;
