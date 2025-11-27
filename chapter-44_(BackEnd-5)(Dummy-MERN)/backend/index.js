const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require ("./routes/user");
const app = express();
var cors = require ("cors");
const PORT = process.env.PORT || 4000;

app.use(
    cors({
        origin:"*",
    })
);

//  Middleware 

app.use(express.json());

app.use("/api/v1", userRoutes);

//  cors Configuration 

app.listen(PORT, () => {
    console.log(`This Server is Up And Running at Port  ${PORT}`);
});
dbConnect();

app.get("/", (req, res) =>{
    res.send (`<h1> Backend Server is Running and this is '/' Routes</h1>`);
});