const mongoose =require('mongoose');
 require ("dotenv").config();

 exports.connect = () =>{
     mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

     })
   //   .then(console.log("DB connect successful"))
   .then(() => console.log("DB connect successful"))

     .catch((error)=>{
        console.log("DB connecction issue");
        console.log(error);
        process.exit(1)
     });
 };
 
 