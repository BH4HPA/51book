module.exports = {
    title: '温州市第五十一中学新生导引',
    base: '/',
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    head: [
        ['script',{'remark':'百度统计'},`var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?89c2fe6b6514ef31e889450cee8599ac";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();`]
    ],
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
            ['/学校布局/', '学校布局'],
            {
                title: '规章制度',
                path: '/规章制度/',
                sidebarDepth: 1,
                children: [
                  "/规章制度/",
                  "/规章制度/学习",
                  "/规章制度/生活",
                  "/规章制度/机构",
                  "/规章制度/违纪之后",
                  "/规章制度/文件/"
                ]
            },
            {
                title: '学校生活',
                path: '/学校生活/',
                sidebarDepth: 1,
                children: [
                  "/学校生活/",
                  "/学校生活/吃",
                  "/学校生活/穿",
                  "/学校生活/住",
                  "/学校生活/行",
                  "/学校生活/玩",
                  "/学校生活/通信",
                  "/学校生活/受伤了"
                ]
            },
            ['/学业规划/', '学业规划'],
            ['/知识百科/', '知识百科'],
            ['/联系我们', '联系我们']
        ],
        smoothScroll: true
    },
    evergreen: true
}