module.exports = {
  someSidebar: [
    {
      collapsed: false,
      type: 'category',
      label: 'Redux State',
      items: [
        {
          type: 'doc',
          id: 'intro'
        },
        {
          type: 'doc',
          id: 'install'
        },
        {
          type: 'doc',
          id: 'usage'
        }
      ]
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Guides',
      items: ['guides/using-redux-state', 'guides/usage-with-redux-toolkit']
    },
    {
      collapsed: false,
      type: 'category',
      label: 'Api Ref',
      items: [
        {
          collapsed: false,
          type: 'category',
          label: 'Hooks',
          items: [
            'apis/hooks/use-redux-state',
            'apis/hooks/use-memo-selector',
            'apis/hooks/use-root-memo-selector',
            'apis/hooks/use-set-state',
            'apis/hooks/use-get-state',
            'apis/hooks/use-state-selector'
          ]
        },
        'apis/selector',
        'apis/get-state',
        'apis/set-state',
        'apis/set-config',
        'apis/action',
        'apis/cleanup'
      ]
    }
  ]
}
