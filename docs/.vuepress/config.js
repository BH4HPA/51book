module.exports = {
  title: '温州市第五十一中学新生导引',
  description: '温州市第五十一中学新生导引，提供五十一中生存学习攻略，帮助新同学快速了解校园，融入校园，更快地进入学习环境。',
  base: '/',
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
    externalLinks: { target: '_blank' }
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { "rel": 'icon', href: 'https://i.loli.net/2021/07/18/X9h3ZYpyNK7jwCS.png' }],
    ['meta', { "itemprop": 'image', content: 'https://i.loli.net/2021/07/18/X9h3ZYpyNK7jwCS.png' }],
    ['meta', { "http-equiv": 'Content-Type', content: 'text/html; charset=UTF-8' }],
    ['meta', { name: 'keywords', content: '温州市第五十一中学,温州市五十一中学,温州市第51中学,温州市51中学,五十一中学,五十一中,51中,51中学,温五十一中,温51中,浙江省温州中学,温州中学,温一中,新生,五十一中新生,温州市第五十一中学贴吧,新生导引,新生攻略' }],
    ['script', { 'async': true, 'remark': '谷歌统计', 'src': 'https://www.googletagmanager.com/gtag/js?id=G-KBCEGHYVVV' }],
    ['script', { 'remark': '统计' }, `
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
    logo: 'https://i.loli.net/2021/07/18/X9h3ZYpyNK7jwCS.png',
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
          "/规章制度/违纪之后"
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
      {
        title: '章程文件',
        path: '/规章制度/文件/',
        sidebarDepth: 1,
        children: [
          "/规章制度/文件/一、学校章程制度/",
          "/规章制度/文件/一、学校章程制度/（一）中小学生守则",
          "/规章制度/文件/一、学校章程制度/（二）中学生日常行为规范（修订）",
          "/规章制度/文件/一、学校章程制度/（三）温州市第五十一中学生学籍管理条例（修订）",
          "/规章制度/文件/一、学校章程制度/（四）五十一中学业余党校章程",
          "/规章制度/文件/一、学校章程制度/（五）考试制度",
          "/规章制度/文件/一、学校章程制度/（六）团委学生会干事招新及干部换雇细则",
          "/规章制度/文件/一、学校章程制度/（七）权益维护制度",
          "/规章制度/文件/一、学校章程制度/（八）处分制度",
          "/规章制度/文件/一、学校章程制度/（九）校级优秀学生、优秀学生干部、先进班集体评选制度",
          "/规章制度/文件/一、学校章程制度/（十）传达室管理制度",
          "/规章制度/文件/二、常规管理相关条例/",
          "/规章制度/文件/二、常规管理相关条例/（一）温州市第五十一中学班级常规考核实施办法",
          "/规章制度/文件/二、常规管理相关条例/（二）温州市第五十一中学学生发展指数操作细则（修订）",
          "/规章制度/文件/二、常规管理相关条例/（三）五十一中学生自主学习十个细节",
          "/规章制度/文件/二、常规管理相关条例/（四）考勤制度",
          "/规章制度/文件/二、常规管理相关条例/（五）请假制度",
          "/规章制度/文件/二、常规管理相关条例/（六）晚自修管理制度",
          "/规章制度/文件/二、常规管理相关条例/（七）温州市第五十一中学值周班管理规定",
          "/规章制度/文件/二、常规管理相关条例/（八）校园环境卫生管理办法",
          "/规章制度/文件/二、常规管理相关条例/（九）文明用膳制度",
          "/规章制度/文件/三、宿舍管理规定/",
          "/规章制度/文件/三、宿舍管理规定/（一）寝室管理细则",
          "/规章制度/文件/三、宿舍管理规定/（二）周末住校管理规定",
          "/规章制度/文件/三、宿舍管理规定/（三）寝室评优办法",
          "/规章制度/文件/三、宿舍管理规定/（四）走读生管理办法",
          "/规章制度/文件/三、宿舍管理规定/（五）学生宿管人员职责",
          "/规章制度/文件/三、宿舍管理规定/（六）学生宿舍内务、纪律评分细则",
          "/规章制度/文件/四、场馆管理规定/",
          "/规章制度/文件/四、场馆管理规定/（一）实验室守则",
          "/规章制度/文件/四、场馆管理规定/（二）计算机室守则",
          "/规章制度/文件/五、安全注意事项/",
          "/规章制度/文件/五、安全注意事项/（一）温州市第五十一中学安全工作章程",
          "/规章制度/文件/五、安全注意事项/（二）校园涉外安全管理细则",
          "/规章制度/文件/五、安全注意事项/（三）体育运动中的安全问题",
          "/规章制度/文件/五、安全注意事项/（四）户外安全",
          "/规章制度/文件/五、安全注意事项/（五）心理健康与人身安全",
          "/规章制度/文件/五、安全注意事项/（六）火场逃生十要素",
          "/规章制度/文件/五、安全注意事项/（附一）五十一中学应急、疏散逃生预案",
          "/规章制度/文件/五、安全注意事项/（附二）教室用电安全注意事项"
        ]
      },
      ['/联系我们', '联系我们']
    ],
    smoothScroll: true
  },
  evergreen: true
}