// import model

const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

exports.createComment = async (req, res) => {
  try {
    //  fetch data from req body
    const { post, user, body } = req.body;
    // create comment in comment object
    const comment = new Comment({
      post,
      user,
      body,
    });
    //  save the new comment into the database
    const savedComment = await comment.save();

    //  find the post by id , and update its comments array
    const updatedPost = await Post.findByIdAndUpdate(post,{ $push: { comments: savedComment._id } },{ new: true } )
                .populate("comments") // popolate comments array with comment documents
                .exec();

                //  populate =>  ye na tumhre commment ko word ya sentence jo hota h wo dekhta h  agar isko use nahi karenge tu  comment ka id  hi khali show karega 
        res.json({
            post: updatedPost,
        });

  } catch (error) {
    return res.status(500).json({
        error:"Error while Creating Comment",
    });
  }
};
