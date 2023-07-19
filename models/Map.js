const { Schema } = require("mongoose")

const mapSchema = new Schema(
  {
    promptOne: { type: String, required: true },
    promptTwo: { type: String },
    promptThree: { type: String },
    promptFour: { type: String },
    promptFive: { type: String },
  },
  { timestamps: true }
)

module.exports = mapSchema
