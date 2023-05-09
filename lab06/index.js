
const path = require('path')


//const {resDir, cwd, resolve} = require('./res/index')
const {resDir, cwd, resolve, random} = require('./res/')
console.log(__dirname)
console.log(resDir())
console.log(cwd())
console.log(resolve())
console.log(random())

console.log(path.posix.join('public','data','user'))

console.log(path.join(__dirname,'data'))
console.log(path.join(__resolve,'data'))
console.log(__dirname)
console.log(path.dirname(__dirname))


//console.log(__filename)
//console.log(process.cwd())
//console.log(path.resolve())