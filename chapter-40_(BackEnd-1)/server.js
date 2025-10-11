// step 1- Create a folder
// step-2 - move into that folder
// step-3 - npm init -y
// step-4 open folder using vscode
//  step-5 npm i express
// step-6 node server.js


  
//  server instantiate
 const express = require('express');
 const app = express();


//   used to parse  =req.body in express -> PUT or POST
//  const bodyParser = require('body-parser');
//
 // specify parse JSON data & add it to the request. Body object 
//  app.use(bodyParser.json());
app.use(express.json()); 

 app.listen (3000, () => {
    console.log("Server started at port no. 3000");
 });


//  activate the server on 3000 port

 app.get('/', (request, response) => {
    response.send("Hello jee , kaise ho saare ");
 });


//  Routes

 app.post('/api/cars', (request, response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("Data received successfully.");
 })



 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/myDatabase',{
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
.then(() =>{console.log("Connect Successful")})
.catch((err) => {console.log("Recieved an error")});










