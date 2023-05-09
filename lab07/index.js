const http = require('http')

const server =http.createServer()

server.listen(8000, ()=> console.log('server on 8000'))

server.on('request', (req,res)=>  {
    console.log('Method :', req.method)
    console.log('path :'), req.url
    res.statusCode =200
    //res.setHeader('content-type', 'application/json')
    res.setHeader('content-type', 'text/plain')
//    res.write('<h1>CC14</h1>')
  //  res.write('<img src="https://i.ebayimg.com/images/g/~W4AAOSwnehdTTMu/s-l1600.jpg" >')
    res.write(JSON.stringify({name:'cc24', age: 44}))
    res.end()
} )
