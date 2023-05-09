process.on('message', numObj => {
   let {x,y} = numObj

    console.log(' child Recive from parent:', numObj)
    process.send(x+y)

})


process.send('hello from child 🧒')