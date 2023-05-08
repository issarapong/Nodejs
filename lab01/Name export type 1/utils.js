const os = require('os')
console.log('utils run..') 


exports.random=()=> {
    return Math.floor(Math.random()*100)
}
exports.sysInfo=()=>{
    return {
        cpu: os.cpus()[0].model,
        memory: os.totalmem(),
        version: os.version()
    }
}

exports.title ="Codecamp14"  // exports is object

//module.exports ={ random, sysInfo, camp : title}
//module.exports ={ random, sysInfo, title}