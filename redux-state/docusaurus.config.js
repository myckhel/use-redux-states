module.exports = {
  title: 'Redux State Hook',
  tagline: 'Runtime redux state',
  url: 'https://myckhel.github.io',
  baseUrl: '/use-redux-state-hook/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'myckhel', // Usually your GitHub org/user name.
  projectName: 'use-redux-state-hook', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Redux State Hook',
      logo: {
        alt: 'useReduxState',
        src: 'img/logo.png'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/myckhel/use-redux-state-hook',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Redux State, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/myckhel/use-redux-state-hook/edit/master/redux-state/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
