import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
  admins: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  applicants: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  address: {
    type: String,
  },
  desc: {
    type: String,
    required: true
  },
  media: [{
    type: String,
  }],
  time: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);

export default Event;
