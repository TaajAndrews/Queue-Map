const { User } = require("../models/user")
const middleware = require("../middleware/")

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
  Signup,
}
