const fs = require('fs')
const axios = require('axios')
const svgContent = `<svg viewBox="0 0 460 460" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image xlink:href="data:image/png;base64," /></svg>`

async function main () {
  console.log('now starting to fetch contributors in github.')
  let ctbxhr = await axios.get('https://api.github.com/repos/ENDsoft233/51book/contributors?r=' + Math.random());
  let contributor = {}
  for (i = 0; i < ctbxhr.data.length; i++) {
    contributor = ctbxhr.data[i]
    console.log('fetching ' + contributor.login + "'s avatar..")
    let avatarRtn = await axios.get(contributor.avatar_url, { responseType: "arraybuffer" })
    fs.writeFileSync('./docs/.vuepress/public/github-avatars/' + contributor.login + '.svg', `<svg viewBox="0 0 460 460" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image xlink:href="data:image/png;base64,${avatarRtn.data.toString('base64')}" /></svg>`)
    fs.writeFileSync('./docs/README.md', fs.readFileSync('./docs/README.md').toString() + `\n\n- <img style="height: 24px;float: left;margin-right: 10px;border-radius: 15px;" src="./.vuepress/public/github-avatars/${contributor.login}.svg"> [${contributor.login}](${contributor.html_url}) - ${contributor.contributions} 次贡献.`)
    fs.writeFileSync('./docs/README.md', fs.readFileSync('./docs/联系我们.md').toString() + `\n\n- <img style="height: 24px;float: left;margin-right: 10px;border-radius: 15px;" src="./.vuepress/public/github-avatars/${contributor.login}.svg"> [${contributor.login}](${contributor.html_url}) - ${contributor.contributions} 次贡献.`)
  }


}

main()