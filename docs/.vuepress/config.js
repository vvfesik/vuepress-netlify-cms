module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'vvfesik/vuepress-netlify-cms',
    sidebar:  require('../.vuepress/mainmenu.json').menuitems.replace(/[,'`"\[\]]/g, '').split('\n'),
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}