const chalk = require('chalk')
const axios = require('axios')
const {random, makecow} = require('./services')

const c_table =['yellow','red','green','blue']
axios.get(`https://dummyjson.com/quotes/${random(1, 100)}`)
.then( rs => {
    //console.log(rs.data.quote)
   // console.log(rs.data)
   //console.log(chalk[c_table[random(0,3)]](makecow(rs.data.quote)))
   console.log(chalk.rgb(random(0,255),random(0,255),random(0,255)](makecow(rs.data.quote))
} )