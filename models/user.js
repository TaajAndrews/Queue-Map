const { Schema } = require("mongoose")

const userSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    savedIdeas: [{ type: Schema.Types.ObjectId, ref: "Idea" }],
  },
  { timestamps: true }
)

module.exports = userSchema
