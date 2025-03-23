import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: String,
      required: true,
    }, // clerk user id
    recieverId: {
      type: String,
      required: true,
    }, // clerk user id
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);
export default Message;
