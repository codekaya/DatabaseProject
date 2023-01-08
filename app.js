const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");      
require('dotenv').config();

const sql = require('mssql');

const config = {
  user: '<username>',
  password: '<password>',
  server: '<server>',
  database: '<database>',
};

sql.connect(config, (err) => {
  if (err) console.log(err);
  else console.log('Connected to the database');
});
const app = express();
const port = process.env.PORT || 5000;

const request = new sql.Request();

request.query('SELECT * FROM <table>', (err, result) => {
  if (err) console.log(err);
  else console.log(result);
});

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

//const userRouter = require('./users');
//app.use('/api/', userRouter);

app.listen(port, () => { console.log(`Server is running on port : ${port}`)});