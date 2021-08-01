const fs = require('fs')
const axios = require('axios')

async function main () {
  console.log('start to generate a sitemap by tools.bugscaner.com..')
  await axios.post('http://tools.bugscaner.com/sitemapspider', 'url=https%3A%2F%2Fwww.wz51z.wiki%2F&encoding=utf-8&make=automation&agent=firefox&pinlv=weekly&youxianji=0.3&filter=1&unicode=1')
  let r = await axios.get('http://tools.bugscaner.com/sitemapspider/download?type=xml&host=www.wz51z.wiki&make=automation&pinlv=weekly&youxianji=0.3&filter=1&filter1=0&unicode=1')
  if (r.status === 200) {
    fs.writeFileSync('./docs/.vuepress/dist/sitemap.xml', r.data.split('.md').join('.html'))
    console.log('generated and put in /docs/.vuepress/dist/sitemap.xml')
  } else {
    console.log('generate failed with code ' + r.status)
  }

}
main()