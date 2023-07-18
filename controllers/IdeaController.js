const { Idea } = require("../models")

const GetIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find({})
    res.send(ideas)
  } catch (error) {
    throw error
  }
}

const CreateIdea = async (req, res) => {
  try {
    const idea = await Idea.create({ ...req.body })
    res.send(idea)
  } catch (error) {
    throw error
  }
}

const UpdateIdea = async (req, res) => {
  try {
    const idea = await Idea.findByIdAndUpdate(req.params.idea_id, req.body)
    res.send(idea)
  } catch (error) {
    throw error
  }
}

const DeleteIdea = async (req, res) => {
  try {
    await Idea.deleteOne({ _id: req.params.idea_id })
    res.send({ msg: "Idea Deleted", payload: req.params.idea_id, status: "Ok" })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetIdeas,
  CreateIdea,
  UpdateIdea,
  DeleteIdea,
}
