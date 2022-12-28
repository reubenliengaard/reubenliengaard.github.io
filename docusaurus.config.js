// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Reuben Liengaard',
  tagline: 'Simplifying Complexity  ',
  url: 'https://reubenliengaard.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'reubenliengaard', // Usually your GitHub org/user name.
  projectName: 'reubenliengaard.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-spatial',
        path: 'docs-spatial',
        routeBasePath: 'docs-spatial',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-parametric',
        path: 'docs-parametric',
        routeBasePath: 'docs-parametric',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-linux',
        path: 'docs-linux',
        routeBasePath: 'docs-linux',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-prototype',
        path: 'docs-prototype',
        routeBasePath: 'docs-prototype',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-automation',
        path: 'docs-automation',
        routeBasePath: 'docs-automation',
        sidebarPath: require.resolve('./sidebars.js'),
      }, 
    ],
],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Reuben Liengaard',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs-spatial/intro',    // ./docs-api/intro.md
            label: 'Spatial',
            position: 'left',
            activeBaseRegex: `/docs-spatial/`,
          },
          {
            to: '/docs-parametric/intro',  // ./docs-system/intro.md
            label: 'Parametric',
            position: 'left',
            activeBaseRegex: `/docs-parametric/`,
          },
          {
            to: '/docs-linux/intro',  // ./docs-system/intro.md
            label: 'Linux',
            position: 'left',
            activeBaseRegex: `/docs-linux/`,
          },
          {
            to: '/docs-prototype/intro',  // ./docs-system/intro.md
            label: 'Prototype',
            position: 'left',
            activeBaseRegex: `/docs-linux/`,
          },
          {
            to: '/docs-automation/intro',  // ./docs-system/intro.md
            label: 'Automation',
            position: 'left',
            activeBaseRegex: `/docs-automation/`,
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Spatial',
                to: '/docs-spatial/intro',
              },
              {
                label: 'Parametric',
                to: '/docs-parametric/intro',
              },
              {
                label: 'Linux',
                to: '/docs-linux/intro',
              },
              {
                label: 'Prototype',
                to: '/docs-prototype/intro',
              },
              {
                label: 'Automation',
                to: '/docs-automation/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/reubenliengaard',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/reubenliengaard',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/reubenliengaard',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/reubenliengaard',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
