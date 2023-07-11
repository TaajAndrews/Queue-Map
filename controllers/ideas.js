const Idea = require("../models/idea")
const Map = require("../models/map")
const Draft = require("../models/drafts")

// const index = async (req, res) => {
//   const ideas = await Idea.find({})
//   res.render("ideas/index", { title: "Ideas", ideas })
// }

const index = async (req, res) => {
  try {
    const ideas = await Idea.find({})
    res.send(ideas)
  } catch (error) {
    throw error
  }
}

module.exports = {
  index,
}
