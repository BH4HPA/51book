module.exports = {
  title: '温州市第五十一中学新生导引',
  description: '温州市第五十一中学新生导引，提供五十一中生存学习攻略，帮助新同学快速了解校园，融入校园，更快地进入学习环境。',
  base: '/',
  lang: 'zh-CN',
  plugins: ['@vuepress/plugin-search'],
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
        }else if(window.location.host === "localhost:8080"){
          console.log('dev server.')
        }else if(window.location.host === "51.r-ay.cn"){
          window.location.href = 'https://www.wz51z.wiki' + window.location.href.substring(('https://' + window.location.host).length);
        }
        `],
    ['style', { 'remark': 'video' }, `
        .video a:before{
          content: '';
          position: absolute;
          display: block;
          width: 30px;
          height: 30px;
          top: -5px;
          left: -4px;
          border-radius: 50%;
          background-color: #73abfe;
        }
        .video a:after{
          content: '';
          position: absolute;
          display: block;
          width: 0;
          height: 0;
          top: 5px;
          left: 8px;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid #fff;
        }
        `]
  ],
  markdown: {
    links: true,
    anchor: false
  },
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
    openInNewWindow: '在新标签页打开',
    notFound: ['没找到你要的，刷新试试？'],
    backToHome: '返回首页。',
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
          { text: '寝室生活', link: '/新生准备/寝室生活.html' },
          { text: '学习生活', link: '/新生准备/学习生活.html' },
          { text: '文化生活', link: '/新生准备/文化生活.html' }
        ]
      },
      { text: '学校布局', link: '/学校布局/' },
      {
        text: '学校文化',
        link: '/学校文化/',
        children: [
          { text: '开始之前', link: '/学校文化/' },
          { text: '校志', link: '/学校文化/校志.html' },
          { text: '校训', link: '/学校文化/校训.html' },
          { text: '办学历程', link: '/学校文化/办学历程.html' }
        ]
      },
      {
        text: '学校生活',
        link: '/学校生活/',
        children: [
          { text: '开始之前', link: "/学校生活/" },
          { text: '吃', link: "/学校生活/吃.html" },
          { text: '穿', link: "/学校生活/穿.html" },
          { text: '住', link: "/学校生活/住.html" },
          { text: '行', link: "/学校生活/行.html" },
          {
            text: '玩',
            link: "/学校生活/玩/",
            children: [
              { text: '开始之前', link: "/学校生活/玩/" },
              { text: '军训', link: "/学校生活/玩/军训.html" },
              { text: '迎新晚会', link: "/学校生活/玩/迎新晚会.html" },
              { text: '运动会', link: "/学校生活/玩/运动会.html" },
              { text: '艺术节', link: "/学校生活/玩/艺术节.html" },
              { text: '寝室文化节', link: "/学校生活/玩/寝室文化节.html" },
              { text: '社团文化节', link: "/学校生活/玩/社团文化节.html" },
              { text: '篮球赛', link: "/学校生活/玩/篮球赛.html" },
              { text: '校园吉尼斯', link: "/学校生活/玩/校园吉尼斯.html" },
              { text: '暑期社会实践', link: "/学校生活/玩/暑期社会实践.html" },
              { text: '团日活动', link: "/学校生活/玩/团日活动.html" },
              { text: '心理活动周', link: "/学校生活/玩/心理活动周.html" },
              { text: '社团活动', link: "/学校生活/玩/社团.html" },
              { text: '学科活动月', link: "/学校生活/玩/学科活动月.html" },
              { text: '校外实践', link: "/学校生活/玩/校外实践.html" },
              { text: '业余党校', link: "/学校生活/玩/业余党校.html" },
              { text: '班主任节', link: "/学校生活/玩/班主任节.html" },
              { text: '成人远足', link: "/学校生活/玩/成人远足.html" },
            ]
          },
          { text: '通信', link: "/学校生活/通信.html" },
          { text: '受伤了', link: "/学校生活/受伤了.html" }
        ]
      },
      { text: '学业规划', link: '/学业规划/' },
      {
        text: '规章制度',
        link: '/规章制度/',
        children: [
          { text: '开始之前', link: "/规章制度/" },
          { text: '学习', link: "/规章制度/学习.html" },
          { text: '生活', link: "/规章制度/生活.html" },
          { text: '机构', link: "/规章制度/机构.html" },
          { text: '违纪之后', link: "/规章制度/违纪之后.html" },
          {
            text: '章程文件',
            link: '/规章制度/文件/',
            children: [
              {
                text: '一、学校章程制度',
                link: "/规章制度/文件/一、学校章程制度/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/一、学校章程制度/" },
                  { text: '（一）中小学生守则', link: "/规章制度/文件/一、学校章程制度/（一）中小学生守则.html" },
                  { text: '（二）中学生日常行为规范（修订）', link: "/规章制度/文件/一、学校章程制度/（二）中学生日常行为规范（修订）.html" },
                  { text: '（三）温州市第五十一中学生学籍管理条例（修订）', link: "/规章制度/文件/一、学校章程制度/（三）温州市第五十一中学生学籍管理条例（修订）.html" },
                  { text: '（四）五十一中学业余党校章程', link: "/规章制度/文件/一、学校章程制度/（四）五十一中学业余党校章程.html" },
                  { text: '（五）考试制度', link: "/规章制度/文件/一、学校章程制度/（五）考试制度.html" },
                  { text: '（六）团委学生会干事招新及干部换雇细则', link: "/规章制度/文件/一、学校章程制度/（六）团委学生会干事招新及干部换雇细则.html" },
                  { text: '（七）权益维护制度', link: "/规章制度/文件/一、学校章程制度/（七）权益维护制度.html" },
                  { text: '（八）处分制度', link: "/规章制度/文件/一、学校章程制度/（八）处分制度.html" },
                  { text: '（九）校级优秀学生、优秀学生干部、先进班集体评选制度', link: "/规章制度/文件/一、学校章程制度/（九）校级优秀学生、优秀学生干部、先进班集体评选制度.html" },
                  { text: '（十）传达室管理制度', link: "/规章制度/文件/一、学校章程制度/（十）传达室管理制度.html" }
                ]
              },
              {
                text: '二、常规管理相关条例',
                link: "/规章制度/文件/二、常规管理相关条例/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/二、常规管理相关条例/" },
                  { text: '（一）温州市第五十一中学班级常规考核实施办法', link: "/规章制度/文件/二、常规管理相关条例/（一）温州市第五十一中学班级常规考核实施办法.html" },
                  { text: '（二）温州市第五十一中学学生发展指数操作细则（修订）', link: "/规章制度/文件/二、常规管理相关条例/（二）温州市第五十一中学学生发展指数操作细则（修订）.html" },
                  { text: '（三）五十一中学生自主学习十个细节', link: "/规章制度/文件/二、常规管理相关条例/（三）五十一中学生自主学习十个细节.html" },
                  { text: '（四）考勤制度', link: "/规章制度/文件/二、常规管理相关条例/（四）考勤制度.html" },
                  { text: '（五）请假制度', link: "/规章制度/文件/二、常规管理相关条例/（五）请假制度.html" },
                  { text: '（六）晚自修管理制度', link: "/规章制度/文件/二、常规管理相关条例/（六）晚自修管理制度.html" },
                  { text: '（七）温州市第五十一中学值周班管理规定', link: "/规章制度/文件/二、常规管理相关条例/（七）温州市第五十一中学值周班管理规定.html" },
                  { text: '（八）校园环境卫生管理办法', link: "/规章制度/文件/二、常规管理相关条例/（八）校园环境卫生管理办法.html" },
                  { text: '（九）文明用膳制度', link: "/规章制度/文件/二、常规管理相关条例/（九）文明用膳制度.html" }
                ]
              },
              {
                text: '三、宿舍管理规定',
                link: "/规章制度/文件/三、宿舍管理规定/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/三、宿舍管理规定/" },
                  { text: '（一）寝室管理细则', link: "/规章制度/文件/三、宿舍管理规定/（一）寝室管理细则.html" },
                  { text: '（二）周末住校管理规定', link: "/规章制度/文件/三、宿舍管理规定/（二）周末住校管理规定.html" },
                  { text: '（三）寝室评优办法', link: "/规章制度/文件/三、宿舍管理规定/（三）寝室评优办法.html" },
                  { text: '（四）走读生管理办法', link: "/规章制度/文件/三、宿舍管理规定/（四）走读生管理办法.html" },
                  { text: '（五）学生宿管人员职责', link: "/规章制度/文件/三、宿舍管理规定/（五）学生宿管人员职责.html" },
                  { text: '（六）学生宿舍内务、纪律评分细则', link: "/规章制度/文件/三、宿舍管理规定/（六）学生宿舍内务、纪律评分细则.html" }
                ]
              },
              {
                text: '四、场馆管理规定',
                link: "/规章制度/文件/四、场馆管理规定/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/四、场馆管理规定/" },
                  { text: '（一）实验室守则', link: "/规章制度/文件/四、场馆管理规定/（一）实验室守则.html" },
                  { text: '（二）计算机室守则', link: "/规章制度/文件/四、场馆管理规定/（二）计算机室守则.html" }
                ]
              },
              {
                text: '五、安全注意事项',
                link: "/规章制度/文件/五、安全注意事项/",
                children: [
                  { text: '开始之前', link: "/规章制度/文件/五、安全注意事项/" },
                  { text: '（一）温州市第五十一中学安全工作章程', link: "/规章制度/文件/五、安全注意事项/（一）温州市第五十一中学安全工作章程.html" },
                  { text: '（二）校园涉外安全管理细则', link: "/规章制度/文件/五、安全注意事项/（二）校园涉外安全管理细则.html" },
                  { text: '（三）体育运动中的安全问题', link: "/规章制度/文件/五、安全注意事项/（三）体育运动中的安全问题.html" },
                  { text: '（四）户外安全', link: "/规章制度/文件/五、安全注意事项/（四）户外安全.html" },
                  { text: '（五）心理健康与人身安全', link: "/规章制度/文件/五、安全注意事项/（五）心理健康与人身安全.html" },
                  { text: '（六）火场逃生十要素', link: "/规章制度/文件/五、安全注意事项/（六）火场逃生十要素.html" },
                  { text: '（附一）五十一中学应急、疏散逃生预案', link: "/规章制度/文件/五、安全注意事项/（附一）五十一中学应急、疏散逃生预案.html" },
                  { text: '（附二）教室用电安全注意事项', link: "/规章制度/文件/五、安全注意事项/（附二）教室用电安全注意事项.html" }
                ]
              }
            ]
          },
        ]
      },
      { text: '知识百科', link: '/知识百科/' },
      { text: '联系我们', link: '/联系我们.html' }
    ]
  }
}