const { Idea } = require("../models")

const GetIdeas = async (req, res) => {
  let ideas = await Idea.find()
  res.send(ideas)
}

const CreateIdea = async (req, res) => {
  let newIdea = await Idea.create(req.body)
  res.send(newIdea)
}

const UpdateIdea = async (req, res) => {
  let updatedIdea = await Idea.findByIdAndUpdate(req.params.idea_id, req.body, {
    new: true,
  })
  res.send(updatedIdea)
}

const DeleteIdea = async (req, res) => {
  let idea = req.params.id
  let deletedIdea = await Idea.findByIdAndDelete(idea)
  res.send(deletedIdea)
}

module.exports = {
  GetIdeas,
  CreateIdea,
  UpdateIdea,
  DeleteIdea,
}
