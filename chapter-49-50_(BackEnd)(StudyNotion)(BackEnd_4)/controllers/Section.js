const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async (req, res) => {
  try {
    //  data fetch
    const { sectionName, courseId } = req.body;
    //  data validation
    if (!sectionName || !courseId) {
      return res.status(400).json({
        success: false,
        message: "Missing Properties",
      });
    }
    //  create section
    const newSection = await Section.create({ sectionName });
    //  update course with section ObjectId
    const updateCourseDetails = await Course.findByIdAndUpdate(
      courseId,
      {
        $push: {
          courseContent: newSection._id,
        },
      },
      { new: true },
    );

    //  return response
    return res.status(200).json({
      success: true,
      message: "Section created successfully",
      updateCourseDetails,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create Section, Please try again",
      error: error.message,
    });
  }
};

exports.updateSection = async (req, res) => {
  try {
    // data input
    const { sectionName, sectionId } = req.body;
    // data validation
    if (!sectionName || !sectionId) {
      return res.status(400).json({
        success: false,
        message: "Missing properties",
      });
    }
    // update data
    const section = await Section.findByIdAndUpdate(
      sectionId,
      { sectionName },
      { new: true },
    );

    // return res
    return res.status(200).json({
      success: true,
      message: "Section Update Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Unable to create Section, Please try again",
      error: error.message,
    });
  }
};

exports.deleteSection = async (req , res) =>{
    try {
        //  get Id = assuming that we are sending ID in params
        const {sectionId} = req.body;

        // use findByIdandDelete
        await Section.findByIdAndDelete(sectionId);
        // TODO:[testing] Do we need to delete the entry from the course schema ??
        // return res 
        return res.status(200).json({
            success:true,
            message:"Section deleted successfully",
        })
        
    }
     catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to delete Section, Please try again",
            error: error.message,
        });
    }
}