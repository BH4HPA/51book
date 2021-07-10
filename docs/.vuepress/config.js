module.exports = {
    title: '温州市第五十一中学新生导引',
    description: '温州市第五十一中学新生导引，提供五十一中生存学习攻略，帮助新同学快速了解校园，融入校园，更快地进入学习环境。',
    base: '/',
    serviceWorker: true,
    markdown: {
        lineNumbers: true,
        externalLinks: { target: '_blank' }
    },
    locales:{
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ['meta', { name: 'keywords', content: '温州市第五十一中学,温州市五十一中学,温州市第51中学,温州市51中学,五十一中学,五十一中,51中,51中学,温五十一中,温51中,浙江省温州中学,温州中学,温一中,新生,五十一中新生,温州市第五十一中学贴吧,新生导引,新生攻略' }],
        ['script',{'async' : true,'remark':'谷歌统计','src':'https://www.googletagmanager.com/gtag/js?id=G-KBCEGHYVVV'}],
        ['script',{'remark':'统计'},`
        if(window.location.host === "51.r-ay.cn"){
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KBCEGHYVVV');

            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://tr.wd-ljt.com/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '9']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
            
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?89c2fe6b6514ef31e889450cee8599ac";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        }
        `]
    ],
    themeConfig: {
        docsRepo: 'ENDsoft233/51book',
        docsDir: 'docs',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮我们一起完善',
        lastUpdated: '上次修改 ',
        nav: [
            { text: '加入读者交流群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=z-_ivibiwB4JEXrBdCB2oK9SzhJp8gq_&jump_from=webapi' },
            { text: '返回 五十一中官网', link: 'http://www.wz51z.com/' }
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