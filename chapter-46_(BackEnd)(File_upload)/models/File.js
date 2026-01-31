const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true ,
    },
    imageUrl:{
        type: String,
        required: true,
    },
    tags:{
        type:String,
    },
    email:{
        type:String,
    }
});

//  post middleware 

fileSchema.post("save" , async function(doc){
    try {

        console.log("Doc", doc);

        //  transporter 

        //  TODO : shift this Configuration under /config folder 
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST, 
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,

            },
        })

        //  send mail 

        let info = await transporter.sendMail({
            from:`Sachin `,
            to: doc.email, 
            subject:"New File Uploaded on Cloudinary",
            html:`<h2>Hello Ji</h2> <p>File Uploaded View here : <a href="${doc.imageUrl}">${doc.imageUrl}</a> </p>`,
        })
        console.log("INFO" ,info);
        
    } catch (error) {
        console.log(error)
        
    }

})

const File = mongoose.model("File", fileSchema);
module.exports = File;