const { User } = require("../models/user")
const middleware = require("../middleware/")

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let passwordMatch = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (passwordMatch) {
      let payload = {
        id: user.id,
        email: user.email,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "An error has occurred!" })
  }
}

const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send(
          "A user exists with that email. Please sign in with your credentials."
        )
    } else {
      const user = await User.create({ username, email, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  Signin,
  Signup,
}
