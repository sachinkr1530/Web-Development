const SubSection = require("../models/SubSection");
const Section = require("../models/Section");
const Course = require("../models/Course");
const { uploadImageToCloudinary } = require("../utils/imageUploader");


exports.createSubSection = async (req, res) => {
  try {
    //  data fetch
    const { sectionId, title, description, timeDuration } = req.body;
    //  extract file /video
    const video = req.files.videoFile;
    // validation
    if (!sectionId || !title || !description || !timeDuration) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    // upload video to cloudinary
    const uploadDetails = await uploadImageToCloudinary(
      video,
      process.env.FOLDER_NAME,
    );
    // create sub-section
    const subSectionDetails = await SubSection.create({
      title: title,
      description: description,
      timeDuration: timeDuration,
      videoUrl: uploadDetails.secure_url,
    });
    //  update section with subsection ObjectId
    const updateSection = await Section.findByIdAndUpdate(
      { _id: sectionId },
      {
        $push: {
          subSections: subSectionDetails._id,
        },
      },
      { new: true },
    );

    //   HW: log updated section here , after adding populate query
    //  return response
    return res.status(200).json({
      success: true,
      message: "SubSection created successfully",
      updateSection,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// HW: update sub section
exports.updateSubSection = async (req, res) => {
  try {
    //  data fetch
    const { subSectionId, title, description, timeDuration } = req.body;
    //  extract file /video
    const video = req.files.videoFile;
    // validation
    if (!subSectionId) {
      return res.status(400).json({
        success: false,

        message: "SubSection Id is required",
      });
    }
    // create an object to hold the updated fields
    const updatedFields = {};
    if (title) updatedFields.title = title;
    if (description) updatedFields.description = description;
    if (timeDuration) updatedFields.timeDuration = timeDuration;
    // if video file is provided, upload it to cloudinary and add the URL to the updated fields
    if (video) {
      const uploadDetails = await uploadImageToCloudinary(
        video,
        process.env.FOLDER_NAME,
      );
      updatedFields.videoUrl = uploadDetails.secure_url;
    }
    // update sub-section
    const updatedSubSection = await SubSection.findByIdAndUpdate(
      { _id: subSectionId },
      { $set: updatedFields },
      { new: true },
    );
    //  return response
    return res.status(200).json({
      success: true,
      message: "SubSection updated successfully",
      updatedSubSection,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
