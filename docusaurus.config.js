module.exports = {
  title: 'TheRoom',
  tagline: '',
  url: 'https://springafar.github.io',
  baseUrl: '/theRoomDoc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'springAFar', // Usually your GitHub org/user name.
  projectName: 'theRoomDoc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TheRoom',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
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
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'Concept',
              to: 'docs/doc4/',
            },
          ],
        },
        
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ighotouch/theRoom',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Igho matthew, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
