const fs = require('fs/promises')

// let todo = [
//     { id: 1, title: 'Learn NodeJS'},
//     { id: 2, title: 'Learn ExpressJS'},
//     { id: 3, title: 'Learn MySQL'},
// ]

// ให้ readFile ออกมาแสดงที่ console หลังจาก writeFile แล้ว

// fs.writeFile('./data.json', JSON.stringify(todo) )
// .then( () => fs.readFile('./data.json','utf8'))
// .then( data => console.log(data))

let newTodo = {id: 4, title: 'Learn Promise'}

// ให้เอา newTodo นี้ไปเพิ่มที่ data.json 
// Promise = Object .then .catch

fs.readFile('./data.json','utf8')
.then(todo => {
    let all = JSON.parse(todo)
    all.push(newTodo)
    return all
}).then(data => {
    fs.writeFile('./data.json', JSON.stringify(data,null,2))
    return data
}).then(x => console.log(x))