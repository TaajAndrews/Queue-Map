const mongoose = require("mongoose")
const userSchema = require("./User")
const ideaSchema = require("./Idea")

const User = mongoose.model("User", userSchema)
const Idea = mongoose.model("Idea", ideaSchema)

module.exports = {
  User,
  Idea,
}
