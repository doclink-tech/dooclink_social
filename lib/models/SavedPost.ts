import mongoose, { Schema } from "mongoose";

const SavedPostSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: false });

const SavedPost = mongoose.models.SavedPost || mongoose.model("SavedPost", SavedPostSchema);

export default SavedPost;
