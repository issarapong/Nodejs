const { readFile, writeFile} = require('fs/promises')
const path = require('path')



let products = path.resolve('products.json')   // reccomend path.resolve
let summary = path.resolve('summary.json')

//console.log(product)

const getFile = file => {
    return readFile(file, 'utf8')
}

//getFile(products).then(data => console.log(data))

getFile(products).then( raw => {
    let data = JSON.parse(raw)
    let output = data.reduce ((a,c) => {
        //console.log(c.category)
      //a.push(c.category.name)
      //return a
         if( !a[c.category.name])
              a[c.category.name] = 0
         a[c.category.name] += 1
        a.all +=1
        return a
   
   
    },{all : 0})
    return output
}).then(output => {
    writeFile(summary, JSON.stringify(output))
    return('OK')
}).then(console.log)