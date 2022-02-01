const express = require("express");
 const path = require('path');
const  database = require('./repo/db')
const mysql = require("mysql2");
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname));
app.use(require('./word'));


const arr = ["asdasd", "dsfsdf", "3333", "sdfsdfsdfsd"];

 app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'dict.html'));
});


app.listen(500, () => {
    console.log(`Server is running on port 500.`);
});