const fs = require('fs')
const fsa = require ('fs/promises')

const run = async () => {
    let data1 = await fsa.readFile('./file01.txt','utf8')
    console.log(data1)
    let data2 = await fsa.readFile('./file02.txt','utf8')
    console.log(data2)
    let data3 = await fsa.readFile('./file03.txt','utf8')
    console.log(data3)
} 

console.time('run')
run()
console.timeEnd('run')

const run2 = async () => {
    try {
        let rs = await Promise.all([
            fsa.readFile('./file01.txt','utf8'),
            fsa.readFile('./file02.txt','utf8'),
            fsa.readFile('./file03.txt','utf8'),
        ] )
        console.log(rs)
    }catch (err) {
        console.log(err.message)
    }

} 

console.time('run2')
run2()
console.timeEnd('run2')