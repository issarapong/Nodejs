const { fork } = require('child_process')
const path = require('path')

const child = fork(path.resolve('child.js'))
//const child2 = fork(path.resolve('child.js'))
//const child3 = fork(path.resolve('child.js'))
//const child4 = fork(path.resolve('child.js'))
//const child5 = fork(path.resolve('child.js'))

let numObj = {
    x:10,
    y:20
}

//child.send('hello from parent 🎅')
child.send(numObj)

child.on('message',(msg) => {
    console.log('Parent Recive :', msg)
})