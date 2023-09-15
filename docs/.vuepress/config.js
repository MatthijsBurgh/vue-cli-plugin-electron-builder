module.exports = {
  title: 'Vue CLI Plugin Electron Builder',
  description: 'Easily Build Your Vue.js App For Desktop With Electron',
  base: '/vue-cli-plugin-electron-builder/',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-134189455-2'
      }
    ]
  ],
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['script', { src: '/scripts/scrollToHash.js' }],
    // Google search property verification
    [
      'meta',
      {
        name: 'google-site-verification',
        content: 'It9QDm7l8m-gYoVuBFVzERjx0MapaegfY1AMru9wFCc'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      {
        text: 'v1.x',
        link:
          'https://github.com/MatthijsBurgh/vue-cli-plugin-electron-builder/tree/v1'
      },
      {
        text: 'v2.x',
        link:
          'https://github.com/MatthijsBurgh/vue-cli-plugin-electron-builder/tree/v2'
      },
      {
        text: 'Changelog',
        link:
          'https://github.com/MatthijsBurgh/vue-cli-plugin-electron-builder/releases'
      },
      {
        text: 'Sponsor',
        link: 'https://github.com/sponsors/MatthijsBurgh'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'guide',
        'configuration',
        'recipes',
        'security',
        'testingAndDebugging',
        'commonIssues'
      ]
    },
    repo: 'MatthijsBurgh/vue-cli-plugin-electron-builder',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Is something wrong or missing? Edit this page on github!'
  }
}
