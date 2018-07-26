// const mainMenuRaw = require('../.vuepress/mainmenu.json').menu;
// let newMenu = [];
// mainMenuRaw.forEach(el => {
//   newMenu.push(el.document)
// });

module.exports = {
  title: 'Netlify CMS + VuePress',
  description: 'Netlify + VuePress',
  themeConfig: {
    docsDir: 'docs',
    repo: 'vvfesik/vuepress-netlify-cms',
    // sidebar: [
    //   '/',
    //   '/welcome',
    //   '/test'
    // ],
    // sidebarItems: newMenu,
    // sidebar: mainMenuRaw,
    sidebar: require('../.vuepress/mainmenu.json'),
    nav: [
      {
        text: 'Admin',
        link: '/admin/#/',
      }
    ]
  }
}