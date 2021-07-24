const fs = require('fs')
const axios = require('axios')

async function main () {
  console.log('start to generate a sitemap by tools.bugscaner.com..')
  let r = await axios.get('http://tools.bugscaner.com/sitemapspider/download?type=xml&host=www.wz51z.wiki&make=automation&pinlv=weekly&youxianji=0.3&filter=1&filter1=0&unicode=1')
  if (r.status === 200) {
    fs.writeFileSync('./docs/.vuepress/dist/sitemap.xml', r.data)
    console.log('generated and put in /docs/.vuepress/dist/sitemap.xml')
  } else {
    console.log('generate failed with code ' + r.status)
  }

}
main()