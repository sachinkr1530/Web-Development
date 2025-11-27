const User = require ("../models/User");

exports.createUser = async (req , res)=>{
    try{
        console.log("req body", req.body);
        const {name,email,title,password,department,role,image} = req.body;
        if(!name|| !email || !title || !password || !department || !role || !image){
            console.log("Not all fields...");
            return res.status (400).json ({
                status: 400,
                message: "Please fill all the fields",
            });
    }
    const user = await User.create({
        name,
        email, 
        title,
        department,
        password,
        role,
        image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });
    return res.ststus(200).json({
        status:201,
        message:"User created Successfully",
        data: user,

    });
}catch(error){
    console.log("error", error);
    return res.status(500).json({
        status:500,
        message: error.message,
    });
}

};