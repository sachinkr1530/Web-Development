//  Importing the mongoose library
const mongoose = require("mongoose");

// Importing the environment variables from the .env file

// require("dotenv");

require("dotenv").config();

//  defining a function to connect to the database

const dbConnect =() =>{
    //  Connecting to the databse using the provided URL from the enviroment variables
    mongoose
        .connect(process.env.DATABASE_URL, {
            // useNewUrlparser: true,
            // useUnifiedTopology: true,
        })
        //  If the Connection is successful, log a success message
        .then(() => console.log("DB CONNECTION SUCCESS"))
        //  if there are issues connecting to the databse, log an error message and exit the process
        .catch((err)=>{
            console.log(`DB CONNECTION ISSUES`);
            console.error(err.message);
            process.exit(1);

        });
        
};

module.exports = dbConnect;
