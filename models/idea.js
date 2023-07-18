const { Schema } = require("mongoose")

const ideaSchema = new Schema(
  {
    topic: { type: String, required: true },
    content: { type: String },
    keywords: { type: String },
  },
  { timestamps: true }
)

module.exports = ideaSchema
