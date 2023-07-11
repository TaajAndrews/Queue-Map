const mongoose = require("mongoose")
const Schema = mongoose.Schema

const draftSchema = new Schema(
  {
    attention: { type: String, required: true },
    lead: { type: String, required: true },
    body: { type: String, required: true },
    conclusion: { type: String, required: true },
    cta: { type: String, required },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Draft", draftSchema)
