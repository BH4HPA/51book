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
    ['meta', { name: 'keywords', content: '温州市第五十一中学新生导引,温州市第五十一中学,温州市五十一中学,温州市第51中学,温州市51中学,五十一中学,五十一中,51中,51中学,温五十一中,温51中,浙江省温州中学,温州中学,温一中,新生,五十一中新生,温州市第五十一中学贴吧,新生导引,新生攻略' }],
    ['script', { 'async': true, 'remark': '谷歌统计', 'src': 'https://www.googletagmanager.com/gtag/js?id=G-DYCSYN7GFC' }],
    ['script', { 'remark': '统计' }, `
        if(window.location.host === "www.wz51z.wiki"){
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DYCSYN7GFC');
            
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?5c7b60df1e46195f2dda5d21854f3a3a";
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
    editLink: true,
    editLinkText: '帮我们一起完善',
    logo: 'https://i.loli.net/2021/07/18/C8VybnX4NUEIDJT.png',
    lastUpdated: true,
    lastUpdatedText: '上次修改 ',
    contributors: true,
    contributorsText: '本页贡献者 ',
    navbar: [
      { text: '加入读者交流群', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=z-_ivibiwB4JEXrBdCB2oK9SzhJp8gq_&jump_from=webapi' },
      { text: '返回 五十一中官网', link: 'http://www.wz51z.com/' }
    ],
    sidebar: [
      { text: '开始之前', link: '/' },
      {
        text: '新生准备',
        link: '/新生准备/',
        children: [
          { text: '开始之前', link: '/新生准备/' },
          { text: '寝室生活', link: '/新生准备/寝室生活.md' },
          { text: '学习生活', link: '/新生准备/学习生活.md' },
          { text: '文化生活', link: '/新生准备/文化生活.md' }
        ]
      },
      {
        text: '学校文化',
        link: '/学校文化/',
        children: [
          { text: '开始之前', link: '/学校文化/' },
          { text: '寝室生活', link: '/学校文化/校志.md' },
          { text: '学习生活', link: '/学校文化/校训.md' },
          { text: '文化生活', link: '/学校文化/办学历程.md' }
        ]
      },
      { text: '学校布局', link: '/学校布局/' },
      {
        text: '规章制度',
        link: '/规章制度/',
        children: [
          { text: '开始之前', link: "/规章制度/" },
          { text: '学习', link: "/规章制度/学习.md" },
          { text: '生活', link: "/规章制度/生活.md" },
          { text: '机构', link: "/规章制度/机构.md" },
          { text: '违纪之后', link: "/规章制度/违纪之后.md" },
          {
            text: '章程文件',
            link: '/规章制度/文件/',
            children: [
              {
                text: '一、学校章程制度',
                link: "/规章制度/文件/一、学校章程制度/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/一、学校章程制度/" },
                  { text: '（一）中小学生守则', link: "/规章制度/文件/一、学校章程制度/（一）中小学生守则.md" },
                  { text: '（二）中学生日常行为规范（修订）', link: "/规章制度/文件/一、学校章程制度/（二）中学生日常行为规范（修订）.md" },
                  { text: '（三）温州市第五十一中学生学籍管理条例（修订）', link: "/规章制度/文件/一、学校章程制度/（三）温州市第五十一中学生学籍管理条例（修订）.md" },
                  { text: '（四）五十一中学业余党校章程', link: "/规章制度/文件/一、学校章程制度/（四）五十一中学业余党校章程.md" },
                  { text: '（五）考试制度', link: "/规章制度/文件/一、学校章程制度/（五）考试制度.md" },
                  { text: '（六）团委学生会干事招新及干部换雇细则', link: "/规章制度/文件/一、学校章程制度/（六）团委学生会干事招新及干部换雇细则.md" },
                  { text: '（七）权益维护制度', link: "/规章制度/文件/一、学校章程制度/（七）权益维护制度.md" },
                  { text: '（八）处分制度', link: "/规章制度/文件/一、学校章程制度/（八）处分制度.md" },
                  { text: '（九）校级优秀学生、优秀学生干部、先进班集体评选制度', link: "/规章制度/文件/一、学校章程制度/（九）校级优秀学生、优秀学生干部、先进班集体评选制度.md" },
                  { text: '（十）传达室管理制度', link: "/规章制度/文件/一、学校章程制度/（十）传达室管理制度.md" }
                ]
              },
              {
                text: '二、常规管理相关条例',
                link: "/规章制度/文件/二、常规管理相关条例/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/二、常规管理相关条例/" },
                  { text: '（一）温州市第五十一中学班级常规考核实施办法', link: "/规章制度/文件/二、常规管理相关条例/（一）温州市第五十一中学班级常规考核实施办法.md" },
                  { text: '（二）温州市第五十一中学学生发展指数操作细则（修订）', link: "/规章制度/文件/二、常规管理相关条例/（二）温州市第五十一中学学生发展指数操作细则（修订）.md" },
                  { text: '（三）五十一中学生自主学习十个细节', link: "/规章制度/文件/二、常规管理相关条例/（三）五十一中学生自主学习十个细节.md" },
                  { text: '（四）考勤制度', link: "/规章制度/文件/二、常规管理相关条例/（四）考勤制度.md" },
                  { text: '（五）请假制度', link: "/规章制度/文件/二、常规管理相关条例/（五）请假制度.md" },
                  { text: '（六）晚自修管理制度', link: "/规章制度/文件/二、常规管理相关条例/（六）晚自修管理制度.md" },
                  { text: '（七）温州市第五十一中学值周班管理规定', link: "/规章制度/文件/二、常规管理相关条例/（七）温州市第五十一中学值周班管理规定.md" },
                  { text: '（八）校园环境卫生管理办法', link: "/规章制度/文件/二、常规管理相关条例/（八）校园环境卫生管理办法.md" },
                  { text: '（九）文明用膳制度', link: "/规章制度/文件/二、常规管理相关条例/（九）文明用膳制度.md" }
                ]
              },
              {
                text: '三、宿舍管理规定',
                link: "/规章制度/文件/三、宿舍管理规定/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/三、宿舍管理规定/" },
                  { text: '（一）寝室管理细则', link: "/规章制度/文件/三、宿舍管理规定/（一）寝室管理细则.md" },
                  { text: '（二）周末住校管理规定', link: "/规章制度/文件/三、宿舍管理规定/（二）周末住校管理规定.md" },
                  { text: '（三）寝室评优办法', link: "/规章制度/文件/三、宿舍管理规定/（三）寝室评优办法.md" },
                  { text: '（四）走读生管理办法', link: "/规章制度/文件/三、宿舍管理规定/（四）走读生管理办法.md" },
                  { text: '（五）学生宿管人员职责', link: "/规章制度/文件/三、宿舍管理规定/（五）学生宿管人员职责.md" },
                  { text: '（六）学生宿舍内务、纪律评分细则', link: "/规章制度/文件/三、宿舍管理规定/（六）学生宿舍内务、纪律评分细则.md" }
                ]
              },
              {
                text: '四、场馆管理规定',
                link: "/规章制度/文件/四、场馆管理规定/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/四、场馆管理规定/" },
                  { text: '（一）实验室守则', link: "/规章制度/文件/四、场馆管理规定/（一）实验室守则.md" },
                  { text: '（二）计算机室守则', link: "/规章制度/文件/四、场馆管理规定/（二）计算机室守则.md" }
                ]
              },
              {
                text: '五、安全注意事项',
                link: "/规章制度/文件/五、安全注意事项/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/五、安全注意事项/" },
                  { text: '（一）温州市第五十一中学安全工作章程', link: "/规章制度/文件/五、安全注意事项/（一）温州市第五十一中学安全工作章程.md" },
                  { text: '（二）校园涉外安全管理细则', link: "/规章制度/文件/五、安全注意事项/（二）校园涉外安全管理细则.md" },
                  { text: '（三）体育运动中的安全问题', link: "/规章制度/文件/五、安全注意事项/（三）体育运动中的安全问题.md" },
                  { text: '（四）户外安全', link: "/规章制度/文件/五、安全注意事项/（四）户外安全.md" },
                  { text: '（五）心理健康与人身安全', link: "/规章制度/文件/五、安全注意事项/（五）心理健康与人身安全.md" },
                  { text: '（六）火场逃生十要素', link: "/规章制度/文件/五、安全注意事项/（六）火场逃生十要素.md" },
                  { text: '（附一）五十一中学应急、疏散逃生预案', link: "/规章制度/文件/五、安全注意事项/（附一）五十一中学应急、疏散逃生预案.md" },
                  { text: '（附二）教室用电安全注意事项', link: "/规章制度/文件/五、安全注意事项/（附二）教室用电安全注意事项.md" }
                ]
              }
            ]
          },
        ]
      },
      {
        text: '学校生活',
        link: '/学校生活/',
        children: [
          { text: '开始之前', link: "/学校生活/" },
          { text: '吃', link: "/学校生活/吃.md" },
          { text: '穿', link: "/学校生活/穿.md" },
          { text: '住', link: "/学校生活/住.md" },
          { text: '行', link: "/学校生活/行.md" },
          { text: '玩', link: "/学校生活/玩.md" },
          { text: '通信', link: "/学校生活/通信.md" },
          { text: '受伤了', link: "/学校生活/受伤了.md" }
        ]
      },
      { text: '学业规划', link: '/学业规划/' },
      { text: '知识百科', link: '/知识百科/' },
      { text: '联系我们', link: '/联系我们.md' }
    ],
    smoothScroll: true
  },
  evergreen: true
}