const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
    ideas: [{ type: Schema.Types.ObjectId, ref: "Idea" }],
    maps: [{ type: Schema.Types.ObjectId, ref: "Map" }],
    drafts: [{ type: Schema.Types.ObjectId, ref: "Draft" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
