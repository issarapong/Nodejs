const os = require('os')

function random() {
    return Math.floor(Math.random()*100)
}
function sysInfo(){
    return {
        cpu: os.cpus()[0].model,
        memory: os.totalmem(),
        version: os.version()
    }
}

const title ="Codecamp14"

module.exports ={ random, sysInfo, camp : title}
//module.exports ={ random, sysInfo, title}