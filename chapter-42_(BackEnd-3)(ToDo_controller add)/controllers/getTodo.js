const Todo = require("../models/Todo");



// define route handler 

exports.getTodo = async (req, res) => {
    try {

        //  fertch all todo from  db
        const todo =await Todo.find({});
      
        // response
        res.status(200).json({
            success:true,
            data:todo,
            message:"Entire Todo Data is Fetched",
        });
    }
    catch (err) {

        console.error(err);
        res.status(500)
        .json({
            sucess:false,
           error:err.message,
            message:"Server Error",
        })
      


    }
}



exports.getTodoById = async (req, res) => {
     try {

        //  extract todo items basic on  id 
        const id = req.params.id;
        const todo = await Todo.findById({_id: id});

        //  data for given id not found 

        if (!todo) {
            return res.status(404).json({
                success:false,
                message:"No Data Found with Given Id",
            })
        }
        // data for given id Founded 
        res.status(200).json({
            sucess:true,
            data:todo,
            message:`Todo ${id} data is Successfully Fetched`,
        })
    }
    catch (err) {
        console.error(err);
        res.status(500)
        .json({
            sucess:false,
           error:err.message,
            message:"Server Error",
        })

        

    }
}

