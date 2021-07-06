const fs= require('fs')

const glob = require('glob')

const files = glob.sync('./docs/.vuepress/dist/**/*.html')
const prefix = fs.readFileSync('./header').toString()

for(const file of files){
    console.log(file)
    let content = fs.readFileSync(file).toString()
    content = '<!--\n' + prefix + '\n-->\n' + content
    fs.writeFileSync(file, content)
}