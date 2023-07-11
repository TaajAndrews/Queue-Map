const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ideaSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // Will need to separate the values out by comma
    keywords: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    mapped: [{ type: Schema.Types.ObjectId, ref: "Map" }],
    drafted: [{ type: Schema.Types.ObjectId, ref: "Draft" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Idea", ideaSchema)
