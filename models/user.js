const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    // ideas: [{ type: Schema.Types.ObjectId, ref: "Idea" }],
    // maps: [{ type: Schema.Types.ObjectId, ref: "Map" }],
    // drafts: [{ type: Schema.Types.ObjectId, ref: "Draft" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
