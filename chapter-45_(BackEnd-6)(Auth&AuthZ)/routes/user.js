const express = require ('express');
const router = express.Router();

const {login, signup} = require("../controllers/Auth");
const {auth,isStudent,isAdmin} = require("../middlewares/auth");
router.post("/login",login);
router.post("/signup",signup);

//  testing proctected route  for the single middlewares
router.get("/test",auth, (req , res) =>{
    res.json({
        sucess:true,
        message:"Welcome To the Protected route for Tests",
    });
})

//  protected route
router.get("/student",auth, isStudent,(req , res) =>{
    res.json({
        sucess:true,
        message:"Welcome to the Protected  route for Student",
    });
} );

router.get("/admin",auth, isAdmin, (req , res) =>{
    res.json({
        sucess: true,
        message: "Welcome to the Protected route for Admin",
    });
});

router.get("getEmail", auth, (req,res) =>{

   
    
    const id = req.user.id;
    console.log("ID",id)
      res.json({
        sucess: true,
        message: "Welcome to the  Email Route",
    });

});

    
module.exports = router;
