const Profile = require("../models/Profile");
const User = require("../models/User");

expoerts.updateProfile = async (req, res) => {
  try {
    //  get data
    const { dateOfBirth = "", about = "", contactNumber, gender } = req.body;
    //  get userId
    const id = req.user.id;
    //  validation
    if (!contactNumber || !gender || !id) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    //  find profile
    const userDetails = await User.findById(id);
    const profileId = userDetails.additionalDetails;
    const profileDetails = await Profile.findById(profileId);
    //  update profile
    profileDetails.dateOfBirth = dateOfBirth;
    profileDetails.about = about;
    profileDetails.contactNumber = contactNumber;
    profileDetails.gender = gender;
    await profileDetails.save();
    // rerturn response
    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      profileDetails,
    });
  } catch (error) {
    return res.status(500)({
      success: false,
      // message: "Internal Server Error",
      error: error.message,
    });
  }
};

//  delete profile
exports.deleteAccount = async (req, res) => {
  try {
    //  get id
    const id = req.user.id;
    // validation
    const userDetails = await User.findById(id);
    if (!userDetails) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // delete profile
    await Profile.findByIdAndDelete({ _id: userDetails.additionalDetails });
    // delete user
    await User.findByIdAndDelete({ _id: id });
    // TODO - uneroll from courses
    // return response
    return res.status(200).json({
      success: true,
      message: "Account deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting account",
    });
  }
};
exports.getAllUserDetails = async (req, res) => {
  try {
    //  get id
    const id = req.user.id;
    // validation
    const userDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();
    // return response
    return res.status(200).json({
      success: true,
      message: "User details fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching user details",
      message: error.message,
    });
  }
};

// importatnt  (cronejob )  => to delete accounts which are not verified and created more than 24 hours ago
