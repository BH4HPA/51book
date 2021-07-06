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
        editLinkText: '帮我们一起完善',
        lastUpdated: '上次修改 ',
        nav: [
            { text: '加入读者交流群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=z-_ivibiwB4JEXrBdCB2oK9SzhJp8gq_&jump_from=webapi' },
            { text: '返回 五十一中官网', link: 'https://www.wz51z.com/' }
        ],
        sidebar: [
            ['/', '开始之前'],
            {
                title: '新生准备',
                path: '/新生准备/',
                sidebarDepth: 1,
                children: [
                  "/新生准备/",
                  '/新生准备/寝室生活',
                  '/新生准备/学习生活',
                  '/新生准备/文化生活'
                ]
            },
            ['/知识百科/', '知识百科'],
            ['/联系我们.md', '联系我们']
        ],
        smoothScroll: true
    },
    evergreen: true
}