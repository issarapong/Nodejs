const cowsay = require('cowsay')

exports.random = (min,max) => Math.floor(Math.random() * (max - min + 1) ) + min;
exports.makecow = (msg) =>  {
     let output = cowsay.say({
    text : msg,
    e : "oO",
    T : "U "
})
return output
}