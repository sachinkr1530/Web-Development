const express = require("express");
const router = express.Router();

const { loacalFileUpload,imageUpload,videoUpload,imageSizeReducer} = require("../controllers/fileUpload")


//  api route 

router.post("/localFileUpload", loacalFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/videoUpload",videoUpload);
router.post("/imageSizeReducer",imageSizeReducer);
module.exports = router;