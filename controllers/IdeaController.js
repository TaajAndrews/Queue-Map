const { Idea, User } = require("../models")

const GetIdeas = async (req, res) => {
  let ideas = await Idea.find({})
  res.send(ideas)
}

const getSavedIdeas = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
    res.send({ savedIdeas: user?.savedIdeas })
  } catch (error) {
    res.send(error)
  }
}

const savedIdeas = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
    const savedIdeas = await Idea.find({
      _id: { $in: user.savedIdeas },
    })
    res.send({ savedIdeas })
  } catch (error) {
    res.send(error)
  }
}

const CreateIdea = async (req, res) => {
  console.log(req)
  const newIdea = new Idea({
    topic: req.body.topic,
    content: req.body.content,
    keywords: req.body.keywords,
    userOwner: "64ba28d659151fd11b081d7e",
  })
  console.log(req.body)
  try {
    const response = await newIdea.save()
    res.send(response)
  } catch (error) {
    res.send(error)
  }
}

const UpdateIdea = async (req, res) => {
  let updatedIdea = await Idea.findByIdAndUpdate(req.params.idea_id, req.body, {
    new: true,
  })
  let user = await User.findById(req.body.user_id)
  user.savedIdeas.push(updatedIdea)
  await user.save()
  res.send({ savedIdeas: user.savedIdeas })
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
  savedIdeas,
  getSavedIdeas,
}
