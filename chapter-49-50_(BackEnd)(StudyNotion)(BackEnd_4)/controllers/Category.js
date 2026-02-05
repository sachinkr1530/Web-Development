const Category = require ("../models/category");
// create category  ka handler  function 

exports.createCategory = async (req , res )=>{
    try{
        // fetch data from req body
        const {name, description} = req.body;
        // validation
        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            })
        }
        //  create entry in db 
        const tagDetails = await Tag.create({
            name:name,
            description:description,
        
        });
        console.log(tagDetails);
        // return response

        return res.status(201).json({
            success:true,
            message:"Tag created successfully",
        });
    }
    catch (error){
        return res.status (500).json({
            success:false,
            message:error.message,
        })
    }
}

//  get all categories handler function
exports.showAllCategory = async (req , res )=>{
    try{
        const allCategories =await Category.find({}, {name:true, description:true});
        res.status(200).json({
            success:true,
            message:"All categories returned successfully",
            allCategories,
        })
    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}