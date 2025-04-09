import mongoose from "mongoose";

const textSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Text || mongoose.model("Text", textSchema);
