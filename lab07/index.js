const http = require('http')

const server =http.createServer()


const todo =[
    
        {id:1, title : 'xxx'},
        {id:2, title : 'xxssx'},
        {id:3, title : 'xssxx'},    
]


server.listen(8000, ()=> console.log('server on 8000'))

server.on('request', (req,res)=>  {
    console.log('Method :', req.method)
    console.log('path : ',req.url)

     if(req.url.startsWith('/todo')) {
        let param =req.url.split('/').pop()
        let id = +param
        let result = todo.find(el => el.id === id)
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(result))
        return res.end()
     }



    res.statusCode =200
    //res.setHeader('content-type', 'application/json')
    res.setHeader('content-type', 'text/plain')
//    res.write('<h1>CC14</h1>')
  //  res.write('<img src="https://i.ebayimg.com/images/g/~W4AAOSwnehdTTMu/s-l1600.jpg" >')
    res.write(JSON.stringify({name:'cc24', age: 44}))
    res.end()
} )
