module.exports = {
  someSidebar: [
    {
      collapsed: true,
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
      collapsed: true,
      type: 'category',
      label: 'Guides',
      items: ['guides/using-redux-state', 'guides/usage-with-redux-toolkit']
    },
    {
      collapsed: true,
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
            'apis/hooks/use-set-state',
            'apis/hooks/use-get-state'
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
