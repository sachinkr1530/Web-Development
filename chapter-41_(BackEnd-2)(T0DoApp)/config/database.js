const mongoose = require("mongoose");

require("dotenv").config();
//  is line se sara ka ka .env file process  me load ho jaayega

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB ka Connection is Sucessful"))
    .catch((error) => {
      console.log("Error in DB Connection");
      console.log(error.message);
      process.exit(1);
    });
}

module.exports = dbConnect;