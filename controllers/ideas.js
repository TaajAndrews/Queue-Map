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

const create = async (req, res) => {
  try {
    const idea = await Idea.create({ ...req.body })
    res.send(idea)
  } catch (error) {
    throw error
  }
}

const update = async (req, res) => {
  try {
    const idea = await Idea.findByIdAndUpdate(req.params.idea_id, req.body)
    res.send(idea)
  } catch (error) {
    throw error
  }
}

const deleteIdea = async (req, res) => {
  try {
    await Idea.deleteOne({_id: req.params.post_id, req.body})
    res.send({msg: "Idea Deleted", payload: req.params.idea_id, status: "Ok"})
  } catch (error) {
    throw error
  }
}

module.exports = {
  index,
  create,
  update,
  deleteIdea,
}
