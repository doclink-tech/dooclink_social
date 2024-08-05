import mongoose, { Schema } from "mongoose";

const ConnectionSchema = new Schema({
  fromUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  toUser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    enum: ['requested', 'friends'],
    default: 'requested'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: false });

const Connection = mongoose.models.Connection || mongoose.model("Connection", ConnectionSchema);

export default Connection;
