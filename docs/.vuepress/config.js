module.exports = {
    title: '温州市第五十一中学新生导引',
    base: '/',
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    themeConfig: {
        docsRepo: 'ENDsoft233/51book',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: '帮我们一起完善 ',
        lastUpdated: '上次修改 ',
        nav: [
            { text: '返回 五十一中官网', link: 'https://www.wz51z.com/' }
        ],
        sidebar: [
            ['/', '起始页']
        ],
        smoothScroll: true
    },
    evergreen: true
}