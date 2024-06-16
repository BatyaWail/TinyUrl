import mongoose from "mongoose";

const LinkSchema = mongoose.Schema({
//   _id: {
//     type: String,
//     // required: true,
//     // default: 0
//   },
  originalUrl: {
    type: String,
    required: true
    // , default: ""
  }
});

export default mongoose.model("Link", LinkSchema);
