
const {random, sysInfo, camp} = require('./utils_1') // import and destructure



//const {random, sysInfo, title : camp} = require('./utils') // เปลี่ยนชื่อตัวแปร เพื่อไม่ให้ซศ้ำกับที่ีอยุ่
//const utils = require('./utils') // import ลักษะณะนี้เวลาใช้งาน ต้องเรียกแบบ utils.xxxx
console.log(random())
console.log(camp)   //title
console.log(sysInfo())

//or #️⃣
//console.log(require('./utils').sysInfo())
