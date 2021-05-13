module.exports = {
  title: 'Redux State Hook',
  tagline: 'Runtime redux state',
  url: 'https://myckhel.github.io',
  baseUrl: '/use-redux-states/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'myckhel', // Usually your GitHub org/user name.
  projectName: 'use-redux-states', // Usually your repo name.
  themeConfig: {
    prism: {
      defaultLanguage: 'jsx',
      theme: require('prism-react-renderer/themes/dracula')
    },
    navbar: {
      title: 'Redux State Hook',
      logo: {
        alt: 'useReduxState',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownActiveClassDisabled: true
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left'
        },
        {
          href: 'https://github.com/myckhel/use-redux-states',
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
            'https://github.com/myckhel/use-redux-states/edit/master/redux-state/'
          // include: ['{apis}/*.{md}'] // no other way to exclude node_modules
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/myckhel/use-redux-states/edit/master/redux-state/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       versions: {
  //         '0.1.2': {
  //           label: 'Initial',
  //           path: 'version-0.1.2'
  //         },
  //         '1.0.0-alpha.x': {
  //           label: 'Android SDK v1.0.0',
  //           path: 'version-1.0.0-alpha.x'
  //         }
  //       }
  //     }
  //   ]
  // ]
  // themes: ['@docusaurus/theme-live-codeblock']
}
