import mongoose, { Schema } from "mongoose";

const MediaFileSchema = new Schema({
  uploadedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  media: [{
    type: String,
    required: true
  }],
  accessibleBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: true
  },
  views: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Media = mongoose.models.MediaFile || mongoose.model("MediaFile", MediaFileSchema);

export default Media;
