const chalk = require('chalk')
var cowsay = require("cowsay");

let msg = cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
});

console.log(chalk.blue(msg));