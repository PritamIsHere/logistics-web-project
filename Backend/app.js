const express = require('express')
const cors = require('cors');
const mysql = require('mysql')


const app = express()
const port = 3000


var data

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

connection.connect()

var sql = 'SELECT * FROM `customer_details`'
connection.query(sql, (error, result) => {
    if (error) throw error;
    data = result
})

app.use(cors())

app.get('/customer-details', (req, res) => {
    res.send(JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})