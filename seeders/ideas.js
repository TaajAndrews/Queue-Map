const mongoose = require("mongoose")
const falso = require("@ngneat/falso")
const { Idea } = require("../models")
require("dotenv").config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Successfully connected to MongoDB . . .")
  })
  .catch((e) => {
    console.error("Connection error", e.message)
  })

const createIdeas = async () => {
  let ideas = [...Array(10)].map((item, idx) => ({
    topic: falso.randCatchPhrase().toString(),
    content: falso.randPhrase().toString(),
    keywords: ``,
  }))

  await Post.deleteMany({})
  console.log("Creating ideas . . .")
  await Idea.insertMany(ideas)
  console.log("Ideas created!")

  mongoose.connection.close()
}

createIdeas()
