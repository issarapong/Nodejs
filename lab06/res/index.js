const path =require('path')
const app01 = require('./app01')
exports.resDir = () => __dirname
exports.cwd = () => process.cwd()
exports.resolve = () => path.resolve()
exports.radom = app01.random