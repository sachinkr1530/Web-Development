//  import model
const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //  update the  post collection basis on this
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes") // populate likes array with like documents
      .exec();
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while Creating Comment",
    });
  }
};
//  unlike a post controller

exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    //  upate the post collection
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    );
    res.json({
      post: updatePost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while unliking post",
    });
  }
};

exports.dummyLink = (req, res) => {
  res.send("This is a dummy like controller");
};
