const { Schema } = require("mongoose")

const ideaSchema = new Schema(
  {
    topic: { type: String, required: true },
    content: { type: String, required: true },
    keywords: [{ type: String, required: true }],
    userOwner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = ideaSchema
