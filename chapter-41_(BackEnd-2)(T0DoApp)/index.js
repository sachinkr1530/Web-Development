


const express = require('express');
const app= express();

//  load config from env file 

require('dotenv').config();
const PORT =process.env.PORT ||3000;

// middlewares to parse json data
app.use(express.json());

// import routes for TODO API

const todoRoutes = require("./routes/todo");

//  mount the todo ASPI Routes

app.use('/api/v1/',todoRoutes);

//   start server 
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

//  connection to the database
const dbConnect = require('./config/database');
dbConnect();

//  defaulr route
app.get("/", (req, res) => {
    res.send(`<h1>Welcome To My World Baby</h1>`);
});