const pkg = require('pg')
const { Pool } = pkg;
const dotenv = require('dotenv').config()

const pool = new Pool ({
    user: process.env.DB_USER,
    host : process.env.DB_HOST,
    password : process.env.DB_PWD,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT

})

pool.on("connnect" , ()=>{
    console.log("Connection Pool established with DB")
})
module.exports = pool