const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT= 3000;

app.use(express.json())

const connection = mysql.createConnection({
 host:'localhost',
 user:'root',
 password:'Amandome.14',
 database: 'compras2',
})
