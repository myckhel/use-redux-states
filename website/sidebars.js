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
      items: ['guides/state']
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Api Ref',
      items: [
        'apis/use-redux-state',
        'apis/use-memo-selector',
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
