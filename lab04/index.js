//Syncronus
const fs = require('fs')
const fsa = require ('fs/promises')



console.log("-------------Sync-----------------")
//console.time('readSynce') //เริ่มต้นจับเวลา

//let data1 =fs.readFileSync('./file01.txt', 'base64')
let data1 =fs.readFileSync('./file01.tx', 'utf8')
console.log(data1)

let data2 =fs.readFileSync('./file02.txt', 'utf8')
console.log(data2)

let data3 =fs.readFileSync('./file03.txt', 'utf8')
console.log(data3)

//console.timeEnd('readSynce') // 








//------------Asyncrous callback--------
console.log("--------------Async callback-----------------")
console.time('readCB')
fs.readFile('./file01.txt', 'utf8', (err, data) => console.log(data))
fs.readFile('./file02.txt', 'utf8', (err, data) => console.log(data))
fs.readFile('./file03.txt', 'utf8', (err, data) => console.log(data))
console.timeEnd('readCB')

//------------Asyncrous promise--------
console.log("--------------Async promise-----------------")

console.time('readPM')
fsa.readFile('./file01.txt','utf8').then( data => console.log(data))
fsa.readFile('./file02.txt','utf8').then( data => console.log(data))
fsa.readFile('./file03.txt','utf8').then( data => console.log(data))
console.timeEnd('readPM')

