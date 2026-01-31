const File = require("../models/File");
const cloudinary = require("cloudinary").v2;



//  loacalfileupload -> handler function 

exports.loacalFileUpload = async (req ,res) =>{
    try {
         
        // fetch file  from request
        const file = req.files.file;
        console.log("File uploaded:=>", file)

        // Note    // *__dirname => jis current working directory hogi usko ye batta h  *

        // create path where file needs to be stored on server
        let path =__dirname+"/files/"+Date.now() + `.${file.name.split('.')[1]}`;
        console.log("PATH =>",path)

        //  add path to the move function 
        file.mv(path, (err) =>{
            console.log(err);  
        });

        //  create a successful response 
        res.json({
            success:true,
            message:'Loacal File Uploaded Successfully',
        });
    }
    catch (error) {
        console.log("Not able to upload the file ")
        console.log(error)

    }
}


function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file,folder,quality){
    const options = {folder};
    console.log("temp file path", file.tempFilePath);

    if(quality){
        options.quality=quality;
    }

    options.resource_type = "auto";
   return  await cloudinary.uploader.upload(file.tempFilePath,options);
}

//  image upload ka handler 
exports.imageUpload = async (req ,res) =>{
    try{
        //  data fetch 
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //  validation 

        const supportedTypes =["jpg","jpeg","png","gif"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File Format Not Supported',
            })
        }

        //  file format is supported

        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log(response)


        //  db me entry save karni  h 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Uploaded Successfully',
            
        })

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:'Something went wrong while uploading image',
        })
        
    }
}



//  video upload karna  h 

exports.videoUpload = async (req,res)=>{
    try{

        //  data fetch
        const {name, tags, email}= req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;


         //  validation 
        const supportedTypes =["mp4","mov","mkv"];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log("File Type: ",fileType);

        // TODO: add a upper Limit of 5MB for Video Files

        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File Format Not Supported',
            })
        }

        //  file format is supported
        const response = await uploadFileToCloudinary(file, "codehelp");
        console.log(response)

         //  db me entry save karni  h 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Video Uploaded Successfully',
            
        })


    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:'Something Went Wrong',
        })
    }
}



//  image size reducer

exports.imageSizeReducer = async (req,res) =>{

         try{
        //  data fetch 
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //  validation 

        const supportedTypes =["jpg","jpeg","png","gif"];
        const fileType = file.name.split('.')[1].toLowerCase();

        //  Todo : add size limit for image
        if(!isFileTypeSupported(fileType,supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File Format Not Supported',
            })
        }
        //  file format is supported

        const response = await uploadFileToCloudinary(file, "codehelp",90);
        console.log(response)


        //  db me entry save karni  h 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        })

        res.json({
            success:true,
            imageUrl:response.secure_url,
            message:'Image Uploaded Successfully',
            
        })

    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            message:'Something Went Wrong',
        })

    }
}

