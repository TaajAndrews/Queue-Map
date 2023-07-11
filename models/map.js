const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mapSchema = new Schema(
  {
    mapName: { type: String, required: true },
    firstReference: { type: String, required: true },
    secondReference: { type: String },
    thirdReference: { type: String },
    summary: { type: String, required: true },
    firstProblem: { type: String, required: true },
    secondProblem: { type: String },
    thirdProblem: { type: String },
    experience: { type: String, required: true },
    firstSolution: { type: String, required: true },
    secondSolution: { type: String },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Map", mapSchema)
