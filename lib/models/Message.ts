import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['send', 'received', 'seen'],
    default: 'send'
  }
}, { timestamps: true });

const Message = mongoose.models.Message || mongoose.model("Message", MessageSchema);

export default Message;
