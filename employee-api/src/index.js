const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const pool = require('./config/db.js')
const employeeRoutes = require('./routes/employeeRoutes.js')
const errorHandling = require('./middlewares/errorHandler.js')
const { createEmployeeTable } = require('./data/createEmployeeTable.js')

const app = express();
const port = process.env.PORT || 3001;
const db_name = process.env.DB_NAME 
const db_port = process.env.DB_PORT 
const db_user = process.env.DB_USER
const db_pwd = process.env.DB_PWD

// middleware

app.use(express.json())
app.use(cors())
app.use(errorHandling)

// bootstrap the db
createEmployeeTable()


// setting up the routes
app.use("/api", employeeRoutes)

app.get("/", async (req,res)=> {
    result = await pool.query("SELECT current_database()")
    res.send(` The database name is :${result.rows[0].current_database}`)
    console.log()
})
// starting up the server

app.listen(port, () => {
    console.log(db_pwd)
    console.log(`nodejs server running on  ${port}`)
})